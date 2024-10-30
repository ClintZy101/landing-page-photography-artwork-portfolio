"use client";
import Image from "next/image";
import ExpandingDiv from "./components/expanding-div/ExpandingDiv";
import { useStore } from "./store/createStore";

export default function Home() {

  return (
    <div className="p-10">
      <Image src={"https://images.unsplash.com/photo-1516472719440-b55487cb035e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxMzEyMTcxfHxlbnwwfHx8fHw%3D"} alt="painter's-hand" width={900} height={500}/>
     {/* <ExpandingDiv /> */}
    </div>
  );
}
