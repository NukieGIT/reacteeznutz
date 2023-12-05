import { Outlet } from "react-router-dom"
import { Suspense } from "react";
import Header from "./Header/Header"

export default function Layout() {
    return (
        <>
            <Header />
            <Suspense fallback={<h1>Loading, this shit is 🧯🧯🧯🧯🧯🧯🧯🧯🧯🧯🧯🧯🧯🧯🧯🧯🧯🧯🧯🧯</h1>}>
                <Outlet />
            </Suspense>
        </>
    )
}