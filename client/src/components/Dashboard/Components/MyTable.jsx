import React from 'react'
import {DataTable} from 'mantine-datatable'
import {IconDotsVertical} from '@tabler/icons-react'
import { ActionIcon } from '@mantine/core'

const MyTable = () => {
  return (
    <DataTable
    borderRadius={15}
    highlightOnHover
    className='h-[90%]'
      records={[
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
        { id: 1, name: 'Joe Biden', bornIn: 1942, party: 'Democratic' },
      ]}
      columns={[
        {
            accessor: 'id',
            title: 'Token',
            textAlignment: 'left',
        },
        { 
            accessor: 'name',
            title: 'Portfolio %',
        },
        {
            accessor: 'party',
            title:'Price (24hr)'
        },
        {
            accessor: 'party',
            title:'Holders'
        },
        {
            accessor:'party',
            title:'Balance',
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