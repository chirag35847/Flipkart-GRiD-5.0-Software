import { Button, SimpleGrid, TextInput } from '@mantine/core'
import React from 'react'

const Referral = () => {
    return (
        <>
            <SimpleGrid
                breakpoints={[
                    { minWidth: "sm", cols: 1 },
                    { minWidth: "md", cols: 1 },
                    { minWidth: "lg", cols: 2 },
                    { minWidth: "xl", cols: 2, spacing: "md" },
                ]}
            >
                <TextInput
                    placeholder="Enter the address to Refer"
                    withAsterisk
                />
                <Button className='bg-[#4f46e5]'>Refer</Button>
            </SimpleGrid>
        </>
    )
}

export default Referral