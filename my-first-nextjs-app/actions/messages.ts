"use server";

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
  console.log(`Desde el servidor ${nick}`)
}
