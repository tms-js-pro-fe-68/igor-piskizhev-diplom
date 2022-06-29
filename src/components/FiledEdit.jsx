import { IconButton, Paper, Stack } from "@mui/material"
import { useEffect, useState } from "react"
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material'
import ConfirmDialog from "./ConfirmDialog"
import Click from "./Click"
import ChangeEdit from "./ChangeEdit"




export default function ChangeField({ id, onChange, done }) {

  const [isEditOpen, setIsEditOpen] = useState(false)
  const openEdit = () => setIsEditOpen(true)

  const [isDone, setIsDone] = useState(done)

  useEffect(() => {
    setIsDone(done)
  }, [done])

  const handleClick = async () => {
    setIsDone((prevIsDone) => {
      fetch(`https://tms-js-pro-back-end.herokuapp.com/api/vehicles/${id}`, {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Token ${sessionStorage.token}`,
        },
        body: JSON.stringify({ done: !prevIsDone }),
      })

      return !prevIsDone
    })

    onChange()
  }
  
  const handleDelete = async () => {
    console.log(id),
    await fetch(`https://tms-js-pro-back-end.herokuapp.com/api/vehicles/${id}`, {
      
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Token ${sessionStorage.token}`,
      },
      
    })
    onChange()
  }
  
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)
    const handleDeleteOpen = () => setIsDeleteOpen(true)
    const handleDeleteClose = () => setIsDeleteOpen(false)

    return (
      <>
        <Paper onClick={handleClick} sx={{ p: 2, pl: 3 }}>
        <Click>
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
            <IconButton edge="end" onClick={openEdit}>
                <EditIcon />
              </IconButton>
              <IconButton edge="end" onClick={handleDeleteOpen}>
                <DeleteIcon />
              </IconButton>
            </Stack>
          </Click>
        </Paper>
        <ChangeEdit
        id={id}
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onAfterSubmit={onChange}
      />
        <ConfirmDialog
          title="Delete"
          text="Are you sure?"
          open={isDeleteOpen}
          onConfirm={handleDelete}
          onClose={handleDeleteClose}
        />
      </>
    )
  }