import Button from '@mui/material/Button';
import { Link } from "react-router-dom";



const CustomButton = (props) => { 

    const { buttonName, icon, path,} = props;
    
    return (
      <Button component={Link} to={path} variant="contained" color="primary" disableElevation
      style={{
          width: '100%',
          height: 300,
          fontSize: '30px'
         }}>
       {icon}
      <span>{buttonName}</span>
      </Button>
     
     

    )
}

export default CustomButton;