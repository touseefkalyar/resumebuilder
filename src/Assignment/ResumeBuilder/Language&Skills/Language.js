import MyInput from '../../../components/MyInput';
import DropDownField from '../../../components/dropdownfield';
import './Language_Skill.css';
import {useState,useEffect} from 'react';
import MyButton from '../../../components/MyButton';
import {BsCheckLg} from 'react-icons/bs';
import {AiOutlinePlus} from 'react-icons/ai';
import {RiDeleteBin6Line} from 'react-icons/ri';

const Language=({sendExpertise,sendLanguage})=>{

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
    
    const lSection= <div className='LS-Forms'>

            <div>
             <MyInput type='text' name='language' placeholder='Languages*'  onChange={handleLanguageInput}/>
                <div className='LS-Forms-btns'>
                    <MyButton isSecondary='True'><RiDeleteBin6Line/></MyButton>
                    <MyButton name='Done'><BsCheckLg/></MyButton>  
                </div>
            </div>
         <MyButton name='Add Languages' isSecondary='True'><AiOutlinePlus/></MyButton>

        {/* <div>
        <MyInput type='text' name='language' placeholder='Languages*' onChange={handleLanguageInput}/>
        <button onClick={handlelanguageForm}>+</button>
        <MyButton name='Add Languages' isSecondary='True'><AiOutlinePlus/></MyButton>
        </div> */}
    </div>  
    return(
        <div className='LS-container'>
        <DropDownField secDetails={lSection} secHeading="Languages"/>
        </div>
    )
}


export default Language;