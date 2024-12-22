import author from "../data/author";

const Footer = () => {
  return (
    <footer className="mt-16">
      <p className="text-center text-xs text-stone-500">&copy; {author.name}</p>
    </footer>
  );
};

export default Footer;
