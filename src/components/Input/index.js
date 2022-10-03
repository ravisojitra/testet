import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  srcFillWhiteA700: "bg-white_A700",
  srcOutlineGray500: "border-2 border-gray_500 border-solid",
  srcOutlineGray5001_2: "border border-gray_500 border-solid shadow-bs",
  srcFillffffffff: "bg-colors",
  OutlineIndigo100: "bg-white_A700 border border-indigo_100 border-solid",
};
const shapes = {
  srcCircleBorder30: "rounded-radius30",
  RoundedBorder5: "rounded-radius5",
};
const sizes = {
  smSrc: "xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] p-[16px] lg:p-[8px]",
  sm: "3xl:pb-[10px] pb-[12px] lg:pb-[6px] xl:pb-[8px] 2xl:pb-[9px] xl:pt-[10px] 2xl:pt-[11px] 3xl:pt-[13px] pt-[15px] lg:pt-[8px] 3xl:px-[10px] px-[12px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["srcCircleBorder30", "RoundedBorder5"]),
  variant: PropTypes.oneOf([
    "srcFillWhiteA700",
    "srcOutlineGray500",
    "srcOutlineGray5001_2",
    "srcFillffffffff",
    "OutlineIndigo100",
  ]),
  size: PropTypes.oneOf(["smSrc", "sm"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
