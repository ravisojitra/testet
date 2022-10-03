import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";
const variants = { FillWhiteA700: "bg-white_A700" };

const sizes = { sm: "pt-[3px]" };
const Radio = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      checked = false,
      errors = [],
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const [value, setValue] = React.useState(checked);

    React.useEffect(() => {
      setValue(checked);
    }, [checked]);

    const handleChange = (event) => {
      setValue(event.target.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName}  ${variants[variant] || ""} ${
              sizes[size] || ""
            }`}
            ref={ref}
            type="radio"
            name={name}
            aria-checked={!!value}
            checked={!!value}
            onChange={handleChange}
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
Radio.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.oneOf(["FillWhiteA700"]),
  size: PropTypes.oneOf(["sm"]),
};

Radio.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  variant: "",
  size: "",
};

export { Radio };
