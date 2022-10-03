import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbCircleBorder28: "rounded-radius28",
  icbRoundedBorder4: "rounded-radius4",
  icbCircleBorder20: "rounded-radius20",
  icbCircleBorder36: "rounded-radius36",
  icbCircleBorder24: "rounded-radius24",
  icbCircleBorder12: "rounded-radius12",
  CircleBorder20: "rounded-radius20",
  CircleBorder30: "rounded-radius30",
  CustomBorderTL20:
    "rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px]",
  RoundedBorder5: "rounded-radius5",
  CustomBorderBL12:
    "rounded-bl-[12px] rounded-br-[12px] rounded-tl-[0] rounded-tr-[12px]",
  CustomBorderTL201_2:
    "rounded-bl-[0] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px]",
};
const variants = {
  icbFillRedA200: "bg-red_A200",
  icbFillIndigo500: "bg-indigo_500",
  icbFillDeeporange300: "bg-deep_orange_300",
  icbFillYellow700: "bg-yellow_700",
  icbFillIndigo900: "bg-indigo_900",
  icbOutlineGray500: "bg-white_A700 border-2 border-gray_500 border-solid",
  icbOutlinePinkA7000c: "bg-indigo_500 shadow-bs",
  icbOutlineGray5001_2: "border-2 border-gray_500 border-solid shadow-bs",
  icbOutline0cbf156c: "bg-colors shadow-bs",
  FillIndigo500: "bg-indigo_500 text-white_A700",
  FillDeeporange300: "bg-deep_orange_300 text-white_A700",
  FillYellow700: "bg-yellow_700 text-white_A700",
  FillIndigo50063: "bg-indigo_500_63 text-indigo_500",
  FillIndigo50019: "bg-indigo_500_19 text-indigo_500",
  OutlinePinkA7000c: "bg-indigo_500_19 shadow-bs text-indigo_500",
  OutlineIndigo100:
    "bg-white_A700 border border-indigo_100 border-solid text-gray_500",
  FillGray101: "bg-gray_101 text-indigo_900",
  OutlinePinkA7000c1_2: "bg-indigo_500_36 shadow-bs",
  FillWhiteA700: "bg-white_A700 text-indigo_900",
  Outlineff4d44b5: "border-2 border-colors1 border-solid text-colors1",
  Fillff4d44b5: "bg-colors1 text-colors",
  Outline0cbf156c: "bg-colors1 shadow-bs text-colors",
};
const sizes = {
  smIcn: "lg:p-[2px] 2xl:p-[3px] xl:p-[3px] 3xl:p-[4px] p-[5px]",
  mdIcn: "p-[10px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px]",
  lgIcn: "xl:p-[10px] 2xl:p-[11px] 3xl:p-[13px] p-[15px] lg:p-[8px]",
  xlIcn: "lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[17px] p-[19px]",
  "2xlIcn": "lg:p-[11px] xl:p-[14px] 2xl:p-[16px] 3xl:p-[19px] p-[22px]",
  sm: "lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] p-[9px]",
  md: "3xl:p-[10px] p-[12px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px]",
  lg: "xl:p-[10px] 2xl:p-[12px] 3xl:p-[14px] p-[16px] lg:p-[8px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbCircleBorder28",
    "icbRoundedBorder4",
    "icbCircleBorder20",
    "icbCircleBorder36",
    "icbCircleBorder24",
    "icbCircleBorder12",
    "CircleBorder20",
    "CircleBorder30",
    "CustomBorderTL20",
    "RoundedBorder5",
    "CustomBorderBL12",
    "CustomBorderTL201_2",
  ]),
  variant: PropTypes.oneOf([
    "icbFillRedA200",
    "icbFillIndigo500",
    "icbFillDeeporange300",
    "icbFillYellow700",
    "icbFillIndigo900",
    "icbOutlineGray500",
    "icbOutlinePinkA7000c",
    "icbOutlineGray5001_2",
    "icbOutline0cbf156c",
    "FillIndigo500",
    "FillDeeporange300",
    "FillYellow700",
    "FillIndigo50063",
    "FillIndigo50019",
    "OutlinePinkA7000c",
    "OutlineIndigo100",
    "FillGray101",
    "OutlinePinkA7000c1_2",
    "FillWhiteA700",
    "Outlineff4d44b5",
    "Fillff4d44b5",
    "Outline0cbf156c",
  ]),
  size: PropTypes.oneOf([
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
    "2xlIcn",
    "sm",
    "md",
    "lg",
  ]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
