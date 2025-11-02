    //урок 5-6
import styled from "@emotion/styled";
import type { Task } from "../entities/task";
type TaskItemProps = {
  task: Task;
};
const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(p) => p.theme.spacing(1)};
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
`;
const Title = styled.span`
  color: ${(p) => p.theme.colors.text};
`;
const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${(p) => p.theme.colors.error};
`;
//урок 9
type TaskItemProps = {
    task: Task;
    isFirst?: boolean;
    onToggle: (id: string) => void;
    onRemove: (id: string) => void;
    onEdit: (task: Task) => void; // принимает задачу
};

export const TaskItem = (p: TaskItemProps) => {
    return (
        <ListItem isFirst={p.isFirst}>
            <Content>
                <Title
                    completed={p.task.completed}
                    isFirst={p.isFirst}
                    onClick={() => p.onToggle(p.task.id)}
                >
                    {p.task.title}
                </Title>
            </Content>

            <div>
                {/* кнопка редактирования */}
                <IconButton onClick={() => p.onEdit(p.task)} aria-label="Изменить">
                    {/* svg карандаш */}
                </IconButton>

                {/* кнопка удаления */}
                <IconButton onClick={() => p.onRemove(p.task.id)} aria-label="Удалить">
                    {/* svg крестик */}
                </IconButton>
            </div>
        </ListItem>
    );
};



const Title = styled.span<{ completed?: boolean }>`
  text-decoration: ${(p) => (p.completed ? "line-through" : "none")};
  color: ${(p) =>
    p.completed ? p.theme.colors.textMuted : p.theme.colors.text};
  cursor: pointer;
`;

export const TaskItem = (p: TaskItemProps) => {
  return (
    <Item>
      {/* При клике по заголовку переключается completed */}
      <Title completed={p.task.completed} onClick={() => p.onToggle(p.task.id)}>
        {p.task.title}
      </Title>
      {/* При клике по кнопке удаляется задача */}
      <Button onClick={() => p.onRemove(p.task.id)}>✕</Button>
    </Item>
  );
};


  const [showDescription, setShowDescription] = useState(false); 

 export const MoreButton = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 2px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 14px;
        height: 14px;
    }
`;

const Description = styled.div<{ expanded: boolean }>`
  font-size: 13px;
  color: ${(p) => p.theme.colors.textMuted};
  font-weight: normal; /* всегда обычный вес */
  margin-top: ${(p) => p.theme.spacing(1)};
  line-height: 1.5;

  max-height: ${(p) => (p.expanded ? "200px" : "0")};
  opacity: ${(p) => (p.expanded ? 1 : 0)};
  overflow: hidden;
  transition: max-height 0.3s ease, opacity 0.3s ease;
`;

  

{/}
const TitleRow = styled.div`
    display: flex;
    align-items: flex-end;
    gap: ${(p) => p.theme.spacing(0.5)};
`;
<Content>
    <TitleRow>
        <Title
            completed={p.task.completed}
            isFirst={p.isFirst}
            onClick={() => p.onToggle(p.task.id)}
        >
            {p.task.title}
        </Title>
        {/* кнопка для раскрытия описания */}
        {p.task.description && p.task.description.trim() !== "" && (
            <MoreButton
                onClick={() => setShowDescription((v) => !v)}
                aria-label="Показать описание"
            >
              <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="5" cy="12" r="2" fill="#666" />
              <circle cx="12" cy="12" r="2" fill="#666" />
              <circle cx="19" cy="12" r="2" fill="#666" />
            </svg>
                {/* svg три точки */}
            </MoreButton>
        )}
    </TitleRow>
    
    {/* описание под заголовком */}
    <Description expanded={showDescription}>
        {p.task.description}
    </Description>

    {/* дата — всегда внизу */}
    <DateText>
        {p.task.createdAt.toLocaleString("ru-RU", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })}
    </DateText>
</Content>




//урок 10
import { useTheme } from "@emotion/react";

const DatesRow = styled.div`
    display: flex;
    align-items: flex-end;
    gap: ${(p) => p.theme.spacing(1)};
    font-size: 12px;
    margin-top: 2px;
`;
const DeadlineText = styled.span<{ color: string }>`
    color: ${(p) => p.color};
    font-weight: normal;
`;
const Arrow = styled.span`
    color: ${(p) => p.theme.colors.textMuted};
`;





const theme = useTheme();
const getDeadlineColor = (date: Date, theme: any) => {
    const now = new Date();
    const diff = date.getTime() - now.getTime();
    const days = diff / (1000 * 60 * 60 * 24);

    if (days < 0) return theme.colors.error;
    if (days <= 1) return theme.colors.warning;
    if (days <= 3) return theme.colors.accent;
    return theme.colors.textMuted;
};

<DatesRow>
    <DateText>
        {p.task.createdAt.toLocaleString("ru-RU", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        })}
    </DateText>

    {p.task.deadline && (
        <>
            <Arrow>→</Arrow>
            <DeadlineText color={getDeadlineColor(p.task.deadline, theme)}>
                {p.task.deadline.toLocaleDateString("ru-RU", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                })}
            </DeadlineText>
        </>
    )}
</DatesRow>

