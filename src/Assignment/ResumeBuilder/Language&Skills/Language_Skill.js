import MyInput from '../../../components/MyInput';
import DropDownField from '../../../components/dropdownfield';
import './Language_Skill.css';
import {useState,useEffect} from 'react';


const Language_Skill=({sendExpertise,sendLanguage})=>{

    const [expertise,setExpertise]=useState([]);
    const [languages,setLanguages]=useState([]);
    const [skillsInput,setSkill]=useState();
    const [languageInput,setLanguage]=useState();

   
    const handleLanguageInput=(e)=>{
        setLanguage(e.target.value);
    }
    const handleSkillsInput=(e)=>{
        setSkill(e.target.value);
    }


    const handleskillForm=()=>{
        setExpertise([...expertise,skillsInput])
    }

    const handlelanguageForm=()=>{
        setLanguages([...languages,languageInput])
    }

    useEffect(
        ()=>{
            sendExpertise(expertise)
            sendLanguage(languages)
        }
    )
    
    const lnsSection= <div className='LS-Forms'>
    <MyInput type='text' name='skills' placeholder='skills*'  onChange={handleSkillsInput}/>
    <button onClick={handleskillForm}>+</button>

    <MyInput type='text' name='language' placeholder='Languages*' onChange={handleLanguageInput}/>
    <button onClick={handlelanguageForm}>+</button>
    </div>  
    return(
        <div className='LS-container'>

        <DropDownField secDetails={lnsSection} secHeading="Language & Skills"/>
        </div>
    )
}


export default Language_Skill;