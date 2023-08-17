import { sortBy } from 'lodash';
import React, { useEffect, useState } from 'react'
import {IconArrowBigRightLinesFilled} from '@tabler/icons-react'
import { DataTable } from 'mantine-datatable';
import { ActionIcon } from '@mantine/core';

const AvailableOptions = () => {
    const [sortStatus,setSortStatus] = useState({ columnAccessor: 'id', direction: 'asc' });
    const [records,setRecords] = useState([
      { id: 1, name:'Arctic Fox Backpack',amt:1500,throughNFT:'5%'},
      { id: 2, name:'Arctic Fox Backpack',amt:1500,throughNFT:'5%'},
      { id: 3, name:'Arctic Fox Backpack',amt:1500,throughNFT:'5%'},
      { id: 4, name:'Arctic Fox Backpack',amt:1500,throughNFT:'5%'},
      { id: 5, name:'Arctic Fox Backpack',amt:1500,throughNFT:'5%'},
      { id: 6, name:'Arctic Fox Backpack',amt:1500,throughNFT:'5%'},
      { id: 7, name:'Arctic Fox Backpack',amt:1500,throughNFT:'5%'},
      { id: 8, name:'Arctic Fox Backpack',amt:1500,throughNFT:'5%'},
      { id: 9, name:'Arctic Fox Backpack',amt:1500,throughNFT:'5%'},
      { id: 10, name:'Arctic Fox Backpack',amt:1500,throughNFT:'5%'},
      { id: 11, name:'Arctic Fox Backpack',amt:1500,throughNFT:'5%'},
      { id: 12, name:'Arctic Fox Backpack',amt:1500,throughNFT:'5%'},
      { id: 13, name:'Arctic Fox Backpack',amt:1500,throughNFT:'5%'},
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
      className='h-[68vh]'
        records={records}
        columns={[
            {
                accessor:'name',
                title:'Product Name'
            },
            {
                accessor:'throughNFT',
                title:'Pay Through NFT',
            },
            {
                accessor:"amt",
                title:'Product Amount',
            }
        ].concat([
          {
            accessor: "actions",
            title: "",
            render: (record) => (
              <ActionIcon color="blue">
                  <IconArrowBigRightLinesFilled size={16} />
              </ActionIcon>
            ),
          },
        ])}
      />
    )
}

export default AvailableOptions