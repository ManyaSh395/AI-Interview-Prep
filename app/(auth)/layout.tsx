import React, {ReactNode} from 'react'
import AuthForm from "@/components/AuthForm";

const AuthLayout = ({ children} : {children: ReactNode}) => {
    return <AuthForm type='sign-up'/>

}

export default AuthLayout

