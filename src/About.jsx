import Status from "./components/Status";

const About = () => {
  return (
    <div className="mt-14 flex flex-col items-center justify-center gap-10">
      <div className="relative">
        <img
          src="/tupai-100x100.png"
          alt="Imam's Cat"
          className="aspect-square w-[4.5rem] rounded-[2rem] object-cover"
        />
        <div className="absolute left-2/3 top-2/3">
          <Status />
        </div>
      </div>
      <p className="text-center text-lg font-normal">
        Hi, I&apos;m <b>Imam Darmawan</b>, a fullstack developer based in
        Indonesia. My main focus is on the MERN stack, particularly on frontend
        development. Nice to meet you.
      </p>
    </div>
  );
};

export default About;
