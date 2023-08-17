import React, { useState } from "react";
import NavBar from "../Navbar";
import SideBar from "./Components/SideBar";
import MyTable from './Components/MyTable'
import { Button, Space } from "@mantine/core";
import Nft from "./Components/Nft";
import TransactionTable from "./Components/TransactionTable";

const Dashboard = () => {
  const [buttonNumber,setButtonNumber] = useState(1);
  return (
    <>
      <div class="flex w-screen h-screen text-gray-400 bg-gray-900">
        <SideBar/>
        <div class="flex flex-col flex-grow">
          <NavBar/>
          <div class="flex-grow p-6 overflow-auto bg-gray-800">
              <div className="lg:p-[2%] md:p-[4%] sm:p-[4%] lg:mt-[5%] md:mt-[10%] sm:mt-[10%] bg-[#1a1b1e] h-[85vh] w-[100%] rounded-3xl">
                <div className="p-2 bg-[#1a1b1e] h-[5vh] w-[100%] rounded-2xl md:mb-[3%] lg:mb-[2%]">
                  <div className="flex">
                  <Button.Group className="">
                    <Button className={`border rounded-full ${buttonNumber==1?'bg-[#445069] hover:bg-[#445069]':''}`} variant={buttonNumber==1?'outline':'filled'} onClick={()=>setButtonNumber(1)}>Tokens</Button>
                    <Button className={`border rounded-full ${buttonNumber==2?'bg-[#445069] hover:bg-[#445069]':''}`} variant={buttonNumber==2?'outline':'filled'} onClick={()=>setButtonNumber(2)}>NFT's</Button>
                    <Button className={`border rounded-full ${buttonNumber==3?'bg-[#445069] hover:bg-[#445069]':''}`} variant={buttonNumber==3?'outline':'filled'} onClick={()=>setButtonNumber(3)}>Transactions</Button>
                  </Button.Group>
                  </div>
                </div>
                {
                  buttonNumber==1&&<MyTable/>
                }
                {
                  buttonNumber==2&&<Nft/>
                }
                {
                  buttonNumber==3&&<TransactionTable/>
                }
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
