'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface TypedIntroProps {
  onComplete: () => void
}

export default function TypedIntro({ onComplete }: TypedIntroProps) {
  const [text, setText] = useState('')
  const fullText = 'Welcome to the terminal. Type "help" to see available commands.'
  const prefersReducedMotion = typeof window !== 'undefined' 
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (prefersReducedMotion) {
      setText(fullText)
      setTimeout(onComplete, 100)
      return
    }

    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
        setTimeout(onComplete, 500)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [onComplete, prefersReducedMotion])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="terminal-text mb-4"
    >
      {text}
      {text.length < fullText.length && <span className="terminal-cursor" />}
    </motion.div>
  )
}
