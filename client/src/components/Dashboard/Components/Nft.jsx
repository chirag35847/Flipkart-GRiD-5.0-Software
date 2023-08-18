import { Grid, ScrollArea, SimpleGrid, Tabs } from '@mantine/core'
import React, { useState } from 'react'
import NFTCard from './NFTcard';

const Nft = () => {
    const [tab,setTab] = useState('first');
  return (
    <div className='flex flex-col'>
        <div className='bg-[#445069] h-[14%] w-[100%] rounded-2xl text-white p-3 mb-3'>Your NFTs</div>
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