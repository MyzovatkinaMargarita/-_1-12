  //урок 3-4
import type { Task } from "./task";
const STORAGE_KEY = "tasks";
export function saveTasks(tasks: Task[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}
export function loadTasks(): Task[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return parsed.map((t: any) => ({
      ...t,
      createdAt: new Date(t.createdAt),
    }));
  } catch {
    return [];
  }
}

//урок 10
import type { Task } from "./task";

export function saveTasks(tasks: Task[]) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
export function loadTasks(): Task[] {
    try {
        const raw = localStorage.getItem("tasks");
        if (!raw) return [];
        const parsed: Task[] = JSON.parse(raw);

        return parsed.map((t) => ({
            ...t,
            createdAt: new Date(t.createdAt), // восстановление
            deadline: t.deadline ? new Date(t.deadline) : null, // восстановление
        }));
    } catch {
        return [];
    }
}
