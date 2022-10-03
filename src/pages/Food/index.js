import React from "react";

import { Column, Row, Text, Stack, Line, List, Button, Img } from "components";
import StudentDetails4 from "components/Sidebar/StudentDetails4";
import Food3 from "components/Row/Food3";
import Food from "components/Row/Food";

const FoodPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-between w-[97%]">
          <StudentDetails4 className="items-center w-[18%]" />
          <Column className="items-center w-[79%]">
            <Food3 className="items-start w-[100%]" />
            <Column className="bg-white_A700 items-center justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] lg:pl-[17px] xl:pl-[22px] 2xl:pl-[24px] 3xl:pl-[29px] xl:pr-[10px] 2xl:pr-[12px] 3xl:pr-[14px] lg:pr-[8px] lg:pt-[11px] xl:pt-[14px] 2xl:pt-[15px] 3xl:pt-[18px] rounded-radius20 w-[100%]">
              <Row className="items-center justify-between w-[100%]">
                <Text className="text-indigo_900 w-[auto]" as="h4" variant="h4">
                  Food Menu
                </Text>
                <Stack className="lg:h-[31px] xl:h-[39px] 2xl:h-[43px] 3xl:h-[52px] w-[34%]">
                  <Line className="absolute bg-indigo_100 bottom-[0] h-[1px] w-[100%]" />
                  <Row className="absolute items-start left-[6%] xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] lg:pt-[8px] w-[81%]">
                    <Column className="items-center justify-start w-[30%]">
                      <Text
                        className="font-semibold lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] text-indigo_500 w-[auto]"
                        variant="body1"
                      >
                        All Menus
                      </Text>
                      <Line className="bg-indigo_500 h-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]" />
                    </Column>
                    <Row className="items-center justify-between lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[64%]">
                      <Text
                        className="font-semibold text-gray_500 w-[auto]"
                        variant="body1"
                      >
                        Breakfast
                      </Text>
                      <Text
                        className="font-semibold text-gray_500 w-[auto]"
                        variant="body1"
                      >
                        Lunch
                      </Text>
                      <Text
                        className="font-semibold text-gray_500 w-[auto]"
                        variant="body1"
                      >
                        Snack
                      </Text>
                    </Row>
                  </Row>
                </Stack>
              </Row>
              <List
                className="gap-[0] min-h-[auto] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[99%]"
                orientation="vertical"
              >
                <Row className="Group134">
                  <div className="bg-indigo_100 xl:h-[101px] 2xl:h-[113px] 3xl:h-[136px] lg:h-[80px] rounded-radius18 xl:w-[100px] 2xl:w-[112px] 3xl:w-[135px] lg:w-[80px]"></div>
                  <Column className="justify-start w-[87%]">
                    <Button
                      className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[10%]"
                      shape="CircleBorder20"
                      size="sm"
                      variant="FillIndigo500"
                    >
                      Lunch
                    </Button>
                    <Column className="items-center mt-[1px] w-[100%]">
                      <Row className="items-center w-[100%]">
                        <Text
                          className="text-indigo_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Beef Steak with Fried Potato
                        </Text>
                        <Img
                          src="images/img_star1.png"
                          className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[30px] xl:ml-[38px] 2xl:ml-[42px] 3xl:ml-[51px] rounded-radius1 lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                          alt="Star1"
                        />
                        <Text className="test_49" as="h4" variant="h4">
                          4.9
                        </Text>
                        <Row className="items-end justify-center lg:ml-[49px] xl:ml-[61px] 2xl:ml-[69px] 3xl:ml-[82px] w-[5%]">
                          <div className="bg-indigo_500 lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                          <div className="bg-indigo_500 lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                          <div className="bg-indigo_500 lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                          <div className="bg-indigo_500 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                        </Row>
                        <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[8%]">
                          <Text
                            className="text-indigo_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            1.456
                          </Text>
                          <Column className="items-center mt-[4px] w-[100%]">
                            <Text className="March252021" as="h5" variant="h5">
                              Total Order
                            </Text>
                          </Column>
                        </Column>
                        <Img
                          src="images/img_arrow1.png"
                          className="Arrow1"
                          alt="Arrow1"
                        />
                        <Row className="items-center justify-between lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[26%]">
                          <Column className="w-[22%]">
                            <Text
                              className="text-indigo_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              26%
                            </Text>
                            <Column className="items-center mt-[4px] pl-[1px] w-[100%]">
                              <Text
                                className="March252021"
                                as="h5"
                                variant="h5"
                              >
                                Interest
                              </Text>
                            </Column>
                          </Column>
                          <Stack className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]">
                            <div className="absolute lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                            <Text className="test_50" variant="body1">
                              50%
                            </Text>
                          </Stack>
                          <Img
                            src="images/img_vector_40.png"
                            className="Vector13"
                            alt="Vector"
                          />
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Row className="Group134">
                  <div className="bg-indigo_100 xl:h-[101px] 2xl:h-[113px] 3xl:h-[136px] lg:h-[80px] rounded-radius18 xl:w-[100px] 2xl:w-[112px] 3xl:w-[135px] lg:w-[80px]"></div>
                  <Column className="justify-start w-[87%]">
                    <Button
                      className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[10%]"
                      shape="CircleBorder20"
                      size="sm"
                      variant="FillIndigo500"
                    >
                      Breakfast
                    </Button>
                    <Column className="items-center mt-[1px] w-[100%]">
                      <Row className="items-center w-[100%]">
                        <Text
                          className="text-indigo_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Pancake with Honey
                        </Text>
                        <Img
                          src="images/img_star1_1.png"
                          className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] 2xl:ml-[111px] 3xl:ml-[133px] lg:ml-[78px] xl:ml-[98px] rounded-radius1 lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                          alt="Star1"
                        />
                        <Text
                          className="flex items-center test_49"
                          as="h4"
                          variant="h4"
                        >
                          4.7
                        </Text>
                        <Row className="items-end justify-center lg:ml-[50px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] w-[5%]">
                          <div className="bg-indigo_500 lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                          <div className="bg-indigo_500 lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                          <div className="bg-indigo_500 lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                          <div className="bg-indigo_500 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                        </Row>
                        <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[8%]">
                          <Text
                            className="text-indigo_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            1.456
                          </Text>
                          <Column className="items-center mt-[4px] w-[100%]">
                            <Text className="March252021" as="h5" variant="h5">
                              Total Order
                            </Text>
                          </Column>
                        </Column>
                        <Img
                          src="images/img_arrow1_1.png"
                          className="Arrow1"
                          alt="Arrow1"
                        />
                        <Row className="items-center justify-between lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[26%]">
                          <Column className="w-[22%]">
                            <Text
                              className="text-indigo_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              26%
                            </Text>
                            <Column className="items-center mt-[4px] pl-[1px] w-[100%]">
                              <Text
                                className="March252021"
                                as="h5"
                                variant="h5"
                              >
                                Interest
                              </Text>
                            </Column>
                          </Column>
                          <Stack className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]">
                            <div className="absolute lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                            <Text className="test_50" variant="body1">
                              50%
                            </Text>
                          </Stack>
                          <Img
                            src="images/img_vector_41.png"
                            className="Vector13"
                            alt="Vector"
                          />
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Row className="Group134">
                  <div className="bg-indigo_100 xl:h-[101px] 2xl:h-[113px] 3xl:h-[136px] lg:h-[80px] rounded-radius18 xl:w-[100px] 2xl:w-[112px] 3xl:w-[135px] lg:w-[80px]"></div>
                  <Column className="justify-start w-[87%]">
                    <Button
                      className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[10%]"
                      shape="CircleBorder20"
                      size="sm"
                      variant="FillIndigo500"
                    >
                      Lunch
                    </Button>
                    <Column className="items-center mt-[1px] w-[100%]">
                      <Row className="items-center w-[100%]">
                        <Text
                          className="text-indigo_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Japanese Beef Ramen
                        </Text>
                        <Img
                          src="images/img_star1_2.png"
                          className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] rounded-radius1 lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                          alt="Star1"
                        />
                        <Text className="test_49" as="h4" variant="h4">
                          4.8
                        </Text>
                        <Row className="items-end justify-center lg:ml-[48px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] w-[5%]">
                          <div className="bg-indigo_500 lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                          <div className="bg-indigo_500 lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                          <div className="bg-indigo_500 lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                          <div className="bg-indigo_500 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                        </Row>
                        <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[8%]">
                          <Text
                            className="text-indigo_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            1.456
                          </Text>
                          <Column className="items-center mt-[4px] w-[100%]">
                            <Text className="March252021" as="h5" variant="h5">
                              Total Order
                            </Text>
                          </Column>
                        </Column>
                        <Img
                          src="images/img_arrow1_2.png"
                          className="Arrow1"
                          alt="Arrow1"
                        />
                        <Row className="items-center justify-between lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[26%]">
                          <Column className="w-[22%]">
                            <Text
                              className="text-indigo_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              26%
                            </Text>
                            <Column className="items-center mt-[4px] pl-[1px] w-[100%]">
                              <Text
                                className="March252021"
                                as="h5"
                                variant="h5"
                              >
                                Interest
                              </Text>
                            </Column>
                          </Column>
                          <Stack className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]">
                            <div className="absolute lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                            <Text className="test_50" variant="body1">
                              50%
                            </Text>
                          </Stack>
                          <Img
                            src="images/img_vector_42.png"
                            className="Vector13"
                            alt="Vector"
                          />
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Row className="Group134">
                  <div className="bg-indigo_100 xl:h-[101px] 2xl:h-[113px] 3xl:h-[136px] lg:h-[80px] rounded-radius18 xl:w-[100px] 2xl:w-[112px] 3xl:w-[135px] lg:w-[80px]"></div>
                  <Column className="justify-start w-[87%]">
                    <Button
                      className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[10%]"
                      shape="CircleBorder20"
                      size="sm"
                      variant="FillIndigo500"
                    >
                      Lunch
                    </Button>
                    <Column className="items-center mt-[1px] w-[100%]">
                      <Row className="items-center w-[100%]">
                        <Text
                          className="text-indigo_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Mixed Salad
                        </Text>
                        <Img
                          src="images/img_star1_3.png"
                          className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[132px] xl:ml-[165px] 2xl:ml-[186px] 3xl:ml-[223px] rounded-radius1 lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                          alt="Star1"
                        />
                        <Text className="test_49" as="h4" variant="h4">
                          4.2
                        </Text>
                        <Row className="items-end justify-center lg:ml-[49px] xl:ml-[62px] 2xl:ml-[69px] 3xl:ml-[83px] w-[5%]">
                          <div className="bg-indigo_500 lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                          <div className="bg-indigo_500 lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                          <div className="bg-indigo_500 lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                          <div className="bg-indigo_500 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                        </Row>
                        <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[8%]">
                          <Text
                            className="text-indigo_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            1.456
                          </Text>
                          <Column className="items-center mt-[4px] w-[100%]">
                            <Text className="March252021" as="h5" variant="h5">
                              Total Order
                            </Text>
                          </Column>
                        </Column>
                        <Img
                          src="images/img_arrow1_3.png"
                          className="Arrow1"
                          alt="Arrow1"
                        />
                        <Row className="items-center justify-between lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[26%]">
                          <Column className="w-[22%]">
                            <Text
                              className="text-indigo_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              26%
                            </Text>
                            <Column className="items-center mt-[4px] pl-[1px] w-[100%]">
                              <Text
                                className="March252021"
                                as="h5"
                                variant="h5"
                              >
                                Interest
                              </Text>
                            </Column>
                          </Column>
                          <Stack className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]">
                            <div className="absolute lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                            <Text className="test_50" variant="body1">
                              50%
                            </Text>
                          </Stack>
                          <Img
                            src="images/img_vector_43.png"
                            className="Vector13"
                            alt="Vector"
                          />
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Row>
                <Row className="Group134">
                  <div className="bg-indigo_100 xl:h-[101px] 2xl:h-[113px] 3xl:h-[136px] lg:h-[80px] rounded-radius18 xl:w-[100px] 2xl:w-[112px] 3xl:w-[135px] lg:w-[80px]"></div>
                  <Column className="justify-start w-[87%]">
                    <Button
                      className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[10%]"
                      shape="CircleBorder20"
                      size="sm"
                      variant="FillIndigo500"
                    >
                      Snack
                    </Button>
                    <Column className="items-center mt-[1px] w-[100%]">
                      <Row className="items-center w-[100%]">
                        <Text
                          className="text-indigo_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Beef Meatball with Vegetable
                        </Text>
                        <Img
                          src="images/img_star1_4.png"
                          className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] lg:ml-[20px] xl:ml-[25px] 2xl:ml-[28px] 3xl:ml-[34px] rounded-radius1 lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                          alt="Star1"
                        />
                        <Text className="test_49" as="h4" variant="h4">
                          4.5
                        </Text>
                        <Row className="items-end justify-center lg:ml-[48px] xl:ml-[60px] 2xl:ml-[68px] 3xl:ml-[81px] w-[5%]">
                          <div className="bg-indigo_500 lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                          <div className="bg-indigo_500 lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                          <div className="bg-indigo_500 lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                          <div className="bg-indigo_500 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                        </Row>
                        <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[8%]">
                          <Text
                            className="text-indigo_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            1.456
                          </Text>
                          <Column className="items-center mt-[4px] w-[100%]">
                            <Text className="March252021" as="h5" variant="h5">
                              Total Order
                            </Text>
                          </Column>
                        </Column>
                        <Img
                          src="images/img_arrow1_4.png"
                          className="Arrow1"
                          alt="Arrow1"
                        />
                        <Row className="items-center justify-between lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[26%]">
                          <Column className="w-[22%]">
                            <Text
                              className="text-indigo_900 w-[auto]"
                              as="h4"
                              variant="h4"
                            >
                              26%
                            </Text>
                            <Column className="items-center mt-[4px] pl-[1px] w-[100%]">
                              <Text
                                className="March252021"
                                as="h5"
                                variant="h5"
                              >
                                Interest
                              </Text>
                            </Column>
                          </Column>
                          <Stack className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]">
                            <div className="absolute lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                            <Text className="test_50" variant="body1">
                              50%
                            </Text>
                          </Stack>
                          <Img
                            src="images/img_vector_44.png"
                            className="Vector13"
                            alt="Vector"
                          />
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Row>
              </List>
              <Row className="items-center lg:mt-[29px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] w-[99%]">
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
                  src="images/img_vector_45.png"
                  className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[509px] xl:ml-[637px] 2xl:ml-[717px] 3xl:ml-[860px] w-[1%]"
                  alt="Vector"
                />
                <Food className="items-center justify-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[13%]" />
                <Img
                  src="images/img_vector_46.png"
                  className="Vector11"
                  alt="Vector"
                />
              </Row>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default FoodPage;
