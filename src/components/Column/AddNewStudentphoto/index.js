import React from "react";

import { Column, Text } from "components";

const AddNewStudentphoto = (props) => {
  return (
    <>
      <Column className={props.className}>
        <Column className="items-center w-[100%]">
          <Text className="Group152" as="h5" variant="h5">
            Photo *
          </Text>
        </Column>
        <Column className="bg-colors border border-colors3 border-dashed xl:h-[117px] 2xl:h-[132px] 3xl:h-[158px] lg:h-[94px] items-center justify-end xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[8px] lg:px-[5px] xl:px-[6px] 2xl:px-[7px] 3xl:px-[9px] rounded-radius5 xl:w-[116px] 2xl:w-[131px] 3xl:w-[157px] lg:w-[93px]">
          <Text
            className="font-normal font-poppins leading-[normal] not-italic text-center text-colors2 w-[99%]"
            variant="body1"
          >
            Drag and drop or <br />
            click here to select file
          </Text>
        </Column>
      </Column>
    </>
  );
};

export default AddNewStudentphoto;
