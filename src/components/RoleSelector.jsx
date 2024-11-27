import { clsx } from "clsx";
import PropTypes from "prop-types";

const RoleSelector = ({ selectedRole, setSelectedRole }) => {
  const roles = ["Developer", "Designer"];

  return (
    <div className="rounded-3xl bg-stone-200 p-1.5">
      <div
        className={clsx(
          "role-indicator has-[.designer-role-button:hover]:before:translate-x-full has-[.developer-role-button:hover]:before:translate-x-0",
          selectedRole === roles[1].toLowerCase() && "before:translate-x-full",
        )}
      >
        {roles.map((role) => (
          <button
            key={role}
            className={`${role.toLowerCase() + "-role-button"} relative z-10 h-[2.125rem] w-[6.25rem]`}
            onClick={() => setSelectedRole(role.toLowerCase())}
          >
            {role}
          </button>
        ))}
      </div>
    </div>
  );
};

RoleSelector.propTypes = {
  selectedRole: PropTypes.string.isRequired,
  setSelectedRole: PropTypes.func.isRequired,
};

export default RoleSelector;
