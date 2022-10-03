import React from "react";

import {
  Row,
  Column,
  Img,
  Text,
  Input,
  Button,
  Stack,
  List,
  Line,
} from "components";
import TeacherDetails from "components/Row/TeacherDetails";
import Dashboard from "components/Column/Dashboard";
import TeacherDetails0 from "components/Column/TeacherDetails0";
import { CloseSVG } from "../../assets/images/index.js";
import Dashboardtext from "components/Column/Dashboardtext";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { ChartJsDoughnutData, PieData, COLORS } from "./chartData.js";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
} from "recharts";
import Food from "components/Row/Food";
import UserDashboardmenu from "components/Row/UserDashboardmenu";

ChartJS.register(ArcElement, Tooltip, Legend);

const DashboardPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Row className="bg-white_A700 font-poppins items-center mx-[auto] w-[100%]">
        <aside className="items-center w-[18%]">
          <Column className="">
            <Column className="bg-indigo_500 justify-start 3xl:pb-[1187px] lg:pb-[703px] xl:pb-[880px] 2xl:pb-[989px] lg:pt-[26px] xl:pt-[33px] 2xl:pt-[37px] 3xl:pt-[45px] w-[100%]">
              <Column className="justify-start w-[87%]">
                <TeacherDetails className="items-center w-[78%]" />
                <Dashboard className="items-center lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] w-[100%]" />
                <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[13px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[22px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[47%]">
                  <Img
                    src="images/img_vector_64.png"
                    className="Vector2"
                    alt="Vector"
                  />
                  <Text className="Dashboard" as="h5" variant="h5">
                    Students
                  </Text>
                </Row>
                <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[31px] 3xl:mt-[37px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[48%]">
                  <Img
                    src="images/img_vector_65.png"
                    className="Vector2"
                    alt="Vector"
                  />
                  <Text className="Dashboard" as="h5" variant="h5">
                    Teachers
                  </Text>
                </Row>
                <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[25px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[36%]">
                  <Img
                    src="images/img_vector_66.png"
                    className="Vector3"
                    alt="Vector"
                  />
                  <Text className="event" as="h5" variant="h5">
                    Event
                  </Text>
                </Row>
                <Row className="items-center lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] lg:mt-[24px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[41px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[45%]">
                  <Img
                    src="images/img_finance_4.png"
                    className="Finance"
                    alt="Finance"
                  />
                  <Text className="finance" as="h5" variant="h5">
                    Finance
                  </Text>
                </Row>
                <Row className="items-center lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] lg:mt-[22px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[34%]">
                  <Img
                    src="images/img_vector_67.png"
                    className="Vector4"
                    alt="Vector"
                  />
                  <Text className="food" as="h5" variant="h5">
                    Food
                  </Text>
                </Row>
                <Row className="items-center lg:ml-[15px] xl:ml-[19px] 2xl:ml-[21px] 3xl:ml-[26px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[33%]">
                  <Img
                    src="images/img_vector_68.png"
                    className="Vector5"
                    alt="Vector"
                  />
                  <Text className="Dashboard" as="h5" variant="h5">
                    User
                  </Text>
                </Row>
                <Row className="items-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] lg:mt-[23px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[36%]">
                  <Img
                    src="images/img_vector_69.png"
                    className="Vector6"
                    alt="Vector"
                  />
                  <Text className="Chat" as="h5" variant="h5">
                    Chat
                  </Text>
                </Row>
                <Row className="items-center lg:ml-[14px] xl:ml-[18px] 2xl:ml-[20px] 3xl:ml-[24px] lg:mt-[26px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[44px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] w-[66%]">
                  <Img
                    src="images/img_vector_70.png"
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
        <Column className="bg-gray_100 items-center lg:pb-[54px] xl:pb-[68px] 2xl:pb-[76px] 3xl:pb-[91px] lg:pt-[26px] xl:pt-[33px] 2xl:pt-[37px] 3xl:pt-[45px] lg:px-[26px] xl:px-[33px] 2xl:px-[37px] 3xl:px-[45px] w-[61%]">
          <Row className="items-start justify-between w-[100%]">
            <Text className="text-indigo_900 w-[auto]" as="h1" variant="h1">
              Dashboard
            </Text>
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-normal p-[0] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] placeholder:text-gray_500 text-gray_500 w-[100%]"
              wrapClassName="flex w-[32%]"
              name="searchbar"
              placeholder="Search here..."
              prefix={
                <Img
                  src="images/img_vector_71.png"
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
          <Row className="bg-white_A700 items-center lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:pl-[25px] xl:pl-[31px] 2xl:pl-[35px] 3xl:pl-[42px] lg:py-[24px] xl:py-[30px] 2xl:py-[33px] 3xl:py-[40px] rounded-radius20 w-[100%]">
            <Button
              className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] items-center justify-center rounded-radius50 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
              size="lgIcn"
              variant="icbFillIndigo500"
            >
              <Img
                src="images/img_icon_6.png"
                className="flex items-center justify-center"
                alt="icon"
              />
            </Button>
            <Column className="lg:ml-[16px] xl:ml-[20px] 2xl:ml-[22px] 3xl:ml-[27px] w-[8%]">
              <Column className="items-center w-[100%]">
                <Text className="March252021" as="h5" variant="h5">
                  Students
                </Text>
              </Column>
              <Text className="text-indigo_900 w-[auto]" as="h1" variant="h1">
                932
              </Text>
            </Column>
            <Button
              className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] items-center justify-center lg:ml-[43px] xl:ml-[54px] 2xl:ml-[61px] 3xl:ml-[73px] rounded-radius50 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
              size="lgIcn"
              variant="icbFillDeeporange300"
            >
              <Img
                src="images/img_icon_7.png"
                className="flex items-center justify-center"
                alt="icon"
              />
            </Button>
            <Column className="lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[8%]">
              <Column className="items-center w-[100%]">
                <Text className="March252021" as="h5" variant="h5">
                  Teachers
                </Text>
              </Column>
              <Text className="text-indigo_900 w-[auto]" as="h1" variant="h1">
                754
              </Text>
            </Column>
            <Button
              className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] items-center justify-center lg:ml-[42px] xl:ml-[52px] 2xl:ml-[59px] 3xl:ml-[71px] rounded-radius50 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
              size="2xlIcn"
              variant="icbFillYellow700"
            >
              <Img
                src="images/img_icon_8.png"
                className="flex items-center justify-center lg:h-[15px] xl:h-[19px] 2xl:h-[21px] 3xl:h-[25px]"
                alt="icon"
              />
            </Button>
            <Column className="lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[6%]">
              <Column className="items-center w-[100%]">
                <Text className="March252021" as="h5" variant="h5">
                  Events
                </Text>
              </Column>
              <Text className="text-indigo_900 w-[auto]" as="h1" variant="h1">
                40
              </Text>
            </Column>
            <Button
              className="flex lg:h-[39px] xl:h-[49px] 2xl:h-[55px] 3xl:h-[65px] items-center justify-center lg:ml-[55px] xl:ml-[69px] 2xl:ml-[78px] 3xl:ml-[93px] rounded-radius50 lg:w-[38px] xl:w-[48px] 2xl:w-[54px] 3xl:w-[64px]"
              size="xlIcn"
              variant="icbFillIndigo900"
            >
              <Img
                src="images/img_icon_9.png"
                className="flex items-center justify-center"
                alt="icon"
              />
            </Button>
            <Column className="lg:ml-[17px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] w-[6%]">
              <Text className="March252021" as="h5" variant="h5">
                Foods
              </Text>
              <Column className="items-center w-[100%]">
                <Text className="text-indigo_900 w-[auto]" as="h1" variant="h1">
                  32k
                </Text>
              </Column>
            </Column>
          </Row>
          <Column className="bg-white_A700 items-center justify-center lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius20 w-[100%]">
            <Row className="items-start w-[100%]">
              <Text className="text-indigo_900 w-[auto]" as="h4" variant="h4">
                School Performance
              </Text>
              <div className="bg-white_A700 border-bw3 border-solid border-yellow_700 2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] lg:ml-[304px] xl:ml-[380px] 2xl:ml-[427px] 3xl:ml-[513px] mt-[4px] rounded-radius50 3xl:w-[10px] lg:w-[6px] xl:w-[8px] 2xl:w-[9px]"></div>
              <Dashboardtext className="justify-start lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] w-[7%]" />
              <div className="bg-white_A700 border-bw3 border-deep_orange_300 border-solid 2xl:h-[10px] 3xl:h-[11px] lg:h-[7px] xl:h-[9px] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mt-[4px] rounded-radius50 3xl:w-[10px] lg:w-[6px] xl:w-[8px] 2xl:w-[9px]"></div>
              <Dashboardtext className="justify-start lg:ml-[3px] xl:ml-[4px] 2xl:ml-[5px] 3xl:ml-[6px] w-[7%]" />
            </Row>
            <Row className="items-start ml-[1px] lg:mr-[4px] 2xl:mr-[6px] xl:mr-[6px] 3xl:mr-[8px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[99%]">
              <Column className="justify-start 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[9px] w-[3%]">
                <Column className="items-center w-[100%]">
                  <Text className="March252021" as="h5" variant="h5">
                    100
                  </Text>
                </Column>
                <Text className="number" as="h5" variant="h5">
                  75
                </Text>
                <Text className="number" as="h5" variant="h5">
                  50
                </Text>
                <Text className="number" as="h5" variant="h5">
                  25
                </Text>
                <Text className="number" as="h5" variant="h5">
                  0
                </Text>
              </Column>
              <Column className="items-center justify-start lg:ml-[12px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] pb-[2px] w-[95%]">
                <Stack className="lg:h-[151px] xl:h-[189px] 2xl:h-[212px] 3xl:h-[254px] 3xl:ml-[11px] lg:ml-[6px] xl:ml-[8px] 2xl:ml-[9px] w-[97%]">
                  <Img
                    src="images/img_line.png"
                    className="absolute lg:h-[151px] xl:h-[189px] 2xl:h-[212px] 3xl:h-[254px] right-[0] w-[100%]"
                    alt="line"
                  />
                  <Img
                    src="images/img_chart.png"
                    className="absolute bottom-[0] lg:h-[128px] xl:h-[160px] 2xl:h-[180px] 3xl:h-[216px] w-[100%]"
                    alt="chart"
                  />
                </Stack>
                <Row className="items-center justify-between lg:mt-[14px] xl:mt-[18px] 2xl:mt-[20px] 3xl:mt-[24px] w-[100%]">
                  <Text className="March252021" as="h5" variant="h5">
                    Jan
                  </Text>
                  <Text className="March252021" as="h5" variant="h5">
                    Feb
                  </Text>
                  <Text className="March252021" as="h5" variant="h5">
                    Mar
                  </Text>
                  <Text className="March252021" as="h5" variant="h5">
                    Apr
                  </Text>
                  <Text className="March252021" as="h5" variant="h5">
                    May
                  </Text>
                  <Text className="March252021" as="h5" variant="h5">
                    Jun
                  </Text>
                  <Text className="Group54" as="h5" variant="h5">
                    Jul
                  </Text>
                  <Text className="March252021" as="h5" variant="h5">
                    Aug
                  </Text>
                  <Text className="March252021" as="h5" variant="h5">
                    Sep
                  </Text>
                  <Text className="March252021" as="h5" variant="h5">
                    Oct
                  </Text>
                  <Text className="March252021" as="h5" variant="h5">
                    Nov
                  </Text>
                  <Text className="March252021" as="h5" variant="h5">
                    Dec
                  </Text>
                </Row>
              </Column>
            </Row>
          </Column>
          <Row className="items-center lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[100%]">
            <div className="bg-white_A700 lg:h-[300px] xl:h-[375px] 2xl:h-[422px] 3xl:h-[507px] items-center lg:p-[17px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] rounded-radius24 w-[48%]">
              <Doughnut
                options={{
                  responsive: true,
                  maintainAspectRatio: false,
                }}
                data={ChartJsDoughnutData}
              />
            </div>

            <div className="bg-white_A700 lg:h-[300px] xl:h-[375px] 2xl:h-[422px] 3xl:h-[507px] lg:ml-[21px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:pr-[18px] xl:pr-[23px] 2xl:pr-[26px] 3xl:pr-[31px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[48%]">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={PieData} dataKey="c0" nameKey="name" label>
                    {PieData.map((_, index) => (
                      <Cell
                        key={"cell_" + index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <RechartsTooltip />
                  <RechartsLegend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Row>
          <Column className="bg-white_A700 justify-center lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:py-[17px] xl:py-[21px] 2xl:py-[24px] 3xl:py-[28px] rounded-radius20 w-[100%]">
            <Text className="unpaidstudent" as="h4" variant="h4">
              Unpaid Student Intuition
            </Text>
            <Column className="items-center lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
              <Column className="items-center justify-start w-[100%]">
                <List
                  className="gap-[0] min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="Group239">
                    <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
                    <Text className="SamanthaWillia" as="h5" variant="h5">
                      Samantha William
                    </Text>
                    <Text
                      className="font-semibold lg:ml-[58px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[98px] text-indigo_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      ID 123456789
                    </Text>
                    <Button
                      className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:ml-[49px] xl:ml-[62px] 2xl:ml-[69px] 3xl:ml-[83px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                      size="mdIcn"
                      variant="icbFillDeeporange300"
                    >
                      <Img
                        src="images/img_icon_10.png"
                        className="flex items-center justify-center"
                        alt="icon"
                      />
                    </Button>
                    <Column className="items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[4%]">
                      <Text className="March252021" variant="body1">
                        Class
                      </Text>
                      <Text
                        className="font-semibold text-indigo_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        VII A
                      </Text>
                    </Column>
                    <Text className="date" as="h5" variant="h5">
                      $ 50,036
                    </Text>
                    <Img
                      src="images/img_menu.png"
                      className="menu"
                      alt="menu"
                    />
                  </Row>
                  <Row className="Group239">
                    <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
                    <Text className="SamanthaWillia" as="h5" variant="h5">
                      Tony Soap
                    </Text>
                    <Text
                      className="font-semibold xl:ml-[123px] 2xl:ml-[138px] 3xl:ml-[166px] lg:ml-[98px] text-indigo_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      ID 123456789
                    </Text>
                    <Button
                      className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:ml-[49px] xl:ml-[62px] 2xl:ml-[69px] 3xl:ml-[83px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                      size="mdIcn"
                      variant="icbFillDeeporange300"
                    >
                      <Img
                        src="images/img_icon_11.png"
                        className="flex items-center justify-center"
                        alt="icon"
                      />
                    </Button>
                    <Column className="items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[4%]">
                      <Text className="March252021" variant="body1">
                        Class
                      </Text>
                      <Text
                        className="font-semibold text-indigo_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        VII A
                      </Text>
                    </Column>
                    <Text className="date" as="h5" variant="h5">
                      $ 50,036
                    </Text>
                    <Img
                      src="images/img_menu_1.png"
                      className="menu"
                      alt="menu"
                    />
                  </Row>
                  <Row className="Group239">
                    <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
                    <Text className="SamanthaWillia" as="h5" variant="h5">
                      Jordan Nico
                    </Text>
                    <Text
                      className="font-semibold xl:ml-[113px] 2xl:ml-[127px] 3xl:ml-[153px] lg:ml-[90px] text-indigo_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      ID 123456789
                    </Text>
                    <Button
                      className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:ml-[49px] xl:ml-[62px] 2xl:ml-[69px] 3xl:ml-[83px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                      size="mdIcn"
                      variant="icbFillDeeporange300"
                    >
                      <Img
                        src="images/img_icon_12.png"
                        className="flex items-center justify-center"
                        alt="icon"
                      />
                    </Button>
                    <Column className="items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[4%]">
                      <Text className="March252021" variant="body1">
                        Class
                      </Text>
                      <Text
                        className="font-semibold text-indigo_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        VII A
                      </Text>
                    </Column>
                    <Text className="date" as="h5" variant="h5">
                      $ 50,036
                    </Text>
                    <Img
                      src="images/img_menu_2.png"
                      className="menu"
                      alt="menu"
                    />
                  </Row>
                  <Row className="Group239">
                    <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
                    <Text className="SamanthaWillia" as="h5" variant="h5">
                      Karen Hope
                    </Text>
                    <Text
                      className="font-semibold xl:ml-[116px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] text-indigo_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      ID 123456789
                    </Text>
                    <Button
                      className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:ml-[49px] xl:ml-[62px] 2xl:ml-[69px] 3xl:ml-[83px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                      size="mdIcn"
                      variant="icbFillDeeporange300"
                    >
                      <Img
                        src="images/img_icon_13.png"
                        className="flex items-center justify-center"
                        alt="icon"
                      />
                    </Button>
                    <Column className="items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[4%]">
                      <Text className="March252021" variant="body1">
                        Class
                      </Text>
                      <Text
                        className="font-semibold text-indigo_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        VII A
                      </Text>
                    </Column>
                    <Text className="date" as="h5" variant="h5">
                      $ 50,036
                    </Text>
                    <Img
                      src="images/img_menu_3.png"
                      className="menu"
                      alt="menu"
                    />
                  </Row>
                  <Row className="Group239">
                    <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
                    <Text className="SamanthaWillia" as="h5" variant="h5">
                      Nadila Adja
                    </Text>
                    <Text
                      className="font-semibold xl:ml-[116px] 2xl:ml-[130px] 3xl:ml-[156px] lg:ml-[92px] text-indigo_500 w-[auto]"
                      as="h5"
                      variant="h5"
                    >
                      ID 123456789
                    </Text>
                    <Button
                      className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:ml-[49px] xl:ml-[62px] 2xl:ml-[69px] 3xl:ml-[83px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                      size="mdIcn"
                      variant="icbFillDeeporange300"
                    >
                      <Img
                        src="images/img_icon_14.png"
                        className="flex items-center justify-center"
                        alt="icon"
                      />
                    </Button>
                    <Column className="items-center xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[4%]">
                      <Text className="March252021" variant="body1">
                        Class
                      </Text>
                      <Text
                        className="font-semibold text-indigo_900 w-[auto]"
                        as="h5"
                        variant="h5"
                      >
                        VII A
                      </Text>
                    </Column>
                    <Text className="date" as="h5" variant="h5">
                      $ 50,036
                    </Text>
                    <Img
                      src="images/img_menu_4.png"
                      className="menu"
                      alt="menu"
                    />
                  </Row>
                </List>
                <Row className="items-center lg:ml-[21px] xl:ml-[27px] 2xl:ml-[30px] 3xl:ml-[36px] lg:mt-[16px] xl:mt-[20px] 2xl:mt-[22px] 3xl:mt-[27px] w-[93%]">
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
                    src="images/img_vector_73.png"
                    className="lg:h-[11px] xl:h-[14px] 2xl:h-[16px] 3xl:h-[19px] lg:ml-[293px] xl:ml-[367px] 2xl:ml-[413px] 3xl:ml-[496px] w-[1%]"
                    alt="Vector"
                  />
                  <Food className="items-center justify-center lg:ml-[13px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[22px] w-[18%]" />
                  <Img
                    src="images/img_vector_74.png"
                    className="Vector11"
                    alt="Vector"
                  />
                </Row>
              </Column>
            </Column>
          </Column>
        </Column>
        <Column className="bg-white_A700 lg:pb-[10px] xl:pb-[13px] 2xl:pb-[15px] 3xl:pb-[18px] lg:pl-[17px] xl:pl-[21px] 2xl:pl-[24px] 3xl:pl-[28px] lg:pt-[26px] xl:pt-[33px] 2xl:pt-[37px] 3xl:pt-[45px] w-[21%]">
          <UserDashboardmenu className="items-center mr-[auto] w-[86%]" />
          <Row className="items-start mr-[auto] lg:mt-[21px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[86%]">
            <Column className="font-poppins justify-start w-[65%]">
              <Column className="items-center w-[100%]">
                <Text className="text-indigo_900 w-[auto]" as="h4" variant="h4">
                  Recent Students
                </Text>
              </Column>
              <Text className="title4" variant="body1">
                <span className="text-gray_500 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                  You have{" "}
                </span>
                <span className="text-gray_500 font-poppins font-semibold lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                  456
                </span>
                <span className="text-gray_500 font-poppins lg:text-[7px] xl:text-[9px] 2xl:text-[10px] 3xl:text-[12px]">
                  {" "}
                  students
                </span>
              </Text>
            </Column>
            <Text
              className="bg-indigo_500 flex font-cairo items-center lg:ml-[33px] xl:ml-[41px] 2xl:ml-[46px] 3xl:ml-[55px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] lg:px-[8px] rounded-radius50 text-shadow-ts1 text-white_A700 w-[48px]"
              as="h3"
              variant="h3"
            >
              +
            </Text>
          </Row>
          <List
            className="gap-[0] min-h-[auto] lg:mt-[18px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[86%]"
            orientation="vertical"
          >
            <Row className="Group240">
              <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
              <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[43%]">
                <Column className="items-center w-[100%]">
                  <Text
                    className="font-semibold text-indigo_900 w-[auto]"
                    variant="body1"
                  >
                    Samantha William
                  </Text>
                </Column>
                <Text className="title4" variant="body1">
                  Class VII A
                </Text>
              </Column>
              <Button
                className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center lg:ml-[35px] xl:ml-[44px] 2xl:ml-[49px] 3xl:ml-[59px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                size="lgIcn"
                variant="icbOutlineGray500"
              >
                <Img
                  src="images/img_mailbutton.png"
                  className="flex items-center justify-center"
                  alt="mailbutton"
                />
              </Button>
            </Row>
            <Line className="self-center w-[100%] h-[1px] bg-gray_500" />
            <Row className="Group240">
              <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
              <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[24%]">
                <Column className="items-center w-[100%]">
                  <Text
                    className="font-semibold text-indigo_900 w-[auto]"
                    variant="body1"
                  >
                    Tony Soap
                  </Text>
                </Column>
                <Text className="title4" variant="body1">
                  Class VII A
                </Text>
              </Column>
              <Button
                className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center 3xl:ml-[112px] lg:ml-[66px] xl:ml-[83px] 2xl:ml-[93px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                size="lgIcn"
                variant="icbFillIndigo500"
              >
                <Img
                  src="images/img_mailbutton_1.png"
                  className="flex items-center justify-center"
                  alt="mailbutton"
                />
              </Button>
            </Row>
            <Line className="self-center w-[100%] h-[1px] bg-gray_500" />
            <Row className="Group240">
              <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
              <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[27%]">
                <Column className="items-center w-[100%]">
                  <Text
                    className="font-semibold text-indigo_900 w-[auto]"
                    variant="body1"
                  >
                    Karen Hope
                  </Text>
                </Column>
                <Text className="title4" variant="body1">
                  Class VII A
                </Text>
              </Column>
              <Button
                className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center 3xl:ml-[105px] lg:ml-[62px] xl:ml-[78px] 2xl:ml-[87px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                size="lgIcn"
                variant="icbOutlineGray500"
              >
                <Img
                  src="images/img_mailbutton_2.png"
                  className="flex items-center justify-center"
                  alt="mailbutton"
                />
              </Button>
            </Row>
            <Line className="self-center w-[100%] h-[1px] bg-gray_500" />
            <Row className="Group240">
              <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
              <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[28%]">
                <Column className="items-center w-[100%]">
                  <Text
                    className="font-semibold text-indigo_900 w-[auto]"
                    variant="body1"
                  >
                    Jordan Nico
                  </Text>
                </Column>
                <Text className="title4" variant="body1">
                  Class VII B
                </Text>
              </Column>
              <Button
                className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center 3xl:ml-[102px] lg:ml-[60px] xl:ml-[76px] 2xl:ml-[85px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                size="lgIcn"
                variant="icbOutlineGray500"
              >
                <Img
                  src="images/img_mailbutton_3.png"
                  className="flex items-center justify-center"
                  alt="mailbutton"
                />
              </Button>
            </Row>
            <Line className="self-center w-[100%] h-[1px] bg-gray_500" />
            <Row className="Group240">
              <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
              <Column className="xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] w-[27%]">
                <Column className="items-center w-[100%]">
                  <Text
                    className="font-semibold text-indigo_900 w-[auto]"
                    variant="body1"
                  >
                    Nadila Adja
                  </Text>
                </Column>
                <Text className="title4" variant="body1">
                  Class VII B
                </Text>
              </Column>
              <Button
                className="flex lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] items-center justify-center 3xl:ml-[105px] lg:ml-[62px] xl:ml-[78px] 2xl:ml-[87px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"
                size="lgIcn"
                variant="icbOutlineGray500"
              >
                <Img
                  src="images/img_mailbutton_4.png"
                  className="flex items-center justify-center"
                  alt="mailbutton"
                />
              </Button>
            </Row>
          </List>
          <Button
            className="font-semibold lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[86%]"
            shape="CircleBorder30"
            size="lg"
            variant="FillIndigo50019"
          >
            View More
          </Button>
          <Text
            className="lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-indigo_900 w-[auto]"
            as="h4"
            variant="h4"
          >
            Messages
          </Text>
          <List
            className="gap-[0] min-h-[auto] ml-[1px] lg:mt-[12px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[86%]"
            orientation="vertical"
          >
            <Row className="items-center justify-between xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[9px] w-[100%]">
              <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
              <Stack className="lg:h-[31px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[53px] w-[79%]">
                <Column className="absolute font-poppins h-[max-content] inset-y-[0] justify-start left-[0] my-[auto] w-[81%]">
                  <Text
                    className="font-semibold text-indigo_900 w-[auto]"
                    variant="body1"
                  >
                    Samantha William
                  </Text>
                  <Column className="items-center mt-[4px] w-[100%]">
                    <Text className="March252021" variant="body1">
                      Lorem ipsum dolor sit amet...
                    </Text>
                  </Column>
                </Column>
                <Text className="test_1245PM" variant="body1">
                  12:45 PM
                </Text>
                <Text className="test_2" variant="body1">
                  2
                </Text>
              </Stack>
            </Row>
            <Line className="self-center w-[100%] h-[1px] bg-gray_500" />
            <Row className="items-center justify-between xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[9px] w-[100%]">
              <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
              <Stack className="lg:h-[31px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[53px] w-[79%]">
                <Column className="absolute font-poppins h-[max-content] inset-y-[0] justify-start left-[0] my-[auto] w-[81%]">
                  <Text
                    className="font-semibold text-indigo_900 w-[auto]"
                    variant="body1"
                  >
                    Tony Soap
                  </Text>
                  <Column className="items-center mt-[4px] w-[100%]">
                    <Text className="March252021" variant="body1">
                      Lorem ipsum dolor sit amet...
                    </Text>
                  </Column>
                </Column>
                <Text className="test_1245PM" variant="body1">
                  12:45 PM
                </Text>
                <Text className="test_2" variant="body1">
                  2
                </Text>
              </Stack>
            </Row>
            <Line className="self-center w-[100%] h-[1px] bg-gray_500" />
            <Row className="items-center justify-between xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[9px] w-[100%]">
              <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
              <Stack className="lg:h-[31px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[53px] w-[79%]">
                <Column className="absolute font-poppins h-[max-content] inset-y-[0] justify-start left-[0] my-[auto] w-[81%]">
                  <Text
                    className="font-semibold text-indigo_900 w-[auto]"
                    variant="body1"
                  >
                    Jordan Nico
                  </Text>
                  <Column className="items-center mt-[4px] w-[100%]">
                    <Text className="March252021" variant="body1">
                      Lorem ipsum dolor sit amet...
                    </Text>
                  </Column>
                </Column>
                <Text className="test_1245PM" variant="body1">
                  12:45 PM
                </Text>
                <Text className="test_2" variant="body1">
                  2
                </Text>
              </Stack>
            </Row>
            <Line className="self-center w-[100%] h-[1px] bg-gray_500" />
            <Row className="items-center justify-between xl:my-[11px] 2xl:my-[12px] 3xl:my-[15px] lg:my-[9px] w-[100%]">
              <div className="bg-indigo_100 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] rounded-radius50 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
              <Stack className="lg:h-[31px] xl:h-[39px] 2xl:h-[44px] 3xl:h-[53px] w-[79%]">
                <Column className="absolute font-poppins h-[max-content] inset-y-[0] justify-start left-[0] my-[auto] w-[81%]">
                  <Text
                    className="font-semibold text-indigo_900 w-[auto]"
                    variant="body1"
                  >
                    Nadila Adja
                  </Text>
                  <Column className="items-center mt-[4px] w-[100%]">
                    <Text className="March252021" variant="body1">
                      Lorem ipsum dolor sit amet...
                    </Text>
                  </Column>
                </Column>
                <Text className="test_1245PM" variant="body1">
                  12:45 PM
                </Text>
                <Text className="test_2" variant="body1">
                  2
                </Text>
              </Stack>
            </Row>
          </List>
          <Button
            className="font-semibold ml-[1px] lg:mt-[26px] xl:mt-[33px] 2xl:mt-[37px] 3xl:mt-[45px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[86%]"
            shape="CircleBorder30"
            size="lg"
            variant="FillIndigo50019"
          >
            View More
          </Button>
          <Text
            className="lg:mt-[34px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] text-bluegray_800 w-[auto]"
            as="h4"
            variant="h4"
          >
            Current Foods Menu
          </Text>
          <div className="bg-indigo_100 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[86px] ml-[1px] lg:mt-[15px] xl:mt-[19px] 2xl:mt-[21px] 3xl:mt-[26px] rounded-radius18 w-[86%]"></div>
          <Text className="BeefSteakwith" as="h5" variant="h5">
            Beef Steak with Fried Potato
          </Text>
          <Text className="Loremipsumdol1" variant="body1">
            Lorem ipsum dolor sit amet...
          </Text>
          <div className="bg-indigo_100 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[86px] ml-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius18 w-[86%]"></div>
          <Text className="BeefSteakwith" as="h5" variant="h5">
            Pancake with Honey
          </Text>
          <Text className="Loremipsumdol1" variant="body1">
            Lorem ipsum dolor sit amet...
          </Text>
          <div className="bg-indigo_100 xl:h-[107px] 2xl:h-[121px] 3xl:h-[145px] lg:h-[86px] ml-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] rounded-radius18 w-[86%]"></div>
          <Text className="BeefSteakwith" as="h5" variant="h5">
            Japanese Beef Ramen
          </Text>
          <Text className="Loremipsumdol1" variant="body1">
            Lorem ipsum dolor sit amet...
          </Text>
          <Button
            className="font-semibold ml-[1px] lg:mt-[17px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[86%]"
            shape="CircleBorder30"
            size="lg"
            variant="OutlinePinkA7000c"
          >
            View More
          </Button>
        </Column>
      </Row>
    </>
  );
};

export default DashboardPage;
