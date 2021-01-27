import React, { createContext, useContext, useReducer, useEffect, useCallback, memo } from 'react'

const BMapContext = createContext()

export const GlobalStateBMapContext = ({ initialValues, children }) => {
  return (
    <BMapContext.Provider value={initialValues}>
      {!window.BMap ? <ErrorContainer errorMsg='Baidu Map API is required' /> : children}
    </BMapContext.Provider>
  )
}

const ErrorContainer = ({ errorMsg = '' }) => {
  return <div>Error : {errorMsg}</div>
}

export const useGlobalBMapValues = useContext.bind(null, BMapContext)
