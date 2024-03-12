import { useState } from "react";
//import MatkaTable from "./MatkaTable";
import MatkaGrid from "./MatkaGrid";
import { Button, Stack, TextField } from "@mui/material";

export default function MatkaList() {

    // states
    const [matka, setMatka] = useState({ kohdemaa: '', kesto: '' });
    const [matkat, setMatkat] = useState([]);

    const inputChanged = (event) => {
        setMatka({ ...matka, [event.target.name]: event.target.value });
    }
    const addMatka = () => {
        if (!matka.kohde.trim()) {
            // Show alert if kohde is empty
            alert("Syötä kohde.");
            return;
        }
        setMatkat([...matkat, matka]);
        setMatka({ kohde: '', kesto: '' });
    }

    const deleteByIndex = (index) => {
        console.log(index);
        setMatkat(matkat.filter((matka, i) => i != index));
    }

    return (
        <>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                <TextField
                    label="Kohde"
                    name="kohde"
                    value={matka.kohde}
                    onChange={inputChanged}
                />

                <TextField
                    label="Kesto"
                    name="kesto"
                    value={matka.kesto}
                    onChange={inputChanged}
                />

                <Button variant="outlined" onClick={addMatka}>
                    Add
                </Button>
            </Stack>

            <MatkaGrid matkat={matkat} deleteByIndex={deleteByIndex} />
        </>
    );
}