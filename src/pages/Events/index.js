import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  SelectBox,
  Button,
  List,
  Stack,
  Line,
  PagerIndicator,
} from "components";
import TeacherDetails from "components/Row/TeacherDetails";
import Dashboard from "components/Column/Dashboard";
import TeacherDetails0 from "components/Column/TeacherDetails0";
import Food3 from "components/Row/Food3";

const EventsPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-between w-[97%]">
          <aside className="items-center w-[18%]">
            <Column className="">
              <Column className="bg-indigo_500 justify-start lg:pb-[141px] xl:pb-[176px] 2xl:pb-[198px] 3xl:pb-[238px] lg:pt-[26px] xl:pt-[33px] 2xl:pt-[37px] 3xl:pt-[45px] w-[100%]">
                <Column className="justify-start w-[87%]">
                  <TeacherDetails className="items-center w-[78%]" />
                  <Dashboard className="items-center lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] w-[100%]" />
                  <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[47%]">
                    <Img
                      src="images/img_vector_145.png"
                      className="Vector2"
                      alt="Vector"
                    />
                    <Text className="Dashboard" as="h5" variant="h5">
                      Students
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[48%]">
                    <Img
                      src="images/img_vector_146.png"
                      className="Vector2"
                      alt="Vector"
                    />
                    <Text className="Dashboard" as="h5" variant="h5">
                      Teachers
                    </Text>
                  </Row>
                  <Column className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[100%]">
                    <Row className="bg-gray_100 items-center lg:pl-[16px] xl:pl-[20px] 2xl:pl-[22px] 3xl:pl-[27px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[100%]">
                      <Img
                        src="images/img_vector_147.png"
                        className="Vector3"
                        alt="Vector"
                      />
                      <Text
                        className="font-medium lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] my-[0] text-indigo_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Event
                      </Text>
                    </Row>
                  </Column>
                  <Row className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[45%]">
                    <Img
                      src="images/img_finance_11.png"
                      className="Finance"
                      alt="Finance"
                    />
                    <Text className="finance" as="h5" variant="h5">
                      Finance
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[34%]">
                    <Img
                      src="images/img_vector_148.png"
                      className="Vector4"
                      alt="Vector"
                    />
                    <Text className="food" as="h5" variant="h5">
                      Food
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[33%]">
                    <Img
                      src="images/img_vector_149.png"
                      className="Vector5"
                      alt="Vector"
                    />
                    <Text className="Dashboard" as="h5" variant="h5">
                      User
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[36%]">
                    <Img
                      src="images/img_vector_150.png"
                      className="Vector6"
                      alt="Vector"
                    />
                    <Text className="Chat" as="h5" variant="h5">
                      Chat
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[66%]">
                    <Img
                      src="images/img_vector_151.png"
                      className="Vector7"
                      alt="Vector"
                    />
                    <Text className="Activity" as="h5" variant="h5">
                      Lastest Activity
                    </Text>
                  </Row>
                </Column>
                <TeacherDetails0 className="justify-start lg:mt-[54px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] w-[85%]" />
              </Column>
            </Column>
          </aside>
          <Column className="items-center w-[79%]">
            <Food3 className="items-start w-[100%]" />
            <Row className="items-center justify-between lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
              <Column className="bg-white_A700 items-center lg:pb-[57px] xl:pb-[72px] 2xl:pb-[81px] 3xl:pb-[97px] lg:pt-[17px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] lg:px-[16px] xl:px-[20px] 2xl:px-[23px] 3xl:px-[27px] rounded-radius20 w-[68%]">
                <Row className="items-start justify-between w-[100%]">
                  <Text
                    className="text-indigo_900 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    Calendar
                  </Text>
                  <Row className="items-center justify-between w-[71%]">
                    <SelectBox
                      className="font-normal xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-indigo_500 w-[31%]"
                      placeholderClassName="text-indigo_500"
                      name="sort"
                      placeholder="January"
                      isSearchable={false}
                      isMulti={false}
                      indicator={
                        <Img
                          src="images/img_vector_153.png"
                          className="lg:w-[11px] lg:h-[7px] lg:mr-[18px] xl:w-[13px] xl:h-[9px] xl:mr-[23px] 2xl:w-[15px] 2xl:h-[10px] 2xl:mr-[26px] 3xl:w-[18px] 3xl:h-[12px] 3xl:mr-[31px]"
                          alt="Vector"
                        />
                      }
                      shape="CircleBorder30"
                      size="sm"
                      variant="OutlineIndigo500"
                    ></SelectBox>
                    <SelectBox
                      className="font-normal xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-indigo_500 w-[31%]"
                      placeholderClassName="text-indigo_500"
                      name="sort"
                      placeholder="2021"
                      isSearchable={false}
                      isMulti={false}
                      shape="CircleBorder30"
                      size="sm"
                      variant="OutlineIndigo500"
                    ></SelectBox>
                    <Button
                      className="flex items-center justify-center text-center w-[31%]"
                      leftIcon={
                        <Img
                          src="images/img__2.png"
                          className="text-center lg:w-[8px] lg:mr-[8px] xl:w-[10px] xl:mr-[10px] 2xl:w-[12px] 2xl:mr-[12px] 3xl:w-[14px] 3xl:mr-[14px]"
                          alt="+"
                        />
                      }
                      shape="CircleBorder30"
                      size="lg"
                      variant="OutlinePinkA7000c1_2"
                    >
                      <div className="bg-transparent font-normal not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-white_A700">
                        New Student
                      </div>
                    </Button>
                  </Row>
                </Row>
                <Row className="items-center justify-between lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[94%]">
                  <Text
                    className="font-semibold text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    Monday
                  </Text>
                  <Text
                    className="font-semibold text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    Tuesday
                  </Text>
                  <Text
                    className="font-semibold text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    Wednesday
                  </Text>
                  <Text
                    className="font-semibold text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    Thursday
                  </Text>
                  <Text
                    className="font-semibold text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    Friday
                  </Text>
                  <Text
                    className="font-semibold text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    Saturday
                  </Text>
                  <Text
                    className="font-semibold text-gray_500 w-[auto]"
                    variant="body1"
                  >
                    Sunday
                  </Text>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="Group568">
                    <Column className="bg-gray_101 border border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-gray_500 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        31
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-2 border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        1
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-2 border-indigo_900 border-solid items-center lg:pb-[14px] xl:pb-[18px] 2xl:pb-[20px] 3xl:pb-[24px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        2
                      </Text>
                      <Img
                        src="images/img_dots.png"
                        className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] lg:mr-[10px] xl:mr-[13px] 2xl:mr-[15px] 3xl:mr-[18px] lg:mt-[21px] xl:mt-[27px] 2xl:mt-[30px] 3xl:mt-[36px] w-[78%]"
                        alt="dots"
                      />
                    </Column>
                    <Column className="bg-white_A700 border-2 border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        3
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-2 border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        4
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-2 border-indigo_900 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        5
                      </Text>
                    </Column>
                    <Column className="bg-deep_orange_300 border-2 border-solid border-white_A700 items-center lg:pb-[13px] xl:pb-[17px] 2xl:pb-[19px] 3xl:pb-[23px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-white_A700 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        6
                      </Text>
                      <Stack className="lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] lg:mr-[12px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[21px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[73%]">
                        <Stack className="absolute lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] left-[0] w-[70%]">
                          <div className="absolute bg-indigo_100 lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] left-[0] outline outline-[1px] outline-white_A700 rounded-radius50 lg:w-[13px] xl:w-[17px] 2xl:w-[19px] 3xl:w-[23px]"></div>
                          <div className="absolute bg-indigo_100 lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] outline outline-[1px] outline-white_A700 right-[0] rounded-radius50 lg:w-[13px] xl:w-[17px] 2xl:w-[19px] 3xl:w-[23px]"></div>
                        </Stack>
                        <Text
                          className="absolute bg-indigo_900 flex font-semibold items-center outline outline-[1px] outline-white_A700 px-[4px] right-[0] rounded-radius50 text-white_A700 w-[26px]"
                          variant="body1"
                        >
                          7+
                        </Text>
                      </Stack>
                    </Column>
                  </Row>
                  <Row className="Group568">
                    <Column className="bg-white_A700 border-2 border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        7
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-2 border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        8
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-2 border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        9
                      </Text>
                    </Column>
                    <Stack className="3xl:h-[118px] lg:h-[70px] xl:h-[87px] 2xl:h-[98px] w-[12%]">
                      <div className="absolute bg-indigo_500 border-2 border-solid border-white_A700 3xl:h-[112px] lg:h-[67px] xl:h-[83px] 2xl:h-[94px] inset-[0] justify-center m-[auto] rounded-radius14 w-[95%]"></div>
                      <Column className="absolute border-2 border-indigo_500 border-solid items-center justify-start lg:pb-[12px] xl:pb-[15px] 2xl:pb-[17px] 3xl:pb-[20px] lg:pl-[12px] xl:pl-[15px] 2xl:pl-[17px] 3xl:pl-[20px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[100%]">
                        <Text
                          className="text-white_A700 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          10
                        </Text>
                        <Row className="font-cairo items-start justify-center lg:mr-[14px] xl:mr-[18px] 2xl:mr-[20px] 3xl:mr-[24px] lg:mt-[13px] xl:mt-[17px] 2xl:mt-[19px] 3xl:mt-[23px] w-[71%]">
                          <Line className="bg-yellow_700 lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] rounded-radius15 w-[3px]" />
                          <Text
                            className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] text-white_A700 w-[auto]"
                            variant="body1"
                          >
                            Karen, 2+
                          </Text>
                        </Row>
                      </Column>
                    </Stack>
                    <Column className="bg-white_A700 border-2 border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        11
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-2 border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        12
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-2 border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        13
                      </Text>
                    </Column>
                  </Row>
                </List>
                <Row className="items-center justify-between lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[100%]">
                  <Column className="bg-white_A700 border-2 border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                    <Text
                      className="text-indigo_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      14
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-2 border-indigo_900 border-solid items-center lg:pb-[13px] xl:pb-[17px] 2xl:pb-[19px] 3xl:pb-[23px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                    <Text
                      className="text-indigo_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      15
                    </Text>
                    <Stack className="lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] lg:mr-[12px] xl:mr-[16px] 2xl:mr-[18px] 3xl:mr-[21px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[73%]">
                      <Stack className="absolute lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] left-[0] w-[70%]">
                        <div className="absolute bg-indigo_100 lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] left-[0] outline outline-[1px] outline-white_A700 rounded-radius50 lg:w-[13px] xl:w-[17px] 2xl:w-[19px] 3xl:w-[23px]"></div>
                        <div className="absolute bg-indigo_100 lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] outline outline-[1px] outline-white_A700 right-[0] rounded-radius50 lg:w-[13px] xl:w-[17px] 2xl:w-[19px] 3xl:w-[23px]"></div>
                      </Stack>
                      <Text
                        className="absolute bg-indigo_900 flex font-semibold items-center outline outline-[1px] outline-white_A700 px-[4px] right-[0] rounded-radius50 text-white_A700 w-[26px]"
                        variant="body1"
                      >
                        2+
                      </Text>
                    </Stack>
                  </Column>
                  <List
                    className="lg:gap-[15px] xl:gap-[19px] 2xl:gap-[21px] 3xl:gap-[26px] grid grid-cols-2 min-h-[auto] w-[26%]"
                    orientation="horizontal"
                  >
                    <Column className="bg-white_A700 border-2 border-gray_500 border-solid items-center justify-start lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[100%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        16
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-2 border-gray_500 border-solid items-center justify-start lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[100%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        17
                      </Text>
                    </Column>
                  </List>
                  <Column className="bg-white_A700 border-2 border-indigo_900 border-solid lg:pb-[12px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[21px] 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                    <Text
                      className="lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] text-indigo_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      18
                    </Text>
                    <Row className="font-cairo items-end lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[61%]">
                      <Line className="bg-deep_orange_300 lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] rounded-radius15 w-[3px]" />
                      <Text
                        className="font-semibold mb-[2px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] text-indigo_900 w-[auto]"
                        variant="body1"
                      >
                        Tony, 2+
                      </Text>
                    </Row>
                  </Column>
                  <Column className="bg-white_A700 border-2 border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                    <Text
                      className="text-indigo_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      19
                    </Text>
                  </Column>
                  <Column className="bg-white_A700 border-2 border-solid border-yellow_700 items-center lg:pb-[14px] xl:pb-[18px] 2xl:pb-[21px] 3xl:pb-[25px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                    <Text
                      className="text-indigo_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      20
                    </Text>
                    <PagerIndicator
                      className="h-[16px] lg:mr-[10px] xl:mr-[13px] 2xl:mr-[15px] 3xl:mr-[18px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[max-content]"
                      count={3}
                      activeCss="inline-block cursor-pointer w-[16px] h-[16px] bg-indigo_500"
                      activeIndex={1}
                      inactiveCss="inline-block cursor-pointer w-[16px] h-[16px] bg-deep_orange_300"
                      selectedWrapperCss="2xl:mx-[4px] 3xl:mx-[4px] inline-block lg:mx-[2px] xl:mx-[3px]"
                      unselectedWrapperCss="2xl:mx-[4px] 3xl:mx-[4px] inline-block lg:mx-[2px] xl:mx-[3px]"
                    />
                  </Column>
                </Row>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="Group568">
                    <Column className="bg-white_A700 border-2 border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        21
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-2 border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        22
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-2 border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        23
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-2 border-indigo_900 border-solid items-center lg:pb-[14px] xl:pb-[18px] 2xl:pb-[21px] 3xl:pb-[25px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        24
                      </Text>
                      <Img
                        src="images/img_dots_1.png"
                        className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] lg:mr-[10px] xl:mr-[13px] 2xl:mr-[15px] 3xl:mr-[18px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[78%]"
                        alt="dots"
                      />
                    </Column>
                    <Column className="bg-white_A700 border-2 border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        25
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-2 border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        26
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-2 border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        27
                      </Text>
                    </Column>
                  </Row>
                  <Row className="Group568">
                    <Column className="bg-white_A700 border-2 border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        28
                      </Text>
                    </Column>
                    <Column className="bg-white_A700 border-2 border-indigo_900 border-solid lg:pb-[12px] xl:pb-[16px] 2xl:pb-[18px] 3xl:pb-[21px] xl:pl-[10px] 2xl:pl-[12px] 3xl:pl-[14px] lg:pl-[8px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="ml-[4px] text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        29
                      </Text>
                      <Row className="font-cairo items-start lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[53%]">
                        <Line className="bg-yellow_700 lg:h-[19px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] rounded-radius15 w-[3px]" />
                        <Text
                          className="font-semibold lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] text-indigo_900 w-[auto]"
                          variant="body1"
                        >
                          Johnny
                        </Text>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 border-2 border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        30
                      </Text>
                    </Column>
                    <Column className="bg-gray_101 border border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-gray_500 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        1
                      </Text>
                    </Column>
                    <Column className="bg-gray_101 border border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-gray_500 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        2
                      </Text>
                    </Column>
                    <Column className="bg-gray_101 border border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-gray_500 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        3
                      </Text>
                    </Column>
                    <Column className="bg-gray_101 border border-gray_500 border-solid items-center lg:pb-[44px] xl:pb-[56px] 2xl:pb-[63px] 3xl:pb-[75px] lg:pl-[10px] xl:pl-[13px] 2xl:pl-[15px] 3xl:pl-[18px] lg:pt-[5px] xl:pt-[6px] 2xl:pt-[7px] 3xl:pt-[9px] rounded-radius14 w-[12%]">
                      <Text
                        className="text-gray_500 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        4
                      </Text>
                    </Column>
                  </Row>
                </List>
              </Column>
              <Column className="items-center w-[29%]">
                <Column className="bg-white_A700 justify-center lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[100%]">
                  <Text
                    className="text-bluegray_800 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Schedule Details
                  </Text>
                  <Text className="Thursday10th" variant="body1">
                    Thursday, 10th April , 2021
                  </Text>
                </Column>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="Group82">
                    <div className="bg-indigo_500 xl:h-[123px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[6%]"></div>
                    <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] pb-[1px] w-[36%]">
                      <Text
                        className="font-semibold text-bluegray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Basic Algorithm
                      </Text>
                      <Text className="ClassVIIB" variant="body1">
                        Algorithm
                      </Text>
                      <Row className="items-center ml-[3px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[90%]">
                        <Img
                          src="images/img_vector_154.png"
                          className="Vector12"
                          alt="Vector"
                        />
                        <Text className="Date1" variant="body1">
                          March 20, 2021
                        </Text>
                      </Row>
                      <Column className="items-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] pl-[2px] w-[100%]">
                        <Row className="items-center w-[100%]">
                          <Img
                            src="images/img_32_8.png"
                            className="test_32"
                            alt="32"
                          />
                          <Text className="Hours" variant="body1">
                            09.00 - 10.00 AM
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                    <div className="bg-indigo_100 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] 2xl:ml-[101px] 3xl:ml-[121px] lg:ml-[72px] xl:ml-[90px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                  </Row>
                  <Row className="Group82">
                    <div className="bg-deep_orange_300 xl:h-[123px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[6%]"></div>
                    <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] pb-[1px] w-[36%]">
                      <Text
                        className="font-semibold text-bluegray_800 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Basic Art
                      </Text>
                      <Text className="ClassVIIB" variant="body1">
                        Art
                      </Text>
                      <Row className="items-center ml-[3px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[90%]">
                        <Img
                          src="images/img_vector_155.png"
                          className="Vector12"
                          alt="Vector"
                        />
                        <Text className="Date1" variant="body1">
                          March 20, 2021
                        </Text>
                      </Row>
                      <Column className="items-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] pl-[2px] w-[100%]">
                        <Row className="items-center w-[100%]">
                          <Img
                            src="images/img_32_9.png"
                            className="test_32"
                            alt="32"
                          />
                          <Text className="Hours" variant="body1">
                            09.00 - 10.00 AM
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                    <div className="bg-indigo_100 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] 2xl:ml-[101px] 3xl:ml-[121px] lg:ml-[72px] xl:ml-[90px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                  </Row>
                  <Row className="Group82">
                    <div className="bg-yellow_700 xl:h-[123px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[6%]"></div>
                    <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] pb-[1px] w-[38%]">
                      <Column className="items-center w-[100%]">
                        <Text
                          className="font-semibold text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          HTML & CSS Class
                        </Text>
                      </Column>
                      <Text className="ClassVIIB" variant="body1">
                        Programming
                      </Text>
                      <Row className="items-center ml-[3px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[85%]">
                        <Img
                          src="images/img_vector_156.png"
                          className="Vector12"
                          alt="Vector"
                        />
                        <Text className="Date1" variant="body1">
                          March 20, 2021
                        </Text>
                      </Row>
                      <Row className="items-center ml-[2px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[93%]">
                        <Img
                          src="images/img_32_10.png"
                          className="test_32"
                          alt="32"
                        />
                        <Text className="Hours" variant="body1">
                          09.00 - 10.00 AM
                        </Text>
                      </Row>
                    </Column>
                    <div className="bg-indigo_100 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] 3xl:ml-[113px] lg:ml-[67px] xl:ml-[84px] 2xl:ml-[94px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                  </Row>
                  <Row className="Group82">
                    <div className="bg-indigo_900 xl:h-[123px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[6%]"></div>
                    <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] pb-[1px] w-[39%]">
                      <Column className="items-center w-[100%]">
                        <Text
                          className="font-semibold text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Simple Past Tense
                        </Text>
                      </Column>
                      <Text className="ClassVIIB" variant="body1">
                        English
                      </Text>
                      <Row className="items-center ml-[3px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[83%]">
                        <Img
                          src="images/img_vector_157.png"
                          className="Vector12"
                          alt="Vector"
                        />
                        <Text className="Date1" variant="body1">
                          March 20, 2021
                        </Text>
                      </Row>
                      <Row className="items-center ml-[2px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[91%]">
                        <Img
                          src="images/img_32_11.png"
                          className="test_32"
                          alt="32"
                        />
                        <Text className="Hours" variant="body1">
                          09.00 - 10.00 AM
                        </Text>
                      </Row>
                    </Column>
                    <div className="bg-indigo_100 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] 3xl:ml-[109px] lg:ml-[65px] xl:ml-[81px] 2xl:ml-[91px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                  </Row>
                </List>
                <Button
                  className="font-semibold lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                  shape="CircleBorder30"
                  size="lg"
                  variant="FillIndigo50063"
                >
                  View More
                </Button>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default EventsPage;
