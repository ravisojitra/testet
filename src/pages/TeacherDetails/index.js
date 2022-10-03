import React from "react";

import { Column, Row, Stack, Text, Button, Img, List } from "components";
import Food2 from "components/Column/Food2";
import TeacherDetails0 from "components/Column/TeacherDetails0";
import Food3 from "components/Row/Food3";
import StudentDetails from "components/Stack/StudentDetails";

const TeacherDetailsPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-between w-[97%]">
          <aside className="items-center w-[18%]">
            <Column className="">
              <Column className="bg-indigo_500 justify-start lg:pb-[140px] xl:pb-[176px] 2xl:pb-[198px] 3xl:pb-[237px] lg:pt-[26px] xl:pt-[33px] 2xl:pt-[37px] 3xl:pt-[45px] w-[100%]">
                <Food2 className="justify-start w-[87%]" />
                <TeacherDetails0 className="justify-start lg:mt-[54px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] w-[85%]" />
              </Column>
            </Column>
          </aside>
          <Column className="items-center w-[79%]">
            <Food3 className="items-start w-[100%]" />
            <Row className="items-center justify-between lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
              <Column className="bg-white_A700 lg:pb-[49px] xl:pb-[62px] 2xl:pb-[69px] 3xl:pb-[83px] rounded-radius20 w-[69%]">
                <Column className="items-center w-[100%]">
                  <StudentDetails className="lg:h-[124px] xl:h-[155px] 2xl:h-[175px] 3xl:h-[209px] w-[100%]" />
                </Column>
                <Column className="justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[72%]">
                  <Text
                    className="text-indigo_900 w-[auto]"
                    as="h2"
                    variant="h2"
                  >
                    Maria Historia
                  </Text>
                  <Text
                    className="font-semibold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_500 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    History Teacher
                  </Text>
                  <Column className="items-center lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
                    <Row className="items-center w-[100%]">
                      <Button
                        className="flex items-center justify-center rounded-radius50 Finance"
                        size="mdIcn"
                        variant="icbFillDeeporange300"
                      >
                        <Img
                          src="images/img_icon.png"
                          className="flex items-center justify-center"
                          alt="icon"
                        />
                      </Button>
                      <Text className="title3" as="h5" variant="h5">
                        Jakarta, Indonesia
                      </Text>
                      <Button
                        className="flex items-center justify-center lg:ml-[24px] xl:ml-[30px] 2xl:ml-[33px] 3xl:ml-[40px] rounded-radius50 Finance"
                        size="mdIcn"
                        variant="icbFillDeeporange300"
                      >
                        <Img
                          src="images/img_phone.png"
                          className="flex items-center justify-center"
                          alt="Phone"
                        />
                      </Button>
                      <Text className="test_1234567890" as="h5" variant="h5">
                        +12 345 6789 0
                      </Text>
                      <Button
                        className="flex items-center justify-center lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] rounded-radius50 Finance"
                        size="mdIcn"
                        variant="icbFillDeeporange300"
                      >
                        <Img
                          src="images/img_mail.png"
                          className="flex items-center justify-center"
                          alt="Mail"
                        />
                      </Button>
                      <Text className="test_1234567890" as="h5" variant="h5">
                        Historia@mail.com
                      </Text>
                    </Row>
                  </Column>
                  <Text
                    className="lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] text-indigo_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    About:
                  </Text>
                  <Text
                    className="font-normal leading-[normal] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic text-indigo_900 w-[84%]"
                    as="h5"
                    variant="h5"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                  </Text>
                  <Text
                    className="lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] text-indigo_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Education:
                  </Text>
                  <Text
                    className="font-semibold xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] text-indigo_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    History Major, University Akademi Historia
                  </Text>
                  <Text
                    className="lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] Mathematics"
                    as="h5"
                    variant="h5"
                  >
                    2013-2017
                  </Text>
                  <Text
                    className="font-semibold lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[33px] text-indigo_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Master of History, University Akademi Historia
                  </Text>
                  <Text
                    className="lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] Mathematics"
                    as="h5"
                    variant="h5"
                  >
                    2017-2020
                  </Text>
                  <Text
                    className="lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] text-indigo_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Expertise:
                  </Text>
                  <Text
                    className="xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] Group54"
                    as="h5"
                    variant="h5"
                  >
                    World History, Philosophy, Prehistoric, Culture, Ancient
                  </Text>
                </Column>
              </Column>
              <Column className="items-center w-[26%]">
                <Column className="bg-white_A700 justify-center lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[100%]">
                  <Text
                    className="text-indigo_900 w-[auto]"
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
                    <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] pb-[1px] w-[40%]">
                      <Text
                        className="font-semibold text-indigo_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        World History
                      </Text>
                      <Text className="ClassVIIB" variant="body1">
                        Class VII-B
                      </Text>
                      <Row className="items-center ml-[3px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[90%]">
                        <Img
                          src="images/img_vector_27.png"
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
                            src="images/img_32.png"
                            className="test_32"
                            alt="32"
                          />
                          <Text className="Hours" variant="body1">
                            09.00 - 10.00 AM
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                  <Row className="Group82">
                    <div className="bg-deep_orange_300 xl:h-[123px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[6%]"></div>
                    <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] pb-[1px] w-[40%]">
                      <Text
                        className="font-semibold text-indigo_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Ancient History
                      </Text>
                      <Text className="ClassVIIB" variant="body1">
                        Class VII-A
                      </Text>
                      <Row className="items-center ml-[3px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[90%]">
                        <Img
                          src="images/img_vector_28.png"
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
                            src="images/img_32_1.png"
                            className="test_32"
                            alt="32"
                          />
                          <Text className="Hours" variant="body1">
                            09.00 - 10.00 AM
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                  <Row className="Group82">
                    <div className="bg-yellow_700 xl:h-[123px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[6%]"></div>
                    <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] pb-[1px] w-[40%]">
                      <Text
                        className="font-semibold text-indigo_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Culture
                      </Text>
                      <Text className="ClassVIIB" variant="body1">
                        Class VIII-A
                      </Text>
                      <Row className="items-center ml-[3px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[90%]">
                        <Img
                          src="images/img_vector_29.png"
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
                            src="images/img_32_2.png"
                            className="test_32"
                            alt="32"
                          />
                          <Text className="Hours" variant="body1">
                            09.00 - 10.00 AM
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                  <Row className="Group82">
                    <div className="bg-indigo_900 xl:h-[123px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[6%]"></div>
                    <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] pb-[1px] w-[40%]">
                      <Text
                        className="font-semibold text-indigo_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        World History
                      </Text>
                      <Text className="ClassVIIB" variant="body1">
                        Class VII-C
                      </Text>
                      <Row className="items-center ml-[3px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[90%]">
                        <Img
                          src="images/img_vector_30.png"
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
                            src="images/img_32_3.png"
                            className="test_32"
                            alt="32"
                          />
                          <Text className="Hours" variant="body1">
                            09.00 - 10.00 AM
                          </Text>
                        </Row>
                      </Column>
                    </Column>
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

export default TeacherDetailsPage;
