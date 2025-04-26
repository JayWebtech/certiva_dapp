import { Code, Layers, MousePointer } from "lucide-react"

export default function ActionBar() {
  return (
    <div className="flex items-center justify-between bg-zinc-900/80 backdrop-blur-sm rounded-lg p-2 mt-4 max-w-md mx-auto">
      <div className="flex space-x-4">
        <button className="p-2 bg-blue-600 rounded-md text-white">
          <Layers size={20} />
        </button>
        <button className="p-2 text-zinc-400 hover:text-zinc-200">
          <MousePointer size={20} />
        </button>
        <button className="p-2 text-zinc-400 hover:text-zinc-200">
          <Code size={20} />
        </button>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md text-sm">Ask to edit</button>
    </div>
  )
}
