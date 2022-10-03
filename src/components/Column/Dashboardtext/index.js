import React from "react";

import { Column, Text } from "components";

const Dashboardtext = (props) => {
  return (
    <>
      <Column className={props.className}>
        <Column className="items-center w-[100%]">
          <Text className="Group253" variant="body1">
            Last Week
          </Text>
        </Column>
        <Text
          className="font-bold font-poppins mt-[4px] text-colors4 w-[auto]"
          as="h5"
          variant="h5"
        >
          1.356
        </Text>
      </Column>
    </>
  );
};

export default Dashboardtext;
