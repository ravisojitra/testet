import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Input,
  Stack,
  List,
  Button,
  Line,
  RadioGroup,
  Radio,
} from "components";
import TeacherDetails from "components/Row/TeacherDetails";
import Dashboard from "components/Column/Dashboard";
import TeacherDetails0 from "components/Column/TeacherDetails0";
import { CloseSVG } from "../../assets/images/index.js";
import Chat from "components/Row/Chat";
import UserDashboardText from "components/Column/UserDashboardText";
import UserDashboardmenu from "components/Row/UserDashboardmenu";

const UserDashboardPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");
  const [inputvalue1, setInputvalue1] = React.useState("");
  const [inputvalue2, setInputvalue2] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-between w-[100%]">
          <aside className="items-center w-[18%]">
            <Column className="">
              <Column className="bg-indigo_500 justify-start lg:pb-[202px] xl:pb-[252px] 2xl:pb-[284px] 3xl:pb-[341px] lg:pt-[26px] xl:pt-[33px] 2xl:pt-[37px] 3xl:pt-[45px] w-[100%]">
                <Column className="justify-start w-[87%]">
                  <TeacherDetails className="items-center w-[78%]" />
                  <Dashboard className="items-center lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] w-[100%]" />
                  <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[47%]">
                    <Img
                      src="images/img_vector_159.png"
                      className="Vector2"
                      alt="Vector"
                    />
                    <Text className="Dashboard" as="h5" variant="h5">
                      Students
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[48%]">
                    <Img
                      src="images/img_vector_160.png"
                      className="Vector2"
                      alt="Vector"
                    />
                    <Text className="Dashboard" as="h5" variant="h5">
                      Teachers
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[36%]">
                    <Img
                      src="images/img_vector_161.png"
                      className="Vector3"
                      alt="Vector"
                    />
                    <Text className="event" as="h5" variant="h5">
                      Event
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[45%]">
                    <Img
                      src="images/img_finance_12.png"
                      className="Finance"
                      alt="Finance"
                    />
                    <Text className="finance" as="h5" variant="h5">
                      Finance
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[34%]">
                    <Img
                      src="images/img_vector_162.png"
                      className="Vector4"
                      alt="Vector"
                    />
                    <Text className="food" as="h5" variant="h5">
                      Food
                    </Text>
                  </Row>
                  <Column className="items-center lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                    <Row className="bg-gray_100 items-center lg:pl-[15px] xl:pl-[19px] 2xl:pl-[21px] 3xl:pl-[26px] xl:py-[11px] 2xl:py-[12px] 3xl:py-[15px] lg:py-[9px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[100%]">
                      <Img
                        src="images/img_vector_163.png"
                        className="lg:h-[20px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] w-[11%]"
                        alt="Vector"
                      />
                      <Text className="students" as="h5" variant="h5">
                        User
                      </Text>
                    </Row>
                  </Column>
                  <Row className="items-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[36%]">
                    <Img
                      src="images/img_vector_164.png"
                      className="Vector6"
                      alt="Vector"
                    />
                    <Text className="Chat" as="h5" variant="h5">
                      Chat
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[66%]">
                    <Img
                      src="images/img_vector_165.png"
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
          <Column className="items-center w-[52%]">
            <Row className="items-start justify-between w-[100%]">
              <Text className="text-indigo_900 w-[auto]" as="h1" variant="h1">
                User Dashboard
              </Text>
              <Input
                value={inputvalue}
                onChange={(e) => setInputvalue(e?.target?.value)}
                className="font-normal p-[0] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                wrapClassName="flex w-[35%]"
                name="SearchBar"
                placeholder="Search here..."
                prefix={
                  <Img
                    src="images/img_vector_166.png"
                    className="cursor-pointer lg:w-[12px] lg:ml-[10px] lg:mr-[18px] xl:w-[15px] xl:ml-[12px] xl:mr-[23px] 2xl:w-[17px] 2xl:ml-[14px] 2xl:mr-[26px] 3xl:w-[21px] 3xl:ml-[17px] 3xl:mr-[31px] rounded-radius135 my-[auto]"
                    alt="Vector"
                  />
                }
                suffix={
                  inputvalue?.length > 0 ? (
                    <CloseSVG
                      color="#a098ae"
                      className="cursor-pointer lg:w-[12px] lg:ml-[5px] lg:mr-[11px] xl:w-[15px] xl:ml-[6px] xl:mr-[14px] 2xl:w-[17px] 2xl:ml-[7px] 2xl:mr-[16px] 3xl:w-[21px] 3xl:ml-[9px] 3xl:mr-[19px] my-[auto]"
                      onClick={() => setInputvalue("")}
                    />
                  ) : (
                    ""
                  )
                }
                shape="srcCircleBorder30"
                size="smSrc"
                variant="srcFillWhiteA700"
              ></Input>
            </Row>
            <Column className="bg-white_A700 justify-start lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:pb-[15px] xl:pb-[19px] 2xl:pb-[21px] 3xl:pb-[26px] rounded-radius20 w-[100%]">
              <Column className="items-center w-[100%]">
                <Stack className="lg:h-[105px] xl:h-[131px] 2xl:h-[148px] 3xl:h-[177px] w-[100%]">
                  <Img
                    src="images/img_vector_167.png"
                    className="absolute bottom-[5%] lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] right-[3%] w-[2%]"
                    alt="Vector"
                  />
                  <Stack className="absolute lg:h-[105px] xl:h-[131px] 2xl:h-[148px] 3xl:h-[177px] w-[100%]">
                    <Stack className="absolute bg-indigo_500 2xl:h-[106px] 3xl:h-[127px] lg:h-[75px] xl:h-[94px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] shadow-bs top-[0] w-[100%]">
                      <Img
                        src="images/img_masking_2.png"
                        className="absolute 2xl:h-[106px] 3xl:h-[127px] lg:h-[75px] xl:h-[94px] w-[100%]"
                        alt="Masking"
                      />
                    </Stack>
                    <div className="absolute bg-indigo_100 border-8 border-solid border-white_A700 bottom-[0] xl:h-[110px] 2xl:h-[124px] 3xl:h-[148px] lg:h-[88px] left-[3%] rounded-radius50 xl:w-[109px] 2xl:w-[123px] 3xl:w-[147px] lg:w-[87px]"></div>
                  </Stack>
                </Stack>
              </Column>
              <Row className="items-start lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[80%]">
                <Column className="justify-start w-[28%]">
                  <Column className="items-center w-[100%]">
                    <Text
                      className="text-indigo_900 w-[auto]"
                      as="h2"
                      variant="h2"
                    >
                      Nabila Azalea
                    </Text>
                  </Column>
                  <Text
                    className="font-semibold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] text-indigo_900 w-[auto]"
                    as="h5"
                    variant="h5"
                  >
                    Admin
                  </Text>
                  <Row className="items-center ml-[4px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[85%]">
                    <Img
                      src="images/img_vector_168.png"
                      className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] w-[8%]"
                      alt="Vector"
                    />
                    <Text
                      className="3xl:ml-[10px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] March252021"
                      as="h5"
                      variant="h5"
                    >
                      Jakarta, Indonesia
                    </Text>
                  </Row>
                </Column>
                <List
                  className="lg:gap-[56px] xl:gap-[70px] 2xl:gap-[78px] 3xl:gap-[94px] grid grid-cols-2 min-h-[auto] lg:ml-[35px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] lg:mt-[14px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] w-[64%]"
                  orientation="horizontal"
                >
                  <Column className="justify-start w-[100%]">
                    <Text className="March252021" as="h5" variant="h5">
                      Phone
                    </Text>
                    <Column className="items-center xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]">
                      <Row className="items-center w-[100%]">
                        <Button
                          className="flex items-center justify-center rounded-radius50 Finance"
                          size="mdIcn"
                          variant="icbFillDeeporange300"
                        >
                          <Img
                            src="images/img_phone_2.png"
                            className="flex items-center justify-center"
                            alt="Phone"
                          />
                        </Button>
                        <Text className="test_1234567890" as="h5" variant="h5">
                          +12 345 6789 0
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                  <Column className="justify-start w-[100%]">
                    <Text className="March252021" as="h5" variant="h5">
                      Email
                    </Text>
                    <Column className="items-center xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] w-[100%]">
                      <Row className="items-center w-[100%]">
                        <Button
                          className="flex items-center justify-center rounded-radius50 Finance"
                          size="mdIcn"
                          variant="icbFillDeeporange300"
                        >
                          <Img
                            src="images/img_mail_2.png"
                            className="flex items-center justify-center"
                            alt="Mail"
                          />
                        </Button>
                        <Text className="test_1234567890" as="h5" variant="h5">
                          jordan@mail.com
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </List>
              </Row>
            </Column>
            <Row className="items-center justify-between lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
              <Column className="bg-white_A700 items-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius20 w-[46%]">
                <Row className="items-start justify-between w-[100%]">
                  <Column className="justify-start w-[45%]">
                    <Text
                      className="text-indigo_900 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Contacts
                    </Text>
                    <Column className="items-center mt-[4px] w-[100%]">
                      <Text
                        className="not-italic text-gray_500 w-[auto]"
                        as="h6"
                        variant="h6"
                      >
                        <span className="text-gray_500 font-poppins font-normal lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          You have{" "}
                        </span>
                        <span className="text-indigo_900 font-poppins font-semibold lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          741
                        </span>
                        <span className="text-gray_500 font-poppins font-normal lg:text-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px]">
                          {" "}
                          contacts
                        </span>
                      </Text>
                    </Column>
                  </Column>
                  <Button
                    className="flex lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                    shape="icbCircleBorder28"
                    size="2xlIcn"
                    variant="icbOutlinePinkA7000c"
                  >
                    <Img
                      src="images/img_btncta.png"
                      className="flex items-center justify-center lg:h-[9px] xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px]"
                      alt="btnCta"
                    />
                  </Button>
                </Row>
                <Input
                  value={inputvalue1}
                  onChange={(e) => setInputvalue1(e?.target?.value)}
                  className="font-normal p-[0] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                  wrapClassName="2xl:mt-[24px] 3xl:mt-[28px] flex lg:mt-[17px] w-[100%] xl:mt-[21px]"
                  name="SearchBar"
                  placeholder="Search here..."
                  prefix={
                    <Img
                      src="images/img_xmlid_223_1.png"
                      className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[10px] lg:mr-[18px] xl:w-[16px] xl:h-[17px] xl:ml-[12px] xl:mr-[23px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[14px] 2xl:mr-[26px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[17px] 3xl:mr-[31px] rounded-radius50 my-[auto]"
                      alt="XMLID 223"
                    />
                  }
                  suffix={
                    inputvalue1?.length > 0 ? (
                      <CloseSVG
                        color="#a098ae"
                        className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[5px] lg:mr-[11px] xl:w-[16px] xl:h-[17px] xl:ml-[6px] xl:mr-[14px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[7px] 2xl:mr-[16px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[9px] 3xl:mr-[19px] my-[auto]"
                        onClick={() => setInputvalue1("")}
                      />
                    ) : (
                      ""
                    )
                  }
                  shape="srcCircleBorder30"
                  size="smSrc"
                  variant="srcOutlineGray5001_2"
                ></Input>
                <List
                  className="gap-[0] min-h-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="Group240">
                    <div className="bg-indigo_100 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[43%]">
                      <Column className="items-center w-[100%]">
                        <Text
                          className="font-semibold text-indigo_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Samantha William
                        </Text>
                      </Column>
                      <Text className="title4" variant="body1">
                        Class VII-A
                      </Text>
                    </Column>
                    <Button
                      className="flex lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center lg:ml-[46px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                      shape="icbCircleBorder28"
                      size="lgIcn"
                      variant="icbOutlineGray5001_2"
                    >
                      <Img
                        src="images/img_mailbutton_5.png"
                        className="flex items-center justify-center"
                        alt="mailbutton"
                      />
                    </Button>
                  </Row>
                  <Row className="Group240">
                    <div className="bg-indigo_100 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[24%]">
                      <Column className="items-center w-[100%]">
                        <Text
                          className="font-semibold text-indigo_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Tony Soap
                        </Text>
                      </Column>
                      <Text className="title4" variant="body1">
                        Class VII-A
                      </Text>
                    </Column>
                    <Button
                      className="flex lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center xl:ml-[109px] 2xl:ml-[123px] 3xl:ml-[147px] lg:ml-[87px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                      shape="icbCircleBorder28"
                      size="lgIcn"
                      variant="icbOutlinePinkA7000c"
                    >
                      <Img
                        src="images/img_mailbutton_6.png"
                        className="flex items-center justify-center"
                        alt="mailbutton"
                      />
                    </Button>
                  </Row>
                  <Row className="Group240">
                    <div className="bg-indigo_100 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[27%]">
                      <Column className="items-center w-[100%]">
                        <Text
                          className="font-semibold text-indigo_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Karen Hope
                        </Text>
                      </Column>
                      <Text className="title4" variant="body1">
                        Class VII-A
                      </Text>
                    </Column>
                    <Button
                      className="flex lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center xl:ml-[102px] 2xl:ml-[114px] 3xl:ml-[137px] lg:ml-[81px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                      shape="icbCircleBorder28"
                      size="lgIcn"
                      variant="icbOutlineGray5001_2"
                    >
                      <Img
                        src="images/img_mailbutton_7.png"
                        className="flex items-center justify-center"
                        alt="mailbutton"
                      />
                    </Button>
                  </Row>
                  <Row className="Group240">
                    <div className="bg-indigo_100 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[28%]">
                      <Column className="items-center w-[100%]">
                        <Text
                          className="font-semibold text-indigo_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Jordan Nico
                        </Text>
                      </Column>
                      <Text className="title4" variant="body1">
                        Class VII-B
                      </Text>
                    </Column>
                    <Button
                      className="flex lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center 2xl:ml-[111px] 3xl:ml-[134px] lg:ml-[79px] xl:ml-[99px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                      shape="icbCircleBorder28"
                      size="lgIcn"
                      variant="icbOutlineGray5001_2"
                    >
                      <Img
                        src="images/img_mailbutton_8.png"
                        className="flex items-center justify-center"
                        alt="mailbutton"
                      />
                    </Button>
                  </Row>
                  <Row className="Group240">
                    <div className="bg-indigo_100 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[27%]">
                      <Column className="items-center w-[100%]">
                        <Text
                          className="font-semibold text-indigo_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Nadila Adja
                        </Text>
                      </Column>
                      <Text className="title4" variant="body1">
                        Class VII-C
                      </Text>
                    </Column>
                    <Button
                      className="flex lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center xl:ml-[102px] 2xl:ml-[114px] 3xl:ml-[137px] lg:ml-[81px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                      shape="icbCircleBorder28"
                      size="lgIcn"
                      variant="icbOutlineGray5001_2"
                    >
                      <Img
                        src="images/img_mailbutton_9.png"
                        className="flex items-center justify-center"
                        alt="mailbutton"
                      />
                    </Button>
                  </Row>
                </List>
                <Button
                  className="font-semibold lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center text-indigo_500 w-[100%]"
                  shape="CircleBorder30"
                  size="lg"
                  variant="OutlinePinkA7000c1_2"
                >
                  View More
                </Button>
              </Column>
              <Column className="bg-white_A700 lg:pb-[10px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] lg:pt-[17px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] rounded-radius20 w-[50%]">
                <Text className="text-indigo_900 w-[auto]" as="h4" variant="h4">
                  Messages
                </Text>
                <Column className="items-center lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[93%]">
                  <Input
                    value={inputvalue2}
                    onChange={(e) => setInputvalue2(e?.target?.value)}
                    className="font-normal p-[0] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="flex w-[100%]"
                    name="SearchBar"
                    placeholder="Search here..."
                    prefix={
                      <Img
                        src="images/img_xmlid_223_2.png"
                        className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[10px] lg:mr-[18px] xl:w-[16px] xl:h-[17px] xl:ml-[12px] xl:mr-[23px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[14px] 2xl:mr-[26px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[17px] 3xl:mr-[31px] rounded-radius50 my-[auto]"
                        alt="XMLID 223"
                      />
                    }
                    suffix={
                      inputvalue2?.length > 0 ? (
                        <CloseSVG
                          color="#a098ae"
                          className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[5px] lg:mr-[11px] xl:w-[16px] xl:h-[17px] xl:ml-[6px] xl:mr-[14px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[7px] 2xl:mr-[16px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[9px] 3xl:mr-[19px] my-[auto]"
                          onClick={() => setInputvalue2("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcCircleBorder30"
                    size="smSrc"
                    variant="srcOutlineGray5001_2"
                  ></Input>
                  <List
                    className="gap-[0] min-h-[auto] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="Group399">
                      <div className="bg-indigo_100 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                      <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[45%]">
                        <Text
                          className="font-semibold text-indigo_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Samantha William
                        </Text>
                        <Column className="items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                          <Text className="March252021" variant="body1">
                            Lorem ipsum dolor sit amet...
                          </Text>
                        </Column>
                      </Column>
                      <Column className="lg:ml-[57px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] w-[13%]">
                        <Column className="items-center w-[100%]">
                          <Text className="March252021" variant="body1">
                            12:45 PM
                          </Text>
                        </Column>
                        <Button
                          className="flex lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius50 lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                          size="smIcn"
                          variant="icbFillDeeporange300"
                        >
                          <Img
                            src="images/img_notif_4.png"
                            className="flex items-center justify-center"
                            alt="Notif"
                          />
                        </Button>
                      </Column>
                    </Row>
                    <Line className="self-center w-[100%] h-[1px] bg-gray_101" />
                    <Row className="Group399">
                      <div className="bg-indigo_100 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                      <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[45%]">
                        <Text
                          className="font-semibold text-indigo_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Tony Soap
                        </Text>
                        <Column className="items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
                          <Text className="March252021" variant="body1">
                            Lorem ipsum dolor sit amet...
                          </Text>
                        </Column>
                      </Column>
                      <Column className="lg:ml-[57px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] w-[13%]">
                        <Column className="items-center w-[100%]">
                          <Text className="March252021" variant="body1">
                            12:45 PM
                          </Text>
                        </Column>
                        <Button
                          className="flex lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius50 lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                          size="smIcn"
                          variant="icbFillDeeporange300"
                        >
                          <Img
                            src="images/img_notif_5.png"
                            className="flex items-center justify-center"
                            alt="Notif"
                          />
                        </Button>
                      </Column>
                    </Row>
                  </List>
                  <Chat className="items-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]" />
                  <Row className="items-center lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
                    <div className="bg-indigo_100 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                    <UserDashboardText className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[45%]" />
                    <Column className="lg:ml-[57px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] w-[13%]">
                      <Column className="items-center w-[100%]">
                        <Text className="March252021" variant="body1">
                          12:45 PM
                        </Text>
                      </Column>
                      <Button
                        className="flex lg:h-[13px] xl:h-[17px] 2xl:h-[19px] 3xl:h-[22px] items-center justify-center lg:mt-[5px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] rounded-radius50 lg:w-[12px] xl:w-[16px] 2xl:w-[18px] 3xl:w-[21px]"
                        size="smIcn"
                        variant="icbFillDeeporange300"
                      >
                        <Img
                          src="images/img_notif_6.png"
                          className="flex items-center justify-center"
                          alt="Notif"
                        />
                      </Button>
                    </Column>
                  </Row>
                  <Chat className="items-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]" />
                  <Button
                    className="font-semibold lg:mt-[19px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center text-indigo_500 w-[100%]"
                    shape="CircleBorder30"
                    size="lg"
                    variant="OutlinePinkA7000c1_2"
                  >
                    View More
                  </Button>
                </Column>
              </Column>
            </Row>
          </Column>
          <Column className="bg-white_A700 lg:pb-[202px] xl:pb-[253px] 2xl:pb-[285px] 3xl:pb-[342px] lg:pr-[26px] xl:pr-[33px] 2xl:pr-[37px] 3xl:pr-[45px] lg:pt-[26px] xl:pt-[33px] 2xl:pt-[37px] 3xl:pt-[45px] w-[24%]">
            <UserDashboardmenu className="items-center justify-end w-[75%]" />
            <Column className="items-center lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[92%]">
              <Column className="justify-start w-[100%]">
                <Column className="items-center w-[100%]">
                  <Column className="bg-gradient  items-center justify-start rounded-radius20 shadow-bs w-[100%]">
                    <Column
                      className="bg-cover bg-repeat justify-start lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_group36.png')",
                      }}
                    >
                      <Column className="items-center lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] pr-[0] w-[91%]">
                        <Row className="items-center justify-between w-[100%]">
                          <Text
                            className="font-normal not-italic text-white_A700 w-[auto]"
                            as="h5"
                            variant="h5"
                          >
                            Your Plan
                          </Text>
                          <Img
                            src="images/img_vector_169.png"
                            className="Vector13"
                            alt="Vector"
                          />
                        </Row>
                      </Column>
                      <Text
                        className="text-white_A700 w-[auto]"
                        as="h2"
                        variant="h2"
                      >
                        Free
                      </Text>
                      <RadioGroup
                        className="lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[48%]"
                        name="Group615"
                      >
                        <Radio
                          value="50GBStorage"
                          className="font-semibold lg:mr-[11px] xl:mr-[14px] 2xl:mr-[16px] 3xl:mr-[19px] lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-white_A700"
                          inputClassName="h-[9px] mr-[5px] w-[9px]"
                          checked={false}
                          name="Group615"
                          label="50 GB Storage"
                          variant="FillWhiteA700"
                        ></Radio>
                        <Radio
                          value="LimitedFeatures"
                          className="font-semibold lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] lg:pl-[4px] xl:pl-[5px] 2xl:pl-[6px] 3xl:pl-[7px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-white_A700 w-[100%]"
                          inputClassName="h-[9px] mr-[5px] w-[9px]"
                          checked={false}
                          name="Group615"
                          label="Limited Features"
                          variant="FillWhiteA700"
                        ></Radio>
                      </RadioGroup>
                      <Column className="items-center lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] w-[91%]">
                        <Text className="Chat3" variant="body1">
                          Upgrade to Premium Plan to get more Features & Storage
                          memory{" "}
                        </Text>
                      </Column>
                      <Button
                        className="font-semibold lg:mt-[20px] xl:mt-[26px] 2xl:mt-[29px] 3xl:mt-[35px] 2xl:text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[9px] text-center w-[41%]"
                        shape="CircleBorder20"
                        size="sm"
                        variant="FillWhiteA700"
                      >
                        Upgrade Plan
                      </Button>
                    </Column>
                  </Column>
                </Column>
                <Text
                  className="ml-[1px] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] text-indigo_900 w-[auto]"
                  as="h4"
                  variant="h4"
                >
                  Lastest Activity
                </Text>
                <Column className="items-center lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]">
                  <Stack className="lg:h-[192px] xl:h-[240px] 2xl:h-[270px] 3xl:h-[324px] w-[100%]">
                    <Line className="absolute bg-indigo_100 lg:h-[166px] xl:h-[207px] 2xl:h-[233px] 3xl:h-[280px] left-[5%] top-[2%] w-[2px]" />
                    <Row className="absolute items-start justify-between top-[0] w-[100%]">
                      <div className="bg-indigo_100 mt-[1px] rounded-radius50 Finance"></div>
                      <Column className="justify-start w-[85%]">
                        <Column className="font-cairo items-center w-[100%]">
                          <Text
                            className="font-semibold leading-[normal] text-indigo_900 w-[100%]"
                            variant="body1"
                          >
                            <span className="text-indigo_900 font-poppins font-bold lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                              Karen Hope
                            </span>
                            <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                              {" "}
                            </span>
                            <span className="text-indigo_900 font-poppins font-normal lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                              moved task
                            </span>
                            <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                              {" "}
                            </span>
                            <span className="text-indigo_900 font-poppins font-bold lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                              “
                            </span>
                            <span className="text-deep_orange_300 font-poppins font-bold lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                              User Research
                            </span>
                            <span className="text-indigo_900 font-poppins font-bold lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                              “
                            </span>
                            <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                              {" "}
                            </span>
                            <span className="text-indigo_900 font-poppins font-normal lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                              from
                            </span>
                            <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                              {" "}
                            </span>
                            <span className="text-indigo_900 font-poppins font-bold lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                              On Progress
                            </span>
                            <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                              {" "}
                            </span>
                            <span className="text-indigo_900 font-poppins font-normal lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                              to
                            </span>
                            <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                              {" "}
                            </span>
                            <span className="text-indigo_900 font-poppins font-bold lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                              Done
                            </span>
                          </Text>
                        </Column>
                        <Text
                          className="font-poppins Thursday10th"
                          variant="body1"
                        >
                          2 March 2021, 13:45 PM
                        </Text>
                      </Column>
                    </Row>
                    <List
                      className="absolute bottom-[23%] gap-[0] min-h-[auto] w-[100%]"
                      orientation="vertical"
                    >
                      <Row className="Group134">
                        <div className="bg-indigo_100 mt-[1px] rounded-radius50 Finance"></div>
                        <Column className="justify-start w-[85%]">
                          <Column className="items-center w-[100%]">
                            <Text className="Group650" variant="body1">
                              <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                                Samantha William{" "}
                              </span>
                              <span className="text-indigo_900 font-poppins font-normal lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                                add new
                              </span>
                              <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                                {" "}
                                4{" "}
                              </span>
                              <span className="text-indigo_900 font-poppins font-normal lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                                attached files on task
                              </span>
                              <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                                {" "}
                                “
                              </span>
                              <span className="text-yellow_700 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                                Photo’s Assets
                              </span>
                              <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                                “
                              </span>
                            </Text>
                          </Column>
                          <Text className="Thursday10th" variant="body1">
                            2 March 2021, 13:45 PM
                          </Text>
                        </Column>
                      </Row>
                      <Row className="Group134">
                        <div className="bg-indigo_100 mt-[1px] rounded-radius50 Finance"></div>
                        <Column className="justify-start w-[85%]">
                          <Column className="items-center w-[100%]">
                            <Text className="Group650" variant="body1">
                              <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                                Tony Soap{" "}
                              </span>
                              <span className="text-indigo_900 font-poppins font-normal lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                                invite you in task
                              </span>
                              <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                                {" "}
                                “
                              </span>
                              <span className="text-indigo_500 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                                Wireframing
                              </span>
                              <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                                “{" "}
                              </span>
                              <span className="text-indigo_900 font-poppins font-normal lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                                and
                              </span>
                              <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                                {" "}
                                “
                              </span>
                              <span className="text-teal_300 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                                Hi-fidelity
                              </span>
                              <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                                “
                              </span>
                            </Text>
                          </Column>
                          <Text className="Thursday10th" variant="body1">
                            2 March 2021, 13:45 PM
                          </Text>
                        </Column>
                      </Row>
                    </List>
                    <Row className="absolute bottom-[0] items-start justify-between w-[100%]">
                      <div className="bg-indigo_100 mt-[1px] rounded-radius50 Finance"></div>
                      <Column className="justify-start w-[85%]">
                        <Column className="items-center w-[100%]">
                          <Text
                            className="font-bold text-indigo_900 w-[auto]"
                            variant="body1"
                          >
                            <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                              Samantha William{" "}
                            </span>
                            <span className="text-indigo_900 font-poppins font-normal lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                              created new
                            </span>
                            <span className="text-indigo_900 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                              {" "}
                            </span>
                            <span className="text-red_A200 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                              Task
                            </span>
                          </Text>
                        </Column>
                        <Text className="Thursday10th" variant="body1">
                          2 March 2021, 13:45 PM
                        </Text>
                      </Column>
                    </Row>
                  </Stack>
                </Column>
              </Column>
            </Column>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default UserDashboardPage;
