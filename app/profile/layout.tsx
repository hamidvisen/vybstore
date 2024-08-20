import React from 'react'

export default function LoginSignUpLayout({
    children,
  }:{
    children: React.ReactNode;
  }){

  return (
    <React.Fragment>
        {children}
    </React.Fragment>
  )
}