import { Button, Space } from "@mantine/core";
import React from "react";
import { useUserDataContext } from "../../contexts/UserContextProvider";

const TokenCard = ({ title, value, brandID }) => {
  const { claimBrandTokens } = useUserDataContext();
  const claimingTokens = async () => {
    if (!brandID) return;
    await claimBrandTokens(brandID);
  };
  return (
    <div className="relative flex border items-center rounded-md h-[15vh] p-[1vw]">
      <div>
        <div className="p-3 bg-indigo-600 rounded">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </div>
      </div>
      <Space w={"2vw"} />
      <div className="absolute flex flex-row m-auto justify-end top-[2vh] right-[1vw]">
        <Button onClick={claimingTokens} className="bg-[#4f46e5]">Redeem</Button>
      </div>
      <div>
        <div className="flex flex-col">
          <div className="text-[#4f46e5] font-semibold text-[3rem]">
            {value}
          </div>
          <h4 className="text-2xl text-white">{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
