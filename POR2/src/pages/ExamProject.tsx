
export default function Project2() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-4">Exam project 2</h1>
      <p className="text-gray-700 mb-2">A wedding venue booking website.</p>

      <img src="../public/veloura.png" alt="Veloura" className="rounded-xl mb-2" />

      <div className="flex gap-4 mb-6">
        <a href="https://pixelquest.example.com" target="_blank" className="text-blue-600 underline">
          Live Site
        </a>
        <a href="https://github.com/youruser/pixelquest#readme" target="_blank" className="text-blue-600 underline">
          GitHub README
        </a>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">Reflections & Improvements</h2>
        <p>
          PixelQuest was my first attempt at a complete platformer. I learned about sprite animation, collision
          detection, and level design. If I revisit this project, I’d add controller support and more levels.
        </p>
      </div>
    </div>
  )
}
