"use client"

import { actionDeleteMessage } from "@/actions/messages";

export type MessageStructure = {
  id: number;
  nickName: string;
  name: string;
  date: string;
  text: string;
  deleted: boolean;
};

type MessageProps = {
  message: MessageStructure;
};

export default function Message({ message }: MessageProps) {
  const { nickName, date, text } = message;
  if (message.deleted===false){
  return (
    <div className="p-6 border rounded-lg shadow gap-2 bg-stone-300">
      <div className="flex flex-row border-b-2 border-stone-600">
        <div className="pb-1 font-bold">{nickName}</div>
        <div className="flex-1"></div>
        <div>{date}</div>
      </div>
      <div className="flex flex-row">
        <div className="pt-3">{text}</div>
        <div className="flex-1"></div>
        <button onClick={() => actionDeleteMessage(message.id)} className="border shadow font-bold pr-2 py-1 px-2 my-2 rounded-lg bg-stone-200 hover:bg-stone-400">
          Delete
        </button>
      </div>
    </div>
  );} else {
    return (
      <div className="p-6 border rounded-lg shadow gap-2 bg-stone-300">
        <div className="flex flex-row border-b-2 border-stone-600">
          <div className="pb-1 font-bold">{nickName}</div>
          <div className="flex-1"></div>
          <div>{date}</div>
        </div>
        <div className="flex flex-row">
          <div className="pt-3 text-red-600">This message was deleted.</div>
        </div>
      </div>
  )}
}
