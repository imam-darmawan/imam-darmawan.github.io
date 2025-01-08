import { clsx } from "clsx";
import author from "../data/author";
import Boxicons from "../assets/icons/Boxicons";
import useAppStore from "../context/app-store";
import Tabs from "../components/Tabs";
import Button from "../components/Button";
import useProjectsStore from "../context/projects-store";

const Header = () => {
  const { selectedRole, setSelectedRole } = useAppStore();
  const { setFilterKeyword } = useProjectsStore();

  return (
    <header className="flex h-[2.875rem] items-center">
      {/* Avoid using max-[512px]:hidden for accessibility. */}
      <div className="flex flex-1 overflow-hidden max-[512px]:w-0 max-[512px]:flex-none">
        <a
          href="/"
          className="text-lg font-bold transition hover:text-stone-500"
        >
          {author.name.split(" ")[0]}
        </a>
      </div>

      <div>
        <nav className="w-56 max-[512px]:w-52">
          <Tabs
            list={Object.keys(author.roles)}
            activeTab={selectedRole}
            onTabClick={(role) => {
              setFilterKeyword("all");
              setSelectedRole(role);
            }}
          />
        </nav>
      </div>

      <div className="flex flex-1 justify-end">
        <ul className="flex gap-4">
          {author.socialLinks.map((link, index) => (
            <li key={link.label}>
              <Button
                label={link.label}
                url={link.url}
                icon={<Boxicons name={link.label} />}
                className={clsx(
                  index === author.socialLinks.length - 1 &&
                    "max-sm:[&_span:last-child]:-translate-x-3/4",
                )}
                hasTooltip
              />
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
