import { sortBy } from 'lodash';
import { DataTable } from 'mantine-datatable';
import React, { useEffect, useState } from 'react'

const PastTransactions = () => {
    const [sortStatus,setSortStatus] = useState({ columnAccessor: 'id', direction: 'asc' });
    const [records,setRecords] = useState([
        {id:1,spentAmt:4000,reward:'1BTC',txid:'0bufdvireuifviuhbhb'},
        {id:2,spentAmt:4000,reward:'1BTC',txid:'0bufdvireuifviuhbhb'},
        {id:3,spentAmt:4000,reward:'1BTC',txid:'0bufdvireuifviuhbhb'},
        {id:4,spentAmt:4000,reward:'1BTC',txid:'0bufdvireuifviuhbhb'},
        {id:5,spentAmt:4000,reward:'1BTC',txid:'0bufdvireuifviuhbhb'},
        {id:6,spentAmt:4000,reward:'1BTC',txid:'0bufdvireuifviuhbhb'},
        {id:7,spentAmt:4000,reward:'1BTC',txid:'0bufdvireuifviuhbhb'},
        {id:8,spentAmt:4000,reward:'1BTC',txid:'0bufdvireuifviuhbhb'},
        {id:9,spentAmt:4000,reward:'1BTC',txid:'0bufdvireuifviuhbhb'},
        {id:10,spentAmt:4000,reward:'1BTC',txid:'0bufdvireuifviuhbhb'},
        {id:11,spentAmt:4000,reward:'1BTC',txid:'0bufdvireuifviuhbhb'},
        {id:12,spentAmt:4000,reward:'1BTC',txid:'0bufdvireuifviuhbhb'},
        {id:13,spentAmt:4000,reward:'1BTC',txid:'0bufdvireuifviuhbhb'},
        {id:14,spentAmt:4000,reward:'1BTC',txid:'0bufdvireuifviuhbhb'},
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
                accessor:'spentAmt',
                title:'Spent Amount',
                sortable:true
            },
            {
                accessor:'reward',
                title:'Reawrd Recieved',
            },
            {
                accessor:"txid",
                title:'Transaction Id',
            }
        ]}
      />
    )
}

export default PastTransactions