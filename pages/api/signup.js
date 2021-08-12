import { PrismaClient } from '@prisma/client'
import { sign } from 'jsonwebtoken'
import { createAccessToken, createRefreshToken, sendRefreshToken } from '../../functions/auth'
const prisma = new PrismaClient()

export default async (req, res) => {
    const {email, firstName, secondName, password} = JSON.parse(req.body)
    
    //checking if someone have used the email
    const checkIfExist = await prisma.user.findUnique({
        where: {
            email
        }
    })

    if(checkIfExist) return res.status(409).send()

    const user = await prisma.user.create({
        data: {
            email,
            firstName,
            secondName,
            password
        }
    })

    const token = createRefreshToken(user)
    sendRefreshToken(res,token)
    
    const accessToken = createAccessToken(user)
    res.send({user,accessToken})
}