import clsx from "clsx";
import PropTypes from "prop-types";
import List from "./components/List";
import Gallery from "./components/Gallery";
import { useState } from "react";

// Category radio button
const Category = ({ category, onClick, filter }) => {
  return (
    <label htmlFor={category} key={category}>
      <input
        type="radio"
        name="category"
        id={category}
        value={category}
        onClick={onClick}
        className="peer hidden"
      />
      <span
        className={clsx(
          "flex h-7 cursor-pointer items-center rounded-2xl border border-stone-300 px-3.5 transition hover:bg-stone-200",
          category === filter && "border-stone-400 bg-stone-200",
        )}
      >
        {category}
      </span>
    </label>
  );
};

const Works = ({ selectedRole }) => {
  const [filter, setFilter] = useState("All");

  const categories = {
    developer: ["Themes", "Games"],
    designer: ["Illustrations", "UI/UX", "Posts"],
  };

  !categories[selectedRole].includes(filter) &&
    filter !== "All" &&
    setFilter("All");

  const works = {
    developer: [
      {
        title: "Yuuga",
        url: "https://themeskibou-yuuga.pages.dev",
        date: "2024",
        category: categories.developer[0],
      },
      {
        title: "Monster Truck",
        url: "https://id-monstertruck-game.pages.dev",
        date: "2023",
        category: categories.developer[1],
      },
    ],
    designer: [
      {
        image: "https://placecats.com/200/150",
        date: "2024",
        category: categories.designer[1],
      },
      {
        image: "https://placecats.com/200/270",
        date: "2021",
        category: categories.designer[0],
      },
      {
        image: "https://placecats.com/200/300",
        date: "2018",
        category: categories.designer[1],
      },
      {
        image: "https://placecats.com/200/130",
        date: "2024",
        category: categories.designer[1],
      },
      {
        image: "https://placecats.com/200/240",
        date: "2021",
        category: categories.designer[0],
      },
      {
        image: "https://placecats.com/200/260",
        date: "2018",
        category: categories.designer[1],
      },
    ],
  };

  const filteredWorks =
    filter === "All"
      ? works[selectedRole]
      : works[selectedRole].filter((work) => work.category === filter);

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="mt-20 text-center">
      <h2 className="text-lg font-bold">Works</h2>

      {/* Filter */}
      <fieldset className="mt-4 flex flex-wrap justify-center gap-2">
        <Category category="All" filter={filter} onClick={handleFilter} />

        {categories[selectedRole].map((category) => (
          <Category
            key={category}
            category={category}
            filter={filter}
            onClick={handleFilter}
          />
        ))}
      </fieldset>

      {/* Work list */}
      {selectedRole === "developer" ? (
        <List works={filteredWorks} />
      ) : (
        <Gallery works={filteredWorks} filter={filter} />
      )}
    </div>
  );
};

Works.propTypes = {
  selectedRole: PropTypes.string.isRequired,
};

Category.propTypes = {
  category: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Works;
