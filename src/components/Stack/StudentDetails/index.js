import React from "react";

import { Stack, Img } from "components";

const StudentDetails = (props) => {
  return (
    <>
      <Stack className={props.className}>
        <Img
          src="images/img_vector_56.png"
          className="absolute bottom-[19%] lg:h-[3px] 2xl:h-[4px] xl:h-[4px] 3xl:h-[5px] right-[4%] w-[2%]"
          alt="Vector"
        />
        <Stack className="absolute lg:h-[124px] xl:h-[155px] 2xl:h-[175px] 3xl:h-[209px] w-[100%]">
          <Stack className="absolute bg-colors1 2xl:h-[106px] 3xl:h-[127px] lg:h-[75px] xl:h-[94px] rounded-bl-[0] rounded-br-[0] rounded-tl-[20px] rounded-tr-[20px] shadow-bs top-[0] w-[100%]">
            <Img
              src="images/img_masking_1.png"
              className="absolute 2xl:h-[106px] 3xl:h-[127px] lg:h-[75px] xl:h-[94px] w-[100%]"
              alt="Masking"
            />
          </Stack>
          <div className="absolute bg-colors3 border-8 border-colors border-solid bottom-[0] lg:h-[107px] xl:h-[134px] 2xl:h-[151px] 3xl:h-[181px] left-[3%] rounded-radius50 lg:w-[106px] xl:w-[133px] 2xl:w-[150px] 3xl:w-[180px]"></div>
        </Stack>
      </Stack>
    </>
  );
};

export default StudentDetails;
