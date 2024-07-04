import { Github } from 'lucide-react'

const Footer = () => {
  return (
    <div className="mt-3 flex flex-col items-center bg-secondary">
      <a
        href="https://github.com/nsunami/tue-rdm-dashboard-rw"
        target="_blank"
        rel="noreferrer"
      >
        <Github className="my-8 text-slate-400" />
      </a>
    </div>
  )
}

export default Footer
