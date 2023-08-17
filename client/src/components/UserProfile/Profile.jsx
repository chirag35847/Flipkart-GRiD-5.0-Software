import React, { useState } from 'react'
import SideBar from '../Dashboard/Components/SideBar';
import NavBar from '../Navbar';
import { Avatar, ScrollArea, SimpleGrid, Space, Text } from '@mantine/core';
import PastTransactions from './Components/PastTransactions';
import ProfileInformation from './Components/ProfileInformation';
import AvailableOptions from './Components/AvailableOptions';

const Profile = () => {
    const [username,setUserName] = useState("Chirag Mittal");

    return (
        <div class="flex w-screen h-screen text-gray-400 bg-gray-900">
            <SideBar />
            <div class="flex flex-col flex-grow">
                <NavBar />
                <div class="flex-grow p-6 overflow-auto bg-gray-800">
                    <div className="lg:p-[2%] md:p-[4%] sm:p-[4%] lg:mt-[5%] md:mt-[10%] sm:mt-[10%] bg-[#1a1b1e] h-[85vh] w-[100%] rounded-3xl">
                        <div className='flex flex-col'>
                            <div className='flex justify-start mb-[2vh]'>
                                <div className='flex flex-row'>
                                    <Avatar src={null} alt={username} color={'cyan'} className='h-[8vh] w-[8vw] rounded-full'>CM</Avatar>
                                    <Space w={'lg'}/>
                                    <div className='flex flex-col justify-center '>
                                        <h1>{username}</h1>
                                        <Space h={'md'}/>
                                        <h2>Premium User</h2>
                                    </div>
                                </div>
                            </div>
                            <ScrollArea h={'68vh'} className='p-2'>
                                <SimpleGrid breakpoints={[
                                    {minWidth:'sm',cols:2},
                                    {minWidth:'md',cols:2},
                                    {minWidth:'lg',cols:2},
                                    {minWidth:'xl',cols:2},
                                ]}>
                                    <div className='flex flex-col mt-[3vh] '>
                                        <div className='flex flex-row justify-between'>
                                            <h2 className='font-bold mb-[1.5vh]'>Profile Information</h2>
                                            <h2 className='font-bold mb-[1.5vh]'>Bal : $45</h2>
                                        </div>
                                        <ProfileInformation/>
                                    </div>
                                    <div className='flex flex-col mt-[3vh] '>
                                        <h2 className='font-bold mb-[1.5vh]'>Available Spending Options</h2>
                                        <AvailableOptions/>
                                    </div>
                                    <div className='flex flex-col mt-[3vh] '>
                                        <h2 className='font-bold mb-[1.5vh]'>Past Transactions</h2>
                                        <PastTransactions/>
                                    </div>
                                </SimpleGrid>
                            </ScrollArea>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile