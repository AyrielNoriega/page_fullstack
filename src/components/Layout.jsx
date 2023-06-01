import { Container } from "@mui/material"
import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = () => {
    return (
        <div>
            {/* <Container  maxWidth="lg"> */}
                <Header />
                <Footer />
            {/* </Container> */}
        </div>
    )
}
