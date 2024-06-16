import type { MessageStructure } from "@/scripts/readJson";
import Message from "./Message";

type MessageListProps = {
  messagelist: MessageStructure[];
}

export default async function MessageList({messagelist}:MessageListProps) {
  //const messagelist = await readJson();
  return (
    <div className="flex flex-col gap-2">
      {messagelist.map((a) => (
          <Message key={a.id} message={a} />
      ))}
    </div>
  );
}
