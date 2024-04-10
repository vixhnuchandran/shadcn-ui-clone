import { useWindowWidth } from "@react-hook/window-size"
import {
  Mail,
  CircleGauge,
  WalletCards,
  ListTodo,
  SquarePlay,
  BookText,
  Music,
  Fingerprint,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import MailUI from "@/components/Mail"
import CardsUI from "@/components/Cards/Cards"
import AuthUI from "@/components/Authentication"
import FormUI from "@/components/Forms"
import MusicUI from "@/components/Music"
import DashboardUI from "@/components/Dashboard"
import TasksUI from "@/components/Tasks"

import { ModeToggle } from "@/components/mode-toggle"
import PlaygroundUI from "@/components/Playground"

function HomePage() {
  const screenWidth = useWindowWidth()

  return (
    <div className="overflow-x-hidden ">
      <Tabs defaultValue="mail" className="mt-1">
        {/* for mobile devices */}
        {screenWidth <= 768 && (
          <TabsList>
            <TabsTrigger value="mail">
              <Mail size={18} />
            </TabsTrigger>
            <TabsTrigger value="dashboard">
              <CircleGauge size={18} />
            </TabsTrigger>
            <TabsTrigger value="cards">
              <WalletCards size={18} />
            </TabsTrigger>
            <TabsTrigger value="tasks">
              <ListTodo size={18} />
            </TabsTrigger>
            <TabsTrigger value="playground">
              <SquarePlay size={18} />
            </TabsTrigger>
            <TabsTrigger value="forms">
              <BookText size={18} />
            </TabsTrigger>
            <TabsTrigger value="music">
              <Music size={18} />
            </TabsTrigger>
            <TabsTrigger value="authentication">
              <Fingerprint size={18} />
            </TabsTrigger>
            <div className=" flex p-2 ">
              <ModeToggle />
            </div>
          </TabsList>
        )}
        {/* for desktop */}
        {screenWidth > 768 && (
          <TabsList>
            <TabsTrigger value="mail">Mail</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="cards">Cards</TabsTrigger>
            <TabsTrigger value="tasks">Tasks</TabsTrigger>
            <TabsTrigger value="playground">Playground</TabsTrigger>
            <TabsTrigger value="forms">Forms</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
            <TabsTrigger value="authentication">Authentication</TabsTrigger>
            <div className="p-2 ">
              <ModeToggle />
            </div>
          </TabsList>
        )}

        <TabsContent value="mail">
          <MailUI />
        </TabsContent>
        <TabsContent value="dashboard">
          <DashboardUI />
        </TabsContent>
        <TabsContent value="cards">
          <CardsUI />
        </TabsContent>
        <TabsContent value="tasks">
          <TasksUI />
        </TabsContent>
        <TabsContent value="playground">
          <PlaygroundUI />
        </TabsContent>

        {screenWidth <= 768 ? (
          <TabsContent value="forms">
            <FormUI viewPort={"mobile"} />
          </TabsContent>
        ) : (
          <TabsContent value="forms" className="">
            <FormUI />
          </TabsContent>
        )}

        <TabsContent value="music">
          <MusicUI />
        </TabsContent>
        <TabsContent value="authentication">
          <AuthUI />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default HomePage
