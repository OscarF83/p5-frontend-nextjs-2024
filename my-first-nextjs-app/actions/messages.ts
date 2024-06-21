"use server";

import { readJson } from "@/lib/readJson";
import { writeJson } from "@/lib/writeJson";
import { revalidatePath } from "next/cache";

export async function actionAddMessage(formData: FormData) {
  const nickField = formData.get("nick");
  if (nickField === null) {
    throw new Error(`Missing "nick" field`);
  }
  const nameField = formData.get("name");
  if (nameField === null) {
    throw new Error(`Missing "name" field`);
  }
  const messageField = formData.get("message");
  if (messageField === null) {
    throw new Error(`Missing "message" field`);
  }
  const nick = nickField.toString();
  const name = nameField.toString();
  const message = messageField.toString();

  const messagesList = await readJson();

  const fecha = new Date();

  const newMessage = {
    id: messagesList.length + 1,
    nickName: nick,
    name: name,
    date: fecha.toLocaleDateString("es-MX", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: false,
    }),
    text: message,
    deleted: false,
  };

  messagesList.push(newMessage);
  await writeJson(messagesList);

  revalidatePath("/");
}

export async function actionDeleteMessage(id: number, password: string | null ) {
  console.log(`Mensaje borrado con ${id}, ${password}`);

  const messagesList = await readJson();

  if (messagesList[id - 1].name === password){
    messagesList[id - 1].deleted = true;
    await writeJson(messagesList);
  }
  revalidatePath("/");
}
