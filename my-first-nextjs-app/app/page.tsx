import Message from "@/components/Message";
import MessageForm from "@/components/MessageForm";
import {readJson} from "@/lib/readJson";

export default async function Home() {
  const messagesList = await readJson();
  return (
    <main>
      <div className="px-40 py-3 flex flex-col gap-2">
      {messagesList.map((a) => (
          <Message key={a.id} message={a} />
      ))}
    </div>
    <div className="px-20 py-6">
        <MessageForm/>
      </div>
    </main>
  );
}
