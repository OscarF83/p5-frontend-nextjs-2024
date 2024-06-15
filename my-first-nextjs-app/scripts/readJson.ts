import { MessageStructure } from "@/components/MessageList";
import { readFile } from "fs/promises";

export async function readJson(){
const lecturaValue = await readFile("datos.json");
const valueTransformado = JSON.parse(lecturaValue.toString());
return valueTransformado as MessageStructure[]
}
