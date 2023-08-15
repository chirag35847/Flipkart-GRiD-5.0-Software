import React, { useEffect, useState } from 'react'
import {DataTable} from 'mantine-datatable'
import {IconDotsVertical,IconBrandApple,IconPlus} from '@tabler/icons-react'
import { ActionIcon } from '@mantine/core'
import sortBy from 'lodash/sortBy'

const MyTable = () => {
  const [sortStatus,setSortStatus] = useState({ columnAccessor: 'price', direction: 'asc' });
  const [records,setRecords] = useState([
    { id: 1, percent: 43.2, price: '$1.00',delta:'-$0.0015 (-0.15%)', holders: 'Democratic',balanceUSD:'$242.54',balanceNFT:'265.843 DAI' },
    { id: 2, percent: 43.3, price: '$1.00',delta:'$0.0015 (0.15%)', holders: 'Democratic',balanceUSD:'$242.54',balanceNFT:'265.843 DAI' },
    { id: 3, percent: 43.4, price: '$1.00',delta:'-$0.0015 (-0.15%)', holders: 'Democratic',balanceUSD:'$242.54',balanceNFT:'265.843 DAI' },
    { id: 4, percent: 43.5, price: '$1.00',delta:'-$0.0015 (-0.15%)', holders: 'Democratic',balanceUSD:'$242.54',balanceNFT:'265.843 DAI' },
    { id: 5, percent: 43.5, price: '$1.00',delta:'-$0.0015 (-0.15%)', holders: 'Democratic',balanceUSD:'$242.54',balanceNFT:'265.843 DAI' },
    { id: 6, percent: 43.7, price: '$1.00',delta:'-$0.0015 (-0.15%)', holders: 'Democratic',balanceUSD:'$242.54',balanceNFT:'265.843 DAI' },
    { id: 7, percent: 43.8, price: '$1.00',delta:'-$0.0015 (-0.15%)', holders: 'Democratic',balanceUSD:'$242.54',balanceNFT:'265.843 DAI' },
    { id: 8, percent: 43.9, price: '$1.00',delta:'-$0.0015 (-0.15%)', holders: 'Democratic',balanceUSD:'$242.54',balanceNFT:'265.843 DAI' },
    { id: 9, percent: 44.2, price: '$1.00',delta:'-$0.0015 (-0.15%)', holders: 'Democratic',balanceUSD:'$242.54',balanceNFT:'265.843 DAI' },
    { id: 10, percent: 43.2, price: '$1.00',delta:'-$0.0015 (-0.15%)', holders: 'Democratic',balanceUSD:'$242.54',balanceNFT:'265.843 DAI' },
    { id: 11, percent: 43.3, price: '$1.00',delta:'$0.0015 (0.15%)', holders: 'Democratic',balanceUSD:'$242.54',balanceNFT:'265.843 DAI' },
    { id: 12, percent: 43.4, price: '$1.00',delta:'-$0.0015 (-0.15%)', holders: 'Democratic',balanceUSD:'$242.54',balanceNFT:'265.843 DAI' },
    { id: 13, percent: 43.5, price: '$1.00',delta:'-$0.0015 (-0.15%)', holders: 'Democratic',balanceUSD:'$242.54',balanceNFT:'265.843 DAI' },
    { id: 14, percent: 43.5, price: '$1.00',delta:'-$0.0015 (-0.15%)', holders: 'Democratic',balanceUSD:'$242.54',balanceNFT:'265.843 DAI' },
    { id: 15, percent: 43.7, price: '$1.00',delta:'-$0.0015 (-0.15%)', holders: 'Democratic',balanceUSD:'$242.54',balanceNFT:'265.843 DAI' },
    { id: 16, percent: 43.8, price: '$1.00',delta:'-$0.0015 (-0.15%)', holders: 'Democratic',balanceUSD:'$242.54',balanceNFT:'265.843 DAI' },
    { id: 17, percent: 43.9, price: '$1.00',delta:'-$0.0015 (-0.15%)', holders: 'Democratic',balanceUSD:'$242.54',balanceNFT:'265.843 DAI' },
    { id: 18, percent: 44.2, price: '$1.00',delta:'-$0.0015 (-0.15%)', holders: 'Democratic',balanceUSD:'$242.54',balanceNFT:'265.843 DAI' },
    { id: 19, percent: 43.2, price: '$1.00',delta:'-$0.0015 (-0.15%)', holders: 'Democratic',balanceUSD:'$242.54',balanceNFT:'265.843 DAI' },
    { id: 20, percent: 43.3, price: '$1.00',delta:'$0.0015 (0.15%)', holders: 'Democratic',balanceUSD:'$242.54',balanceNFT:'265.843 DAI' },
    { id: 21, percent: 43.4, price: '$1.00',delta:'-$0.0015 (-0.15%)', holders: 'Democratic',balanceUSD:'$242.54',balanceNFT:'265.843 DAI' },
  ]);

  useEffect(()=>{
    const data = sortBy(records,sortStatus.columnAccessor);
    setRecords(sortStatus.direction==='desc'?data.reverse():data);
  },[sortStatus]);

  return (
    <DataTable
    borderRadius={15}
    highlightOnHover
    onSortStatusChange={setSortStatus}
    sortStatus={sortStatus}
    className='h-[70vh]'
      records={records}
      columns={[
        {
            accessor: 'id',
            title: 'Token',
            textAlignment: 'left',
            sortable:true,
            render:(props)=>{
              return <strong>{props.id}</strong>
            }
        },
        { 
            accessor: 'percent',
            title: 'Portfolio %',
            sortable:true,
            render:({percent})=>{
              return <strong>{percent+'%'}</strong>
            },
        },
        {
            accessor: 'price',
            title:'Price (24hr)',
            sortable:true,
            render:({delta,price})=>{
              const isNeg = delta[0]=='-'?true:false;
              const className = isNeg?'text-[#FF0000]':'text-[#00FF06]';
              return (
                <div className='flex flex-col'>
                  <strong>{price}</strong>
                  <p className={className}>{delta}</p>
                </div>
              )
            }

        },
        {
            accessor: 'holders',
            title:'Holders',
            render:(props)=>{
              return (
                <div className='flex flex-row'>
                  <IconBrandApple/>
                  <IconPlus />
                </div>
              )
            }
        },
        {
            accessor:'balanceUSD',
            title:'Balance',
            render:({balanceUSD,balanceNFT})=>{
              return (
                <div className='flex flex-col'>
                  <strong>{balanceUSD}</strong>
                  <p>{balanceNFT}</p>
                </div>
              )
            }
        },
      ].concat([
        {
          accessor: "actions",
          title: "",
          render: (record) => (
            <ActionIcon color="blue">
                <IconDotsVertical size={16} />
            </ActionIcon>
          ),
        },
      ])}
      onRowClick={({ name, party, bornIn }) =>
        alert(`You clicked on ${name}, a ${party.toLowerCase()} president born in ${bornIn}.`)
      }
    />
  )
}

export default MyTable