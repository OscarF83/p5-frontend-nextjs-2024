"use client";

import React, { FormEventHandler, useRef } from "react";

export default function MessageForm() {
  const formRef = useRef<HTMLFormElement | null>(null);

  const addMessage: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log("Añadiendo mensaje");
  };

  return (
    <form
      className="flex flex-col"
      ref={formRef}
      onSubmit={addMessage}
    >
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
