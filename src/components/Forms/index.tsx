import React, { useState } from "react"
import { Separator } from "@/components/ui/separator"
import SidebarNav from "@/components/Forms/SidebarNav"
import SettingsProfilePage from "@/components/Forms/profile"
import SettingsNotification from "@/components/Forms/notification"
import SettingsAccount from "@/components/Forms/account"
import SettingsAppearance from "@/components/Forms/appearance"
import SettingsDisplay from "@/components/Forms/display"
import { User, UserCog, Palette, Bell, MonitorCheck } from "lucide-react"
interface SidebarNavItem {
    title: string
    href: string
    component: React.ComponentType
    icon: React.ReactNode
}

const sidebarNavItems: SidebarNavItem[] = [
    {
        title: "Profile",
        href: "#",
        component: SettingsProfilePage,
        icon: <User />,
    },
    {
        title: "Account",
        href: "#",
        component: SettingsAccount,
        icon: <UserCog />,
    },
    {
        title: "Appearance",
        href: "#",
        component: SettingsAppearance,
        icon: <Palette />,
    },
    {
        title: "Notifications",
        href: "#",
        component: SettingsNotification,
        icon: <Bell />,
    },
    {
        title: "Display",
        href: "#",
        component: SettingsDisplay,
        icon: <MonitorCheck />,
    },
]

interface FormUIProps {
    initialSelectedNavItem?: string
    viewPort?: string
}

const FormUI: React.FC<FormUIProps> = ({
    initialSelectedNavItem = "Profile",
    viewPort,
}) => {
    const [selectedNavItem, setSelectedNavItem] = useState(
        initialSelectedNavItem
    )

    const SelectedComponent = sidebarNavItems.find(
        item => item.title === selectedNavItem
    )?.component

    const handleSelect = (title: string) => {
        setSelectedNavItem(title)
    }
    return (
        <>
            <div className=" space-y-6 p-10 pb-16 md:block text-left border mt-2">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold tracking-tight">
                        Settings
                    </h2>
                    <p className="text-muted-foreground">
                        Manage your account settings and set e-mail preferences.
                    </p>
                </div>
                <Separator className="my-6" />
                <div className="flex flex-col  space-y-3 lg:flex-row lg:space-x-0 lg:space-y-0">
                    <aside
                        className={
                            viewPort === "mobile"
                                ? "-mx-4 w-full  "
                                : "-mx-4 lg:w-1/5 "
                        }
                    >
                        <SidebarNav
                            items={sidebarNavItems}
                            onSelect={handleSelect}
                            viewPort={viewPort}
                        />
                    </aside>

                    <div className=" lg:max-w-2xl lg:pl-14">
                        {SelectedComponent && <SelectedComponent />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormUI
