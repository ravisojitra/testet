import React from "react";

import {
  Column,
  Row,
  Img,
  Text,
  Input,
  List,
  Line,
  Button,
  Stack,
} from "components";
import TeacherDetails from "components/Row/TeacherDetails";
import Dashboard from "components/Column/Dashboard";
import TeacherDetails0 from "components/Column/TeacherDetails0";
import Food3 from "components/Row/Food3";
import { CloseSVG } from "../../assets/images/index.js";
import Chat from "components/Row/Chat";

const ChatPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_100 font-poppins items-center justify-start mx-[auto] w-[100%]">
        <Row className="items-center justify-between w-[97%]">
          <aside className="items-center w-[18%]">
            <Column className="">
              <Column className="bg-indigo_500 justify-start lg:pb-[109px] xl:pb-[137px] 2xl:pb-[154px] 3xl:pb-[185px] lg:pt-[26px] xl:pt-[33px] 2xl:pt-[37px] 3xl:pt-[45px] w-[100%]">
                <Column className="justify-start w-[87%]">
                  <TeacherDetails className="items-center w-[78%]" />
                  <Dashboard className="items-center lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] w-[100%]" />
                  <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[47%]">
                    <Img
                      src="images/img_vector_93.png"
                      className="Vector2"
                      alt="Vector"
                    />
                    <Text className="Dashboard" as="h5" variant="h5">
                      Students
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[48%]">
                    <Img
                      src="images/img_vector_94.png"
                      className="Vector2"
                      alt="Vector"
                    />
                    <Text className="Dashboard" as="h5" variant="h5">
                      Teachers
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[36%]">
                    <Img
                      src="images/img_vector_95.png"
                      className="Vector3"
                      alt="Vector"
                    />
                    <Text className="event" as="h5" variant="h5">
                      Event
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[45%]">
                    <Img
                      src="images/img_finance_7.png"
                      className="Finance"
                      alt="Finance"
                    />
                    <Text className="finance" as="h5" variant="h5">
                      Finance
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[34%]">
                    <Img
                      src="images/img_vector_96.png"
                      className="Vector4"
                      alt="Vector"
                    />
                    <Text className="food" as="h5" variant="h5">
                      Food
                    </Text>
                  </Row>
                  <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[33%]">
                    <Img
                      src="images/img_vector_97.png"
                      className="Vector5"
                      alt="Vector"
                    />
                    <Text className="Dashboard" as="h5" variant="h5">
                      User
                    </Text>
                  </Row>
                  <Column className="items-center lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] w-[100%]">
                    <Row className="bg-gray_100 items-center lg:pl-[13px] xl:pl-[16px] 2xl:pl-[18px] 3xl:pl-[22px] lg:py-[10px] xl:py-[12px] 2xl:py-[14px] 3xl:py-[17px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[100%]">
                      <Img
                        src="images/img_vector_98.png"
                        className="lg:h-[18px] xl:h-[23px] 2xl:h-[25px] 3xl:h-[30px] w-[13%]"
                        alt="Vector"
                      />
                      <Text
                        className="font-medium lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] text-indigo_500 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        Chat
                      </Text>
                    </Row>
                  </Column>
                  <Row className="items-center lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[66%]">
                    <Img
                      src="images/img_vector_99.png"
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
            <Food3 className="items-start w-[100%]" />
            <Row className="items-center justify-evenly lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
              <Column className="bg-white_A700 lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[0] w-[34%]">
                <Text className="text-indigo_900 w-[auto]" as="h4" variant="h4">
                  Messages
                </Text>
                <Column className="items-center lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[93%]">
                  <Input
                    value={inputvalue}
                    onChange={(e) => setInputvalue(e?.target?.value)}
                    className="font-normal p-[0] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_500 text-gray_500 w-[100%]"
                    wrapClassName="flex w-[100%]"
                    name="SearchBar"
                    placeholder="Search here..."
                    prefix={
                      <Img
                        src="images/img_xmlid_223.png"
                        className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[10px] lg:mr-[18px] xl:w-[16px] xl:h-[17px] xl:ml-[12px] xl:mr-[23px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[14px] 2xl:mr-[26px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[17px] 3xl:mr-[31px] rounded-radius50 my-[auto]"
                        alt="XMLID 223"
                      />
                    }
                    suffix={
                      inputvalue?.length > 0 ? (
                        <CloseSVG
                          color="#a098ae"
                          className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[5px] lg:mr-[11px] xl:w-[16px] xl:h-[17px] xl:ml-[6px] xl:mr-[14px] 2xl:w-[18px] 2xl:h-[19px] 2xl:ml-[7px] 2xl:mr-[16px] 3xl:w-[21px] 3xl:h-[22px] 3xl:ml-[9px] 3xl:mr-[19px] my-[auto]"
                          onClick={() => setInputvalue("")}
                        />
                      ) : (
                        ""
                      )
                    }
                    shape="srcCircleBorder30"
                    size="smSrc"
                    variant="srcOutlineGray500"
                  ></Input>
                </Column>
                <Text
                  className="font-semibold lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] text-gray_500 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Groups
                </Text>
                <Column className="items-center lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[93%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="Group399">
                      <div className="bg-indigo_500 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                      <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[45%]">
                        <Text
                          className="font-semibold text-indigo_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Class History VII-A
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
                            src="images/img_notif.png"
                            className="flex items-center justify-center"
                            alt="Notif"
                          />
                        </Button>
                      </Column>
                    </Row>
                    <Line className="self-center w-[100%] h-[1px] bg-indigo_100" />
                    <Row className="Group399">
                      <div className="bg-deep_orange_300 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
                      <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[45%]">
                        <Text
                          className="font-semibold text-indigo_900 w-[auto]"
                          as="h5"
                          variant="h5"
                        >
                          Class VII-A
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
                            src="images/img_notif_1.png"
                            className="flex items-center justify-center"
                            alt="Notif"
                          />
                        </Button>
                      </Column>
                    </Row>
                  </List>
                  <Chat className="items-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]" />
                </Column>
                <Text
                  className="font-semibold lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] text-gray_500 w-[auto]"
                  as="h5"
                  variant="h5"
                >
                  Chats
                </Text>
                <Column className="items-center lg:mr-[17px] xl:mr-[21px] 2xl:mr-[24px] 3xl:mr-[28px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[93%]">
                  <List
                    className="gap-[0] min-h-[auto] w-[100%]"
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
                            src="images/img_notif_2.png"
                            className="flex items-center justify-center"
                            alt="Notif"
                          />
                        </Button>
                      </Column>
                    </Row>
                    <Line className="self-center w-[100%] h-[1px] bg-indigo_100" />
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
                            src="images/img_notif_3.png"
                            className="flex items-center justify-center"
                            alt="Notif"
                          />
                        </Button>
                      </Column>
                    </Row>
                  </List>
                  <Chat className="items-start lg:mt-[20px] xl:mt-[25px] 2xl:mt-[28px] 3xl:mt-[34px] w-[100%]" />
                  <Button
                    className="font-semibold lg:mt-[28px] xl:mt-[36px] 2xl:mt-[40px] 3xl:mt-[48px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[100%]"
                    shape="CircleBorder30"
                    size="lg"
                    variant="OutlinePinkA7000c"
                  >
                    View More
                  </Button>
                </Column>
              </Column>
              <Stack className="bg-white_A700 lg:h-[538px] xl:h-[672px] 2xl:h-[756px] 3xl:h-[907px] rounded-bl-[0] rounded-br-[20px] rounded-tl-[0] rounded-tr-[20px] w-[66%]">
                <Row className="absolute items-center justify-between right-[4%] top-[6%] w-[10%]">
                  <Img
                    src="images/img_43video.png"
                    className="xl:h-[11px] 2xl:h-[13px] 3xl:h-[15px] lg:h-[9px] w-[31%]"
                    alt="43Video"
                  />
                  <Img
                    src="images/img_vector_101.png"
                    className="lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] w-[24%]"
                    alt="Vector"
                  />
                </Row>
                <Stack className="absolute lg:h-[538px] xl:h-[672px] 2xl:h-[756px] 3xl:h-[907px] w-[100%]">
                  <Column className="absolute lg:h-[517px] xl:h-[646px] 2xl:h-[727px] 3xl:h-[872px] justify-start top-[4%] w-[100%]">
                    <Row className="items-center lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] w-[33%]">
                      <div className="bg-indigo_100 lg:h-[35px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] rounded-radius50 lg:w-[34px] xl:w-[42px] 2xl:w-[48px] 3xl:w-[57px]"></div>
                      <Column className="lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] w-[73%]">
                        <Column className="items-center w-[100%]">
                          <Text
                            className="text-indigo_900 w-[auto]"
                            as="h4"
                            variant="h4"
                          >
                            Samantha WIlliam
                          </Text>
                        </Column>
                        <Row className="items-center mt-[1px] w-[35%]">
                          <div className="bg-teal_300 rounded-radius50 Vector12"></div>
                          <Text
                            className="lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] March252021"
                            as="h5"
                            variant="h5"
                          >
                            Online
                          </Text>
                        </Row>
                      </Column>
                    </Row>
                    <Column className="items-center lg:mt-[17px] xl:mt-[22px] 2xl:mt-[24px] 3xl:mt-[29px] w-[100%]">
                      <Column className="justify-start w-[100%]">
                        <Column className="items-center w-[100%]">
                          <Line className="bg-indigo_100 h-[1px] w-[100%]" />
                        </Column>
                        <Button
                          className="font-normal lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[17%]"
                          shape="CustomBorderBL12"
                          size="lg"
                          variant="FillGray101"
                        >
                          Hello Nabila!
                        </Button>
                        <Button
                          className="font-normal lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[43%]"
                          shape="CustomBorderTL201_2"
                          size="lg"
                          variant="FillGray101"
                        >
                          Can i see your history lesson homework?{" "}
                        </Button>
                        <Text
                          className="lg:ml-[25px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] March252021"
                          variant="body1"
                        >
                          12:45 PM
                        </Text>
                        <Column className="items-end xl:mt-[12px] 2xl:mt-[13px] 3xl:mt-[16px] lg:mt-[9px] lg:pr-[21px] xl:pr-[26px] 2xl:pr-[30px] 3xl:pr-[36px] w-[100%]">
                          <Button
                            className="font-normal not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[21%]"
                            shape="CircleBorder20"
                            size="lg"
                            variant="FillIndigo500"
                          >
                            Hello Samantha!
                          </Button>
                          <Column className="bg-indigo_500 items-center justify-start xl:mt-[11px] 2xl:mt-[12px] 3xl:mt-[15px] lg:mt-[9px] lg:px-[16px] xl:px-[20px] 2xl:px-[22px] 3xl:px-[27px] 2xl:py-[10px] 3xl:py-[12px] lg:py-[7px] xl:py-[9px] rounded-bl-[20px] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] w-[41%]">
                            <Text className="Chat3" as="h5" variant="h5">
                              I’m not finished yet, why don’t work <br />
                              together to finish homework?
                            </Text>
                          </Column>
                          <Text
                            className="xl:mt-[10px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] March252021"
                            variant="body1"
                          >
                            12:45 PM
                          </Text>
                        </Column>
                        <Column className="items-center lg:mt-[164px] xl:mt-[205px] 2xl:mt-[231px] 3xl:mt-[277px] w-[100%]">
                          <Column className="bg-white_A700 items-center justify-start lg:pb-[17px] xl:pb-[21px] 2xl:pb-[24px] 3xl:pb-[28px] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                            <Line className="bg-indigo_100 h-[1px] w-[100%]" />
                            <Row className="border-2 border-gray_500 border-solid items-center justify-end lg:ml-[17px] xl:ml-[22px] 2xl:ml-[24px] 3xl:ml-[29px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:pr-[4px] 2xl:pr-[6px] xl:pr-[6px] 3xl:pr-[8px] lg:py-[5px] xl:py-[6px] 2xl:py-[7px] 3xl:py-[9px] rounded-radius40 w-[93%]">
                              <Text
                                className="March252021"
                                as="h5"
                                variant="h5"
                              >
                                Write your message...
                              </Text>
                              <Img
                                src="images/img_layer5.png"
                                className="lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[252px] xl:ml-[316px] 2xl:ml-[355px] 3xl:ml-[426px] w-[3%]"
                                alt="Layer5"
                              />
                              <Button
                                className="font-semibold lg:ml-[12px] xl:ml-[15px] 2xl:ml-[17px] 3xl:ml-[20px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[15%]"
                                shape="CircleBorder30"
                                size="lg"
                                variant="FillIndigo500"
                              >
                                Send
                              </Button>
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                    </Column>
                  </Column>
                  <Line className="absolute bg-indigo_100 lg:h-[538px] xl:h-[672px] 2xl:h-[756px] 3xl:h-[907px] left-[0] w-[1px]" />
                </Stack>
              </Stack>
            </Row>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default ChatPage;
