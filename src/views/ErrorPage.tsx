import React from 'react'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError()
    console.log(`ERROR NASZ UWUWU💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥💥 ${error}`)
    let errorMessage: string;

    if (isRouteErrorResponse(error)) {
        errorMessage = error.data || error.statusText
    } else {
        errorMessage = 'Unknown error'
    }

  return (
    <>
        <div>IF YOU TINK ROBLOS IS GARBISCH AND CHAIADLISH... THEN GET OFF MY 🅱AGE, becos al u gona si hir is roblos</div>
        <br />
        <h1>💥💥💥{errorMessage}💥💥💥</h1>
    </>
  )
}

export default ErrorPage