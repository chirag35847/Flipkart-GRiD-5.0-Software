import React from 'react'
import NavBar from "../Navbar";
import SideBar from '../Dashboard/Components/SideBar';
import { Badge, Card, Group, Image, Space, Text, TextInput } from '@mantine/core';
import {IconSearch,IconUser,IconBell} from '@tabler/icons-react'

const Dashboard = () => {

    return (
        <>
          <div class="flex w-screen h-screen text-gray-400 bg-gray-900">
            <SideBar/>
            <div class="flex flex-col flex-grow">
              <NavBar/>
              <div class="flex-grow p-6 overflow-auto bg-gray-800 relative">
                  <div className="lg:p-[2%] md:p-[4%] sm:p-[4%] lg:mt-[5%] md:mt-[10%] sm:mt-[10%] bg-[#1a1b1e] h-[85vh] w-[100%] rounded-3xl">
                    <div className='flex flex-row'>
                        <TextInput w={'85vw'} rightSection={<IconSearch className='p-2' size="md" />} />
                        <Space w={'2vw'}/>
                        <div className='rounded-full bg-white justify-center p-1' style={{width:'37px',height:'37px'}}>
                            <IconBell size={'sm'}/>
                        </div>
                        <Space w={'1vw'}/>
                        <div className='rounded-full bg-white justify-center p-1' style={{width:'37px',height:'37px'}}>
                            <IconUser size={'sm'}/>
                        </div>
                    </div>

                    <div className='absolute' style={{top:'50vh',left:'1vw'}}>
                        <h2 className='text-[1.25rem]' style={{transform:'rotate(270deg)'}}>Your NFT's</h2>
                    </div>

                    <div className='flex flex-row relative mt-[3vh] justify-between'>
                        <div>
                            <div className='relative md:left-[2vw]'>
                                <Card padding={'lg'} radius={'md'} withBorder className='ml-[3vw]' h={'40vh'}>
                                    <Card.Section p={12} pt={25}>
                                        <Image 
                                            src={'https://imageio.forbes.com/specials-images/imageserve/6170e01f8d7639b95a7f2eeb/Sotheby-s-NFT-Natively-Digital-1-2-sale-Bored-Ape-Yacht-Club--8817-by-Yuga-Labs/0x0.png?format=png&width=960'}
                                            height={'30vh'}
                                            alt='monkey-nft'
                                            radius={'md'}
                                        />
                                    </Card.Section>
                                    <div className='absolute bg-[#fff] border-4 border-[#25262b] rounded-full w-[8vw] h-[4vh] top-[.25vh] left-0 right-0 m-auto'>
                                        <div className='flex w-full justify-center content-center'>
                                        <Text color='black'>$45</Text>
                                        </div>
                                    </div>
                                    <Group position="center" mt="md" mb="xs">
                                        <Text weight={'20vw'}>Flipkart Grid 5.0</Text>
                                    </Group>
                                </Card>
                            </div>
                        </div>
                        
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </>
      );
}

export default Dashboard