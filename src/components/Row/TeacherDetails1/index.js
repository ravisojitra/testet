import React from "react";

import { Row, Button, Img, Column, Text } from "components";

const TeacherDetails1 = (props) => {
  return (
    <>
      <Row className={props.className}>
        <Button
          className="bg-colors flex lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius50 shadow-bs lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
          shape="icbCircleBorder28"
          size="icbPaddingAll15"
          variant="icbOutline0cbf156c"
        >
          <Img
            src="images/img_setting_1.png"
            className="flex items-center justify-center"
            alt="setting"
          />
        </Button>
        <Column className="lg:my-[3px] xl:my-[4px] 2xl:my-[5px] 3xl:my-[6px] w-[27%]">
          <Column className="items-center w-[100%]">
            <Text className="2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] Group152">
              Nabila A.
            </Text>
          </Column>
          <Text className="2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] Name2">
            Admin
          </Text>
        </Column>
        <div className="bg-colors3 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
      </Row>
    </>
  );
};

export default TeacherDetails1;
