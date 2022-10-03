import React from "react";

import {
  Column,
  Row,
  Button,
  Text,
  Input,
  Line,
  Grid,
  Radio,
  Img,
} from "components";
import AddNewStudent from "components/Column/AddNewStudent";
import TeacherDetails0 from "components/Column/TeacherDetails0";
import AddNewTeachermenu from "components/Row/AddNewTeachermenu";
import AddNewStudentphoto from "components/Column/AddNewStudentphoto";
import AddNewStudent5 from "components/Column/AddNewStudent5";

const AddNewStudentPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-between w-[97%]">
          <aside className="items-center w-[18%]">
            <Column className="">
              <Column className="bg-indigo_500 justify-start lg:pb-[371px] xl:pb-[465px] 2xl:pb-[523px] 3xl:pb-[627px] lg:pt-[26px] xl:pt-[33px] 2xl:pt-[37px] 3xl:pt-[45px] w-[100%]">
                <AddNewStudent className="justify-start w-[87%]" />
                <TeacherDetails0 className="justify-start lg:mt-[54px] xl:mt-[68px] 2xl:mt-[76px] 3xl:mt-[91px] w-[85%]" />
              </Column>
            </Column>
          </aside>
          <Column className="w-[79%]">
            <Column className="items-center w-[100%]">
              <AddNewTeachermenu className="items-start w-[100%]" />
              <Column className="bg-white_A700 items-center justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:pb-[21px] xl:pb-[26px] 2xl:pb-[30px] 3xl:pb-[36px] rounded-radius20 w-[100%]">
                <Button
                  className="font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                  shape="CustomBorderTL20"
                  size="md"
                  variant="FillIndigo500"
                >
                  Student Details
                </Button>
                <Row className="items-start lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[95%]">
                  <AddNewStudentphoto className="justify-start w-[14%]" />
                  <Column className="justify-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] mt-[3px] w-[85%]">
                    <Column className="font-poppins items-center w-[100%]">
                      <Row className="items-center justify-between w-[100%]">
                        <Column className="w-[49%]">
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
                              placeholder="Samantha"
                              shape="RoundedBorder5"
                              size="sm"
                              variant="OutlineIndigo100"
                            ></Input>
                          </Column>
                        </Column>
                        <Column className="w-[49%]">
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
                              placeholder="William"
                              shape="RoundedBorder5"
                              size="sm"
                              variant="OutlineIndigo100"
                            ></Input>
                          </Column>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                        <Column className="w-[49%]">
                          <Text
                            className="font-semibold text-indigo_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Date & Place of Birth *
                          </Text>
                          <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                            <Row className="items-center justify-between w-[100%]">
                              <Input
                                className="placeholder:text-gray_500 form"
                                wrapClassName="w-[48%]"
                                name="form"
                                placeholder="24 Februari 1997"
                                shape="RoundedBorder5"
                                size="sm"
                                variant="OutlineIndigo100"
                              ></Input>
                              <Input
                                className="placeholder:text-gray_500 form"
                                wrapClassName="w-[48%]"
                                name="form"
                                placeholder="Jakarta"
                                shape="RoundedBorder5"
                                size="sm"
                                variant="OutlineIndigo100"
                              ></Input>
                            </Row>
                          </Column>
                        </Column>
                        <Column className="w-[49%]">
                          <Text
                            className="font-semibold text-indigo_900 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Parent Name *
                          </Text>
                          <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
                            <Button
                              className="font-normal not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[100%]"
                              shape="RoundedBorder5"
                              size="md"
                              variant="OutlineIndigo100"
                            >
                              Mana William
                            </Button>
                          </Column>
                        </Column>
                      </Row>
                      <Row className="items-center justify-between lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                        <Column className="w-[49%]">
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
                              placeholder="william@mail.com"
                              shape="RoundedBorder5"
                              size="sm"
                              variant="OutlineIndigo100"
                            ></Input>
                          </Column>
                        </Column>
                        <Column className="w-[49%]">
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
                      </Row>
                    </Column>
                    <Text
                      className="font-poppins font-semibold ml-[1px] lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] text-indigo_900 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      Address *
                    </Text>
                    <Row className="bg-white_A700 border border-indigo_100 border-solid font-poppins items-start ml-[1px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] 3xl:pl-[11px] lg:pl-[6px] xl:pl-[8px] 2xl:pl-[9px] 3xl:py-[11px] lg:py-[6px] xl:py-[8px] 2xl:py-[9px] rounded-radius5 w-[49%]">
                      <Text
                        className="font-normal leading-[normal] mt-[2px] not-italic text-gray_500 w-[98%]"
                        variant="body1"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.{" "}
                      </Text>
                      <Line className="bg-gray_101 lg:h-[38px] xl:h-[47px] 2xl:h-[53px] 3xl:h-[64px] lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[2px]" />
                    </Row>
                    <Text
                      className="font-dmsans lg:ml-[284px] xl:ml-[355px] 2xl:ml-[400px] 3xl:ml-[479px] 3xl:mt-[10px] lg:mt-[6px] xl:mt-[8px] 2xl:mt-[9px] not-italic text-gray_500 w-[auto]"
                      variant="body2"
                    >
                      0/2000
                    </Text>
                  </Column>
                </Row>
              </Column>
              <Column className="bg-white_A700 justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:pb-[18px] xl:pb-[22px] 2xl:pb-[25px] 3xl:pb-[30px] rounded-radius20 w-[100%]">
                <Column className="items-center w-[100%]">
                  <Button
                    className="font-bold lg:text-[12px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-center w-[100%]"
                    shape="CustomBorderTL20"
                    size="md"
                    variant="FillIndigo500"
                  >
                    Parent Details
                  </Button>
                </Column>
                <Column className="justify-start lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[80%]">
                  <Column className="items-center w-[100%]">
                    <Grid className="lg:gap-[12px] xl:gap-[16px] 2xl:gap-[18px] 3xl:gap-[21px] grid grid-cols-2 w-[100%]">
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
                            placeholder="Mana"
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
                            placeholder="William"
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
                            placeholder="Mana@mail.com"
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
                  <Row className="items-start ml-[1px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[67%]">
                    <Column className="justify-start w-[73%]">
                      <Text
                        className="font-semibold text-indigo_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Address *
                      </Text>
                      <Column className="items-center xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[100%]">
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
                    <Column className="justify-start lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] w-[24%]">
                      <Column className="items-center w-[100%]">
                        <Text
                          className="font-semibold text-indigo_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Payments *
                        </Text>
                      </Column>
                      <Row className="items-start lg:mt-[11px] xl:mt-[14px] 2xl:mt-[15px] 3xl:mt-[18px] w-[77%]">
                        <Radio
                          value="Cash"
                          className="font-normal not-italic pl-[4px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-gray_500"
                          inputClassName="mr-[5px] w-[undefinedpx]"
                          checked={false}
                          name="Cash"
                          label="Cash"
                          size="sm"
                        ></Radio>
                        <Img
                          src="images/img_vector_91.png"
                          className="xl:h-[10px] 2xl:h-[11px] 3xl:h-[13px] lg:h-[8px] lg:ml-[11px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:mt-[2px] 2xl:mt-[3px] xl:mt-[3px] 3xl:mt-[4px] 2xl:w-[10px] 3xl:w-[12px] lg:w-[7px] xl:w-[9px]"
                          alt="Vector"
                        />
                        <Text
                          className="lg:ml-[4px] 2xl:ml-[6px] xl:ml-[6px] 3xl:ml-[8px] mt-[3px] March252021"
                          variant="body1"
                        >
                          Debit
                        </Text>
                      </Row>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </Column>
            <AddNewStudent5 className="items-end lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default AddNewStudentPage;
