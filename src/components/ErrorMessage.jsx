import React, { useContext } from "react"
import { DataContext } from "../context"

export const ErrorMessage = () => {
  const { errorMessage } = useContext(DataContext)
  return (
    <div>
      <p className="error-message">{errorMessage}</p>
    </div>
  )
}
