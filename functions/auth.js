import {sign} from 'jsonwebtoken'
import cookie from 'cookie'
import { useStore } from "../store";

export const refreshToken = () => {
    return fetch('/api/refresh_token', {
        method: "POST",
        credentials: "include"
    }).then(res => res.json())
    .then(data => {return data})
}

export const createAccessToken = (user) => {
    return sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: '15m'
    });
  };
  
  export const createRefreshToken = (user) => {
    return sign(
        { userId: user.id },process.env.REFRESH_TOKEN_SECRET,{
            expiresIn: "7d"
        }
    );
};

export const sendRefreshToken = (res,token) => {
    res.setHeader('Set-Cookie',cookie.serialize('refreshToken',token, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
        path: '/'
    }))
};