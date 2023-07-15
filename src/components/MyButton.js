import './MyButton.css';

const MyButton = ({isSecondary=false,name,children}) => {
    return ( 
   
                 <button className={isSecondary?'btn btn-secondary':'btn'} >
                    <span className='btn-logo'>{children}</span>
                    <span className='btn-title'>{name}</span>
                 </button>
     );
}
 
export default MyButton;