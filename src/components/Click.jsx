import { Box } from '@mui/material'

export default function Click(props) {
  return <Box {...props} onClick={(e) => e.stopPropagation()} />
}