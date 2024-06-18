import Message from "@/components/Message";
import MessageForm from "@/components/MessageForm";
import {readJson} from "@/lib/readJson";

export default async function Home() {
  const messagesList = await readJson();
  return (
    <main>
      <h1 className="justify-center"> Multi-thematic forum </h1>
      <div className="p-6 flex flex-col gap-2">
      {messagesList.map((a) => (
          <Message key={a.id} message={a} />
      ))}
    </div>
    <div className="p-3">
        <MessageForm/>
      </div>
    </main>
  );
}
