import Message from "@/components/Message";
import MessageList from "@/components/MessageList";
import { readJson } from "@/scripts/readJson";

const valueJsonFile = await readJson();

export default function Home() {
  return (
    <main>
      <h1 className="p-8 flex justify-center"> Multi-thematic forum </h1>
      <div className="p-3">
        <MessageList messagelist={valueJsonFile}/>
      </div>
    </main>
  );
}
