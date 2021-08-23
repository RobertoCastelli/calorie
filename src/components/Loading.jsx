import React, { useContext } from "react"
import { DataContext } from "../context"

export const Loading = () => {
  const { isLoading } = useContext(DataContext)

  return (
    <div className="loading-message">{isLoading ? <p>Loading...</p> : ""}</div>
  )
}
