import { ActionIcon } from '@mantine/core'
import { IconArrowRight } from '@tabler/icons-react'
import { DataTable } from 'mantine-datatable'
import React from 'react'

const TransactionTable = () => {
  return (
        <DataTable
        borderRadius={15}
        highlightOnHover
        className='h-[90%]'
          records={[
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'},
            {tranactionType:'Contract Call',TxId:'0xxxxxxx00x00dewdwehrtg',to_from:'Person1',date:'01/01/2020'}
          ]}
          columns={[
            {
                accessor: 'tranactionType',
                title: 'Call Type',
                textAlignment: 'left',
            },
            { 
                accessor: 'TxId',
                title: 'Tx - ID',
            },
            {
                accessor: 'to_from',
                title:'To - From'
            },
            {
                accessor: 'date',
                title:'Tx - Date'
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