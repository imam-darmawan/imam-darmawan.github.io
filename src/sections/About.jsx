import author from "../data/author";
import useAppStore from "../context/app-store";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import getAuthorTime from "../utils/author-time";

const Message = () => {
  const textRef = useRef();

  useEffect(() => {
    const timePos = author.messages.indexOf("time");

    const messages = [...author.messages];
    messages[timePos] = getAuthorTime();

    const typed = new Typed(textRef.current, {
      strings: messages,
      loop: true,
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 3000,
      preStringTyped: (arrayPos, self) => {
        if (arrayPos === timePos) {
          self.strings[timePos] = getAuthorTime();
        }
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="flex h-[2.125rem] items-center rounded-full bg-stone-200 px-5">
      <p className="overflow-hidden text-nowrap" dir="rtl">
        <bdi>
          <span ref={textRef}></span>
        </bdi>
      </p>
    </div>
  );
};

const About = () => {
  const { selectedRole } = useAppStore();

  return (
    <div className="mt-14 flex flex-col items-center gap-10">
      <div className="relative">
        <img
          src={author.profileImage}
          alt={author.name + "'s profile image"}
          className="aspect-square w-[4.5rem] rounded-[2rem] object-cover"
        />

        <div className="absolute left-2/3 top-2/3 max-w-[40vw]">
          <Message />
        </div>
      </div>

      <p
        className="text-center text-lg font-normal"
        dangerouslySetInnerHTML={{ __html: author.roles[selectedRole].about }}
      ></p>
    </div>
  );
};

export default About;
