import checkAuth from './middleware/checkAuthServer'

const protectedRoute = async (req, res) => {
    if(req.method === 'GET') {
        //secret data
        res.send('Hey, keep it in secret!')
    }
}


//authentication middleware
export default checkAuth(protectedRoute)