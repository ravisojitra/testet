import React from "react";

import { Column, Row, Button, Grid, Text, Input, Line } from "components";
import AddNewStudent from "components/Column/AddNewStudent";
import TeacherDetails0 from "components/Column/TeacherDetails0";
import AddNewTeachermenu from "components/Row/AddNewTeachermenu";
import AddNewStudentphoto from "components/Column/AddNewStudentphoto";
import AddNewStudent5 from "components/Column/AddNewStudent5";

const AddNewTeacherPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-between w-[97%]">
          <aside className="items-center w-[18%]">
            <Column className="">
              <Column className="bg-indigo_500 justify-start lg:pb-[222px] xl:pb-[278px] 2xl:pb-[312px] 3xl:pb-[375px] lg:pt-[26px] xl:pt-[33px] 2xl:pt-[37px] 3xl:pt-[45px] w-[100%]">
                <AddNewStudent className="justify-start w-[87%]" />
                <TeacherDetails0 className="justify-start lg:mt-[54px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] w-[85%]" />
              </Column>
            </Column>
          </aside>
          <Column className="w-[79%]">
            <Column className="items-center w-[100%]">
              <AddNewTeachermenu className="items-start w-[100%]" />
              <Column className="bg-white_A700 justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:pb-[30px] xl:pb-[38px] 2xl:pb-[42px] 3xl:pb-[51px] rounded-radius20 w-[100%]">
                <Column className="items-center w-[100%]">
                  <Button
                    className="font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                    shape="CustomBorderTL20"
                    size="md"
                    variant="FillIndigo500"
                  >
                    Personal Details
                  </Button>
                </Column>
                <Column className="justify-start lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[86%]">
                  <Column className="items-center w-[100%]">
                    <Grid className="lg:gap-[21px] xl:gap-[26px] 2xl:gap-[30px] 3xl:gap-[36px] grid grid-cols-2 w-[100%]">
                      <Column className="justify-start w-[100%]">
                        <Text
                          className="font-semibold text-indigo_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          First Name *
                        </Text>
                        <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                          <Input
                            className="placeholder:text-gray_500 form"
                            wrapClassName="w-[100%]"
                            name="form"
                            placeholder="Maria"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineIndigo100"
                          ></Input>
                        </Column>
                      </Column>
                      <Column className="justify-start w-[100%]">
                        <Text
                          className="font-semibold text-indigo_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Last Name *
                        </Text>
                        <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                          <Input
                            className="placeholder:text-gray_500 form"
                            wrapClassName="w-[100%]"
                            name="form"
                            placeholder="Historia"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineIndigo100"
                          ></Input>
                        </Column>
                      </Column>
                      <Column className="justify-start w-[100%]">
                        <Text
                          className="font-semibold text-indigo_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Email *
                        </Text>
                        <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                          <Input
                            className="placeholder:text-gray_500 form"
                            wrapClassName="w-[100%]"
                            name="form"
                            placeholder="Historia@mail.com"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineIndigo100"
                          ></Input>
                        </Column>
                      </Column>
                      <Column className="justify-start w-[100%]">
                        <Text
                          className="font-semibold text-indigo_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Phone *
                        </Text>
                        <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                          <Input
                            className="placeholder:text-gray_500 form"
                            wrapClassName="w-[100%]"
                            name="form"
                            placeholder="+1234567890"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineIndigo100"
                          ></Input>
                        </Column>
                      </Column>
                    </Grid>
                  </Column>
                  <Row className="items-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[67%]">
                    <Column className="justify-start w-[73%]">
                      <Text
                        className="font-semibold text-indigo_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Address *
                      </Text>
                      <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] pr-[1px] w-[100%]">
                        <Row className="bg-white_A700 border border-indigo_100 border-solid items-start justify-end pr-[4px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] rounded-radius5 w-[100%]">
                          <Text className="Group16" variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat.{" "}
                          </Text>
                          <Line className="bg-gray_101 lg:h-[38px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[64px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[2px]" />
                        </Row>
                      </Column>
                      <Column className="font-dmsans items-end 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] w-[100%]">
                        <Text
                          className="not-italic text-gray_500 w-[auto]"
                          variant="body2"
                        >
                          0/2000
                        </Text>
                      </Column>
                    </Column>
                    <AddNewStudentphoto className="justify-start lg:ml-[20px] xl:ml-[26px] 2xl:ml-[29px] 3xl:ml-[35px] w-[23%]" />
                  </Row>
                  <Column className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                    <Row className="items-center justify-between w-[100%]">
                      <Column className="w-[48%]">
                        <Text
                          className="font-semibold text-indigo_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Date of Birth *
                        </Text>
                        <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                          <Input
                            className="placeholder:text-gray_500 form"
                            wrapClassName="w-[100%]"
                            name="form"
                            placeholder="24 Februari 1997"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineIndigo100"
                          ></Input>
                        </Column>
                      </Column>
                      <Column className="w-[48%]">
                        <Text
                          className="font-semibold text-indigo_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Place of Birth *
                        </Text>
                        <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                          <Input
                            className="placeholder:text-gray_500 form"
                            wrapClassName="w-[100%]"
                            name="form"
                            placeholder="Jakarta, Indonesia"
                            shape="RoundedBorder5"
                            size="sm"
                            variant="OutlineIndigo100"
                          ></Input>
                        </Column>
                      </Column>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-white_A700 justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:pb-[21px] xl:pb-[26px] 2xl:pb-[30px] 3xl:pb-[36px] rounded-radius20 w-[100%]">
                <Column className="items-center w-[100%]">
                  <Button
                    className="font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                    shape="CustomBorderTL20"
                    size="md"
                    variant="FillIndigo500"
                  >
                    Education
                  </Button>
                </Column>
                <Column className="items-center justify-start lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[86%]">
                  <Row className="items-center justify-between w-[100%]">
                    <Column className="w-[48%]">
                      <Text
                        className="font-semibold text-indigo_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        University *
                      </Text>
                      <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Input
                          className="placeholder:text-gray_500 form"
                          wrapClassName="w-[100%]"
                          name="form"
                          placeholder="University Akademi Historia"
                          shape="RoundedBorder5"
                          size="sm"
                          variant="OutlineIndigo100"
                        ></Input>
                      </Column>
                    </Column>
                    <Column className="w-[48%]">
                      <Text
                        className="font-semibold text-indigo_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Degree *
                      </Text>
                      <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Input
                          className="placeholder:text-gray_500 form"
                          wrapClassName="w-[100%]"
                          name="form"
                          placeholder="History Major"
                          shape="RoundedBorder5"
                          size="sm"
                          variant="OutlineIndigo100"
                        ></Input>
                      </Column>
                    </Column>
                  </Row>
                  <Row className="items-center justify-between lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                    <Column className="w-[48%]">
                      <Text
                        className="font-semibold text-indigo_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Start & End Date *
                      </Text>
                      <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Button
                            className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[48%]"
                            shape="RoundedBorder5"
                            size="md"
                            variant="OutlineIndigo100"
                          >
                            September 2013
                          </Button>
                          <Button
                            className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[48%]"
                            shape="RoundedBorder5"
                            size="md"
                            variant="OutlineIndigo100"
                          >
                            September 2017
                          </Button>
                        </Row>
                      </Column>
                    </Column>
                    <Column className="w-[48%]">
                      <Text
                        className="font-semibold text-indigo_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        City *
                      </Text>
                      <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                        <Input
                          className="placeholder:text-gray_500 form"
                          wrapClassName="w-[100%]"
                          name="form"
                          placeholder="Yogyakarta, Indonesia"
                          shape="RoundedBorder5"
                          size="sm"
                          variant="OutlineIndigo100"
                        ></Input>
                      </Column>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </Column>
            <AddNewStudent5 className="items-end lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] pr-[2px] w-[100%]" />
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default AddNewTeacherPage;
