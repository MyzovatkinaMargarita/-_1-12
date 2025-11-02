   //урок 5-6
import styled from "@emotion/styled";
import type { Task } from "../entities/task";
import { TaskItem } from "./task-item";


const List = styled.ul`
  margin-top: ${(p) => p.theme.spacing(2)};
  list-style: none;
  padding: 0;
`;

// урок 9
type TaskListProps = {
    tasks: Task[];
    onToggle: (id: string) => void;
    onRemove: (id: string) => void;
    onEdit: (task: Task) => void; // изменили
};

