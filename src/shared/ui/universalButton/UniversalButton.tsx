import { Button } from '@mui/material'

export const UniversalButton: React.FC<{ text: string }> = ({ text }) => {
  return (
    <Button
      variant='outlined'
      color='primary'
    >
      {text}
    </Button>
  )
}
