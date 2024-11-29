import { useRef, useEffect } from "react";
import Typed from "typed.js";
import { renderToStaticMarkup } from "react-dom/server";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

// dayjs plugins
dayjs.extend(timezone);
dayjs.extend(utc);

const Status = () => {
  const textWrapper = useRef(null);

  // Author's local time text (Sun 20:00 PM - 2h behind)
  const TimeStatus = () => {
    const userTime = dayjs();
    const authorTime = userTime.tz("Asia/Jakarta");
    const timeDiff = (authorTime.utcOffset() - userTime.utcOffset()) / 60;

    return (
      <>
        <span className="mr-1.5 text-sm">⏰</span>
        {authorTime.format("ddd HH:mm A")}
        <span className="text-stone-500">
          {timeDiff !== 0 &&
            (timeDiff > 0
              ? ` - ${timeDiff}h ahead`
              : ` - ${timeDiff * -1}h behind`)}
        </span>
      </>
    );
  };

  useEffect(() => {
    const typed = new Typed(textWrapper.current, {
      strings: [
        "<span class='text-xs mr-1.5'>✅</span> Available",
        renderToStaticMarkup(<TimeStatus />),
      ],
      loop: true,
      typeSpeed: 50,
      backSpeed: 20,
      backDelay: 3000,
      onStringTyped: (arrayPos, self) => {
        // Update the author's local time
        if (arrayPos === 0) {
          self.strings[1] = renderToStaticMarkup(<TimeStatus />);
        }
      },
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="flex h-[2.125rem] max-w-[40vw] items-center rounded-3xl bg-stone-200 px-5">
      <div className="overflow-hidden text-nowrap" dir="rtl">
        {/* Wrap the status texts inside of a <bdi> tag 
        to treat the texts it contains in isolation from its surrounding text */}
        <bdi>{<span ref={textWrapper}></span>}</bdi>
      </div>
    </div>
  );
};

export default Status;
