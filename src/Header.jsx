import BoxIcons from "./assets/icons/BoxIcons";
import RoleSelector from "./components/RoleSelector";
import PropTypes from "prop-types";
import { clsx } from "clsx";

const Header = ({ selectedRole, setSelectedRole }) => {
  const links = [
    { label: "Upwork", url: "https://upwork.com" },
    { label: "Github", url: "https://github.com/imam-darmawan" },
  ];

  return (
    <header className="flex items-center">
      <h1 className="flex-grow text-lg font-bold max-[400px]:hidden">
        <a href="/" className="transition duration-300 hover:text-stone-500">
          Imam
        </a>
      </h1>

      <nav className="flex flex-grow-[2] justify-center max-[400px]:justify-start">
        <RoleSelector
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
        />
      </nav>

      <ul className="flex flex-grow justify-end gap-4">
        {links.map((link, idx) => (
          <li key={link.label}>
            <a
              href={link.url}
              target="_blank"
              aria-label={"Imam's " + link.label}
              className="group relative"
            >
              <BoxIcons
                name={link.label}
                className="transition duration-300 group-hover:text-stone-500"
              />
              <span
                className={clsx(
                  "invisible absolute left-1/2 top-[130%] flex h-7 -translate-x-1/2 -translate-y-1 items-center rounded-2xl bg-stone-200 px-3.5 opacity-0 transition duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
                  idx === links.length - 1 && "max-[630px]:-translate-x-3/4",
                )}
              >
                {link.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
};

Header.propTypes = {
  selectedRole: PropTypes.string.isRequired,
  setSelectedRole: PropTypes.func.isRequired,
};

export default Header;
