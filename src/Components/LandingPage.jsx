import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getTableData, setFilter } from "../Redux/action";
import {RowData } from "./Tablerow";
import Button from '@mui/material/Button';
import '../styles/styles.css'

export const LandingPage = () => {
    const dispatch = useDispatch();
    const tableData = useSelector((state) => state.app.listdata);
    const [page, setPage] = useState(1);

    React.useEffect(() => {
        dispatch(getTableData(page));
    }, [page]);

    const handleDelete = (id) => {
        let newList = tableData.filter((item) => id !== item.id);
        newList = newList.map((el) => {
            return el;
          });
          dispatch(setFilter(newList));
    }
        //save button
    const handleSave = (payload) => {
      
    }
   //page btn
    const handlePage = (no) => {
        setPage(prev=>prev+no)
    }

    return (
        <>
            {
                tableData.map((el) => {
                    return <RowData handleSave={handleSave} handleDelete={handleDelete} key={el.id} item={el}/>
                })
            }
            <div className="btns" >
                <Button onClick={()=>handlePage(-1)} disabled={page===1} variant="outlined">Prev</Button>
                <Button  variant="outlined">{page}</Button>
                <Button onClick={()=>handlePage(1)} variant="outlined">Next</Button>
            </div>
        </>
    )
}