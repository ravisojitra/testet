import React from "react";

import { Column, Row, Img, Text } from "components";

const Dashboard = (props) => {
  return (
    <>
      <Column className={props.className}>
        <Row className="bg-colors6 items-center lg:pl-[15px] xl:pl-[19px] 2xl:pl-[21px] 3xl:pl-[26px] xl:py-[10px] 2xl:py-[11px] 3xl:py-[13px] lg:py-[8px] rounded-bl-[40px] rounded-br-[0] rounded-tl-[40px] rounded-tr-[0] shadow-bs w-[100%]">
          <Img src="images/img_vector_63.png" className="Vector" alt="Vector" />
          <Text className="Dashboard2" as="h5" variant="h5">
            Dashboard
          </Text>
        </Row>
      </Column>
    </>
  );
};

export default Dashboard;
