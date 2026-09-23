import './App.scss'
import { Footer } from './components/footer/Footer'
import { TaskForm } from './components/new-task-form/TaskForm'
import { TaskList } from './components/task-list/TaskList'
import { Task, TaskCompleted, TaskEditing } from './components/task/Task'

function App() {

  return (
    <>
    <section className="todoapp">
      <TaskForm />
      <TaskList>
        <TaskCompleted />
        <TaskEditing />
        <Task />
      </TaskList>
      <Footer />
    </section>
    </>
  )
}

export default App