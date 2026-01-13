"use effect"
import { RefObject, useEffect, useState } from "react"

interface IntersectionScheme {
    ref: RefObject<Element | null>
    option?: IntersectionObserverInit
    isObserving?: () => void
    isUnobserving?: () => void
}

export const useIntersectionObserver = (
    {ref, option, isObserving, isUnobserving}: 
    IntersectionScheme) => {
        const [isIntercepting, setIntercepting] = useState<boolean>(false)

        useEffect(() => {
            if (!ref.current) return
            const observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    setIntercepting(true)
                    if (typeof isObserving === 'function') isObserving()
                } else {
                    if (typeof isUnobserving === 'function') isUnobserving()
                }
            }, option)
            observer.observe(ref.current)
            return () => observer.disconnect()            
        }, [ref, option])

        return isIntercepting
}