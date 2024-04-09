"use client"

import * as React from "react"
import { TooltipProvider } from "@/components/ui/tooltip"
import { AccountSwitcher } from "@/components/Mail/AccountSwitcher"
import { Nav } from "@/components/Mail/Nav"
import {
    ResizablePanel,
    ResizablePanelGroup,
    ResizableHandle,
} from "@/components/ui/resizable"

import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
    SheetHeader,
} from "@/components/ui/sheet"

import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { MailList } from "@/components/Mail/MailList"
import { MailDisplay } from "@/components/Mail/MailDisplay"
import { useMail } from "@/components/Mail/use-mail"
import { type MyMail } from "@/components/Mail/data"

import {
    Inbox,
    File,
    Send,
    ArchiveX,
    Trash2,
    Archive,
    Users2,
    AlertCircle,
    MessagesSquare,
    Search,
    ShoppingCart,
    Menu,
    Mail,
} from "lucide-react"

interface MailProps {
    accounts: {
        label: string
        email: string
        icon: React.ReactNode
    }[]
    mails: MyMail[]
    defaultLayout: number[] | undefined
    defaultCollapsed?: boolean
    navCollapsedSize: number
}

export function MobileLayout({ accounts, mails }: MailProps) {
    const [mail] = useMail()
    const isCollapsed = false

    const [isMenuBarOpen, setIsMenuBarOpen] = React.useState(false)

    const toggleMenuBar = () => {
        setIsMenuBarOpen(prevState => !prevState)
        console.log(
            "Menu bar is now",
            !isMenuBarOpen ? "open" : "closed",
            !isMenuBarOpen
        )
    }

    return (
        <TooltipProvider delayDuration={0}>
            <ResizablePanelGroup
                direction="horizontal"
                onLayout={(sizes: number[]) => {
                    document.cookie = `react-resizable-panels:layout=${JSON.stringify(
                        sizes
                    )}`
                }}
                className="max-h-auto"
            >
                <ResizableHandle />

                <ResizablePanel defaultSize={440} minSize={30}>
                    <Tabs defaultValue="all">
                        <div className="flex items-center px-4 py-2">
                            <div className="flex" onClick={toggleMenuBar}>
                                <Sheet>
                                    <SheetTrigger>
                                        <div
                                            className="flex justify-center items-center"
                                            onClick={toggleMenuBar}
                                        >
                                            <Menu size={24} />
                                        </div>
                                    </SheetTrigger>

                                    <SheetContent
                                        side="left"
                                        onClick={toggleMenuBar}
                                    >
                                        <SheetHeader>
                                            <SheetTitle>
                                                <div className="flex justify-center pb-2">
                                                    <Mail />
                                                    Mail
                                                </div>
                                            </SheetTitle>
                                        </SheetHeader>
                                        <div className="content-area flex-col justify-center items-center">
                                            <AccountSwitcher
                                                isCollapsed={false}
                                                accounts={accounts}
                                            />
                                            <Separator />
                                            <Nav
                                                isCollapsed={isCollapsed}
                                                links={[
                                                    {
                                                        title: "Inbox",
                                                        label: "128",
                                                        icon: Inbox,
                                                        variant: "default",
                                                    },
                                                    {
                                                        title: "Drafts",
                                                        label: "9",
                                                        icon: File,
                                                        variant: "ghost",
                                                    },
                                                    {
                                                        title: "Sent",
                                                        label: "",
                                                        icon: Send,
                                                        variant: "ghost",
                                                    },
                                                    {
                                                        title: "Junk",
                                                        label: "23",
                                                        icon: ArchiveX,
                                                        variant: "ghost",
                                                    },
                                                    {
                                                        title: "Trash",
                                                        label: "",
                                                        icon: Trash2,
                                                        variant: "ghost",
                                                    },
                                                    {
                                                        title: "Archive",
                                                        label: "",
                                                        icon: Archive,
                                                        variant: "ghost",
                                                    },
                                                ]}
                                            />
                                            <Separator />
                                            <Nav
                                                isCollapsed={isCollapsed}
                                                links={[
                                                    {
                                                        title: "Social",
                                                        label: "972",
                                                        icon: Users2,
                                                        variant: "ghost",
                                                    },
                                                    {
                                                        title: "Updates",
                                                        label: "342",
                                                        icon: AlertCircle,
                                                        variant: "ghost",
                                                    },
                                                    {
                                                        title: "Forums",
                                                        label: "128",
                                                        icon: MessagesSquare,
                                                        variant: "ghost",
                                                    },
                                                    {
                                                        title: "Shopping",
                                                        label: "8",
                                                        icon: ShoppingCart,
                                                        variant: "ghost",
                                                    },
                                                    {
                                                        title: "Promotions",
                                                        label: "21",
                                                        icon: Archive,
                                                        variant: "ghost",
                                                    },
                                                ]}
                                            />
                                        </div>
                                    </SheetContent>
                                </Sheet>
                            </div>
                            <h1 className="text-xl font-bold pl-3">Inbox</h1>
                            <TabsList className="ml-auto">
                                <TabsTrigger
                                    value="all"
                                    className="text-zinc-600 dark:text-zinc-200"
                                >
                                    All mail
                                </TabsTrigger>
                                <TabsTrigger
                                    value="unread"
                                    className="text-zinc-600 dark:text-zinc-200"
                                >
                                    Unread
                                </TabsTrigger>
                            </TabsList>
                        </div>

                        <Separator />
                        <div className="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                            <form>
                                <div className="relative">
                                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search"
                                        className="pl-8"
                                    />
                                </div>
                            </form>
                        </div>
                        <TabsContent value="all" className="m-0 relative">
                            <MailList items={mails} viewPort="mobile" />
                        </TabsContent>
                        <TabsContent value="unread" className="m-0">
                            <MailList
                                items={mails.filter(item => !item.read)}
                                viewPort="mobile"
                            />
                        </TabsContent>
                    </Tabs>
                    <Separator />

                    <ResizablePanel>
                        <MailDisplay
                            mail={
                                mails.find(item => item.id === mail.selected) ||
                                null
                            }
                            viewPort="mobile"
                        />
                    </ResizablePanel>
                </ResizablePanel>
            </ResizablePanelGroup>
        </TooltipProvider>
    )
}
