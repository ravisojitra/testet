import React from "react";

import { Column, Row, Stack, Text, Img } from "components";

const AddNewStudent = (props) => {
  return (
    <>
      <Column className={props.className}>
        <Row className="items-center w-[78%]">
          <Stack className="lg:h-[29px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] w-[21%]">
            <div className="absolute bg-colors5 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[6%] rounded-radius16 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
            <Text className="A" as="h1" variant="h1">
              A
            </Text>
          </Stack>
          <Text className="Akademi" as="h1" variant="h1">
            Akademi
          </Text>
        </Row>
        <Column className="items-center lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] w-[100%]">
          <Row className="items-center lg:pl-[15px] xl:pl-[19px] 2xl:pl-[21px] 3xl:pl-[26px] xl:py-[10px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] shadow-bs w-[100%]">
            <Img
              src="images/img_vector_83.png"
              className="Vector"
              alt="Vector"
            />
            <Text className="Dashboard1" as="h5" variant="h5">
              Dashboard
            </Text>
          </Row>
        </Column>
        <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[47%]">
          <Img
            src="images/img_vector_84.png"
            className="Vector2"
            alt="Vector"
          />
          <Text className="Dashboard1" as="h5" variant="h5">
            Students
          </Text>
        </Row>
        <Column className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[100%]">
          <Row className="bg-colors6 items-center lg:pl-[15px] xl:pl-[19px] 2xl:pl-[21px] 3xl:pl-[26px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[100%]">
            <Img
              src="images/img_vector_85.png"
              className="lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[11%]"
              alt="Vector"
            />
            <Text className="Dashboard2" as="h5" variant="h5">
              Teachers
            </Text>
          </Row>
        </Column>
        <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[36%]">
          <Img
            src="images/img_vector_86.png"
            className="Vector3"
            alt="Vector"
          />
          <Text className="event2" as="h5" variant="h5">
            Event
          </Text>
        </Row>
        <Row className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[45%]">
          <Img
            src="images/img_finance_6.png"
            className="Finance"
            alt="Finance"
          />
          <Text className="finance2" as="h5" variant="h5">
            Finance
          </Text>
        </Row>
        <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[34%]">
          <Img
            src="images/img_vector_87.png"
            className="Vector4"
            alt="Vector"
          />
          <Text
            className="font-medium font-poppins lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] text-colors3 w-[auto]"
            as="h5"
            variant="h5"
          >
            Food
          </Text>
        </Row>
        <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[33%]">
          <Img
            src="images/img_vector_88.png"
            className="Vector5"
            alt="Vector"
          />
          <Text className="Dashboard1" as="h5" variant="h5">
            User
          </Text>
        </Row>
        <Row className="items-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[36%]">
          <Img
            src="images/img_vector_89.png"
            className="Vector6"
            alt="Vector"
          />
          <Text className="Chat4" as="h5" variant="h5">
            Chat
          </Text>
        </Row>
        <Row className="items-center lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[66%]">
          <Img
            src="images/img_vector_90.png"
            className="Vector7"
            alt="Vector"
          />
          <Text className="Activity2" as="h5" variant="h5">
            Lastest Activity
          </Text>
        </Row>
      </Column>
    </>
  );
};

export default AddNewStudent;
