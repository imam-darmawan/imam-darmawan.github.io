import { clsx } from "clsx";
import Boxicons from "../assets/icons/Boxicons";
import PropTypes from "prop-types";

const Tabs = ({ list, activeTab, onTabClick, iconOnly }) => {
  return (
    <div className="rounded-full bg-stone-200 p-1.5">
      <div className="relative flex">
        {list.map((item) => {
          const isSelected = item === activeTab;

          return (
            <button
              key={item}
              aria-label={item}
              onClick={() => onTabClick(item)}
              style={{ width: (1 / list.length) * 100 + "%" }}
              className={clsx(
                "relative z-10 flex h-[2.125rem] items-center justify-center rounded-full capitalize transition",
                !isSelected && "hover:opacity-60",
              )}
            >
              {iconOnly ? <Boxicons name={item} className="h-4 w-4" /> : item}
            </button>
          );
        })}

        {/* Active tab indicator */}
        <div
          aria-hidden="true"
          style={{
            width: (1 / list.length) * 100 + "%",
            transform: `translateX(${list.indexOf(!activeTab ? list[0] : activeTab) * 100}%)`,
          }}
          className="absolute left-0 top-0 h-full rounded-full border border-stone-100 bg-[linear-gradient(180deg,#f5f5f4_0%,#e7e5e4_90%,#f5f5f4_100%)] shadow-md transition duration-300"
        ></div>
      </div>
    </div>
  );
};

Tabs.propTypes = {
  list: PropTypes.array.isRequired,
  activeTab: PropTypes.string,
  onTabClick: PropTypes.func,
  iconOnly: PropTypes.bool,
};

export default Tabs;
