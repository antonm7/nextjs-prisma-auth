import Prisma from '../../functions/initPrisma'
import {createAccessToken, createRefreshToken, sendRefreshToken} from '../../functions/auth'


export default async (req, res) => {
    if(req.method === 'POST') {
        const {email, password} = JSON.parse(req.body)
        const user = await Prisma.user.findUnique({
            where: {
                email
            }
        })
        
        const userForTheClient = {
            id:user.id,
            firstName:user.firstName,
            secondName:user.secondName,
            email:user.email
        }

        if(user.password === password) {
            const token = createRefreshToken(user)
            sendRefreshToken(res,token)
            const accessToken = createAccessToken(user)
            res.send({user:userForTheClient,accessToken})
        } else {
            res.status(404).send()
        }
    }
}