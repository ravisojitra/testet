import React from "react";

import { Row, Text } from "components";

const Food = (props) => {
  return (
    <>
      <Row className={props.className}>
        <Text
          className="bg-colors1 flex font-normal font-poppins items-center leading-[normal] my-[0] not-italic lg:px-[11px] xl:px-[14px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius50 text-center text-colors text-shadow-ts lg:w-[26px] xl:w-[33px] 2xl:w-[37px] 3xl:w-[45px]"
          as="h5"
          variant="h5"
        >
          1
        </Text>
        <Text
          className="border-2 border-colors2 border-solid flex font-normal font-poppins items-center leading-[normal] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] not-italic lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius50 text-center text-colors2 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px]"
          as="h5"
          variant="h5"
        >
          2
        </Text>
        <Text
          className="border-2 border-colors2 border-solid flex font-normal font-poppins items-center leading-[normal] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[8px] not-italic lg:px-[10px] xl:px-[13px] 2xl:px-[15px] 3xl:px-[18px] rounded-radius50 text-center text-colors2 lg:w-[27px] xl:w-[34px] 2xl:w-[38px] 3xl:w-[45px]"
          as="h5"
          variant="h5"
        >
          3
        </Text>
      </Row>
    </>
  );
};

export default Food;
