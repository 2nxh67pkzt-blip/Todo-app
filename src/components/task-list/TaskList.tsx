import type { ReactNode } from "react";

interface TaskProps {
    children: ReactNode;
}

export function TaskList(props: TaskProps) {
    return (
        <ul className="todo-list">
            {props.children}
        </ul>
    )
}