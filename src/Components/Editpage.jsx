import React, { useState } from "react";
import Button from '@mui/material/Button';
export const Edit = ({ handleSave,id,handleClose }) => {
    const [editedText, setEditedText] = useState("");
   
    const handleSaveButton = ()=>{
        let payload = {
            name: editedText,
            id:id
        }
        handleSave(payload);
        setEditedText("")
    }
    return (
        <>
            <Button onClick={handleSaveButton} variant="outlined">Save</Button>
            <Button onClick={handleClose} variant="outlined">Close</Button>

        </>
    )
}