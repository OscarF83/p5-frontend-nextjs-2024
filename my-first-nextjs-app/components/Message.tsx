export type MessageStructure = {
  id: number;
  nickName: string;
  name: string;
  date: string;
  text: string;
};

type MessageProps = {
  message: MessageStructure;
};

export default function Message({ message }: MessageProps) {
  const { nickName, date, text } = message;
  return (
    <div className="p-1.5 border rounded-lg shadow gap-2 bg-stone-300">
      <div className="flex flex-row border-b-2 border-stone-600">
        <div className="pb-1 font-bold">{nickName}</div>
        <div className="flex-1"></div>
        <div>{date}</div>
      </div>
      <div className="pt-2">{text}</div>
    </div>
  );
}
