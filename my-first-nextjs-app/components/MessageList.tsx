import Message from "./Message";

export type MessageStructure = {
    id: number;
    nickName: string;
    name: string;
    date: string;
    text: string;
  };

type MessageListProps = {
    messagelist: MessageStructure[];
}

export default function MessageList({messagelist}:MessageListProps) {
  return (
    <div>
        {messagelist.map((a) => (
            <Message key={a.id} message={a}/>
        ))}
    </div>
  )
}
