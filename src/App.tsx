import "./App.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"

import Home from "./pages/Home"

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },
    ])

    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
