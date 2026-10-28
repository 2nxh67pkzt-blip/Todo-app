
import { useState } from 'react'
import './App.scss'
import { Footer } from './components/footer/Footer'
import { TaskForm } from './components/new-task-form/TaskForm'
import { TaskList } from './components/task-list/TaskList'
import { Task } from './components/task/Task'
import { type Todo } from './types/types'

function App() {
  const [tasks, setTasks] = useState<Todo[]>([
    {
      id: 1,
      task: 'Active task',
      createdAt: new Date(),
      completed: false,
    },
    {
      id: 2,
      task: 'Completed task',
      createdAt: new Date(),
      completed: true,
    },
  ])

  
const handleStartEdit = (id: number) => {
  setTasks((prevTasks) =>
    prevTasks.map((task) => ({
      ...task,
      isEditing: task.id === id,
    }))
  )
}

const handleSave = (id: number, title: string) => {
  const trimmedTitle = title.trim()

  if (!trimmedTitle) return

  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === id
        ? { ...task, title: trimmedTitle, isEditing: false }
        : task
    )
  )
}

const handleCancel = (id: number) => {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === id
        ? { ...task, isEditing: false }
        : task
    )
  )
}


  const handleToggle = (id: number) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  return (
    <section className="todoapp">
      <TaskForm />

      <TaskList>
       {tasks.map((task) =>
  task.isEditing ? (
    <TaskEditing
      key={task.id}
      task={task}
      onSave={(title) => handleSave(task.id, title)}
      onCancel={() => handleCancel(task.id)}
    />
  ) : (
    <Task
      key={task.id}
      task={task}
      onToggle={() => handleToggle(task.id)}
      onEdit={() => handleStartEdit(task.id)}
    />
  )
)}
      </TaskList>

      <Footer />
    </section>
  )
}

export default App
