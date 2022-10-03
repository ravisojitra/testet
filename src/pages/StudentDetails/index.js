import React from "react";

import { Column, Row, Stack, Text, List, Button, Img } from "components";
import StudentDetails4 from "components/Sidebar/StudentDetails4";
import Food3 from "components/Row/Food3";
import StudentDetails from "components/Stack/StudentDetails";
import Food from "components/Row/Food";

const StudentDetailsPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-poppins items-center justify-end mx-[auto] lg:pr-[26px] xl:pr-[33px] 2xl:pr-[37px] 3xl:pr-[45px] w-[100%]">
        <Row className="items-start justify-between w-[100%]">
          <StudentDetails4 className="items-center justify-start w-[18%]" />
          <Column className="items-center justify-start lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] w-[79%]">
            <Food3 className="items-start w-[100%]" />
            <Row className="items-center justify-between lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
              <Column className="items-center w-[69%]">
                <Column className="bg-white_A700 items-center justify-start lg:pb-[25px] xl:pb-[32px] 2xl:pb-[36px] 3xl:pb-[43px] rounded-radius20 w-[100%]">
                  <StudentDetails className="lg:h-[124px] xl:h-[155px] 2xl:h-[175px] 3xl:h-[209px] w-[100%]" />
                  <Column className="justify-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[94%]">
                    <Text
                      className="text-indigo_900 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Karen Hope
                    </Text>
                    <Text
                      className="font-semibold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-gray_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Student
                    </Text>
                    <Column className="items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                      <List
                        className="lg:gap-[30px] xl:gap-[38px] 2xl:gap-[42px] 3xl:gap-[51px] grid grid-cols-4 min-h-[auto] w-[100%]"
                        orientation="horizontal"
                      >
                        <Column className="justify-start w-[100%]">
                          <Text className="March252021" as="h5" variant="h5">
                            Parents:
                          </Text>
                          <Column className="items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                            <Row className="items-center w-[100%]">
                              <Button
                                className="flex items-center justify-center rounded-radius50 Finance"
                                size="mdIcn"
                                variant="icbFillDeeporange300"
                              >
                                <Img
                                  src="images/img_parent.png"
                                  className="flex items-center justify-center"
                                  alt="parent"
                                />
                              </Button>
                              <Text
                                className="test_1234567890"
                                as="h5"
                                variant="h5"
                              >
                                Justin Hope
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                        <Column className="justify-start w-[100%]">
                          <Text className="March252021" as="h5" variant="h5">
                            Address:
                          </Text>
                          <Column className="items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                            <Row className="items-center w-[100%]">
                              <Button
                                className="flex items-center justify-center rounded-radius50 Finance"
                                size="mdIcn"
                                variant="icbFillDeeporange300"
                              >
                                <Img
                                  src="images/img_icon_1.png"
                                  className="flex items-center justify-center"
                                  alt="icon"
                                />
                              </Button>
                              <Text className="title3" as="h5" variant="h5">
                                Jakarta, Indonesia
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                        <Column className="justify-start w-[100%]">
                          <Text className="March252021" as="h5" variant="h5">
                            Phone:
                          </Text>
                          <Column className="items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                            <Row className="items-center w-[100%]">
                              <Button
                                className="flex items-center justify-center rounded-radius50 Finance"
                                size="mdIcn"
                                variant="icbFillDeeporange300"
                              >
                                <Img
                                  src="images/img_phone_1.png"
                                  className="flex items-center justify-center"
                                  alt="Phone"
                                />
                              </Button>
                              <Text
                                className="test_1234567890"
                                as="h5"
                                variant="h5"
                              >
                                +12 345 6789 0
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                        <Column className="justify-start w-[100%]">
                          <Text className="March252021" as="h5" variant="h5">
                            Email:
                          </Text>
                          <Column className="items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] pl-[2px] w-[100%]">
                            <Row className="items-center w-[100%]">
                              <Button
                                className="flex items-center justify-center rounded-radius50 Finance"
                                size="mdIcn"
                                variant="icbFillDeeporange300"
                              >
                                <Img
                                  src="images/img_mail_1.png"
                                  className="flex items-center justify-center"
                                  alt="Mail"
                                />
                              </Button>
                              <Text
                                className="test_1234567890"
                                as="h5"
                                variant="h5"
                              >
                                Hope@mail.com
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                      </List>
                    </Column>
                  </Column>
                </Column>
                <Column className="bg-white_A700 justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[100%]">
                  <Text
                    className="text-indigo_900 w-[auto]"
                    as="h4"
                    variant="h4"
                  >
                    Payment History
                  </Text>
                  <Column className="items-center lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[97%]">
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
                            src="images/img_icon_2.png"
                            className="flex items-center justify-center"
                            alt="icon"
                          />
                        </Button>
                        <Text className="test_1234567890" as="h5" variant="h5">
                          #123456789
                        </Text>
                        <Text className="test_2March20211" variant="body1">
                          2 March 2021, 13:45 PM
                        </Text>
                        <Text className="test_50036" as="h5" variant="h5">
                          $ 50,036
                        </Text>
                        <Text
                          className="font-semibold 2xl:ml-[109px] 3xl:ml-[131px] lg:ml-[77px] xl:ml-[97px] text-teal_300 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Complete
                        </Text>
                      </Row>
                      <Row className="items-center xl:mr-[10px] 2xl:mr-[11px] 3xl:mr-[13px] lg:mr-[8px] 3xl:my-[10px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] w-[98%]">
                        <Button
                          className="flex lg:h-[30px] xl:h-[38px] 2xl:h-[43px] 3xl:h-[51px] items-center justify-center rounded-radius50 lg:w-[29px] xl:w-[37px] 2xl:w-[42px] 3xl:w-[50px]"
                          size="lgIcn"
                          variant="icbFillRedA200"
                        >
                          <Img
                            src="images/img_icon_3.png"
                            className="flex items-center justify-center"
                            alt="icon"
                          />
                        </Button>
                        <Text className="test_1234567890" as="h5" variant="h5">
                          #123456789
                        </Text>
                        <Text className="test_2March20211" variant="body1">
                          2 March 2021, 13:45 PM
                        </Text>
                        <Text className="test_50036" as="h5" variant="h5">
                          $ 50,036
                        </Text>
                        <Text
                          className="font-semibold 2xl:ml-[109px] 3xl:ml-[131px] lg:ml-[77px] xl:ml-[97px] text-gray_500 w-[auto]"
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
                            src="images/img_icon_4.png"
                            className="flex items-center justify-center"
                            alt="icon"
                          />
                        </Button>
                        <Text className="test_1234567890" as="h5" variant="h5">
                          #123456789
                        </Text>
                        <Text className="test_2March20211" variant="body1">
                          2 March 2021, 13:45 PM
                        </Text>
                        <Text className="test_50036" as="h5" variant="h5">
                          $ 50,036
                        </Text>
                        <Text
                          className="font-semibold 2xl:ml-[109px] 3xl:ml-[131px] lg:ml-[77px] xl:ml-[97px] text-red_A200 w-[auto]"
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
                            src="images/img_icon_5.png"
                            className="flex items-center justify-center"
                            alt="icon"
                          />
                        </Button>
                        <Text className="test_1234567890" as="h5" variant="h5">
                          #123456789
                        </Text>
                        <Text className="test_2March20211" variant="body1">
                          2 March 2021, 13:45 PM
                        </Text>
                        <Text className="test_50036" as="h5" variant="h5">
                          $ 50,036
                        </Text>
                        <Text
                          className="font-semibold 2xl:ml-[109px] 3xl:ml-[131px] lg:ml-[77px] xl:ml-[97px] text-teal_300 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Complete
                        </Text>
                      </Row>
                    </List>
                    <Row className="items-center lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] lg:mt-[25px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[99%]">
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
                        src="images/img_vector_57.png"
                        className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[260px] xl:ml-[325px] 2xl:ml-[366px] 3xl:ml-[439px] w-[1%]"
                        alt="Vector"
                      />
                      <Food className="items-center justify-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[19%]" />
                      <Img
                        src="images/img_vector_58.png"
                        className="Vector11"
                        alt="Vector"
                      />
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="items-center w-[28%]">
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
                    <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] pb-[1px] w-[37%]">
                      <Text
                        className="font-semibold text-indigo_900 w-[auto]"
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
                          src="images/img_vector_59.png"
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
                            src="images/img_32_4.png"
                            className="test_32"
                            alt="32"
                          />
                          <Text className="Hours" variant="body1">
                            09.00 - 10.00 AM
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                    <div className="bg-indigo_100 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] 3xl:ml-[112px] lg:ml-[66px] xl:ml-[83px] 2xl:ml-[93px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                  </Row>
                  <Row className="Group82">
                    <div className="bg-deep_orange_300 xl:h-[123px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[6%]"></div>
                    <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] pb-[1px] w-[37%]">
                      <Text
                        className="font-semibold text-indigo_900 w-[auto]"
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
                          src="images/img_vector_60.png"
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
                            src="images/img_32_5.png"
                            className="test_32"
                            alt="32"
                          />
                          <Text className="Hours" variant="body1">
                            09.00 - 10.00 AM
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                    <div className="bg-indigo_100 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] 3xl:ml-[112px] lg:ml-[66px] xl:ml-[83px] 2xl:ml-[93px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                  </Row>
                  <Row className="Group82">
                    <div className="bg-yellow_700 xl:h-[123px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[6%]"></div>
                    <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] pb-[1px] w-[39%]">
                      <Column className="items-center w-[100%]">
                        <Text
                          className="font-semibold text-indigo_900 w-[auto]"
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
                          src="images/img_vector_61.png"
                          className="Vector12"
                          alt="Vector"
                        />
                        <Text className="Date1" variant="body1">
                          March 20, 2021
                        </Text>
                      </Row>
                      <Row className="items-center ml-[2px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[93%]">
                        <Img
                          src="images/img_32_6.png"
                          className="test_32"
                          alt="32"
                        />
                        <Text className="Hours" variant="body1">
                          09.00 - 10.00 AM
                        </Text>
                      </Row>
                    </Column>
                    <div className="bg-indigo_100 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] 3xl:ml-[104px] lg:ml-[61px] xl:ml-[77px] 2xl:ml-[87px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                  </Row>
                  <Row className="Group82">
                    <div className="bg-indigo_900 xl:h-[123px] 2xl:h-[138px] 3xl:h-[165px] lg:h-[98px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[6%]"></div>
                    <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] pb-[1px] w-[40%]">
                      <Column className="items-center w-[100%]">
                        <Text
                          className="font-semibold text-indigo_900 w-[auto]"
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
                          src="images/img_vector_62.png"
                          className="Vector12"
                          alt="Vector"
                        />
                        <Text className="Date1" variant="body1">
                          March 20, 2021
                        </Text>
                      </Row>
                      <Row className="items-center ml-[2px] lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] w-[91%]">
                        <Img
                          src="images/img_32_7.png"
                          className="test_32"
                          alt="32"
                        />
                        <Text className="Hours" variant="body1">
                          09.00 - 10.00 AM
                        </Text>
                      </Row>
                    </Column>
                    <div className="bg-indigo_100 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] 3xl:ml-[100px] lg:ml-[59px] xl:ml-[74px] 2xl:ml-[84px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
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

export default StudentDetailsPage;
