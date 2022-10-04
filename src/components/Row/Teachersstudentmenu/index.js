import React from "react";

import { Row, Input, Img, SelectBox, Button } from "components";
import { CloseSVG } from "../../../assets/images/index.js";

const Teachersstudentmenu = (props) => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className={props.className}>
        <Input
          value={inputvalue}
          onChange={(e) => setInputvalue(e?.target?.value)}
          className="font-normal font-poppins p-[0] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] placeholder:text-colors2 text-colors2 w-[100%]"
          wrapClassName="flex w-[24%]"
          name="SearchBar"
          placeholder="Search here..."
          prefix={
            <Img
              src="images/img_vector_129.png"
              className="cursor-pointer ml-[3px] lg:w-[12px] lg:mr-[18px] xl:w-[15px] xl:mr-[23px] 2xl:w-[17px] 2xl:mr-[26px] 3xl:w-[21px] 3xl:mr-[31px] rounded-radius135 my-[auto]"
              alt="Vector"
            />
          }
          suffix={
            inputvalue?.length > 0 ? (
              <CloseSVG
                className="cursor-pointer lg:w-[12px] lg:ml-[5px] lg:mr-[11px] xl:w-[15px] xl:ml-[6px] xl:mr-[14px] 2xl:w-[17px] 2xl:ml-[7px] 2xl:mr-[16px] 3xl:w-[21px] 3xl:ml-[9px] 3xl:mr-[19px] my-[auto]"
                onClick={() => setInputvalue("")}
                color="#a098aeff"
              />
            ) : inputvalue?.length > 0 ? (
              <CloseSVG
                color="#a098aeff"
                className="cursor-pointer lg:w-[12px] lg:ml-[5px] lg:mr-[11px] xl:w-[15px] xl:ml-[6px] xl:mr-[14px] 2xl:w-[17px] 2xl:ml-[7px] 2xl:mr-[16px] 3xl:w-[21px] 3xl:ml-[9px] 3xl:mr-[19px] my-[auto]"
                onClick={() => setInputvalue("")}
              />
            ) : (
              ""
            )
          }
          shape="srcCircleBorder30"
          size="smSrc"
          variant="srcFillffffffff"
        ></Input>
        <SelectBox
          className="font-normal font-poppins lg:ml-[366px] xl:ml-[458px] 2xl:ml-[515px] 3xl:ml-[618px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-colors1 w-[14%]"
          placeholderClassName="text-colors1"
          name="sort"
          placeholder="Newest"
          isSearchable={false}
          isMulti={false}
          shape="CircleBorder30"
          size="sm"
          variant="Outlineff4d44b5"
        ></SelectBox>
        <Button
          className="2xl:ml-[18px] 3xl:ml-[21px] flex items-center justify-center lg:ml-[12px] text-center w-[14%] xl:ml-[16px]"
          leftIcon={
            <Img
              src="images/img__1.png"
              className="text-center lg:w-[8px] lg:mr-[8px] xl:w-[10px] xl:mr-[10px] 2xl:w-[12px] 2xl:mr-[12px] 3xl:w-[14px] 3xl:mr-[14px]"
              alt="+"
            />
          }
          shape="CircleBorder30"
          size="lg"
          variant="Outline0cbf156c"
        >
          <div className="bg-transparent font-normal font-poppins not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px]">
            New Student
          </div>
        </Button>
      </Row>
    </>
  );
};

export default Teachersstudentmenu;
