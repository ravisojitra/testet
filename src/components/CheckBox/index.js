import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineIndigo100: "border-2 border-indigo_100 border-solid",
};
const shapes = { RoundedBorder4: "rounded-radius4" };
const sizes = { sm: "p-[1px]" };

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      errors = [],
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${shapes[shape] || ""} ${
              variants[variant] || ""
            } ${sizes[size] || ""}`}
            ref={ref}
            type="checkbox"
            name={name}
            {...restProps}
          />
          {label}
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

CheckBox.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder4"]),
  variant: PropTypes.oneOf(["OutlineIndigo100"]),
  size: PropTypes.oneOf(["sm"]),
};
CheckBox.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  shape: "RoundedBorder4",
  variant: "OutlineIndigo100",
  size: "sm",
};

export { CheckBox };
