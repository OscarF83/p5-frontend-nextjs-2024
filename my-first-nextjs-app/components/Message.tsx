type MessageProps = {
  nickName: string;
  date: string;
  text: string;
};

function Message({ nickName, date, text }: MessageProps) {
  return (
    <div className="message-box">
      <div className="flex flex-row border-b-2 border-blue-600">
        <div className="pb-1 font-bold">{nickName}</div>
        <div className="flex-1"></div>
        <div>{date}</div>
      </div>
      <div className="pt-3">{text}</div>
    </div>
  );
}

export default Message;
