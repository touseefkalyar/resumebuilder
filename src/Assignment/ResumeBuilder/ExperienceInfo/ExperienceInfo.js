import { useEffect, useState } from 'react';
import MyInput from '../../../components/MyInput';
import './ExperienceInfo.css';
import DropDownField from '../../../components/dropdownfield';


export default function ExperienceInfo({sendExperienceInfo}){

    const [institute,setInstitute]=useState('');
    const [position,setPosition]=useState('');
    const [datestart,setdatestart]=useState('');
    const [dateto,setdateto]=useState('');
    const [description,setDescription]=useState('');

    const handleInstitute=(e)=>{
        setInstitute(e.target.value)
    }
    const handlePosition=(e)=>{
        setPosition(e.target.value)
    }
    const handleDatestart=(e)=>{
        setdatestart(e.target.value)
    }
    const handleDateto=(e)=>{
        setdateto(e.target.value)
    }
    const handleDescription=(e)=>{
        setDescription(e.target.value)
    }

    useEffect(
        ()=>{
            sendExperienceInfo(position,institute,description,datestart,dateto)
        }
    )

    const expsection= <div className='ExperienceInfo-Form'>
        <div className='Experience_title'>Experience 1</div>
        <div className='Experience1'>
        <MyInput type='text' name='Institute' placeholder='Institute/Organization*'  onChange={handleInstitute}/>
        <MyInput type='text' name='Position' placeholder='Position' onChange={handlePosition}/>
        <MyInput type='text' name='Date-start' placeholder='Date-start*' onChange={handleDatestart}/>  
        <MyInput type='text' name='Date-to' placeholder='Date-to*' onChange={handleDateto}/>  
        <MyInput type='text' name='Description' placeholder='Description*' onChange={handleDescription}/>  
        </div>   
        <div className='Experience_title'>Experience 2</div>
        <div className='Experience2'>
        <MyInput type='text' name='Institute/Organization' placeholder='Institute/Organization*'  />
        <MyInput type='text' name='Position' placeholder='Position' />
        <MyInput type='text' name='Duration' placeholder='Duration*' />  
        <MyInput type='text' name='Description' placeholder='Description*' />  
        </div>     
        <div className='Experience_title'>Experience 3</div>
        <div className='Experience3'>
        <MyInput type='text' name='Institute/Organization' placeholder='Institute/Organization*'  />
        <MyInput type='text' name='Position' placeholder='Position' />
        <MyInput type='text' name='Duration' placeholder='Duration*' />  
        <MyInput type='text' name='Description' placeholder='Description*' />  
        </div>                    
    </div>
    return(
            <div className='ExperienceInfo-container'>
                       <DropDownField secDetails={expsection} secHeading="Experience Details"/> 
            </div>


    );
}