
import type { ReactNode } from 'react'

interface TaskListProps {
  children: ReactNode
}

export function TaskList({ children }: TaskListProps) {
  return (
    <ul className="todo-list">
      {children}
    </ul>
  )
}
