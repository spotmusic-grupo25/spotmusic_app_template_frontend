import React, { useCallback, useState } from "react"



const useToken = (options: string) => {

    if (options === 'get') {
        const tokenLocal = localStorage.getItem('token') || ''
        const result = tokenLocal.length >= 20 ? tokenLocal : null
        return result
    }

    if (options === 'set') {
        let getToken =  '';

        let hanldenToken  = (token: string) => {
            try{
                localStorage.setItem('token', token)
                getToken = token
            }
            catch(err){
                console.log(err)
                getToken = 'err'
            }
        }
        return [getToken, hanldenToken]
    }
}

export default useToken;
