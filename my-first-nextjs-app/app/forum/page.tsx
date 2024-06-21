import Message from "@/components/Message";
import {readJson} from "@/lib/readJson";

export default async function Home() {
  const messagesList = await readJson();

  return (
    <main className="flex flex-row">
      <div></div>
      <div className="px-80 flex flex-col-reverse gap-2">
      {messagesList.map((a) => (
          <Message key={a.id} message={a} />
      ))}
    </div>
    <div></div>
    </main>
  );
}