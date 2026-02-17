import { ReactNode } from "react";

export function PaddingWrapper ({children}: {children?: ReactNode}) {
    return (
        <section className="px-8 flex justify-center items-center flex-col">
            {children}
        </section>
    )
}