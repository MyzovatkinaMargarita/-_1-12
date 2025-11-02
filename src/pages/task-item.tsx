   //урок 1-2
const [isEditing, setIsEditing] = useState(false); 
const [draft, setDraft] = useState(p.task.title);
{isEditing ? (
    <EditInput
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={handleSave} 
        onKeyDown={(e) => {
            if (e.key === "Enter") handleSave(); 
            if (e.key === "Escape") {
                setDraft(p.task.title); 
                setIsEditing(false);    
            }
        }}
        autoFocus
    />
) : (
    <Title
        completed={p.task.completed}
        isFirst={p.isFirst}
        onDoubleClick={() => setIsEditing(true)} 
        onClick={() => p.onToggle(p.task.id)}    
    >
        {p.task.title}
    </Title>
)}


const handleSave = () => {
    if (draft.trim() !== "" && draft !== p.task.title) {
        p.onEdit(p.task.id, draft.trim()); 
    }
    setIsEditing(false); 
};



const Title = styled.span<{ completed?: boolean; isFirst?: boolean }>`
    text-decoration: ${(p) => (p.completed ? "line-through" : "none")};
    color: ${(p) =>
        p.completed ? p.theme.colors.textMuted : p.theme.colors.text};
    cursor: pointer;
    font-weight: ${(p) => (p.isFirst ? "bold" : "normal")};
    user-select: none; 
    `;

<Title
    completed={p.task.completed}
    isFirst={p.isFirst}
    onDoubleClick={(e) => {
        e.preventDefault();       
        setIsEditing(true);
    }}
    onClick={() => p.onToggle(p.task.id)}
>
    {p.task.title}
</Title>

const EditButton = styled.button`
    border: none;
    background: transparent;
    cursor: pointer;
    color: ${(p) => p.theme.colors.textMuted};
    font-size: 16px;
    line-height: 1;
    padding: 0 2px;
`;


<ListItem isFirst={p.isFirst}>
    <Content> ... </Content>
    <div>
        <EditButton onClick={() => setIsEditing(true)}></EditButton>
        <Button onClick={() => p.onRemove(p.task.id)}>✕</Button>
    </div>
</ListItem>


const IconButton = styled.button`

    border: none;
    background: transparent;
    cursor: pointer;
    padding: 0 6px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    svg {
        width: 18px;
        height: 18px;
    }
`;



<div>
                <IconButton onClick={() => setIsEditing(true)} aria-label="Изменить">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.1498 7.93997L8.27978 19.81C7.21978 20.88 4.04977 21.3699 3.32977 20.6599C2.60977 19.9499 3.11978 16.78 4.17978 15.71L16.0498 3.84C16.5979 3.31801 17.3283 3.03097 18.0851 3.04019C18.842 3.04942 19.5652 3.35418 20.1004 3.88938C20.6356 4.42457 20.9403 5.14781 20.9496 5.90463C20.9588 6.66146 20.6718 7.39189 20.1498 7.93997V7.93997Z"
                            stroke="#c2c2c2"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </IconButton>
                <IconButton onClick={() => p.onRemove(p.task.id)} aria-label="Удалить">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19 5L5 19M5.00001 5L19 19" stroke="#dd8888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>                </IconButton>

            </div>
