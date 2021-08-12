import {verify} from 'jsonwebtoken'

export default function (req, res) {
    try {
        const authorization = req.headers["authorization"]
        if (!authorization) throw new Error("not authenticated")
        
        const token = authorization.split(" ")[1]
        verify(token, process.env.ACCESS_TOKEN_SECRET);

        res.status(200).send()
    } catch (e) {
        res.status(401).send()
    }
}