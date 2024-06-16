import { readFile } from "fs/promises";

export type MessageStructure = {
    id: number;
    nickName: string;
    name: string;
    date: string;
    text: string;
  };

export async function readJson(){
const lecturaValue = await readFile("datos.json");
const valueTransformado = await JSON.parse(lecturaValue.toString());
return valueTransformado as MessageStructure[]
}
