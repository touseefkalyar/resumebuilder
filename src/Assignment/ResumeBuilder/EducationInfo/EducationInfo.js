import { useEffect, useState } from 'react';
import MyInput from '../../../components/MyInput';
import './EducationInfo.css';
import DropDownField from '../../../components/dropdownfield';
import Mytextarea from '../../../components/Mytextarea';
import MyButton from '../../../components/MyButton';
import {BiCheck} from 'react-icons/bi'

export default function EducationInfo({sendEducation}){
     
    const [education,setEducation]=useState([]);
    const [institute,setInstitute]=useState();
    const [year,setYear]=useState();
    const [degree,setDegree]=useState();

   
    const handleInstitute=(e)=>{
        setInstitute(e.target.value);
    }
    const handleYear=(e)=>{
        setYear(e.target.value);
    }
    const handleDegree=(e)=>{
        setDegree(e.target.value);
    }

    const handleEducationForm=()=>{
        setEducation([...education,{year:year,degree:degree,uni:institute}])
    }
    useEffect(
        ()=>{
            sendEducation(education)
        }
    )
    
    const eduSection=<div className='EducationInfo-Form'>
                        <div className='education_university'>
                        <MyInput type='text' name='University' placeholder='College/University*' onChange={handleInstitute}/>
                        <MyInput type='date' name='Date of Completion' placeholder='Date of Completion' onChange={handleYear}/>
                        <MyInput type='text' name='Degree Name' placeholder='Degree Name' onChange={handleDegree}/>
                        <Mytextarea type='description' name='Description' placeholder='Describe Education' id="Description"  />              
                        <MyButton name='Done' isSecondary='True'><BiCheck/></MyButton>
                        </div>   
                        <button onClick={handleEducationForm}>+ Add Education</button>
                    </div>
    return(
            <div className='EducationInfo-container'>   
            <DropDownField secHeading='Education Details' secDetails={eduSection}/>                        
            </div>


    );
}