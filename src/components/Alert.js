import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Alert = () => {
    const {alertType, alertMessage} = useSelector(state => state.alert)
    return (
    <div className={`alert alert-${alertType}`}>{alertMessage}</div>
  )
}

export default Alert
