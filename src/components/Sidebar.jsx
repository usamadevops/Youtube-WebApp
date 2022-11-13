
import {Stack} from '@mui/material';

import { categories } from '../utils/Constants';
const Sidebar = ({selectedcategory,setselectedcategory}) => {
  return (
<Stack direction={"row"} sx={{overflow:'auto',height:{sx:'auto',md:'95%'},flexDirection:{md:'column'}}}>
{
    categories.map((category)=>(
        <button
        onClick={()=>{
            setselectedcategory(category.name);     
        }}
        style={{
            background:category.name===selectedcategory&& '#fc1503',color:'white'
        }}
        className='category-btn'
        key={category.name}
         >
            <span style={{
                color:category.name===selectedcategory?'White':'red',marginRight:'15px'
            }}>{category.icon}</span>
            <span
            style={{
                opacity:category.name===selectedcategory?'1':'0.8',
            }}
            >{category.name}</span>
        </button>
    ))
}

</Stack>  
)
}

export default Sidebar