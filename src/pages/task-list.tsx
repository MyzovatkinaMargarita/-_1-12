  //урок 7-8
type TaskListProps = {
    tasks: Task[];
    onToggle: (id: string) => void;
    onRemove: (id: string) => void;
    onEdit: (id: string, newTitle: string) => void;
    
};

<TaskItem
    key={t.id}
    task={t}
    isFirst={index === 0}
    onToggle={p.onToggle}
    onRemove={p.onRemove}
    onEdit={p.onEdit} 
/>
