"use client"
import { cn } from './utils/cn'
import { fontGroup } from './utils/font-wrapper'
import { BackgroundLayer } from './components/background-wrapper'
import { PaddingWrapper } from './components/padding-wrapper'
import { ButtonComponent } from './components/button'
import { Navbar } from './components/navbar'
import { useRef } from 'react'
import { useIntersectionObserver } from './hook/observer-hook'
import { useUserLocation } from './context/user-location'

export default function Home () {    

    const refern = useRef(null)
    const userLoc = useUserLocation()
    const intercept = useIntersectionObserver({
        ref: refern, 
        option: {
            threshold: 0.9
        },
        isObserving: () => {
            userLoc?.setNavLocation('Home')
        }
    })

    return (
        <BackgroundLayer className='' ref={refern}>
            <PaddingWrapper>
                <Navbar />
                <div className='h-140 flex justify-center items-center flex-col'>
                        <h1 className={cn(fontGroup.postNoBills, 'text-(--main-color) text-[5em] leading-20')}>
                        EMPIRE OVERDRIVE</h1>
                        <h3 className={cn(fontGroup.kodeMono('Medium'), 'text-(--main-whitecolor) text-[3em] m-0!')}>PROTOCOLS</h3>
                        <div className='mt-7 w-48 flex flex-col gap-5'>
                            <ButtonComponent.MainButton className='w-full'>
                                Join Us
                            </ButtonComponent.MainButton>
                            <ButtonComponent.SecondaryButton className='w-full'>
                                View project
                            </ButtonComponent.SecondaryButton>
                        </div>
                </div>
                
            </PaddingWrapper>
        </BackgroundLayer>
        
    )
}
