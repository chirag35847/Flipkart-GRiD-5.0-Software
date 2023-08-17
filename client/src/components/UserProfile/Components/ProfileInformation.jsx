import { Space } from '@mantine/core'
import React, { useState } from 'react'

const ProfileInformation = () => {

    const [about,setAbout] = useState('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum')
    const [name,setName] = useState('Chirag Mittal');
    const [mobile,setMobile] = useState('+91-8527288876');
    const [email,setEmail] = useState('chirag.mittal@asira.health');
    const [location,setLocation] = useState("Dharwad, India");
    
  return (
    <div className='flex flex-col'>
        <p>{about}</p>
        <Space h={'3vh'}/>
        <div className='flex flex-row justify-start'>
            <h2 className='text-bold'>Full Name:</h2>
            <Space w={'1vw'}/>
            <h2 >{name}</h2>
        </div>
        <Space h={'1vh'}/>
        <div className='flex flex-row justify-start'>
            <h2 className='text-bold'>Mobile:</h2>
            <Space w={'1vw'}/>
            <h2 >{mobile}</h2>
        </div>
        <Space h={'1vh'}/>
        <div className='flex flex-row justify-start'>
            <h2 className='text-bold'>Email:</h2>
            <Space w={'1vw'}/>
            <h2 >{email}</h2>
        </div>
        <Space h={'1vh'}/>
        <div className='flex flex-row justify-start'>
            <h2 className='text-bold'>Location:</h2>
            <Space w={'1vw'}/>
            <h2 >{location}</h2>
        </div>

    </div>
  )
}

export default ProfileInformation