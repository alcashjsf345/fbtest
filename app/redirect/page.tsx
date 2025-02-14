"use client"

import { useEffect, useState } from "react"

export default function Redirect() {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    setShowContent(true)
  }, [])

  const handleClick = () => {
    window.location.href = "https://external-site.com"
  }

  if (!showContent) {
    return null
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <div onClick={handleClick} style={{ cursor: "pointer", maxWidth: "100%", maxHeight: "100%" }}>
        <img
          src="/special-offer.jpg"
          alt="Special Offer"
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
        />
      </div>
    </div>
  )
}

