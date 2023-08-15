import { Grid, ScrollArea, SimpleGrid, Tabs } from '@mantine/core'
import React, { useState } from 'react'
import NFTCard from './NFTcard';

const Nft = () => {
    const [tab,setTab] = useState('first');
  return (
    <div className='flex flex-col'>
        <div className='bg-[#445069] h-[14%] w-[100%] rounded-2xl text-white p-3 mb-3'>Your NFTs</div>

        <Tabs value={tab} onTabChange={setTab} className='mb-3'>
            <Tabs.List>
                <Tabs.Tab key={'1'} value="first">Owned</Tabs.Tab>
                <Tabs.Tab key={'2'} value="second">Suspecious</Tabs.Tab>
            </Tabs.List>
        </Tabs>

        {
            tab=='first'?
            <div className='w-full'>
                <ScrollArea h={550}>
                    <SimpleGrid 
                        cols={3}
                        spacing={'lg'}
                        breakpoints={[
                            {maxWidth:'200px',cols:2,spacing:'md'},
                            {maxWidth:'640px',cols:3,spacing:'md'},
                            {maxWidth:'768px',cols:3,spacing:'xl'},
                            {maxWidth:'1024px',cols:4,spacing:'xl'},
                        ]}
                    >
                        <NFTCard/>
                        <NFTCard/>
                        <NFTCard/>
                        <NFTCard/>
                        <NFTCard/>
                        <NFTCard/>
                    </SimpleGrid>
                </ScrollArea>
            </div>
            :
            <></>
        }
    </div>
  )
}

export default Nft