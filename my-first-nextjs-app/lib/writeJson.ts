import { MessageStructure } from "@/components/Message";
import { writeFile } from "fs/promises";


export async function writeJson(messagesList: MessageStructure[]){
await writeFile("datos.json", JSON.stringify(messagesList));
}