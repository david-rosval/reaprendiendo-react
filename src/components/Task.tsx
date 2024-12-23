export default function Task({ task }: { task: string }) {
  return (
    <div className="flex justify-between items-center p-4 border">
      <p>{task}</p>
      <div className="flex gap-2">
        <button className="p-2 rounded bg-green-500 hover:bg-green-500/90 border text-white">Done</button>
        <button className="p-2 rounded bg-red-500 hover:bg-red-500/90 border text-white">Delete</button>
        <button className="p-2 rounded bg-blue-500 hover:bg-blue-500/90 border text-white">Edit</button>
      </div>
    </div>
  )
}
