import React from "react";

import { Column, Row, Text, Button, Img, Stack, List } from "components";
import Food2 from "components/Column/Food2";
import TeacherDetails0 from "components/Column/TeacherDetails0";
import Food3 from "components/Row/Food3";

const FoodDetailsPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-poppins items-center justify-end mx-[auto] lg:pr-[26px] xl:pr-[33px] 2xl:pr-[37px] 3xl:pr-[45px] w-[100%]">
        <Row className="items-center justify-between w-[100%]">
          <aside className="items-center w-[18%]">
            <Column className="">
              <Column className="bg-indigo_500 justify-start lg:pb-[10px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] lg:pt-[26px] xl:pt-[33px] 2xl:pt-[37px] 3xl:pt-[45px] w-[100%]">
                <Food2 className="justify-start w-[87%]" />
                <TeacherDetails0 className="justify-start lg:mt-[54px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] w-[85%]" />
              </Column>
            </Column>
          </aside>
          <Column className="items-center w-[79%]">
            <Food3 className="items-start w-[100%]" />
            <Row className="items-center justify-between lg:mt-[18px] xl:mt-[22px] 2xl:mt-[25px] 3xl:mt-[30px] w-[100%]">
              <Column className="bg-white_A700 lg:pb-[58px] xl:pb-[72px] 2xl:pb-[81px] 3xl:pb-[98px] lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] lg:pt-[17px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] rounded-radius20 w-[74%]">
                <Column className="items-center lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] pr-[0] w-[97%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Row className="items-start justify-between w-[89%]">
                      <div className="bg-indigo_100 lg:h-[128px] xl:h-[160px] 2xl:h-[180px] 3xl:h-[216px] rounded-radius18 w-[39%]"></div>
                      <Column className="justify-start w-[55%]">
                        <Text
                          className="text-indigo_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          Beef Steak with Fried Potato
                        </Text>
                        <Button
                          className="font-normal xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[24%]"
                          shape="CircleBorder20"
                          size="sm"
                          variant="FillIndigo500"
                        >
                          Lunch
                        </Button>
                        <Column className="items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[100%]">
                          <Text
                            className="font-normal leading-[normal] not-italic text-gray_500 w-[100%]"
                            as="h5"
                            variant="h5"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.{" "}
                          </Text>
                        </Column>
                      </Column>
                    </Row>
                    <Img
                      src="images/img_vector_120.png"
                      className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[2%]"
                      alt="Vector"
                    />
                  </Row>
                </Column>
                <Row className="items-center lg:mt-[29px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[61%]">
                  <Column className="w-[12%]">
                    <Text className="March252021" as="h5" variant="h5">
                      Rating
                    </Text>
                    <Column className="items-center mt-[4px] w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Img
                          src="images/img_star1_5.png"
                          className="lg:h-[18px] xl:h-[22px] 2xl:h-[25px] 3xl:h-[29px] rounded-radius1 lg:w-[17px] xl:w-[21px] 2xl:w-[24px] 3xl:w-[28px]"
                          alt="Star1"
                        />
                        <Text
                          className="text-indigo_900 w-[auto]"
                          as="h4"
                          variant="h4"
                        >
                          4.9
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                  <Row className="items-end justify-center lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] w-[10%]">
                    <div className="bg-indigo_500 lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                    <div className="bg-indigo_500 lg:h-[19px] xl:h-[23px] 2xl:h-[26px] 3xl:h-[31px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                    <div className="bg-indigo_500 lg:h-[29px] xl:h-[36px] 2xl:h-[40px] 3xl:h-[48px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                    <div className="bg-indigo_500 lg:h-[16px] xl:h-[20px] 2xl:h-[22px] 3xl:h-[27px] lg:ml-[5px] xl:ml-[6px] 2xl:ml-[7px] 3xl:ml-[9px] lg:mt-[12px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] rounded-bl-[3px] rounded-br-[4px] rounded-tl-[4px] rounded-tr-[3px] w-[13%]"></div>
                  </Row>
                  <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[15%]">
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
                    src="images/img_arrow1_5.png"
                    className="lg:h-[18px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:w-[17px] xl:w-[22px] 2xl:w-[24px] 3xl:w-[29px]"
                    alt="Arrow1"
                  />
                  <Column className="lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[11%]">
                    <Text
                      className="text-indigo_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      26%
                    </Text>
                    <Column className="items-center mt-[4px] pl-[1px] w-[100%]">
                      <Text className="March252021" as="h5" variant="h5">
                        Interest
                      </Text>
                    </Column>
                  </Column>
                  <Stack className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]">
                    <div className="absolute lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Text className="test_50" variant="body1">
                      50%
                    </Text>
                  </Stack>
                </Row>
                <Column className="items-center lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] lg:mt-[30px] xl:mt-[38px] 2xl:mt-[42px] 3xl:mt-[51px] w-[97%]">
                  <Row className="items-start justify-between w-[100%]">
                    <Column className="justify-start w-[49%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Ingredients
                      </Text>
                      <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Text className="Group490" as="h5" variant="h5">
                          2 tablespoons butter, softened, divided
                          <br />
                          <br />1 teaspoon minced fresh parsley
                          <br />
                          <br />
                          1/2 teaspoon minced garlic
                          <br />
                          <br />
                          1/4 teaspoon reduced-sodium soy sauce
                          <br />
                          <br />1 beef flat iron steak or boneless top sirloin
                          steak (3/4 pound)
                          <br />
                          <br />
                          1/8 teaspoon salt
                          <br />
                          <br />
                          1/8 teaspoon pepper
                        </Text>
                      </Column>
                    </Column>
                    <Column className="justify-start w-[47%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Nutrition:
                      </Text>
                      <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Text className="Group490" as="h5" variant="h5">
                          Calories: 217.
                          <br />
                          <br />
                          Water: 61%
                          <br />
                          <br />
                          Protein: 26.1 grams.
                          <br />
                          <br />
                          Carbs: 0 grams.
                          <br />
                          <br />
                          Sugar: 0 grams.
                          <br />
                          <br />
                          Fiber: 0 grams.
                          <br />
                          <br />
                          Fat: 11.8 grams.
                        </Text>
                      </Column>
                    </Column>
                  </Row>
                </Column>
              </Column>
              <Column className="w-[23%]">
                <Text className="text-indigo_900 w-[auto]" as="h4" variant="h4">
                  Student Comments
                </Text>
                <Column className="items-center lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Column className="bg-white_A700 justify-start 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] lg:pl-[16px] xl:pl-[20px] 2xl:pl-[22px] 3xl:pl-[27px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[100%]">
                      <Img
                        src="images/img_quote.png"
                        className="Quote"
                        alt="Quote"
                      />
                      <Column className="items-center lg:mr-[18px] xl:mr-[23px] 2xl:mr-[26px] 3xl:mr-[31px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pl-[2px] w-[89%]">
                        <Text className="Group493" variant="body1">
                          Sed eligendi facere repellendus. Ipsam ipsam incidunt
                          minima harum tenetur.
                        </Text>
                      </Column>
                      <Row className="items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[64%]">
                        <div className="bg-indigo_100 lg:h-[29px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius50 lg:w-[28px] xl:w-[36px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                        <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[64%]">
                          <Column className="items-center w-[100%]">
                            <Text
                              className="font-semibold text-indigo_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Samantha W.
                            </Text>
                          </Column>
                          <Text className="Group468" variant="body1">
                            5 days ago
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 justify-start 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] lg:pl-[16px] xl:pl-[20px] 2xl:pl-[22px] 3xl:pl-[27px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[100%]">
                      <Img
                        src="images/img_quote_1.png"
                        className="Quote"
                        alt="Quote"
                      />
                      <Column className="items-center lg:mr-[18px] xl:mr-[23px] 2xl:mr-[26px] 3xl:mr-[31px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pl-[2px] w-[89%]">
                        <Text className="Group493" variant="body1">
                          Sed eligendi facere repellendus. Ipsam ipsam incidunt
                          minima harum tenetur.
                        </Text>
                      </Column>
                      <Row className="items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[58%]">
                        <div className="bg-indigo_100 lg:h-[29px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius50 lg:w-[28px] xl:w-[36px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                        <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[60%]">
                          <Column className="items-center w-[100%]">
                            <Text
                              className="font-semibold text-indigo_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Karen Hope
                            </Text>
                          </Column>
                          <Text className="Group468" variant="body1">
                            5 days ago
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column className="bg-white_A700 justify-start 3xl:my-[11px] lg:my-[6px] xl:my-[8px] 2xl:my-[9px] lg:pl-[16px] xl:pl-[20px] 2xl:pl-[22px] 3xl:pl-[27px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[100%]">
                      <Img
                        src="images/img_quote_2.png"
                        className="Quote"
                        alt="Quote"
                      />
                      <Column className="items-center lg:mr-[18px] xl:mr-[23px] 2xl:mr-[26px] 3xl:mr-[31px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] pl-[2px] w-[89%]">
                        <Text className="Group493" variant="body1">
                          Sed eligendi facere repellendus. Ipsam ipsam incidunt
                          minima harum tenetur.
                        </Text>
                      </Column>
                      <Row className="items-center lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[54%]">
                        <div className="bg-indigo_100 lg:h-[29px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] rounded-radius50 lg:w-[28px] xl:w-[36px] 2xl:w-[40px] 3xl:w-[48px]"></div>
                        <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[58%]">
                          <Column className="items-center w-[100%]">
                            <Text
                              className="font-semibold text-indigo_900 w-[auto]"
                              as="h5"
                              variant="h5"
                            >
                              Tony Soap
                            </Text>
                          </Column>
                          <Text className="Group468" variant="body1">
                            5 days ago
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                  </List>
                </Column>
              </Column>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default FoodDetailsPage;
