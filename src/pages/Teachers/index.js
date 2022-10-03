import React from "react";

import { Column, Row, Grid, Text, Img, Stack } from "components";
import AddNewStudent from "components/Column/AddNewStudent";
import TeacherDetails0 from "components/Column/TeacherDetails0";
import AddNewTeachermenu from "components/Row/AddNewTeachermenu";
import Teachersstudentmenu from "components/Row/Teachersstudentmenu";
import Food from "components/Row/Food";

const TeachersPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-between w-[97%]">
          <aside className="items-center w-[18%]">
            <Column className="">
              <Column className="bg-indigo_500 justify-start lg:pb-[280px] xl:pb-[350px] 2xl:pb-[394px] 3xl:pb-[473px] lg:pt-[26px] xl:pt-[33px] 2xl:pt-[37px] 3xl:pt-[45px] w-[100%]">
                <AddNewStudent className="justify-start w-[87%]" />
                <TeacherDetails0 className="justify-start lg:mt-[54px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] w-[85%]" />
              </Column>
            </Column>
          </aside>
          <Column className="items-center w-[79%]">
            <AddNewTeachermenu className="items-start w-[100%]" />
            <Teachersstudentmenu className="items-center lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
            <Grid className="lg:gap-[21px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-4 lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
              <Column className="bg-white_A700 items-center justify-start lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[100%]">
                <Row className="items-start justify-end ml-[auto] w-[72%]">
                  <Column className="justify-start w-[76%]">
                    <Column className="lg:pl-[10px] xl:pl-[12px] 2xl:pl-[14px] 3xl:pl-[17px] w-[100%]">
                      <div className="bg-indigo_100 3xl:h-[109px] lg:h-[64px] xl:h-[81px] 2xl:h-[91px] rounded-radius50 3xl:w-[108px] lg:w-[64px] xl:w-[80px] 2xl:w-[90px]"></div>
                    </Column>
                    <Column className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Dimitres Viga
                      </Text>
                      <Text className="Mathematics" as="h5" variant="h5">
                        Mathematics
                      </Text>
                    </Column>
                  </Column>
                  <Img
                    src="images/img_vector_130.png"
                    className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[10%]"
                    alt="Vector"
                  />
                </Row>
                <Img
                  src="images/img_button.png"
                  className="button"
                  alt="button"
                />
              </Column>
              <Column className="bg-white_A700 items-center justify-start lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[100%]">
                <Row className="items-start justify-end ml-[auto] w-[79%]">
                  <Column className="justify-start w-[88%]">
                    <div className="bg-indigo_100 3xl:h-[109px] lg:h-[64px] xl:h-[81px] 2xl:h-[91px] lg:ml-[21px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] rounded-radius50 3xl:w-[108px] lg:w-[64px] xl:w-[80px] 2xl:w-[90px]"></div>
                    <Column className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Tom Housenburg
                      </Text>
                      <Text className="Mathematics" as="h5" variant="h5">
                        Science
                      </Text>
                    </Column>
                  </Column>
                  <Img
                    src="images/img_vector_131.png"
                    className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] lg:ml-[3px] 2xl:ml-[4px] xl:ml-[4px] 3xl:ml-[5px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[9%]"
                    alt="Vector"
                  />
                </Row>
                <Img
                  src="images/img_button_1.png"
                  className="button"
                  alt="button"
                />
              </Column>
              <Column className="bg-white_A700 items-center justify-start lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[100%]">
                <Row className="items-start justify-end ml-[auto] w-[76%]">
                  <Column className="justify-start w-[84%]">
                    <div className="bg-indigo_100 3xl:h-[109px] lg:h-[64px] xl:h-[81px] 2xl:h-[91px] lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] rounded-radius50 3xl:w-[108px] lg:w-[64px] xl:w-[80px] 2xl:w-[90px]"></div>
                    <Column className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Dana Benevista
                      </Text>
                      <Text className="Mathematics" as="h5" variant="h5">
                        Art
                      </Text>
                    </Column>
                  </Column>
                  <Img
                    src="images/img_vector_132.png"
                    className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] xl:ml-[10px] 2xl:ml-[11px] 3xl:ml-[13px] lg:ml-[8px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[9%]"
                    alt="Vector"
                  />
                </Row>
                <Img
                  src="images/img_button_2.png"
                  className="button"
                  alt="button"
                />
              </Column>
              <Column className="bg-white_A700 items-center justify-start lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[100%]">
                <Stack className="lg:h-[116px] xl:h-[145px] 2xl:h-[163px] 3xl:h-[195px] w-[84%]">
                  <Column className="absolute justify-start left-[0] w-[95%]">
                    <div className="bg-indigo_100 3xl:h-[109px] lg:h-[64px] xl:h-[81px] 2xl:h-[91px] lg:ml-[29px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] rounded-radius50 3xl:w-[108px] lg:w-[64px] xl:w-[80px] 2xl:w-[90px]"></div>
                    <Column className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Salvadore Morbeau
                      </Text>
                      <Text className="Mathematics" as="h5" variant="h5">
                        Biology
                      </Text>
                    </Column>
                  </Column>
                  <Img
                    src="images/img_vector_133.png"
                    className="absolute lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] right-[0] top-[4%] w-[9%]"
                    alt="Vector"
                  />
                </Stack>
                <Img
                  src="images/img_button_3.png"
                  className="button"
                  alt="button"
                />
              </Column>
              <Column className="bg-white_A700 items-center justify-start lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[100%]">
                <Row className="items-start justify-end ml-[auto] w-[73%]">
                  <Column className="justify-start w-[78%]">
                    <Column className="lg:pl-[11px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] w-[100%]">
                      <div className="bg-indigo_100 3xl:h-[109px] lg:h-[64px] xl:h-[81px] 2xl:h-[91px] rounded-radius50 3xl:w-[108px] lg:w-[64px] xl:w-[80px] 2xl:w-[90px]"></div>
                    </Column>
                    <Text className="MariaHistoria" as="h4" variant="h4">
                      Maria Historia
                    </Text>
                    <Text
                      className="lg:ml-[29px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] Mathematics"
                      as="h5"
                      variant="h5"
                    >
                      History
                    </Text>
                  </Column>
                  <Img
                    src="images/img_vector_134.png"
                    className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[10%]"
                    alt="Vector"
                  />
                </Row>
                <Img
                  src="images/img_button_4.png"
                  className="button"
                  alt="button"
                />
              </Column>
              <Column className="bg-white_A700 items-center justify-start lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[100%]">
                <Row className="items-start justify-end ml-[auto] w-[66%]">
                  <Column className="justify-start w-[64%]">
                    <div className="bg-indigo_100 3xl:h-[109px] lg:h-[64px] xl:h-[81px] 2xl:h-[91px] rounded-radius50 3xl:w-[108px] lg:w-[64px] xl:w-[80px] 2xl:w-[90px]"></div>
                    <Column className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] pl-[3px] w-[100%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Jack Sally
                      </Text>
                      <Text className="Mathematics" as="h5" variant="h5">
                        Physics
                      </Text>
                    </Column>
                  </Column>
                  <Img
                    src="images/img_vector_135.png"
                    className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] lg:ml-[26px] xl:ml-[33px] 2xl:ml-[37px] 3xl:ml-[45px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[11%]"
                    alt="Vector"
                  />
                </Row>
                <Img
                  src="images/img_button_5.png"
                  className="button"
                  alt="button"
                />
              </Column>
              <Column className="bg-white_A700 items-center justify-start lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[100%]">
                <Row className="lg:h-[116px] xl:h-[145px] 2xl:h-[163px] 3xl:h-[195px] items-start justify-end ml-[auto] lg:w-[115px] xl:w-[144px] 2xl:w-[162px] 3xl:w-[194px]">
                  <Column className="justify-start w-[74%]">
                    <Column className="xl:pl-[10px] 2xl:pl-[11px] 3xl:pl-[13px] lg:pl-[8px] w-[100%]">
                      <div className="bg-indigo_100 3xl:h-[109px] lg:h-[64px] xl:h-[81px] 2xl:h-[91px] rounded-radius50 3xl:w-[108px] lg:w-[64px] xl:w-[80px] 2xl:w-[90px]"></div>
                    </Column>
                    <Text className="MariaHistoria" as="h4" variant="h4">
                      Lula Beatrice
                    </Text>
                    <Text
                      className="lg:ml-[19px] xl:ml-[24px] 2xl:ml-[27px] 3xl:ml-[32px] Mathematics"
                      as="h5"
                      variant="h5"
                    >
                      Algorithm
                    </Text>
                  </Column>
                  <Img
                    src="images/img_vector_136.png"
                    className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] lg:ml-[17px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[10%]"
                    alt="Vector"
                  />
                </Row>
                <Img
                  src="images/img_button_6.png"
                  className="button"
                  alt="button"
                />
              </Column>
              <Column className="bg-white_A700 items-center justify-start lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[100%]">
                <Row className="items-start justify-end ml-[auto] w-[66%]">
                  <Column className="justify-start w-[62%]">
                    <div className="bg-indigo_100 3xl:h-[109px] lg:h-[64px] xl:h-[81px] 2xl:h-[91px] rounded-radius50 3xl:w-[108px] lg:w-[64px] xl:w-[80px] 2xl:w-[90px]"></div>
                    <Column className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:pl-[2px] 2xl:pl-[3px] xl:pl-[3px] 3xl:pl-[4px] w-[100%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Nella Vita
                      </Text>
                      <Text className="Mathematics" as="h5" variant="h5">
                        Engilsh
                      </Text>
                    </Column>
                  </Column>
                  <Img
                    src="images/img_vector_137.png"
                    className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] lg:ml-[28px] xl:ml-[35px] 2xl:ml-[39px] 3xl:ml-[47px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[11%]"
                    alt="Vector"
                  />
                </Row>
                <Img
                  src="images/img_button_7.png"
                  className="button"
                  alt="button"
                />
              </Column>
              <Column className="bg-white_A700 items-center justify-start lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[100%]">
                <Row className="items-start justify-end ml-[auto] w-[75%]">
                  <Column className="justify-start w-[82%]">
                    <div className="bg-indigo_100 3xl:h-[109px] lg:h-[64px] xl:h-[81px] 2xl:h-[91px] lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] rounded-radius50 3xl:w-[108px] lg:w-[64px] xl:w-[80px] 2xl:w-[90px]"></div>
                    <Column className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Nadia Laravela
                      </Text>
                      <Text className="Mathematics" as="h5" variant="h5">
                        Programming
                      </Text>
                    </Column>
                  </Column>
                  <Img
                    src="images/img_vector_138.png"
                    className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[10%]"
                    alt="Vector"
                  />
                </Row>
                <Img
                  src="images/img_button_8.png"
                  className="button"
                  alt="button"
                />
              </Column>
              <Column className="bg-white_A700 items-center justify-start lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[100%]">
                <Row className="items-start justify-end ml-[auto] w-[72%]">
                  <Column className="justify-start w-[77%]">
                    <div className="bg-indigo_100 3xl:h-[109px] lg:h-[64px] xl:h-[81px] 2xl:h-[91px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[17px] rounded-radius50 3xl:w-[108px] lg:w-[64px] xl:w-[80px] 2xl:w-[90px]"></div>
                    <Column className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Dakota Farral
                      </Text>
                      <Text className="Mathematics" as="h5" variant="h5">
                        Science
                      </Text>
                    </Column>
                  </Column>
                  <Img
                    src="images/img_vector_139.png"
                    className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] lg:ml-[14px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[10%]"
                    alt="Vector"
                  />
                </Row>
                <Img
                  src="images/img_button_9.png"
                  className="button"
                  alt="button"
                />
              </Column>
              <Column className="bg-white_A700 items-center justify-start lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[100%]">
                <Row className="items-start justify-end ml-[auto] w-[73%]">
                  <Column className="justify-start w-[78%]">
                    <Column className="lg:pl-[11px] xl:pl-[14px] 2xl:pl-[16px] 3xl:pl-[19px] w-[100%]">
                      <div className="bg-indigo_100 3xl:h-[109px] lg:h-[64px] xl:h-[81px] 2xl:h-[91px] rounded-radius50 3xl:w-[108px] lg:w-[64px] xl:w-[80px] 2xl:w-[90px]"></div>
                    </Column>
                    <Text className="MariaHistoria" as="h4" variant="h4">
                      Miranda Adila
                    </Text>
                    <Text
                      className="lg:ml-[39px] xl:ml-[49px] 2xl:ml-[55px] 3xl:ml-[66px] Mathematics"
                      as="h5"
                      variant="h5"
                    >
                      Art
                    </Text>
                  </Column>
                  <Img
                    src="images/img_vector_140.png"
                    className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[10%]"
                    alt="Vector"
                  />
                </Row>
                <Img
                  src="images/img_button_10.png"
                  className="button"
                  alt="button"
                />
              </Column>
              <Column className="bg-white_A700 items-center justify-start lg:pr-[17px] xl:pr-[21px] 2xl:pr-[24px] 3xl:pr-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[100%]">
                <Row className="items-start justify-end ml-[auto] w-[74%]">
                  <Column className="justify-start w-[81%]">
                    <div className="bg-indigo_100 3xl:h-[109px] lg:h-[64px] xl:h-[81px] 2xl:h-[91px] lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] rounded-radius50 3xl:w-[108px] lg:w-[64px] xl:w-[80px] 2xl:w-[90px]"></div>
                    <Column className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                      <Text
                        className="text-indigo_900 w-[auto]"
                        as="h4"
                        variant="h4"
                      >
                        Indiana Barker
                      </Text>
                      <Text className="Mathematics" as="h5" variant="h5">
                        Biology
                      </Text>
                    </Column>
                  </Column>
                  <Img
                    src="images/img_vector_141.png"
                    className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[15px] 3xl:ml-[18px] lg:mt-[4px] 2xl:mt-[6px] xl:mt-[6px] 3xl:mt-[8px] w-[10%]"
                    alt="Vector"
                  />
                </Row>
                <Img
                  src="images/img_button_11.png"
                  className="button"
                  alt="button"
                />
              </Column>
            </Grid>
            <Row className="items-center lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
              <Text className="Group54" as="h5" variant="h5">
                <span className="text-gray_500 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                  Showing{" "}
                </span>
                <span className="text-indigo_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                  1-5
                </span>
                <span className="text-indigo_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                  {" "}
                </span>
                <span className="text-gray_500 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                  from
                </span>
                <span className="text-indigo_900 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                  {" "}
                  100{" "}
                </span>
                <span className="text-gray_500 font-poppins lg:text-[9px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px]">
                  data
                </span>
              </Text>
              <Img
                src="images/img_vector_142.png"
                className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[515px] xl:ml-[645px] 2xl:ml-[725px] 3xl:ml-[870px] w-[1%]"
                alt="Vector"
              />
              <Food className="items-center justify-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[12%]" />
              <Img
                src="images/img_vector_143.png"
                className="Vector11"
                alt="Vector"
              />
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default TeachersPage;
