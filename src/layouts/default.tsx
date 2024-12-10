import { Fragment } from "react/jsx-runtime"

export const DefaultLayout = ({ children } : { children: React.ReactNode }) => { 
    return (
        <Fragment>
            {children}
        </Fragment>
    )
}