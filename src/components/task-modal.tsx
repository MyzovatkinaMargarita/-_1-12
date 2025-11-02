// урок 9
/** @jsxImportSource @emotion/react */
import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import type { Task } from "../entities/task";

// обновление стиля Overlay
const Overlay = styled.div<{ visible: boolean }>`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    opacity: ${(p) => (p.visible ? 1 : 0)};
    transition: opacity 0.3s ease;
`;

// обновление стиля Modal
const Modal = styled.div<{ visible: boolean }>`
    background: ${(p) => p.theme.colors.surface};
    padding: ${(p) => p.theme.spacing(3)};
    border-radius: ${(p) => p.theme.radius.md};
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: ${(p) => p.theme.spacing(2)};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);

    opacity: ${(p) => (p.visible ? 1 : 0)};
    transform: scale(${(p) => (p.visible ? 1 : 0.8)});
    transition: opacity 0.3s ease, transform 0.3s ease;
`;

const Input = styled.input`
    padding: ${(p) => p.theme.spacing(1)};
    border: 1px solid ${(p) => p.theme.colors.border};
    border-radius: ${(p) => p.theme.radius.sm};
`;
const TextArea = styled.textarea`
    padding: ${(p) => p.theme.spacing(1)};
    border: 1px solid ${(p) => p.theme.colors.border};
    border-radius: ${(p) => p.theme.radius.sm};
    min-height: 80px;
    resize: vertical;
`;


const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: ${(p) => p.theme.spacing(1)};
`;
const Button = styled.button<{ variant?: "primary" | "secondary" }>`
    padding: 6px 14px;
    border-radius: ${(p) => p.theme.radius.sm};
    border: 1px solid
        ${(p) => (p.variant === "primary" ? p.theme.colors.accent : p.theme.colors.border)};
    background: ${(p) => (p.variant === "primary" ? p.theme.colors.accent : p.theme.colors.surface)};
    color: ${(p) => (p.variant === "primary" ? "#fff" : p.theme.colors.text)};
    cursor: pointer;
`;



type TaskModalProps = {
    task: Task;
    onSave: (id: string, title: string, description: string) => void;
    onClose: () => void;
};
export const TaskModal = (p: TaskModalProps) => {
    const [title, setTitle] = useState(p.task.title);
    const [visible, setVisible] = useState(false);
    const [description, setDescription] = useState(p.task.description ?? "");
    // закрытие по Esc
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") p.onClose();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [p]);

// при монтировании включается анимация появления
useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timeout);
}, []);
// при закрытии сначала выключается анимация, затем вызывается onClose
<Button
    onClick={() => {
        setVisible(false);
        setTimeout(p.onClose, 300);
    }}
>
    Отмена
</Button>


    return (
        <Overlay>
            <Modal>
                <h2>Редактирование задачи</h2>

                <Input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextArea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Actions>
                    <Button onClick={p.onClose}>Отмена</Button>
                    <Button
                        variant="primary"
                        onClick={() => {
                            if (title.trim() !== "") {
                                p.onSave(p.task.id, title.trim(), description.trim());
                                p.onClose();
                            }
                        }}
                    >
                        Сохранить
                    </Button>
                </Actions>
            </Modal>
        </Overlay>
    );
};

//урок 10
const [deadline, setDeadline] = useState<string>(
    p.task.deadline ? p.task.deadline.toISOString().split("T")[0] : ""
);

<label>
    Дедлайн:
    <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
    />
</label>

// в обработчике сохранения
p.onSave(
    p.task.id,
    title.trim(),
    description.trim(),
    deadline ? new Date(deadline) : null
);



