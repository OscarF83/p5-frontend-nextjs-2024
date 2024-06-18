"use client";

import { actionAddMessage } from "@/actions/messages";
import React, { FormEventHandler, useRef } from "react";

type MessageStructure = {
  id: number;
  nickName: string;
  name: string;
  date: string;
  text: string;
  deleted: boolean;
};

type MessageFormProps = {
  onChange: (obj: MessageStructure[]) => void;
};

export default function MessageForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const addMessage = async (formData: FormData) => {
    formRef.current?.reset();
    await actionAddMessage(formData)
  };

  return (
    <form ref={formRef} action={addMessage} className="flex flex-col">
      <div className="flex flex-row pb-3">
        <input
          type="text"
          name="nick"
          className="border shadow px-2 mr-2 rounded-lg"
        />
        <input
          type="text"
          name="name"
          className="border shadow px-2 mr-2 rounded-lg"
        />
      </div>
      <div className="flex flex-row">
        <input
          type="text"
          name="message"
          className="border shadow px-2 mr-2 rounded-lg size-full h-10 self-center"
        />
        <button className="border shadow font-bold py-1 px-2 my-2 rounded-lg bg-stone-200 hover:bg-stone-400">
          Send
        </button>
      </div>
    </form>
  );
}
