import { SimpleGrid, Space } from "@mantine/core";
import React from "react";
import { useUserDataContext } from "../../contexts/UserContextProvider";
import InformationCard from "./InformationCard";
import numeral from "numeral";
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
        title={"Total Dollar Spent"}
        value={"$ " + numeral(user?.totalEtherSpent).format("0.0a")}
      />
      <InformationCard
        title={"Total Token Rewards"}
        value={numeral(user?.totalTokenRewards).format("0.0a")}
      />
      <InformationCard
        title={"Number of Refferals"}
        value={numeral(user?.numberOfRefferrels).format("0.0a")}
      />
      <InformationCard
        title={"Total Loyality Tokens"}
        value={numeral(user?.totalLoyalityTokenBalance).format("0.0a")}
      />
       <InformationCard
        title={"Total Balance"}
        value={numeral(user?.totalBalance).format("0.0a")}
      />
    </SimpleGrid>
  );
};

export default Information;
