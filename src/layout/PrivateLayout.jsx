import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router'

export default function PrivateLayout() {
    const navigate = useNavigate()
    const location =  useLocation()

    useEffect(() => {
        const token = localStorage.getItem('___token___')
        if (!token) {
            navigate('/auth')
        }
    }, [location])
  return (
    <>
    <Outlet/>
    </>
  )
}
