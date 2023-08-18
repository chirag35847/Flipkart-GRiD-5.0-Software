import { SimpleGrid, Space } from "@mantine/core";
import React from "react";
import { useUserDataContext } from "../../contexts/UserContextProvider";
import InformationCard from "./InformationCard";

const Information = () => {
  const { user } = useUserDataContext();
  console.log("user", user);
  return (
    <SimpleGrid
      breakpoints={[
        { minWidth: "sm", cols: 1 },
        { minWidth: "md", cols: 1 },
        { minWidth: "lg", cols: 2 },
        { minWidth: "xl", cols: 2, spacing: "md" },
      ]}
    >
      <InformationCard
        title={"Total Ether Spent"}
        value={user?.totalEtherSpent}
      />
      <InformationCard
        title={"Total Token Rewards"}
        value={user?.totalTokenRewards}
      />
      <InformationCard
        title={"Number of Refferals"}
        value={user?.numberOfRefferrels}
      />
      <InformationCard
        title={"Total Loyality Tokens"}
        value={user?.totalLoyalityTokenBalance}
      />
    </SimpleGrid>
  );
};

export default Information;
