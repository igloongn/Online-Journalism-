import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const AddNews = () => {

  const [title, setTitle] = useState(null)
  const [detail, setDetail] = useState(null)


  return (
    <div>
      <div style={{
        marginTop: 100
      }}>
        <form style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
        }}>
          <TextField label="Title" variant="outlined" />
          <TextField label="image" variant="outlined" />
          <TextField label="Detail" variant="outlined" />
          <Button variant="outlined">Outlined</Button>
        </form>
      </div>
    </div>
  )
}

export default AddNews