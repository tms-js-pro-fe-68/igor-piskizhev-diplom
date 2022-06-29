import { Fab } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import { useState } from 'react'
import ChangeEdit from '../../components/ChangeEdit'

export default function AddNewVehicleButton({ onAfterSubmit }) {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(true)

  return (
    <>
      <Fab
        color="primary"
        sx={{ position: 'fixed', bottom: 24, right: 24 }}
        onClick={open}
      >
        <AddIcon />
      </Fab>
      <ChangeEdit
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onAfterSubmit={onAfterSubmit}
      />
    </>
  )
}