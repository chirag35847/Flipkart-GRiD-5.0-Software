import { SimpleGrid, Space } from '@mantine/core'
import React from 'react'
import InformationCard from './InformationCard'
import TokenCard from './TokenCard'

const Token = () => {
  return (
        <SimpleGrid breakpoints={[
            {minWidth:'sm',cols:1},
            {minWidth:'md',cols:1},
            {minWidth:'lg',cols:2},
            {minWidth:'xl',cols:2,spacing:'md'},
        ]}>
            <TokenCard title={'Total Ether Spent'} value={'45'}/>
            <TokenCard title={'Total Token Rewards'} value={'45'}/>
            <TokenCard title={'Number of Refferals'} value={'45'}/>
            <TokenCard title={'Total Loyality Tokens'} value={'45'}/>
            <TokenCard title={'Total Balance'} value={'45'}/>
        </SimpleGrid>
  )
}

export default Token