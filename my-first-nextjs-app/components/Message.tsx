import type { MessageStructure } from "./MessageList";

export type MessageProps = {
  message: MessageStructure;
};

export default function Message({ message }: MessageProps) {
  const {nickName, date, text} = message;
  return (
    <div className="p-3">
    <div className="message-box">
      <div className="flex flex-row border-b-2 border-blue-600">
        <div className="pb-1 font-bold">{nickName}</div>
        <div className="flex-1"></div>
        <div>{date}</div>
      </div>
      <div className="pt-3">{text}</div>
    </div>
    </div>
  );
}
