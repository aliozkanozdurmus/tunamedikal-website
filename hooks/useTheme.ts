"use client"

import { useState, useEffect } from "react"

export function useTheme() {
  const [theme, setTheme] = useState("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") || "light"
    setTheme(savedTheme)
    document.documentElement.classList.toggle("dark", savedTheme === "dark")
  }, [])

  const setThemeValue = (newTheme: string) => {
    localStorage.setItem("theme", newTheme)
    setTheme(newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return { theme, setTheme: setThemeValue, mounted }
}
