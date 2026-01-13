"use client"
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

type LocationList = 'Home' | 'About'

interface UserLocationScheme {
    navLocation: string
    setNavLocation: Dispatch<SetStateAction<LocationList>>
}

const UserLocation = createContext<UserLocationScheme | null>(null)

export const UserLocationProvider = ({children}: {children: ReactNode}) => {
    const [navLocation, setNavLocation] = useState<LocationList>('Home')    
    return (
        <UserLocation.Provider value={{navLocation, setNavLocation}}>
            {children}
        </UserLocation.Provider>
    )
}

export const useUserLocation = () => {
    const func = useContext(UserLocation)
    return func
}