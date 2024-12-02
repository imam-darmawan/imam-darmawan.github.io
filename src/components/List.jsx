import PropTypes from "prop-types";

const List = ({ works }) => {
  return (
    <ul className="mt-8">
      {works.map((work) => (
        <li key={work.title} className="relative flex h-[3.25rem] items-center">
          <a
            href={work.url}
            className="flex h-full w-full items-center justify-between border-b border-stone-300 px-3 transition-all hover:border-b-stone-400 hover:px-5"
            target="_blank"
          >
            <span className="text-sm font-bold">{work.title}</span>
            <span className="text-stone-600">
              {work.category} - <time dateTime={work.date}>{work.date}</time>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  works: PropTypes.array.isRequired,
};

export default List;
