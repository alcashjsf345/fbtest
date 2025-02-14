"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Check if the user is coming from Facebook mobile app
    const isFacebookApp = /FBAN|FBAV/.test(navigator.userAgent)
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (isFacebookApp && isMobile) {
      router.push("/redirect")
    }
  }, [router])

  return (
    <div>
      <h1>Welcome to my website</h1>
      <p>This is the regular content of your website.</p>
    </div>
  )
}

