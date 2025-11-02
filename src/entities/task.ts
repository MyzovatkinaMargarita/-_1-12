 //урок 1-2
export type Status = "open" | "in-progress" | "done";

import { isValidTaskTitle, normalizeTitle } from "../utils/validation.js";
import { generateId } from "../utils/id.js";

export function makeTask(title: string, status: Status = "open"): Task | null {
  const normTitle = normalizeTitle(title);
  if (!isValidTaskTitle(normTitle)) return null;

  return {
    id: generateId(),
    title: normTitle,
    status,
    createdAt: new Date()
  };
}


export type Task = {
    readonly id: string;     // уникальный идентификатор
    title: string;           // текст задачи
    completed: boolean;      // статус выполнения
    createdAt: Date;         // дата создания
};
export type Filter = "all" | "active" | "completed";
export function makeTask(title: string): Task {
    return {
        id: Math.random().toString(36).slice(2, 9), // простая генерация id
        title: title.trim(),
        //урок 9
         description: "", // по умолчанию пустое
         //- урок 9
        completed: false,
        createdAt: new Date()
    };
}

//урок 10
export type Task = {
    readonly id: string;
    title: string;
    completed: boolean;
    createdAt: Date;
    description?: string;
    deadline?: Date | null;   //новое поле
};

// Фабрика для создания новой задачи
export function makeTask(title: string): Task {
    return {
        id: Math.random().toString(36).slice(2, 9),
        title: title.trim(),
        completed: false,
        createdAt: new Date(),
        description: "",
        deadline: null,        // инициализация
    };
}





