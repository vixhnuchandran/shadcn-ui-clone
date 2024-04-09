import React, { useState } from "react"
import { Link } from "react-router-dom"
import { buttonVariants } from "../ui/button"

interface SidebarNavItem {
    title: string
    href: string
    component: React.ComponentType
    icon: React.ReactNode
}

interface SidebarNavProps {
    items: SidebarNavItem[]
    onSelect: (title: string) => void
    viewPort?: string
}

const SidebarNav: React.FC<SidebarNavProps> = ({
    items,
    onSelect,
    viewPort,
}) => {
    const [currentSelectedTitle, setCurrentSelectedTitle] = useState("Profile")

    const handleSelect = (title: string) => {
        setCurrentSelectedTitle(title)
        onSelect(title)
    }

    return (
        <nav
            className={` space-x-0 lg:flex-col  lg:space-x-0 lg:space-y-1 ${
                !viewPort || viewPort === "mobile" ? "flex justify-between" : ""
            }`}
        >
            {items.map((item, index) => (
                <Link
                    key={index}
                    to="#"
                    className={`
        ${buttonVariants({ variant: "ghost" })}
        ${currentSelectedTitle === item.title ? "bg-muted" : ""}
        hover:bg-muted
        justify-start
        items-left
    `}
                    onClick={() => handleSelect(item.title)}
                    style={{ justifyContent: "flex-start" }}
                >
                    {viewPort === "mobile" ? item.icon : item.title}
                </Link>
            ))}
        </nav>
    )
}

export default SidebarNav
