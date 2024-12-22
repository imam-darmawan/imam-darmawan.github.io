import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import author from "../data/author";

dayjs.extend(timezone);
dayjs.extend(utc);

export default () => {
  const userTime = dayjs();
  const authorTime = userTime.tz(author.timezone);
  const timeDiff = (authorTime.utcOffset() - userTime.utcOffset()) / 60;

  return `⏰ ${authorTime.format("ddd HH:mm A")} ${timeDiff === 0 ? "" : timeDiff > 0 ? `— ${timeDiff}h ahead` : `— ${timeDiff * -1}h behind`}`.trim();
};
