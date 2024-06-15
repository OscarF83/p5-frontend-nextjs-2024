import Message from "@/components/Message";
import MessageList from "@/components/MessageList";

const message1 = {
  id: 1,
  nickName:"Racso83",
  name:"Oscar",
  date:"15/06/2024",
  text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, necessitatibus animi? Consectetur nihil id vero. Modi minus quae distinctio omnis necessitatibus laudantium, excepturi dolorum vel exercitationem, vitae molestias error cum."
}

const arrayMessages = [{
  id: 1,
  nickName:"Racso83",
  name:"Oscar",
  date:"15/06/2024",
  text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, necessitatibus animi? Consectetur nihil id vero. Modi minus quae distinctio omnis necessitatibus laudantium, excepturi dolorum vel exercitationem, vitae molestias error cum."
}, {
  id: 1,
  nickName:"Racso84",
  name:"Oscar",
  date:"15/06/2024",
  text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, necessitatibus animi? Consectetur nihil id vero. Modi minus quae distinctio omnis necessitatibus laudantium, excepturi dolorum vel exercitationem, vitae molestias error cum."
},{
  id: 1,
  nickName:"Racso85",
  name:"Oscar",
  date:"15/06/2024",
  text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, necessitatibus animi? Consectetur nihil id vero. Modi minus quae distinctio omnis necessitatibus laudantium, excepturi dolorum vel exercitationem, vitae molestias error cum."
}];

export default function Home() {
  return (
    <main>
      <h1 className="p-8"> Starting delivery "P5-Fronted-NextJS-2024" </h1>
      <div className="p-3">
        <Message message={message1}/>
      </div>
      <div className="p-3">
        <MessageList messagelist={arrayMessages}/>
      </div>
    </main>
  );
}
