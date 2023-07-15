import './MyButton.css';

const MyButton = ({isSecondary=false,name,children}) => {
    return ( 
   
                 <button className={isSecondary?'btn btn-secondary':'btn'} >
                    {children}
                    {name}
                 </button>
     );
}
 
export default MyButton;