'use client'

import { useState, useEffect, useRef, KeyboardEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import TypedIntro from './TypedIntro'
import data from '../data.json'

interface HistoryItem {
  command: string
  output: React.ReactNode
}

export default function Terminal() {
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [input, setInput] = useState('')
  const [showIntro, setShowIntro] = useState(true)
  const [repos, setRepos] = useState<any[]>([])
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Fetch GitHub repos
    fetch(`https://api.github.com/users/harish040120/repos?sort=updated&per_page=3`)
      .then((res) => res.json())
      .then((data) => setRepos(data))
      .catch(() => setRepos([]))
  }, [])

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  const commands: Record<string, () => React.ReactNode> = {
    help: () => (
      <div>
        <p className="mb-2">Available commands:</p>
        <ul className="ml-4">
          <li>• <span className="text-terminal-green">about</span> - Display information about me</li>
          <li>• <span className="text-terminal-green">projects</span> - View my projects</li>
          <li>• <span className="text-terminal-green">skills</span> - List my technical skills</li>
          <li>• <span className="text-terminal-green">education</span> - Show my education background</li>
          <li>• <span className="text-terminal-green">resume</span> - Download my resume</li>
          <li>• <span className="text-terminal-green">contact</span> - Get my contact information</li>
          <li>• <span className="text-terminal-green">clear</span> - Clear the terminal</li>
        </ul>
      </div>
    ),
    about: () => (
      <div>
        <h2 className="text-xl mb-2">{data.personal.name}</h2>
        <p className="mb-2">{data.personal.title}</p>
        <p className="mb-2">{data.personal.summary}</p>
        <div className="mt-4">
          <p className="mb-1">🏆 Achievements:</p>
          <ul className="ml-4">
            {data.achievements.map((achievement, i) => (
              <li key={i}>• {achievement}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <p className="mb-1">📜 Patents:</p>
          <ul className="ml-4">
            {data.patents.map((patent, i) => (
              <li key={i}>• {patent.title} ({patent.publicationNo})</li>
            ))}
          </ul>
        </div>
      </div>
    ),
    projects: () => (
      <div>
        <h2 className="text-xl mb-3">Projects</h2>
        
        <div className="mb-4">
          <h3 className="text-lg mb-2 text-terminal-dim">Featured Projects:</h3>
          <div className="grid gap-4">
            {data.projects.map((project, i) => (
              <div key={i} className="border border-terminal-green p-3 rounded">
                <h4 className="font-bold mb-1">{project.name}</h4>
                <p className="text-sm mb-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, j) => (
                    <span key={j} className="text-xs bg-terminal-green/20 px-2 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {repos.length > 0 && (
          <div>
            <h3 className="text-lg mb-2 text-terminal-dim">Recent GitHub Repos:</h3>
            <div className="grid gap-4">
              {repos.slice(0, 3).map((repo, i) => (
                <div key={i} className="border border-terminal-green p-3 rounded">
                  <h4 className="font-bold mb-1">{repo.name}</h4>
                  <p className="text-sm mb-2">{repo.description || 'No description'}</p>
                  <a 
                    href={repo.html_url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-terminal-dim hover:text-terminal-green underline text-sm"
                  >
                    View on GitHub →
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    ),
    skills: () => (
      <div>
        <h2 className="text-xl mb-3">Technical Skills</h2>
        
        <div className="space-y-3">
          <div>
            <h3 className="text-terminal-dim mb-2">Languages:</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.languages.map((skill, i) => (
                <span key={i} className="bg-terminal-green/20 border border-terminal-green px-3 py-1 rounded text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-terminal-dim mb-2">Technologies:</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.technologies.map((tech, i) => (
                <span key={i} className="bg-terminal-green/20 border border-terminal-green px-3 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-terminal-dim mb-2">Platforms:</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.platforms.map((platform, i) => (
                <span key={i} className="bg-terminal-green/20 border border-terminal-green px-3 py-1 rounded text-sm">
                  {platform}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-terminal-dim mb-2">Certifications:</h3>
            <ul className="ml-4">
              {data.certifications.map((cert, i) => (
                <li key={i}>• {cert}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ),
    education: () => (
      <div>
        <h2 className="text-xl mb-3">Education</h2>
        {data.education.map((edu, i) => (
          <div key={i} className="mb-4 border border-terminal-green p-3 rounded">
            <h3 className="font-bold">{edu.institution}</h3>
            <p className="text-sm">{edu.degree}</p>
            <p className="text-sm text-terminal-dim">{edu.duration}</p>
            {edu.cgpa && <p className="text-sm">CGPA: {edu.cgpa}</p>}
            {edu.percentage && <p className="text-sm">Percentage: {edu.percentage}</p>}
          </div>
        ))}
      </div>
    ),
    resume: () => (
      <div>
        <p className="mb-2">Download my resume:</p>
        <a
          href="/resume9.pdf"
          download
          className="text-terminal-dim hover:text-terminal-green underline"
        >
          📄 resume.pdf
        </a>
      </div>
    ),
    contact: () => (
      <div>
        <h2 className="text-xl mb-3">Contact Information</h2>
        <div className="space-y-2">
          <p>📧 Email: <a href={`mailto:${data.personal.email}`} className="text-terminal-dim hover:text-terminal-green underline">{data.personal.email}</a></p>
          <p>📱 Phone: {data.personal.phone}</p>
          <p>💼 LinkedIn: <a href={data.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-terminal-dim hover:text-terminal-green underline">{data.personal.linkedin}</a></p>
          <p>🐙 GitHub: <a href={data.personal.github} target="_blank" rel="noopener noreferrer" className="text-terminal-dim hover:text-terminal-green underline">{data.personal.github}</a></p>
        </div>

        <div className="mt-6 border border-terminal-green p-4 rounded">
          <h3 className="text-lg mb-3">Send a Message</h3>
          <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-transparent border border-terminal-green p-2 rounded focus:outline-none focus:ring-2 focus:ring-terminal-green"
              aria-label="Name"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border border-terminal-green p-2 rounded focus:outline-none focus:ring-2 focus:ring-terminal-green"
              aria-label="Email"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full bg-transparent border border-terminal-green p-2 rounded focus:outline-none focus:ring-2 focus:ring-terminal-green"
              aria-label="Message"
            />
            <button
              type="submit"
              className="bg-terminal-green text-terminal-bg px-4 py-2 rounded font-bold hover:bg-terminal-dim transition-colors"
              onClick={() => alert('Form submission is a stub. Integrate with Vercel/Netlify forms.')}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    ),
    clear: () => null,
  }

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase()
    
    if (trimmedCmd === 'clear') {
      setHistory([])
      return
    }

    const output = commands[trimmedCmd]
      ? commands[trimmedCmd]()
      : <p className="text-red-400">Command not found: {cmd}. Type "help" for available commands.</p>

    setHistory((prev) => [...prev, { command: cmd, output }])
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim()) {
      handleCommand(input)
      setInput('')
    }
  }

  return (
    <div
      ref={terminalRef}
      className="w-full max-w-4xl mx-auto p-6 min-h-screen overflow-y-auto"
      onClick={() => inputRef.current?.focus()}
      role="region"
      aria-label="Terminal interface"
    >
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TypedIntro onComplete={() => setShowIntro(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      {!showIntro && (
        <>
          {history.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4"
            >
              <div className="flex items-center mb-2">
                <span className="text-terminal-dim mr-2">guest@portfolio:~$</span>
                <span>{item.command}</span>
              </div>
              {item.output && (
                <div className="ml-4 mb-4">{item.output}</div>
              )}
            </motion.div>
          ))}

          <div className="flex items-center">
            <span className="text-terminal-dim mr-2">guest@portfolio:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent border-none outline-none terminal-text"
              autoFocus
              aria-label="Terminal command input"
            />
          </div>
        </>
      )}
    </div>
  )
}
