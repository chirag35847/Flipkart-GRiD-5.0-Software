import React from 'react'
import SideBar from '../Dashboard/Components/SideBar';
import NavBar from '../Navbar';
import { Button, Modal, Text } from '@mantine/core';
import BrandsTable from './Components/BrandsTable';
import { useDisclosure } from '@mantine/hooks';

const BrandsDashboard = () => {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <div class="flex w-screen h-screen text-gray-400 bg-gray-900">
            <SideBar />
            <div class="flex flex-col flex-grow">
                <NavBar />
                <div class="flex-grow p-6 overflow-auto bg-gray-800">
                    <div className="lg:p-[2%] md:p-[4%] sm:p-[4%] lg:mt-[5%] md:mt-[10%] sm:mt-[10%] bg-[#1a1b1e] h-[85vh] w-[100%] rounded-3xl">
                        <div className="p-2 bg-[#1a1b1e] h-[5vh] w-[100%] rounded-2xl md:mb-[3%] lg:mb-[2%]">
                            <div className="flex justify-between">
                                <Text fz={'xl'} fw={700}>Available Brands</Text>
                                <Button className='bg-[#0096FF]' onClick={open}>Add Brand</Button>
                            </div>
                        </div>

                        <BrandsTable/>
                        <Modal opened={opened} onClose={close} title='Add / Edit Organization'>
                            Fields to be added
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BrandsDashboard