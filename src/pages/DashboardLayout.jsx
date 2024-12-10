import { Outlet } from "react-router";
import Navbar from "../components/Navbar"

function Dashboard(){
    return(
        <main>
            <Navbar />
            <Outlet />
        </main>

    )
}

export default Dashboard