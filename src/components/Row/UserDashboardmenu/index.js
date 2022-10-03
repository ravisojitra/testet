import React from "react";

import { Row, Img, Button, Column, Text } from "components";

const UserDashboardmenu = (props) => {
  return (
    <>
      <Row className={props.className}>
        <Img
          src="images/img_notification_12.png"
          className="lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
          alt="notification"
        />
        <Row className="items-center justify-between lg:ml-[10px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] w-[74%]">
          <Button
            className="flex lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] items-center justify-center lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
            shape="icbCircleBorder28"
            size="lgIcn"
            variant="icbOutline0cbf156c"
          >
            <Img
              src="images/img_setting_12.png"
              className="flex items-center justify-center"
              alt="setting"
            />
          </Button>
          <Column className="w-[27%]">
            <Column className="items-center w-[100%]">
              <Text className="Group152" variant="body1">
                Nabila A.
              </Text>
            </Column>
            <Text className="Name2" variant="body1">
              Admin
            </Text>
          </Column>
          <div className="bg-colors3 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
        </Row>
      </Row>
    </>
  );
};

export default UserDashboardmenu;
