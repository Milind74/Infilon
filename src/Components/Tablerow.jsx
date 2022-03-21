import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { Edit } from "./Editpage";
import '../styles/styles.css'

export const RowData = ({item,handleSave,handleDelete}) => {
    const [edit, setEdit] = React.useState(false);


    const [editName,setEditName] = useState('')
    
    useEffect(()=>{
        setEditName(item.first_name)
    },[])

    // console.log('edit name-------',editName)
    const handleEdit = () => {
        setEdit(true);
    }
    const handleClose = () => {
        setEdit(false);
   }
    return (      
            <div className="parentdiv">
            <div ><img src={item.avatar} alt="profile pic"/></div>
            <div >{item.email}</div>

            {
                edit ?
                    <input className="inputedit"  type="text" value={editName} onChange={(e)=>{setEditName(e.target.value)}}/>
                    :<div >{editName}</div>
            }
            <div >{item.last_name}</div>
            <div><Button onClick={() => handleDelete(item.id)} variant="outlined"> Delete </Button>  </div>
            <div>
            {
                edit ?
                    <Edit  handleEdit={handleEdit} handleSave={handleSave} handleClose={handleClose} id={item.id} />
                    :null
            }
            {
                edit ? null :<Button onClick={() => handleEdit()} variant="outlined">Edit</Button>
            }
            </div>
            </div>       
    )
}