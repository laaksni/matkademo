import { AgGridReact } from "ag-grid-react";
import { useState, useRef } from "react";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

export default function MatkaGrid(props) {

    const [colDefs] = useState([
        { field: 'kohdemaa' },
        { field: 'kesto' }
    ]);

    const gridRef = useRef();

    const onDelete = () => {
        const removeId = gridRef.current.getSelectedNodes()[0].id
        props.deleteByIndex(removeId);
    }

    return (
        <>
        <button onClick={onDelete}>Poista valittu</button>
            <div className="ag-theme-material" style={{ width: 700, height: 500 }}>
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