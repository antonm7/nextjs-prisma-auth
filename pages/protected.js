import { useStore } from '../store'
import {useEffect, useState} from 'react'
import useSWR from 'swr'
import checkAuthClient from '../functions/checkAuthClient'
import axios from 'axios'

function Protected() {
    const store = useStore()
    const [secret, setSecret] = useState(null)
    const [isError, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const fetcher = async () => {
        return await axios.get('/api/protectedRoute', {
            headers: {
                authorization: `Bearer ${store.accessToken}`
            }
        })
    }

    const { data, error } = useSWR('/api/', fetcher)
    
    useEffect(() => {
        if(data) setSecret(data.data)
        if (error) setError(error)
        setLoading(false)
    },[data,error])

    if(loading) {
        return (<div>Loading...</div>)
    } else {
        if(isError) {
            return (
                <div>YO! YOU ARE NOT AUTHENTICATED,GET AWAY FROM HERE!!!</div>
            )
        } else {
            return (
                <div>
                    Welcome to protected Page, {secret}
                </div>
            )
        }
    }
}

export default checkAuthClient(Protected)
