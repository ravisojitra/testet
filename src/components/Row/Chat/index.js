import React from "react";

import { Row, Column, Text } from "components";

const Chat = (props) => {
  return (
    <>
      <Row className={props.className}>
        <div className="bg-colors3 lg:h-[32px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] rounded-radius50 lg:w-[32px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"></div>
        <Column className="justify-start xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] mt-[2px] w-[45%]">
          <Text className="Group152" as="h5" variant="h5">
            Karen Hope
          </Text>
          <Column className="items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
            <Text className="Group253" variant="body1">
              Lorem ipsum dolor sit amet...
            </Text>
          </Column>
        </Column>
        <Text
          className="lg:ml-[57px] xl:ml-[72px] 2xl:ml-[81px] 3xl:ml-[97px] mt-[2px] Group253"
          variant="body1"
        >
          12:45 PM
        </Text>
      </Row>
    </>
  );
};

export default Chat;
