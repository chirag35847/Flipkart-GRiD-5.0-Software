import { ActionIcon } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import { DataTable } from 'mantine-datatable'
import React, { useEffect, useState } from 'react'
import sortBy from 'lodash/sortBy'

const TransactionTable = () => {
  const [sortStatus,setSortStatus] = useState({ columnAccessor: 'tranactionType', direction: 'asc' });
  const [records,setRecords] = useState([
    {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
  ]);

  useEffect(()=>{
    const data = sortBy(records,sortStatus.columnAccessor);
    setRecords(sortStatus.direction==='desc'?data.reverse():data);
  },[sortStatus]);

  return (
        <DataTable
        borderRadius={15}
        highlightOnHover
        className='h-[69vh]'
          records={records}
          columns={[
            {
                accessor: 'tranactionType',
                title: 'Call Type',
                textAlignment: 'left',
                sortable:true,
            },
            { 
                accessor: 'TxId',
                title: 'Tx - ID',
                sortable:true,
            },
            {
                accessor: 'to_from',
                title:'To - From',
                sortable:true,
            },
            {
                accessor: 'date',
                title:'Tx - Date',
                sortable:true,
            },
          ].concat([
            {
              accessor: "actions",
              title: "",
              render: (record) => (
                <ActionIcon color="blue">
                    <IconArrowRight size={16} />
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

export default TransactionTable