import React from "react";

import { Column, Row, Button } from "components";

const AddNewStudent5 = (props) => {
  return (
    <>
      <Column className={props.className}>
        <Row className="items-center justify-end w-[21%]">
          <Button
            className="font-normal font-poppins not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[55%]"
            shape="CircleBorder30"
            size="lg"
            variant="Outlineff4d44b5"
          >
            Save as Draft
          </Button>
          <Button
            className="font-normal font-poppins lg:ml-[13px] xl:ml-[17px] 2xl:ml-[19px] 3xl:ml-[23px] not-italic xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] lg:text-[9px] text-center w-[37%]"
            shape="CircleBorder30"
            size="lg"
            variant="Fillff4d44b5"
          >
            Submit
          </Button>
        </Row>
      </Column>
    </>
  );
};

export default AddNewStudent5;
