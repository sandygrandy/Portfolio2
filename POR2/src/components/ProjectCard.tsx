import { Link } from 'react-router-dom'

interface ProjectCardProps {
  image: string
  title: string
  description: string
  to: string
}

export default function ProjectCard({ image, title, description, to }: ProjectCardProps) {
  return (
    <Link to={to} className="block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-4">
      <img src={image} alt={title} className="rounded-xl w-full h-48 object-cover mb-4" />
      <h2 className="text-2xl font-bold text-gray-800 pb-2">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </Link>
  )
}
