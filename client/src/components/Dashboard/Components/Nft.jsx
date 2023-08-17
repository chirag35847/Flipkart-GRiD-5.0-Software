import { Grid, ScrollArea, SimpleGrid, Tabs } from '@mantine/core'
import React, { useState } from 'react'
import NFTCard from './NFTcard';

const Nft = () => {
    const [tab,setTab] = useState('first');
  return (
    <div className='flex flex-col'>
        <div className='bg-[#262834] h-[6vh] w-[100%] rounded-2xl text-white p-3 mb-3'>Your NFTs</div>

        <Tabs value={tab} onTabChange={setTab} className='mb-3'>
            <Tabs.List>
                <Tabs.Tab key={'1'} value="first">Owned</Tabs.Tab>
                <Tabs.Tab key={'2'} value="second">Suspecious</Tabs.Tab>
            </Tabs.List>
        </Tabs>

        {
            tab=='first'?
            <div className='w-full'>
                <ScrollArea h={'55vh'}>
                    <SimpleGrid 
                        cols={5}
                        spacing={'sm'}
                        breakpoints={[
                            {maxWidth:'200px',cols:2,spacing:'sm'},
                            {maxWidth:'640px',cols:3,spacing:'sm'},
                            {maxWidth:'768px',cols:3,spacing:'sm'},
                            {maxWidth:'1024px',cols:4,spacing:'sm'},
                            {maxWidth:'1280px',cols:4,spacing:'sm'},
                            {maxWidth:'1536px',cols:4,spacing:'sm'},
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