import React from "react";

import { Column, Text } from "components";

const UserDashboardText = (props) => {
  return (
    <>
      <Column className={props.className}>
        <Text className="Group152" as="h5" variant="h5">
          Jordan Nico
        </Text>
        <Column className="items-center lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[100%]">
          <Text className="Group253" variant="body1">
            Lorem ipsum dolor sit amet...
          </Text>
        </Column>
      </Column>
    </>
  );
};

export default UserDashboardText;
