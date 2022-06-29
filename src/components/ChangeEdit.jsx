import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material'
import { useEffect, useState } from 'react'

export default function ChangeEdit({
    id,
    onClose,
    onAfterSubmit,
    ...otherProps
}) {
    const [description, setDescription] = useState('')

    const loadVehicles = () => {
    fetch(`https://tms-js-pro-back-end.herokuapp.com/api/vehicles/${id}`, {
        method: 'GET',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${sessionStorage.token}`,
        },
    })
        .then((response) => response.json())
        .then((data) => setDescription(data.description))
    }

    useEffect(() => {
    if (!id) return
    loadVehicles()
    }, [])

    const modifyVehicle = async () => {
    const changeId = id ? `/${id}` : ''
    console.log(id)
    await fetch(
        `https://tms-js-pro-back-end.herokuapp.com/api/vehicles/${changeId}`,
        {
        method: id ? 'PUT' : 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Token ${sessionStorage.token}`,
        },
        body: JSON.stringify({ description }),
        },
    )
    onAfterSubmit()
    onClose()
    }

    return (
    <Dialog {...{ onClose, ...otherProps }}>
        <DialogTitle>{id ? 'Edit' : 'Add'} vehicle</DialogTitle>
        <DialogContent>
        <TextField
            value={description}
            onChange={(e) => setDescription(e.target.value)}
        />
        </DialogContent>
        <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={modifyVehicle} autoFocus variant="contained" id={id}>
            {id ? 'Edit' : 'Add'}
        </Button>
        </DialogActions>
    </Dialog>
    )
}