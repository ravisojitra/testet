import React from "react";

import { Column, Row, Img, Text, Stack, Line, List } from "components";
import TeacherDetails from "components/Row/TeacherDetails";
import Dashboard from "components/Column/Dashboard";
import TeacherDetails0 from "components/Column/TeacherDetails0";
import Food3 from "components/Row/Food3";

const NotificationLastestActivityPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-between w-[97%]">
          <aside className="items-center w-[18%]">
            <Column className="">
              <Column className="bg-indigo_500 justify-start xl:pb-[109px] 2xl:pb-[123px] 3xl:pb-[147px] lg:pb-[87px] lg:pt-[26px] xl:pt-[33px] 2xl:pt-[37px] 3xl:pt-[45px] w-[100%]">
                <Column className="justify-start w-[87%]">
                  <TeacherDetails className="items-center w-[78%]" />
                  <Dashboard className="items-center lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] w-[100%]" />
                  <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[47%]">
                    <Img
                      src="images/img_vector_103.png"
                      className="Vector2"
                      alt="Vector"
                    />
                    <Text className="Dashboard" as="h5" variant="h5">
                      Students
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[48%]">
                    <Img
                      src="images/img_vector_104.png"
                      className="Vector2"
                      alt="Vector"
                    />
                    <Text className="Dashboard" as="h5" variant="h5">
                      Teachers
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[36%]">
                    <Img
                      src="images/img_vector_105.png"
                      className="Vector3"
                      alt="Vector"
                    />
                    <Text className="event" as="h5" variant="h5">
                      Event
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[45%]">
                    <Img
                      src="images/img_finance_8.png"
                      className="Finance"
                      alt="Finance"
                    />
                    <Text className="finance" as="h5" variant="h5">
                      Finance
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[34%]">
                    <Img
                      src="images/img_vector_106.png"
                      className="Vector4"
                      alt="Vector"
                    />
                    <Text className="food" as="h5" variant="h5">
                      Food
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[33%]">
                    <Img
                      src="images/img_vector_107.png"
                      className="Vector5"
                      alt="Vector"
                    />
                    <Text className="Dashboard" as="h5" variant="h5">
                      User
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[36%]">
                    <Img
                      src="images/img_vector_108.png"
                      className="Vector6"
                      alt="Vector"
                    />
                    <Text className="Chat" as="h5" variant="h5">
                      Chat
                    </Text>
                  </Row>
                  <Column className="items-center lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                    <Row className="bg-gray_100 items-center lg:pl-[14px] xl:pl-[18px] 2xl:pl-[20px] 3xl:pl-[24px] lg:py-[11px] xl:py-[14px] 2xl:py-[16px] 3xl:py-[19px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[100%]">
                      <Img
                        src="images/img_vector_109.png"
                        className="lg:h-[14px] xl:h-[18px] 2xl:h-[20px] 3xl:h-[24px] my-[0] w-[12%]"
                        alt="Vector"
                      />
                      <Text
                        className="font-medium lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] text-indigo_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Lastest Activity
                      </Text>
                    </Row>
                  </Column>
                </Column>
                <TeacherDetails0 className="justify-start lg:mt-[42px] xl:mt-[53px] 2xl:mt-[60px] 3xl:mt-[72px] w-[85%]" />
              </Column>
            </Column>
          </aside>
          <Column className="items-center w-[79%]">
            <Food3 className="items-start w-[100%]" />
            <Column className="bg-white_A700 justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:pb-[44px] xl:pb-[55px] 2xl:pb-[62px] 3xl:pb-[74px] lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] lg:pt-[17px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] rounded-radius20 w-[100%]">
              <Text
                className="font-bold text-indigo_900 w-[auto]"
                as="h5"
                variant="h5"
              >
                Today
              </Text>
              <Stack className="lg:h-[303px] xl:h-[379px] 2xl:h-[426px] 3xl:h-[511px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] w-[90%]">
                <Line className="absolute bg-gray_500 lg:h-[278px] xl:h-[347px] 2xl:h-[391px] 3xl:h-[469px] left-[1%] top-[2%] w-[1px]" />
                <Row className="absolute items-start justify-between left-[0] top-[0] w-[39%]">
                  <div className="bg-white_A700 border-4 border-indigo_500 border-solid lg:mt-[3px] 2xl:mt-[4px] xl:mt-[4px] 3xl:mt-[5px] rounded-radius50 Vector12"></div>
                  <Column className="justify-start w-[92%]">
                    <Text className="March252021" variant="body1">
                      Monday, June 31 2020
                    </Text>
                    <Column className="font-cairo items-center lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[9px] w-[100%]">
                      <Text
                        className="font-semibold text-indigo_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        <span className="text-indigo_900 font-poppins font-bold lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          Karen Hope
                        </span>
                        <span className="text-indigo_900 font-cairo font-bold lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          {" "}
                        </span>
                        <span className="text-indigo_900 font-poppins font-normal lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          has created new task at
                        </span>
                        <span className="text-indigo_900 font-poppins font-bold lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          {" "}
                        </span>
                        <span className="text-deep_orange_300 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          HIstory Lesson
                        </span>
                      </Text>
                    </Column>
                  </Column>
                </Row>
                <Column className="absolute bottom-[14%] justify-start top-[16%] w-[100%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[47%]"
                    orientation="vertical"
                  >
                    <Row className="items-start justify-between 3xl:my-[10px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] w-[100%]">
                      <div className="bg-white_A700 border-4 border-indigo_500 border-solid mt-[4px] rounded-radius50 Vector12"></div>
                      <Column className="justify-start w-[93%]">
                        <Text className="March252021" variant="body1">
                          Monday, June 31 2020
                        </Text>
                        <Column className="items-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                          <Text
                            className="font-semibold text-indigo_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            <span className="text-red_A200 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                              [REMINDER]
                            </span>
                            <span className="text-indigo_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                              {" "}
                            </span>
                            <span className="text-indigo_900 font-poppins font-normal lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                              Due date o
                            </span>
                            <span className="text-indigo_900 font-poppins font-normal lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                              f
                            </span>
                            <span className="text-indigo_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                              {" "}
                            </span>
                            <span className="text-red_A200 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                              Science Homework
                            </span>
                            <span className="text-indigo_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                              {" "}
                            </span>
                            <span className="text-indigo_900 font-poppins font-normal lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                              task will be coming
                            </span>
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-start xl:mr-[102px] 2xl:mr-[115px] 3xl:mr-[138px] lg:mr-[82px] 3xl:my-[10px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] w-[75%]">
                      <div className="bg-white_A700 border-4 border-indigo_500 border-solid mt-[4px] rounded-radius50 Vector12"></div>
                      <Column className="justify-start lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] w-[91%]">
                        <Text className="March252021" variant="body1">
                          Monday, June 31 2020
                        </Text>
                        <Column className="font-cairo items-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                          <Text
                            className="font-semibold text-indigo_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            <span className="text-indigo_900 font-poppins font-bold lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                              Tony Soap
                            </span>
                            <span className="text-indigo_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                              {" "}
                            </span>
                            <span className="text-indigo_900 font-poppins font-normal lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                              commented at
                            </span>
                            <span className="text-deep_orange_300 font-poppins font-bold lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                              {" "}
                            </span>
                            <span className="text-red_A200 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                              Science Homework
                            </span>
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                    <Row className="items-start xl:mr-[122px] 2xl:mr-[138px] 3xl:mr-[165px] lg:mr-[98px] 3xl:my-[10px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] w-[70%]">
                      <div className="bg-white_A700 border-4 border-indigo_500 border-solid mt-[4px] rounded-radius50 Vector12"></div>
                      <Column className="justify-start lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] w-[90%]">
                        <Text className="March252021" variant="body1">
                          Monday, June 31 2020
                        </Text>
                        <Column className="font-cairo items-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                          <Text
                            className="font-semibold text-indigo_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            <span className="text-indigo_900 font-poppins font-bold lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                              Samantha William
                            </span>
                            <span className="text-indigo_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                              {" "}
                            </span>
                            <span className="text-indigo_900 font-poppins font-normal lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                              add 4 files on
                            </span>
                            <span className="text-indigo_500 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                              {" "}
                              Art Class{" "}
                            </span>
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                  </List>
                  <Column className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:pl-[21px] xl:pl-[26px] 2xl:pl-[30px] 3xl:pl-[36px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <div className="bg-indigo_100 xl:h-[109px] 2xl:h-[122px] 3xl:h-[146px] lg:h-[87px] rounded-radius20 w-[22%]"></div>
                      <div className="bg-indigo_100 xl:h-[109px] 2xl:h-[122px] 3xl:h-[146px] lg:h-[87px] rounded-radius20 w-[22%]"></div>
                      <div className="bg-indigo_100 xl:h-[109px] 2xl:h-[122px] 3xl:h-[146px] lg:h-[87px] rounded-radius20 w-[22%]"></div>
                      <div className="bg-indigo_100 xl:h-[109px] 2xl:h-[122px] 3xl:h-[146px] lg:h-[87px] rounded-radius20 w-[22%]"></div>
                    </Row>
                  </Column>
                </Column>
                <Row className="absolute bottom-[0] items-start justify-between left-[0] w-[38%]">
                  <div className="bg-white_A700 border-4 border-indigo_500 border-solid mt-[4px] rounded-radius50 Vector12"></div>
                  <Column className="justify-start w-[92%]">
                    <Text className="March252021" variant="body1">
                      Monday, June 31 2020
                    </Text>
                    <Column className="font-cairo items-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                      <Text
                        className="font-semibold text-indigo_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        <span className="text-indigo_900 font-poppins font-bold lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          You{" "}
                        </span>
                        <span className="text-indigo_900 font-poppins font-normal lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          has moved
                        </span>
                        <span className="text-indigo_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          {" "}
                        </span>
                        <span className="text-teal_300 font-poppins font-bold lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          “Biology Homework”{" "}
                        </span>
                        <span className="text-indigo_900 font-poppins font-normal lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          task to{" "}
                        </span>
                        <span className="text-indigo_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                          Done
                        </span>
                      </Text>
                    </Column>
                  </Column>
                </Row>
              </Stack>
              <Stack className="lg:h-[102px] xl:h-[127px] 2xl:h-[143px] 3xl:h-[172px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[38%]">
                <Line className="absolute bg-gray_500 bottom-[18%] lg:h-[53px] xl:h-[66px] 2xl:h-[74px] 3xl:h-[89px] left-[1%] w-[1px]" />
                <Column className="absolute justify-start w-[100%]">
                  <Text
                    className="font-bold text-indigo_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Yesterday
                  </Text>
                  <Column className="items-center lg:mt-[10px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                    <List
                      className="gap-[0] min-h-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="items-start justify-between lg:mr-[4px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] xl:my-[11px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] w-[98%]">
                        <div className="bg-white_A700 border-4 border-indigo_500 border-solid mt-[4px] rounded-radius50 Vector12"></div>
                        <Column className="justify-start w-[92%]">
                          <Text className="March252021" variant="body1">
                            Sunday, June 30 2020
                          </Text>
                          <Column className="font-cairo items-center lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[100%]">
                            <Text
                              className="font-semibold text-indigo_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              <span className="text-indigo_900 font-poppins font-bold lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                                Johnny Ahmad{" "}
                              </span>
                              <span className="text-indigo_900 font-poppins font-normal lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                                mentioned you at
                              </span>
                              <span className="text-indigo_900 font-poppins font-bold lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                                {" "}
                              </span>
                              <span className="text-yellow_700 font-poppins font-bold lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                                Art Class Homework
                              </span>
                            </Text>
                          </Column>
                        </Column>
                      </Row>
                      <Row className="items-start justify-between xl:my-[11px] 2xl:my-[12px] 3xl:my-[14px] lg:my-[8px] w-[100%]">
                        <div className="bg-white_A700 border-4 border-indigo_500 border-solid mt-[4px] rounded-radius50 Vector12"></div>
                        <Column className="justify-start w-[92%]">
                          <Text
                            className="not-italic text-gray_500 w-[auto]"
                            as="h6"
                            variant="h6"
                          >
                            Sunday, June 30 2020
                          </Text>
                          <Column className="font-cairo items-center mt-[4px] w-[100%]">
                            <Text
                              className="font-semibold text-indigo_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              <span className="text-indigo_900 font-poppins font-bold lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                                Nadila Adja{" "}
                              </span>
                              <span className="text-indigo_900 font-poppins font-normal lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                                mentioned you at
                              </span>
                              <span className="text-indigo_900 font-poppins font-bold lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                                {" "}
                              </span>
                              <span className="text-indigo_500 font-poppins font-bold lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                                Programming Homework
                              </span>
                            </Text>
                          </Column>
                        </Column>
                      </Row>
                    </List>
                  </Column>
                </Column>
              </Stack>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default NotificationLastestActivityPage;
