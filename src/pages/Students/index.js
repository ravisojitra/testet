import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  CheckBox,
  Stack,
  List,
  Line,
  Button,
} from "components";
import TeacherDetails from "components/Row/TeacherDetails";
import TeacherDetails0 from "components/Column/TeacherDetails0";
import AddNewTeachermenu from "components/Row/AddNewTeachermenu";
import Teachersstudentmenu from "components/Row/Teachersstudentmenu";
import Food from "components/Row/Food";

const StudentsPage = () => {
  return (
    <>
      <Column className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-between w-[97%]">
          <aside className="items-center w-[18%]">
            <Column className="">
              <Column className="bg-indigo_500 justify-start xl:pb-[114px] 2xl:pb-[129px] 3xl:pb-[154px] lg:pb-[91px] lg:pt-[26px] xl:pt-[33px] 2xl:pt-[37px] 3xl:pt-[45px] w-[100%]">
                <Column className="justify-start w-[87%]">
                  <TeacherDetails className="items-center w-[78%]" />
                  <Column className="items-center lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] w-[100%]">
                    <Row className="items-center lg:pl-[15px] xl:pl-[19px] 2xl:pl-[21px] 3xl:pl-[26px] xl:py-[10px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] shadow-bs w-[100%]">
                      <Img
                        src="images/img_vector.png"
                        className="Vector"
                        alt="Vector"
                      />
                      <Text className="Dashboard" as="h5" variant="h5">
                        Dashboard
                      </Text>
                    </Row>
                    <Row className="bg-gray_100 items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:pl-[15px] xl:pl-[19px] 2xl:pl-[21px] 3xl:pl-[26px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[100%]">
                      <Img
                        src="images/img_vector_1.png"
                        className="lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[34px] w-[11%]"
                        alt="Vector"
                      />
                      <Text className="students" as="h5" variant="h5">
                        Students
                      </Text>
                    </Row>
                  </Column>
                  <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[48%]">
                    <Img
                      src="images/img_vector_2.png"
                      className="Vector2"
                      alt="Vector"
                    />
                    <Text className="Dashboard" as="h5" variant="h5">
                      Teachers
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[36%]">
                    <Img
                      src="images/img_vector_3.png"
                      className="Vector3"
                      alt="Vector"
                    />
                    <Text className="event" as="h5" variant="h5">
                      Event
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[45%]">
                    <Img
                      src="images/img_finance.png"
                      className="Finance"
                      alt="Finance"
                    />
                    <Text className="finance" as="h5" variant="h5">
                      Finance
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[34%]">
                    <Img
                      src="images/img_vector_4.png"
                      className="Vector4"
                      alt="Vector"
                    />
                    <Text className="food" as="h5" variant="h5">
                      Food
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[33%]">
                    <Img
                      src="images/img_vector_5.png"
                      className="Vector5"
                      alt="Vector"
                    />
                    <Text className="Dashboard" as="h5" variant="h5">
                      User
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[36%]">
                    <Img
                      src="images/img_vector_6.png"
                      className="Vector6"
                      alt="Vector"
                    />
                    <Text className="Chat" as="h5" variant="h5">
                      Chat
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[66%]">
                    <Img
                      src="images/img_vector_7.png"
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
            <AddNewTeachermenu className="items-start w-[100%]" />
            <Teachersstudentmenu className="items-center lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]" />
            <Column className="bg-white_A700 items-center justify-center lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[100%]">
              <Row className="items-start w-[96%]">
                <CheckBox
                  className="font-semibold 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-indigo_900"
                  inputClassName="h-[24px] mr-[5px] w-[24px]"
                  name="Name"
                  label="Name"
                ></CheckBox>
                <Text
                  className="font-semibold lg:ml-[134px] xl:ml-[168px] 2xl:ml-[189px] 3xl:ml-[226px] mt-[2px] text-indigo_900 w-[auto]"
                  variant="body1"
                >
                  ID
                </Text>
                <Text
                  className="font-semibold xl:ml-[108px] 2xl:ml-[121px] 3xl:ml-[145px] lg:ml-[86px] mt-[2px] text-indigo_900 w-[auto]"
                  variant="body1"
                >
                  Date
                </Text>
                <Text
                  className="font-semibold xl:ml-[104px] 2xl:ml-[117px] 3xl:ml-[140px] lg:ml-[83px] mt-[2px] text-indigo_900 w-[auto]"
                  variant="body1"
                >
                  Parent Name
                </Text>
                <Text
                  className="font-semibold lg:ml-[50px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] mt-[2px] text-indigo_900 w-[auto]"
                  variant="body1"
                >
                  City
                </Text>
                <Text
                  className="font-semibold 3xl:ml-[104px] lg:ml-[61px] xl:ml-[77px] 2xl:ml-[87px] mt-[2px] text-indigo_900 w-[auto]"
                  variant="body1"
                >
                  Contact
                </Text>
                <Text
                  className="font-semibold 3xl:ml-[112px] lg:ml-[66px] xl:ml-[83px] 2xl:ml-[93px] mt-[2px] text-indigo_900 w-[auto]"
                  variant="body1"
                >
                  Grade
                </Text>
                <Text
                  className="font-semibold lg:ml-[46px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] mt-[2px] text-indigo_900 w-[auto]"
                  variant="body1"
                >
                  Action
                </Text>
              </Row>
              <Column className="items-center justify-start lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
                <div className="bg-gray_300 h-[1px] w-[100%]"></div>
                <Stack className="lg:h-[362px] xl:h-[452px] 2xl:h-[509px] 3xl:h-[610px] w-[100%]">
                  <div className="absolute bg-gray_300 h-[1px] top-[17%] w-[100%]"></div>
                  <div className="absolute bg-gray_300 h-[1px] inset-y-[50%] w-[100%]"></div>
                  <div className="absolute bg-gray_300 h-[1px] top-[33%] w-[100%]"></div>
                  <div className="absolute bg-gray_300 bottom-[33%] h-[1px] w-[100%]"></div>
                  <div className="absolute bg-gray_300 bottom-[17%] h-[1px] w-[100%]"></div>
                  <List
                    className="absolute gap-[0] min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="bg-white_A700 items-center my-[1px] w-[100%]">
                      <Row className="items-center justify-between w-[9%]">
                        <Line className="bg-indigo_500 3xl:h-[101px] lg:h-[60px] xl:h-[75px] 2xl:h-[85px] w-[5px]" />
                        <Button
                          className="flex lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                          shape="icbRoundedBorder4"
                          size="smIcn"
                          variant="icbFillIndigo500"
                        >
                          <Img
                            src="images/img_checkedbox.png"
                            className="flex items-center justify-center"
                            alt="Checkedbox"
                          />
                        </Button>
                        <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
                      </Row>
                      <Text className="SamantaWilliam" as="h5" variant="h5">
                        Samanta William
                      </Text>
                      <Text
                        className="font-semibold lg:ml-[37px] xl:ml-[46px] 2xl:ml-[52px] 3xl:ml-[63px] text-indigo_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        #123456789
                      </Text>
                      <Row className="items-center justify-center lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] w-[53%]">
                        <Text className="March252021" variant="body1">
                          March 25, 2021
                        </Text>
                        <Text className="ManaWilliam" variant="body1">
                          Mana William{" "}
                        </Text>
                        <Text
                          className="lg:ml-[49px] xl:ml-[62px] 2xl:ml-[69px] 3xl:ml-[83px] Group54"
                          variant="body1"
                        >
                          Jakarta
                        </Text>
                        <Img
                          src="images/img_contact.png"
                          className="contact"
                          alt="contact"
                        />
                        <Button
                          className="font-normal lg:ml-[46px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[10%]"
                          shape="CircleBorder20"
                          size="sm"
                          variant="FillDeeporange300"
                        >
                          VII A
                        </Button>
                      </Row>
                      <Img
                        src="images/img_vector_9.png"
                        className="Vector8"
                        alt="Vector"
                      />
                    </Row>
                    <Row className="bg-white_A700 items-center mb-[1px] mt-[0.5px] lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] w-[100%]">
                      <div className="border-2 border-indigo_100 border-solid lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius4 lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"></div>
                      <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
                      <Text className="SamantaWilliam" as="h5" variant="h5">
                        Tony Soap
                      </Text>
                      <Text
                        className="font-semibold 2xl:ml-[101px] 3xl:ml-[121px] lg:ml-[72px] xl:ml-[90px] text-indigo_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        #123456789
                      </Text>
                      <Text className="March2520211" variant="body1">
                        March 25, 2021
                      </Text>
                      <Text className="ManaWilliam" variant="body1">
                        James Soap
                      </Text>
                      <Row className="items-center justify-center lg:ml-[53px] xl:ml-[66px] 2xl:ml-[75px] 3xl:ml-[90px] w-[28%]">
                        <Text className="Group54" variant="body1">
                          Jakarta
                        </Text>
                        <Img
                          src="images/img_contact_1.png"
                          className="contact1"
                          alt="contact"
                        />
                        <Button
                          className="font-normal lg:ml-[46px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[20%]"
                          shape="CircleBorder20"
                          size="sm"
                          variant="FillYellow700"
                        >
                          VII B
                        </Button>
                      </Row>
                      <Img
                        src="images/img_vector_10.png"
                        className="Vector9"
                        alt="Vector"
                      />
                    </Row>
                    <Row className="bg-white_A700 items-center mb-[1px] mt-[0.5px] w-[100%]">
                      <Row className="items-center justify-between w-[9%]">
                        <Line className="bg-indigo_500 3xl:h-[101px] lg:h-[60px] xl:h-[75px] 2xl:h-[85px] w-[5px]" />
                        <Button
                          className="flex lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                          shape="icbRoundedBorder4"
                          size="smIcn"
                          variant="icbFillIndigo500"
                        >
                          <Img
                            src="images/img_checkedbox_1.png"
                            className="flex items-center justify-center"
                            alt="Checkedbox"
                          />
                        </Button>
                        <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
                      </Row>
                      <Text className="SamantaWilliam" as="h5" variant="h5">
                        Karen Hope
                      </Text>
                      <Text
                        className="font-semibold 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] text-indigo_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        #123456789
                      </Text>
                      <Text className="March2520211" variant="body1">
                        March 25, 2021
                      </Text>
                      <Text className="ManaWilliam" variant="body1">
                        Justin Hope
                      </Text>
                      <Row className="items-center justify-center lg:ml-[56px] xl:ml-[70px] 2xl:ml-[79px] 3xl:ml-[95px] w-[28%]">
                        <Text className="Group54" variant="body1">
                          Jakarta
                        </Text>
                        <Img
                          src="images/img_contact_2.png"
                          className="contact1"
                          alt="contact"
                        />
                        <Button
                          className="font-normal lg:ml-[46px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[20%]"
                          shape="CircleBorder20"
                          size="sm"
                          variant="FillIndigo500"
                        >
                          VII C
                        </Button>
                      </Row>
                      <Img
                        src="images/img_vector_11.png"
                        className="Vector8"
                        alt="Vector"
                      />
                    </Row>
                    <Row className="bg-white_A700 items-center mb-[1px] mt-[0.5px] lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] w-[100%]">
                      <div className="border-2 border-indigo_100 border-solid lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius4 lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"></div>
                      <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
                      <Text className="SamantaWilliam" as="h5" variant="h5">
                        Jordan Nico
                      </Text>
                      <Text
                        className="font-semibold 3xl:ml-[108px] lg:ml-[64px] xl:ml-[80px] 2xl:ml-[90px] text-indigo_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        #123456789
                      </Text>
                      <Row className="items-center justify-center lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] w-[54%]">
                        <Text className="March252021" variant="body1">
                          March 25, 2021
                        </Text>
                        <Text className="ManaWilliam" variant="body1">
                          Amanda Nico
                        </Text>
                        <Text
                          className="lg:ml-[49px] xl:ml-[61px] 2xl:ml-[69px] 3xl:ml-[82px] Group54"
                          variant="body1"
                        >
                          Jakarta
                        </Text>
                        <Img
                          src="images/img_contact_3.png"
                          className="contact"
                          alt="contact"
                        />
                        <Button
                          className="font-normal lg:ml-[46px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[10%]"
                          shape="CircleBorder20"
                          size="sm"
                          variant="FillYellow700"
                        >
                          VII A
                        </Button>
                      </Row>
                      <Img
                        src="images/img_vector_12.png"
                        className="Vector9"
                        alt="Vector"
                      />
                    </Row>
                    <Row className="bg-white_A700 items-center mb-[1px] mt-[0.5px] w-[100%]">
                      <Row className="items-center justify-between w-[9%]">
                        <Line className="bg-indigo_500 3xl:h-[101px] lg:h-[60px] xl:h-[75px] 2xl:h-[85px] w-[5px]" />
                        <Button
                          className="flex lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                          shape="icbRoundedBorder4"
                          size="smIcn"
                          variant="icbFillIndigo500"
                        >
                          <Img
                            src="images/img_checkedbox_2.png"
                            className="flex items-center justify-center"
                            alt="Checkedbox"
                          />
                        </Button>
                        <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
                      </Row>
                      <Text className="SamantaWilliam" as="h5" variant="h5">
                        Nadila Adja
                      </Text>
                      <Text
                        className="font-semibold 3xl:ml-[111px] lg:ml-[66px] xl:ml-[82px] 2xl:ml-[93px] text-indigo_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        #123456789
                      </Text>
                      <Text className="March2520211" variant="body1">
                        March 25, 2021
                      </Text>
                      <Text className="ManaWilliam" variant="body1">
                        Jack Adja
                      </Text>
                      <Row className="items-center justify-center 3xl:ml-[107px] lg:ml-[63px] xl:ml-[79px] 2xl:ml-[89px] w-[28%]">
                        <Text className="Group54" variant="body1">
                          Jakarta
                        </Text>
                        <Img
                          src="images/img_contact_4.png"
                          className="contact1"
                          alt="contact"
                        />
                        <Button
                          className="font-normal lg:ml-[46px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[20%]"
                          shape="CircleBorder20"
                          size="sm"
                          variant="FillDeeporange300"
                        >
                          VII A
                        </Button>
                      </Row>
                      <Img
                        src="images/img_vector_13.png"
                        className="Vector8"
                        alt="Vector"
                      />
                    </Row>
                    <Row className="bg-white_A700 items-center mb-[1px] mt-[0.5px] lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] w-[100%]">
                      <div className="border-2 border-indigo_100 border-solid lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] rounded-radius4 lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"></div>
                      <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
                      <Text className="SamantaWilliam" as="h5" variant="h5">
                        Johnny Ahmad
                      </Text>
                      <Text
                        className="font-semibold lg:ml-[47px] xl:ml-[59px] 2xl:ml-[66px] 3xl:ml-[80px] text-indigo_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        #123456789
                      </Text>
                      <Row className="items-center justify-center lg:ml-[34px] xl:ml-[42px] 2xl:ml-[48px] 3xl:ml-[57px] w-[54%]">
                        <Text className="March252021" variant="body1">
                          March 25, 2021
                        </Text>
                        <Text className="ManaWilliam" variant="body1">
                          Danny Ahmad
                        </Text>
                        <Text
                          className="lg:ml-[46px] xl:ml-[58px] 2xl:ml-[65px] 3xl:ml-[78px] Group54"
                          variant="body1"
                        >
                          Jakarta
                        </Text>
                        <Img
                          src="images/img_contact_5.png"
                          className="contact"
                          alt="contact"
                        />
                        <Button
                          className="font-normal lg:ml-[46px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] not-italic 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[10%]"
                          shape="CircleBorder20"
                          size="sm"
                          variant="FillYellow700"
                        >
                          VII A
                        </Button>
                      </Row>
                      <Img
                        src="images/img_vector_14.png"
                        className="Vector9"
                        alt="Vector"
                      />
                    </Row>
                  </List>
                </Stack>
                <Row className="items-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[96%]">
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
                    src="images/img_vector_15.png"
                    className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[509px] xl:ml-[637px] 2xl:ml-[716px] 3xl:ml-[859px] w-[1%]"
                    alt="Vector"
                  />
                  <Food className="items-center justify-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[13%]" />
                  <Img
                    src="images/img_vector_16.png"
                    className="Vector11"
                    alt="Vector"
                  />
                </Row>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default StudentsPage;
