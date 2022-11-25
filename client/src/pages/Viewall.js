import { Typography } from '@mui/material'
import React from 'react'
import MyTable from '../comps/MyTable'

const Viewall = () => {
  return (
    <div>
      <Typography
        variant="h2"
        component="h2"
        >
          All the News
      </Typography>
      <MyTable />

    </div>
  )
}

export default Viewall