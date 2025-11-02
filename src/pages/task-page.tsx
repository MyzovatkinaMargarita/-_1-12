  //урок 3-4
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";

const Wrapper = styled.div`
  padding: ${(p) => p.theme.spacing(4)};
`;

export const TasksPage = () => {
  return (
    <Wrapper>
      <h1>TaskLite</h1>
      <p>Ваш список задач появится здесь</p>
    </Wrapper>
  );
};


        
       //урок 7-8
import { useState } from "react";
import styled from "@emotion/styled";
import type { Task, Filter } from "../entities/task";
import { makeTask } from "../entities/task";
import { TaskInput } from "../components/task-input";
import { TaskList } from "../components/task-list";
import { FilterBar } from "../views/filter-bar";

/



return (
  <Wrapper>
    <h1>TaskLite</h1>
    <TaskInput onAdd={handleAddTask} />
    <FilterBar filter={filter} onChange={setFilter} />
    <TaskList
      tasks={searchedTasks}
      onToggle={handleToggleTask}
      onRemove={handleRemoveTask}
    />
  </Wrapper>
);





const Wrapper = styled.div`
  padding: ${(p) => p.theme.spacing(4)};
  max-width: 600px;
  margin: 0 auto;
`;

export const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all"); 
  const [query, setQuery] = useState(""); 

 
};
const filteredTasks = tasks.filter((t) => {
  if (filter === "active") return !t.completed; 
  if (filter === "completed") return t.completed; 
  return true; 
});

const searchedTasks = filteredTasks.filter((t) =>
  t.title.toLowerCase().includes(query.toLowerCase().trim())
);



import { SearchBar } from "../views/search-bar";
return (
  <Wrapper>
    <h1>TaskLite</h1>
    <TaskInput onAdd={handleAddTask} />
    <SearchBar query={query} onChange={setQuery} />
    <FilterBar filter={filter} onChange={setFilter} />
    <TaskList
      tasks={searchedTasks}
      onToggle={handleToggleTask}
      onRemove={handleRemoveTask}
    />
  </Wrapper>

);

import { useMemo } from "react";

const filteredTasks = useMemo(() => {
  return tasks.filter((t) => {
    if (filter === "active") return !t.completed;
    if (filter === "completed") return t.completed;
    return true;
  });
}, [tasks, filter]);

const searchedTasks = useMemo(() => {
  return filteredTasks.filter((t) =>
    t.title.toLowerCase().includes(query.toLowerCase().trim())
  );
}, [filteredTasks, query]);

const handleEditTask = (id: string, newTitle: string) => {
    setTasks(
        tasks.map((t) =>
            t.id === id ? { ...t, title: newTitle } : t
        )
    );
};
