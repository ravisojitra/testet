import React from "react";

import { Row, Text, Input, Img, Button, Column } from "components";
import { CloseSVG } from "../../../assets/images/index.js";

const Food3 = (props) => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className={props.className}>
        <Text
          className="font-poppins text-colors4 w-[auto]"
          as="h1"
          variant="h1"
        >
          Food
        </Text>
        <Input
          value={inputvalue}
          onChange={(e) => setInputvalue(e?.target?.value)}
          className="font-normal font-poppins p-[0] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] placeholder:text-colors2 text-colors2 w-[100%]"
          wrapClassName="2xl:ml-[493px] 3xl:ml-[592px] flex lg:ml-[350px] w-[24%] xl:ml-[439px]"
          name="SearchBar"
          placeholder="Search here..."
          prefix={
            <Img
              src="images/img_vector_39.png"
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
        <Img
          src="images/img_notification_2.png"
          className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
          alt="notification"
        />
        <Row className="items-center justify-between lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[16%]">
          <Button
            className="flex lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
            shape="icbCircleBorder28"
            size="lgIcn"
            variant="icbOutline0cbf156c"
          >
            <Img
              src="images/img_setting_2.png"
              className="flex items-center justify-center"
              alt="setting"
            />
          </Button>
          <Column className="w-[27%]">
            <Column className="items-center w-[100%]">
              <Text className="Group152" variant="body1">
                Nabila A.
              </Text>
            </Column>
            <Text className="Name2" variant="body1">
              Admin
            </Text>
          </Column>
          <div className="bg-colors3 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
        </Row>
      </Row>
    </>
  );
};

export default Food3;
