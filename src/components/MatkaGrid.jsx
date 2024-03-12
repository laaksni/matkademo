import { AgGridReact } from "ag-grid-react";
import { useState, useRef } from "react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { Button } from "@mui/material";

export default function MatkaGrid(props) {

    const [colDefs] = useState([
        { field: 'kohde' },
        { field: 'kesto' }
    ]);

    const gridRef = useRef();

    const onDelete = () => {
        const removeId = gridRef.current.getSelectedNodes()[0].id
        props.deleteByIndex(removeId);
    }

    return (
        <>
        <Button variant="outlined" onClick={onDelete}>Delete</Button>
            <div className="ag-theme-material" style={{ width: 700, height: 500, margin: 'auto'}}>
                <AgGridReact
                    ref={gridRef}
                    onGridReady={ params => gridRef.current = params.api }
                    rowData={props.matkat}
                    columnDefs={colDefs}
                    rowSelection="single"
                />
            </div>
        </>
    );
}