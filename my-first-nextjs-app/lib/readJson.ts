import { MessageStructure } from "@/components/Message";
import { readFile } from "fs/promises";


export async function readJson(){
const lecturaValue = await readFile("datos.json");
const valueTransformado = await JSON.parse(lecturaValue.toString());
return valueTransformado as MessageStructure[]
}