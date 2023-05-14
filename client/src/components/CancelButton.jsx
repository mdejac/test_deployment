import React from 'react'
import {Link} from 'react-router-dom'

const CancelButton = () => {
  return (
    <Link className='btn btn-primary' to={'/'}>Cancel</Link>
  )
}

export default CancelButton