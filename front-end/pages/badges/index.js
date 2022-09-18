import Profilex from "pages/badges"
import { useMoralis } from "react-moralis"
import React from "react"
import { useState, useEffect } from "react"

const index = () => {
  const { isAuthenticated } = useMoralis()
  return <Profilex />
}

export default index
