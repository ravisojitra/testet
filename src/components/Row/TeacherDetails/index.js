import React from "react";

import { Row, Stack, Text } from "components";

const TeacherDetails = (props) => {
  return (
    <>
      <Row className={props.className}>
        <Stack className="lg:h-[29px] xl:h-[37px] 2xl:h-[41px] 3xl:h-[49px] w-[21%]">
          <div className="absolute bg-colors5 lg:h-[26px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] inset-y-[6%] rounded-radius16 lg:w-[25px] xl:w-[32px] 2xl:w-[36px] 3xl:w-[43px]"></div>
          <Text className="A" as="h1" variant="h1">
            A
          </Text>
        </Stack>
        <Text className="Akademi" as="h1" variant="h1">
          Akademi
        </Text>
      </Row>
    </>
  );
};

export default TeacherDetails;
