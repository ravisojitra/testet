import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  List,
  Button,
  SelectBox,
  Stack,
} from "components";
import TeacherDetails from "components/Row/TeacherDetails";
import Dashboard from "components/Column/Dashboard";
import TeacherDetails0 from "components/Column/TeacherDetails0";
import Food3 from "components/Row/Food3";
import Food from "components/Row/Food";

const FinancePage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-between w-[97%]">
          <aside className="items-center w-[18%]">
            <Column className="">
              <Column className="bg-indigo_500 justify-start lg:pb-[346px] xl:pb-[433px] 2xl:pb-[487px] 3xl:pb-[584px] lg:pt-[26px] xl:pt-[33px] 2xl:pt-[37px] 3xl:pt-[45px] w-[100%]">
                <Column className="justify-start w-[87%]">
                  <TeacherDetails className="items-center w-[78%]" />
                  <Dashboard className="items-center lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] w-[100%]" />
                  <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[47%]">
                    <Img
                      src="images/img_vector_171.png"
                      className="Vector2"
                      alt="Vector"
                    />
                    <Text className="Dashboard" as="h5" variant="h5">
                      Students
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[48%]">
                    <Img
                      src="images/img_vector_172.png"
                      className="Vector2"
                      alt="Vector"
                    />
                    <Text className="Dashboard" as="h5" variant="h5">
                      Teachers
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[36%]">
                    <Img
                      src="images/img_vector_173.png"
                      className="Vector3"
                      alt="Vector"
                    />
                    <Text className="event" as="h5" variant="h5">
                      Event
                    </Text>
                  </Row>
                  <Column className="items-center lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[100%]">
                    <Row className="bg-gray_100 items-center lg:pl-[12px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[21px] xl:py-[10px] 2xl:py-[12px] 3xl:py-[14px] lg:py-[8px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[100%]">
                      <Img
                        src="images/img_finance_13.png"
                        className="Finance"
                        alt="Finance"
                      />
                      <Text
                        className="font-medium lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] text-indigo_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Finance
                      </Text>
                    </Row>
                  </Column>
                  <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[34%]">
                    <Img
                      src="images/img_vector_174.png"
                      className="Vector4"
                      alt="Vector"
                    />
                    <Text className="food" as="h5" variant="h5">
                      Food
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[33%]">
                    <Img
                      src="images/img_vector_175.png"
                      className="Vector5"
                      alt="Vector"
                    />
                    <Text className="Dashboard" as="h5" variant="h5">
                      User
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[36%]">
                    <Img
                      src="images/img_vector_176.png"
                      className="Vector6"
                      alt="Vector"
                    />
                    <Text className="Chat" as="h5" variant="h5">
                      Chat
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[66%]">
                    <Img
                      src="images/img_vector_177.png"
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
            <Row className="items-center justify-between lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
              <List
                className="lg:gap-[21px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-2 min-h-[auto] w-[52%]"
                orientation="horizontal"
              >
                <Row className="bg-white_A700 items-center lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] lg:py-[16px] xl:py-[20px] 2xl:py-[22px] 3xl:py-[27px] rounded-radius20 w-[100%]">
                  <Button
                    className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] items-center justify-center rounded-radius50 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
                    size="lgIcn"
                    variant="icbFillIndigo500"
                  >
                    <Img
                      src="images/img_icon_15.png"
                      className="flex items-center justify-center"
                      alt="icon"
                    />
                  </Button>
                  <Column className="lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] w-[59%]">
                    <Text className="March252021" as="h5" variant="h5">
                      Total Students
                    </Text>
                    <Text
                      className="text-indigo_900 w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      932
                    </Text>
                    <Column className="items-center mt-[4px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-teal_300 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        <span className="text-teal_300 font-poppins font-semibold lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          +10%{" "}
                        </span>
                        <span className="text-gray_500 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          than last month
                        </span>
                      </Text>
                    </Column>
                  </Column>
                </Row>
                <Row className="bg-white_A700 items-center justify-end lg:pr-[12px] xl:pr-[16px] 2xl:pr-[18px] 3xl:pr-[21px] lg:py-[16px] xl:py-[20px] 2xl:py-[22px] 3xl:py-[27px] rounded-radius20 w-[100%]">
                  <Button
                    className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] items-center justify-center rounded-radius50 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
                    size="lgIcn"
                    variant="icbFillDeeporange300"
                  >
                    <Img
                      src="images/img_icon_16.png"
                      className="flex items-center justify-center"
                      alt="icon"
                    />
                  </Button>
                  <Column className="lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] w-[60%]">
                    <Text className="March252021" as="h5" variant="h5">
                      Total Teachers
                    </Text>
                    <Text
                      className="text-indigo_900 w-[auto]"
                      as="h1"
                      variant="h1"
                    >
                      754
                    </Text>
                    <Column className="items-center mt-[4px] w-[100%]">
                      <Text
                        className="font-normal not-italic text-red_A200 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        <span className="text-red_A200 font-poppins font-semibold lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          -0,5%{" "}
                        </span>
                        <span className="text-gray_500 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          than last month
                        </span>
                      </Text>
                    </Column>
                  </Column>
                </Row>
              </List>
              <Row className="bg-white_A700 items-center justify-center lg:px-[17px] xl:px-[21px] 2xl:px-[24px] 3xl:px-[28px] lg:py-[16px] xl:py-[20px] 2xl:py-[22px] 3xl:py-[27px] rounded-radius20 w-[46%]">
                <Button
                  className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] items-center justify-center rounded-radius50 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
                  size="lgIcn"
                  variant="icbFillYellow700"
                >
                  <Img
                    src="images/img_icon_17.png"
                    className="flex items-center justify-center lg:h-[22px] xl:h-[27px] 2xl:h-[31px] 3xl:h-[37px]"
                    alt="icon"
                  />
                </Button>
                <Column className="lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] w-[32%]">
                  <Text className="March252021" as="h5" variant="h5">
                    School Balance
                  </Text>
                  <Text
                    className="text-indigo_900 w-[auto]"
                    as="h1"
                    variant="h1"
                  >
                    $123,456
                  </Text>
                  <Column className="items-center mt-[4px] w-[100%]">
                    <Text className="March252021" as="h5" variant="h5">
                      <span className="text-teal_300 font-poppins font-semibold lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                        +23%
                      </span>
                      <span className="text-gray_500 font-poppins font-semibold lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                        {" "}
                      </span>
                      <span className="text-gray_500 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                        than last month
                      </span>
                    </Text>
                  </Column>
                </Column>
                <Img
                  src="images/img_graph.png"
                  className="lg:h-[45px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[46%]"
                  alt="Graph"
                />
              </Row>
            </Row>
            <Column className="bg-white_A700 items-center justify-center lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] lg:pl-[22px] xl:pl-[28px] 2xl:pl-[32px] 3xl:pl-[38px] lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] lg:pt-[14px] xl:pt-[18px] 2xl:pt-[21px] 3xl:pt-[25px] rounded-radius20 w-[100%]">
              <Row className="items-start w-[100%]">
                <Text
                  className="mt-[4px] text-indigo_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Balance Analytics
                </Text>
                <div className="bg-white_A700 border-bw3 border-solid border-yellow_700 2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] lg:ml-[392px] xl:ml-[491px] 2xl:ml-[552px] 3xl:ml-[662px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 3xl:w-[10px] lg:w-[6px] xl:w-[8px] 2xl:w-[9px]"></div>
                <Column className="justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[4px] w-[4%]">
                  <Column className="items-center w-[100%]">
                    <Text className="March252021" variant="body1">
                      Expense
                    </Text>
                  </Column>
                  <Text className="text1" as="h5" variant="h5">
                    1.245
                  </Text>
                </Column>
                <div className="bg-white_A700 border-bw3 border-deep_orange_300 border-solid 2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] rounded-radius50 3xl:w-[10px] lg:w-[6px] xl:w-[8px] 2xl:w-[9px]"></div>
                <Column className="justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] mt-[4px] w-[4%]">
                  <Column className="items-center w-[100%]">
                    <Text className="March252021" variant="body1">
                      Income
                    </Text>
                  </Column>
                  <Text className="text1" as="h5" variant="h5">
                    1.356
                  </Text>
                </Column>
                <SelectBox
                  className="font-normal lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-indigo_500 w-[15%]"
                  placeholderClassName="text-indigo_500"
                  name="sort"
                  placeholder="Month"
                  isSearchable={false}
                  isMulti={false}
                  shape="CircleBorder30"
                  size="sm"
                  variant="OutlineIndigo500"
                ></SelectBox>
              </Row>
              <Row className="items-start ml-[1px] lg:mr-[16px] xl:mr-[20px] 2xl:mr-[23px] 3xl:mr-[27px] lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[98%]">
                <Column className="justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[3%]">
                  <Column className="items-center w-[100%]">
                    <Text className="March252021" as="h5" variant="h5">
                      100
                    </Text>
                  </Column>
                  <Text className="number" as="h5" variant="h5">
                    75
                  </Text>
                  <Text className="number" as="h5" variant="h5">
                    50
                  </Text>
                  <Text className="number" as="h5" variant="h5">
                    25
                  </Text>
                  <Text className="number" as="h5" variant="h5">
                    0
                  </Text>
                </Column>
                <Column className="items-center justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] pb-[2px] w-[95%]">
                  <Stack className="lg:h-[151px] xl:h-[189px] 2xl:h-[212px] 3xl:h-[254px] xl:ml-[11px] 2xl:ml-[12px] 3xl:ml-[15px] lg:ml-[9px] w-[98%]">
                    <Stack className="absolute lg:h-[151px] xl:h-[189px] 2xl:h-[212px] 3xl:h-[254px] w-[100%]">
                      <Img
                        src="images/img_line_1.png"
                        className="absolute lg:h-[151px] xl:h-[189px] 2xl:h-[212px] 3xl:h-[254px] right-[0] w-[100%]"
                        alt="line"
                      />
                      <Img
                        src="images/img_chart_1.png"
                        className="absolute bottom-[0] lg:h-[128px] xl:h-[160px] 2xl:h-[180px] 3xl:h-[216px] w-[100%]"
                        alt="chart"
                      />
                    </Stack>
                    <Stack className="absolute lg:h-[45px] xl:h-[56px] 2xl:h-[63px] 3xl:h-[75px] right-[41%] top-[0] w-[8%]">
                      <Column className="absolute bg-indigo_500 items-center justify-center lg:px-[10px] xl:px-[12px] 2xl:px-[14px] 3xl:px-[17px] lg:py-[5px] xl:py-[7px] 2xl:py-[8px] 3xl:py-[9px] rounded-radius10 top-[0] w-[100%]">
                        <Text
                          className="font-bold text-white_A700 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          $1,345
                        </Text>
                        <Text
                          className="font-normal mt-[4px] not-italic text-shadow-ts2 text-white_A700 w-[auto]"
                          variant="body1"
                        >
                          July 2020
                        </Text>
                      </Column>
                      <Img
                        src="images/img_polygon1.png"
                        className="absolute bottom-[0] 2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] inset-x-[0] mx-[auto] 3xl:w-[10px] lg:w-[6px] xl:w-[8px] 2xl:w-[9px]"
                        alt="Polygon1"
                      />
                    </Stack>
                  </Stack>
                  <Row className="items-center justify-between lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                    <Text className="March252021" as="h5" variant="h5">
                      Jan
                    </Text>
                    <Text className="March252021" as="h5" variant="h5">
                      Feb
                    </Text>
                    <Text className="March252021" as="h5" variant="h5">
                      Mar
                    </Text>
                    <Text className="March252021" as="h5" variant="h5">
                      Apr
                    </Text>
                    <Text className="March252021" as="h5" variant="h5">
                      May
                    </Text>
                    <Text className="March252021" as="h5" variant="h5">
                      Jun
                    </Text>
                    <Text className="Group54" as="h5" variant="h5">
                      Jul
                    </Text>
                    <Text className="March252021" as="h5" variant="h5">
                      Aug
                    </Text>
                    <Text className="March252021" as="h5" variant="h5">
                      Sep
                    </Text>
                    <Text className="March252021" as="h5" variant="h5">
                      Oct
                    </Text>
                    <Text className="March252021" as="h5" variant="h5">
                      Nov
                    </Text>
                    <Text className="March252021" as="h5" variant="h5">
                      Dec
                    </Text>
                  </Row>
                </Column>
              </Row>
            </Column>
            <Row className="items-center justify-between lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
              <Column className="bg-white_A700 lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[57%]">
                <Text className="unpaidstudent" as="h4" variant="h4">
                  Unpaid Student Intuition
                </Text>
                <Column className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                  <Column className="items-center justify-start w-[100%]">
                    <List
                      className="gap-[0] min-h-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="Group239">
                        <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
                        <Text className="SamanthaWillia" as="h5" variant="h5">
                          Samantha W.
                        </Text>
                        <Text
                          className="font-semibold lg:ml-[28px] xl:ml-[35px] 2xl:ml-[39px] 3xl:ml-[47px] text-indigo_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          ID 123456789
                        </Text>
                        <Button
                          className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                          size="mdIcn"
                          variant="icbFillDeeporange300"
                        >
                          <Img
                            src="images/img_icon_18.png"
                            className="flex items-center justify-center"
                            alt="icon"
                          />
                        </Button>
                        <Row className="items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[35%]">
                          <Column className="items-center w-[14%]">
                            <Text className="March252021" variant="body1">
                              Class
                            </Text>
                            <Text
                              className="font-semibold text-indigo_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              VII A
                            </Text>
                          </Column>
                          <Text
                            className="font-semibold text-indigo_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $ 50,036
                          </Text>
                          <Img
                            src="images/img_vector_179.png"
                            className="Vector37"
                            alt="Vector"
                          />
                        </Row>
                      </Row>
                      <Row className="Group239">
                        <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
                        <Text className="SamanthaWillia" as="h5" variant="h5">
                          Tony Soap
                        </Text>
                        <Text
                          className="font-semibold lg:ml-[43px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] text-indigo_500 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          ID 123456789
                        </Text>
                        <Button
                          className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                          size="mdIcn"
                          variant="icbFillDeeporange300"
                        >
                          <Img
                            src="images/img_icon_19.png"
                            className="flex items-center justify-center"
                            alt="icon"
                          />
                        </Button>
                        <Row className="items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[35%]">
                          <Column className="items-center w-[14%]">
                            <Text className="March252021" variant="body1">
                              Class
                            </Text>
                            <Text
                              className="font-semibold text-indigo_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              VII A
                            </Text>
                          </Column>
                          <Text
                            className="font-semibold text-indigo_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $ 50,036
                          </Text>
                          <Img
                            src="images/img_vector_180.png"
                            className="Vector37"
                            alt="Vector"
                          />
                        </Row>
                      </Row>
                      <Row className="Group239">
                        <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
                        <Row className="items-center justify-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[50%]">
                          <Text
                            className="font-semibold text-indigo_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Jordan Nico
                          </Text>
                          <Text
                            className="font-semibold lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] text-indigo_500 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            ID 123456789
                          </Text>
                          <Button
                            className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                            size="mdIcn"
                            variant="icbFillDeeporange300"
                          >
                            <Img
                              src="images/img_icon_20.png"
                              className="flex items-center justify-center"
                              alt="icon"
                            />
                          </Button>
                        </Row>
                        <Row className="items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[35%]">
                          <Column className="items-center w-[14%]">
                            <Text className="March252021" variant="body1">
                              Class
                            </Text>
                            <Text
                              className="font-semibold text-indigo_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              VII A
                            </Text>
                          </Column>
                          <Text
                            className="font-semibold text-indigo_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $ 50,036
                          </Text>
                          <Img
                            src="images/img_vector_181.png"
                            className="Vector37"
                            alt="Vector"
                          />
                        </Row>
                      </Row>
                      <Row className="Group239">
                        <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
                        <Row className="items-center justify-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[50%]">
                          <Text
                            className="font-semibold text-indigo_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Karen Hope
                          </Text>
                          <Text
                            className="font-semibold lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] text-indigo_500 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            ID 123456789
                          </Text>
                          <Button
                            className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                            size="mdIcn"
                            variant="icbFillDeeporange300"
                          >
                            <Img
                              src="images/img_icon_21.png"
                              className="flex items-center justify-center"
                              alt="icon"
                            />
                          </Button>
                        </Row>
                        <Row className="items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[35%]">
                          <Column className="items-center w-[14%]">
                            <Text className="March252021" variant="body1">
                              Class
                            </Text>
                            <Text
                              className="font-semibold text-indigo_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              VII A
                            </Text>
                          </Column>
                          <Text
                            className="font-semibold text-indigo_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $ 50,036
                          </Text>
                          <Img
                            src="images/img_vector_182.png"
                            className="Vector37"
                            alt="Vector"
                          />
                        </Row>
                      </Row>
                      <Row className="Group239">
                        <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
                        <Row className="items-center justify-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[50%]">
                          <Text
                            className="font-semibold text-indigo_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Nadila Adja
                          </Text>
                          <Text
                            className="font-semibold lg:ml-[37px] xl:ml-[47px] 2xl:ml-[53px] 3xl:ml-[63px] text-indigo_500 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            ID 123456789
                          </Text>
                          <Button
                            className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                            size="mdIcn"
                            variant="icbFillDeeporange300"
                          >
                            <Img
                              src="images/img_icon_22.png"
                              className="flex items-center justify-center"
                              alt="icon"
                            />
                          </Button>
                        </Row>
                        <Row className="items-center justify-between xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[35%]">
                          <Column className="items-center w-[14%]">
                            <Text className="March252021" variant="body1">
                              Class
                            </Text>
                            <Text
                              className="font-semibold text-indigo_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              VII A
                            </Text>
                          </Column>
                          <Text
                            className="font-semibold text-indigo_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            $ 50,036
                          </Text>
                          <Img
                            src="images/img_vector_183.png"
                            className="Vector37"
                            alt="Vector"
                          />
                        </Row>
                      </Row>
                    </List>
                    <Row className="items-center lg:ml-[21px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[91%]">
                      <Text className="Group54" variant="body1">
                        <span className="text-gray_500 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                          Showing{" "}
                        </span>
                        <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                          1-5
                        </span>
                        <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                          {" "}
                        </span>
                        <span className="text-gray_500 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                          from
                        </span>
                        <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                          {" "}
                          100{" "}
                        </span>
                        <span className="text-gray_500 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                          data
                        </span>
                      </Text>
                      <Img
                        src="images/img_vector_184.png"
                        className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[169px] xl:ml-[212px] 2xl:ml-[238px] 3xl:ml-[286px] w-[2%]"
                        alt="Vector"
                      />
                      <Food className="items-center justify-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[24%]" />
                      <Img
                        src="images/img_vector_185.png"
                        className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[2%]"
                        alt="Vector"
                      />
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[40%]">
                <Text
                  className="text-bluegray_800 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  School Expense
                </Text>
                <Column className="items-center lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[94%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="Group181">
                      <Button
                        className="flex lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] items-center justify-center rounded-radius50 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                        size="lgIcn"
                        variant="icbFillRedA200"
                      >
                        <Img
                          src="images/img_icon_23.png"
                          className="flex items-center justify-center"
                          alt="icon"
                        />
                      </Button>
                      <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[29%]">
                        <Text
                          className="font-semibold text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          #123456789
                        </Text>
                        <Column className="items-center mt-[4px] w-[100%]">
                          <Text className="March252021" variant="body1">
                            2 March 2021, 13:45 PM
                          </Text>
                        </Column>
                      </Column>
                      <Text className="test_500361" as="h5" variant="h5">
                        $ 50,036
                      </Text>
                      <Text className="Complete1" as="h5" variant="h5">
                        Complete
                      </Text>
                    </Row>
                    <Row className="items-center xl:mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] 3xl:my-[10px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] w-[97%]">
                      <Button
                        className="flex lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] items-center justify-center rounded-radius50 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                        size="lgIcn"
                        variant="icbFillRedA200"
                      >
                        <Img
                          src="images/img_icon_24.png"
                          className="flex items-center justify-center"
                          alt="icon"
                        />
                      </Button>
                      <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[30%]">
                        <Text
                          className="font-semibold text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          #123456789
                        </Text>
                        <Column className="items-center mt-[4px] w-[100%]">
                          <Text className="March252021" variant="body1">
                            2 March 2021, 13:45 PM
                          </Text>
                        </Column>
                      </Column>
                      <Text className="test_500361" as="h5" variant="h5">
                        $ 50,036
                      </Text>
                      <Text
                        className="font-semibold lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] text-gray_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Pending
                      </Text>
                    </Row>
                    <Row className="Group181">
                      <Button
                        className="flex lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] items-center justify-center rounded-radius50 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                        size="lgIcn"
                        variant="icbFillRedA200"
                      >
                        <Img
                          src="images/img_icon_25.png"
                          className="flex items-center justify-center"
                          alt="icon"
                        />
                      </Button>
                      <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[29%]">
                        <Text
                          className="font-semibold text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          #123456789
                        </Text>
                        <Column className="items-center mt-[4px] w-[100%]">
                          <Text className="March252021" variant="body1">
                            2 March 2021, 13:45 PM
                          </Text>
                        </Column>
                      </Column>
                      <Text className="test_500361" as="h5" variant="h5">
                        $ 50,036
                      </Text>
                      <Text
                        className="font-semibold lg:ml-[32px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] text-red_A200 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Canceled
                      </Text>
                    </Row>
                    <Row className="Group181">
                      <Button
                        className="flex lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] items-center justify-center rounded-radius50 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                        size="lgIcn"
                        variant="icbFillRedA200"
                      >
                        <Img
                          src="images/img_icon_26.png"
                          className="flex items-center justify-center"
                          alt="icon"
                        />
                      </Button>
                      <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[29%]">
                        <Text
                          className="font-semibold text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          #123456789
                        </Text>
                        <Column className="items-center mt-[4px] w-[100%]">
                          <Text className="March252021" variant="body1">
                            2 March 2021, 13:45 PM
                          </Text>
                        </Column>
                      </Column>
                      <Text className="test_500361" as="h5" variant="h5">
                        $ 50,036
                      </Text>
                      <Text className="Complete1" as="h5" variant="h5">
                        Complete
                      </Text>
                    </Row>
                    <Row className="Group181">
                      <Button
                        className="flex lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] items-center justify-center rounded-radius50 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                        size="lgIcn"
                        variant="icbFillRedA200"
                      >
                        <Img
                          src="images/img_icon_27.png"
                          className="flex items-center justify-center"
                          alt="icon"
                        />
                      </Button>
                      <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[29%]">
                        <Text
                          className="font-semibold text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          #123456789
                        </Text>
                        <Column className="items-center mt-[4px] w-[100%]">
                          <Text className="March252021" variant="body1">
                            2 March 2021, 13:45 PM
                          </Text>
                        </Column>
                      </Column>
                      <Text className="test_500361" as="h5" variant="h5">
                        $ 50,036
                      </Text>
                      <Text className="Complete1" as="h5" variant="h5">
                        Complete
                      </Text>
                    </Row>
                    <Row className="Group181">
                      <Button
                        className="flex lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] items-center justify-center rounded-radius50 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                        size="lgIcn"
                        variant="icbFillRedA200"
                      >
                        <Img
                          src="images/img_icon_28.png"
                          className="flex items-center justify-center"
                          alt="icon"
                        />
                      </Button>
                      <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[29%]">
                        <Text
                          className="font-semibold text-bluegray_800 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          #123456789
                        </Text>
                        <Column className="items-center mt-[4px] w-[100%]">
                          <Text className="March252021" variant="body1">
                            2 March 2021, 13:45 PM
                          </Text>
                        </Column>
                      </Column>
                      <Text className="test_500361" as="h5" variant="h5">
                        $ 50,036
                      </Text>
                      <Text className="Complete1" as="h5" variant="h5">
                        Complete
                      </Text>
                    </Row>
                  </List>
                  <Row className="items-center lg:mt-[39px] xl:mt-[49px] 2xl:mt-[55px] 3xl:mt-[66px] w-[100%]">
                    <Text className="Group54" variant="body1">
                      <span className="text-gray_500 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        Showing{" "}
                      </span>
                      <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        1-5
                      </span>
                      <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        {" "}
                      </span>
                      <span className="text-gray_500 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        from
                      </span>
                      <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        {" "}
                        100{" "}
                      </span>
                      <span className="text-gray_500 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                        data
                      </span>
                    </Text>
                    <Img
                      src="images/img_vector_186.png"
                      className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[36px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] w-[2%]"
                      alt="Vector"
                    />
                    <Food className="items-center justify-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[35%]" />
                    <Img
                      src="images/img_vector_187.png"
                      className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[2%]"
                      alt="Vector"
                    />
                  </Row>
                </Column>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default FinancePage;
