import { SimpleGrid, Space } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { useUserDataContext } from "../../contexts/UserContextProvider";
import TokenCard from "./TokenCard";

const Token = () => {
  const { user } = useUserDataContext();

  return (
    <SimpleGrid
      breakpoints={[
        { minWidth: "sm", cols: 1 },
        { minWidth: "md", cols: 1 },
        { minWidth: "lg", cols: 2 },
        { minWidth: "xl", cols: 2, spacing: "md" },
      ]}
    >
      {user ? (
        user.brandBalances.map((item, index) => {
          return (
            <TokenCard key={index} title={item.name} value={item.balance} />
          );
        })
      ) : (
        <></>
      )}
    </SimpleGrid>
  );
};

export default Token;
