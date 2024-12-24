import { clsx } from "clsx";
import PropTypes from "prop-types";

const Button = ({
  label,
  icon,
  url,
  type,
  size,
  className,
  hasTooltip,
  onClick,
}) => {
  const style = clsx(
    "group text-nowrap rounded-full capitalize transition",
    type ? "px-4 py-2" : "hover:text-stone-500",
    type === "primary" && "bg-stone-900 text-stone-100 hover:bg-stone-600",
    type === "secondary" && "border border-stone-300 hover:bg-stone-200",
    size === "small" && "px-3.5 py-[0.344rem]",
    className,
  );

  const content = icon ? (
    <div className="relative">
      <span className="block">{icon}</span>
      {hasTooltip && (
        <span className="invisible absolute left-1/2 top-[130%] -translate-x-1/2 -translate-y-2 rounded-full bg-stone-200 px-3 py-1.5 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:text-stone-900 group-hover:opacity-100">
          {label}
        </span>
      )}
    </div>
  ) : (
    label
  );

  return url ? (
    <a
      href={url}
      className={style}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={icon && label}
      onClick={onClick}
    >
      {content}
    </a>
  ) : (
    <button className={style} aria-label={icon && label} onClick={onClick}>
      {content}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  url: PropTypes.string,
  type: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small"]),
  className: PropTypes.string,
  hasTooltip: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
