import { Grid } from "@mui/material"
import { NavBar } from "../components"



export const QrUI = ({children}) => {
    return (
        <>
            <NavBar />
            <Grid>
                {children}
            </Grid>
        </>
    )
}