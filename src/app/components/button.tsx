import { ReactNode } from "react"
import { fontGroup } from "../utils/font-wrapper"
import { cn } from "../utils/cn"

interface ButtonScheme {
    children: ReactNode | any
    onClick?: () => void
    className?: string
}

class buttonComponent {
    MainButton ({children, onClick, className}: ButtonScheme) {
        return (
            <button 
            className={cn(
                className,
                fontGroup.orbiton('Medium'), 
                'bg-(--main-color) text-(--main-whitecolor) px-8 py-2 rounded-full',
                'hover:bg-transparent hover:text-(--main-color) hover:outline hover:outline-(--main-color) duration-300',
                'active:bg-(--main-color) active:outline-0 active:text-(--main-whitecolor)')}
            onClick={onClick}>
                {children}
            </button>
        )
    }
    SecondaryButton ({children, onClick, className}: ButtonScheme) {
        return (
            <button 
            onClick={onClick}
            className={cn(
                fontGroup.orbiton('Medium'),
                className,
                'bg-transparent text-(--main-whitecolor) px-8 py-2 rounded-full outline outline-(--main-color) duration-200',
                'hover:bg-(--main-color) hover:outline-0',
                'active:bg-transparent active:outline active:outline-(--main-color)'
            )}>
                {children}
            </button>
        )
    }
}

export const ButtonComponent = new buttonComponent()