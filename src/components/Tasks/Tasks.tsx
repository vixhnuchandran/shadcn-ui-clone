import { useEffect, useState } from "react"

import { columns } from "./Columns"
import { DataTable } from "./Table"
import { UserNav } from "./UserNav"

interface Task {
  id: string
  title: string
  status: string
  label: string
  priority: string
}

async function getTasks() {
  const response = await fetch("/src/components/Tasks/data/data.tsx")
  const data = await response.json()
  return data
}

function Task() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    async function fetchData() {
      const tasksData = await getTasks()
      console.log("Fetched tasks:", tasksData)
      setTasks(tasksData)
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here's a list of your tasks for this month!
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
        <DataTable data={tasks} columns={columns} />
      </div>
    </>
  )
}

export default Task
