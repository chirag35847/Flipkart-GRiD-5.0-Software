import { SimpleGrid, Space } from '@mantine/core'
import React from 'react'
import InformationCard from './InformationCard'

const Information = () => {
  return (
        <SimpleGrid breakpoints={[
            {minWidth:'sm',cols:1},
            {minWidth:'md',cols:1},
            {minWidth:'lg',cols:2},
            {minWidth:'xl',cols:2,spacing:'md'},
        ]}>
            <InformationCard title={'Total Ether Spent'} value={'45'}/>
            <InformationCard title={'Total Token Rewards'} value={'45'}/>
            <InformationCard title={'Number of Refferals'} value={'45'}/>
            <InformationCard title={'Total Loyality Tokens'} value={'45'}/>
            <InformationCard title={'Total Balance'} value={'45'}/>
        </SimpleGrid>
  )
}

export default Information