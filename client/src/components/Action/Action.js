import * as React from 'react';
import "./Action.scss"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';

const Action = () => {
    return (
        <div className='actions'>
            <Stack direction="row" spacing={2}>
                < Button variant="contained">
                    <DeleteIcon />
                    Delete
                </Button>
                <Button variant="contained" >
                    <EditIcon />
                    Edit
                </Button>
            </Stack>
        </div>
    )
}

export default Action
