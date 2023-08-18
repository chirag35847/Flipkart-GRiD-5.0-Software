import { DataTable } from 'mantine-datatable'
import React, { useEffect, useState } from 'react'
import sortBy from 'lodash/sortBy'
import { ActionIcon, Space } from '@mantine/core';
import { IconEdit } from '@tabler/icons-react';

const Transactions = () => {
    const [records,setRecords] = useState([
        {productName:'Something1',txid:'ihbrifiuerhfiuhhiu',date:'01/08/2010',price:'5000',tokensEarned:'4',loyalityTokensEarned:'5'},

    ])
    const [sortStatus,setSortStatus] = useState({ columnAccessor: 'id', direction: 'asc' });

    useEffect(()=>{
      const data = sortBy(records,sortStatus.columnAccessor);
      setRecords(sortStatus.direction==='desc'?data.reverse():data);
    },[sortStatus]);
  
    return (
            <div className='h-[90vh]'>
                <DataTable
                borderRadius={15}
                highlightOnHover
                onSortStatusChange={setSortStatus}
                sortStatus={sortStatus}
                className='h-[70vh] bg-[#1a1b1e] m-auto'
                records={records}
                columns={[
                    {
                        accessor:'productName',
                        title:'Product Name'
                    },
                    {
                        accessor:'date',
                        title:'Date',
                    },
                    {
                        accessor:"price",
                        title:'Purchase Amount',
                    },
                    {
                        accessor:"tokensEarned",
                        title:'Tokens Earned',
                    },
                    {
                        accessor:'loyalityTokensEarned',
                        title:'Loyality Tokens Earned',
                    }
        
                ].concat([
                    {
                    accessor: "actions",
                    title: "",
                    render: (record) => (
                        <ActionIcon color="blue">
                            <IconEdit size={16} />
                        </ActionIcon>
                    ),
                    },
                ])}
                />
            </div>
    )
}

export default Transactions