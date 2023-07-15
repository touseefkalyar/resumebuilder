import { useEffect, useState } from 'react';
import MyInput from '../../../components/MyInput';
import './ReferenceInfo.css';
import DropDownField from '../../../components/dropdownfield';


export default function ReferenceInfo({sendReferenceInfo}){

    const [organization,setOrg]=useState('');
    const [position,setPosition]=useState('');
    const [email,setEmail]=useState('');
    const [phone,setPhone]=useState('');
    const [name,setName]=useState('');

    const handleName=(e)=>{
        setName(e.target.value)
    }
    const handlePosition=(e)=>{
        setPosition(e.target.value)
    }
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePhone=(e)=>{
        setPhone(e.target.value)
    }
    const handleOrg=(e)=>{
        setOrg(e.target.value)
    }

    useEffect(
        ()=>{
            sendReferenceInfo(name,position,organization,phone,email)
        }
    )

    const refSection=   <div className='ReferenceInfo-Form'>
    <div className='Reference_title'>Reference 1</div>
    <div className='Reference1'>
    <MyInput type='text' name='Name' placeholder='Name'  onChange={handleName}/>
    <MyInput type='text' name='Organization' placeholder='Organization*'  onChange={handleOrg}/>
    <MyInput type='text' name='Position' placeholder='Position' onChange={handlePosition}/>
    <MyInput type='text' name='Phone' placeholder='Phone' onChange={handlePhone}/>  
    <MyInput type='text' name='Email' placeholder='Email' onChange={handleEmail}/>  
    </div>   
    <div className='Reference_title'>Reference 2</div>
    <div className='Reference2'>
    <MyInput type='text' name='Institute/Organization' placeholder='Institute/Organization*'  />
    <MyInput type='text' name='Position' placeholder='Position' />
    <MyInput type='text' name='Duration' placeholder='Duration*' />  
    <MyInput type='text' name='Description' placeholder='Description*' />  
    </div>                       
</div>
    return(
            <div className='ReferenceInfo-container'>
                     <DropDownField secDetails={refSection}  secHeading="Reference Details" />        
            </div>


    );
}