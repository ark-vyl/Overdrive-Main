import { ReactNode } from "react";

export function PaddingWrapper ({children}: {children?: ReactNode}) {
    return (
        <section className="p-6 px-8">
            {children}
        </section>
    )
}