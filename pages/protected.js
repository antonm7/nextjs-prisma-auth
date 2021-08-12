import { useStore } from '../store'
import {useEffect, useState} from 'react'
import checkAuthClient from '../functions/checkAuthClient'


function Protected() {
    const state = useStore()
    
    return (
        <div>
            Welcome to protected Page
        </div>
    )
}

export default checkAuthClient(Protected)
