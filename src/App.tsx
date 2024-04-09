import "./App.css"
import { ThemeProvider } from "@/components/theme-provider"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import HomePage from "./pages/Home"

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
            errorElement: <div className="text-4xl">404 not Found</div>,
        },
    ])
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <RouterProvider router={router} />
        </ThemeProvider>
    )
}

export default App
