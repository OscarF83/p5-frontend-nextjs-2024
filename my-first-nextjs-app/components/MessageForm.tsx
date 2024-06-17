"use client";
import { readJson } from "@/scripts/readJson";
import React, { FormEventHandler, useRef } from "react";

export default function MessageForm() {
  const nickRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const messageRef = useRef<HTMLInputElement | null>(null);

  const addMessage: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(nickRef.current!.value);
    console.log(nameRef.current!.value);
    console.log(messageRef.current!.value);
    nickRef.current!.value = "";
    nameRef.current!.value = "";
    messageRef.current!.value = "";
      
  };

  return (
    <form
      className="flex flex-col"
      onSubmit={addMessage}
    >
      <div className="flex flex-row pb-3">
      <input
        type="text"
        name="nick"
        className="border shadow px-2 mr-2 rounded-lg"
        ref={nickRef}
      />
      <input
        type="text"
        name="name"
        className="border shadow px-2 mr-2 rounded-lg"
        ref={nameRef}
      />
      </div>
      <div className="flex flex-row">
      <input
        type="text"
        name="message"
        className="border shadow px-2 mr-2 rounded-lg size-full h-10 self-center"
        ref={messageRef}
      />
      <button className="border shadow font-bold py-1 px-2 my-2 rounded-lg bg-stone-200 hover:bg-stone-400">
        Send
      </button>
      </div>
    </form>
  );
}
