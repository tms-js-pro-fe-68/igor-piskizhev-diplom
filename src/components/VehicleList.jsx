import { Box } from '@mui/material'
import FieldEdit from './FiledEdit'


export default function VehicleList({ vehicles, loadVehicles }) {
  return (
    <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: '1fr', p: 2 }}>
      {vehicles.map((vehicleItem) => (
        <FieldEdit key={vehicleItem.id} {...vehicleItem} onChange={loadVehicles} />
      ))}
    </Box>
  )
}