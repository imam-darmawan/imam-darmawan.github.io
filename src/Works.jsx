import clsx from "clsx";
import PropTypes from "prop-types";
import { useState } from "react";

const CategorySelector = ({ category, onClick, filter }) => {
  return (
    <label htmlFor={category} key={category}>
      <input
        type="radio"
        name="category"
        id={category}
        value={category}
        onClick={onClick}
        className="peer hidden"
        {...(filter.includes(category) && { defaultChecked: true })}
      />
      <span
        className={clsx(
          "flex h-7 cursor-pointer items-center rounded-2xl border border-stone-300 px-3.5 transition hover:bg-stone-200 peer-checked:border-stone-400 peer-checked:bg-stone-200",
        )}
      >
        {category}
      </span>
    </label>
  );
};

const Works = () => {
  const [filter, setFilter] = useState("All");

  const cateogries = ["Themes", "Games"];

  const works = [
    {
      title: "Yuuga",
      url: "https://themeskibou-yuuga.pages.dev",
      date: "2024",
      category: cateogries[0],
    },
    {
      title: "Monster Truck",
      url: "https://id-monstertruck-game.pages.dev",
      date: "2023",
      category: cateogries[1],
    },
  ];

  const filteredWorks =
    filter === "All" ? works : works.filter((work) => work.category === filter);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="mt-20 flex-wrap text-center">
      <h2 className="text-lg font-bold">Works</h2>

      {/* Filter */}
      <fieldset className="mt-4 flex justify-center gap-2">
        <CategorySelector
          category="All"
          filter={filter}
          onClick={handleFilter}
        />

        {cateogries.map((category) => (
          <CategorySelector
            key={category}
            category={category}
            filter={filter}
            onClick={handleFilter}
          />
        ))}
      </fieldset>

      {/* Works list */}
      <ul className="mt-8">
        {filteredWorks.map((work) => (
          <li
            key={work.title}
            className="relative flex h-[3.25rem] items-center"
          >
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
    </div>
  );
};

CategorySelector.propTypes = {
  category: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Works;
