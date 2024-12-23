import { useState } from "react"
import Task from "./components/Task"

function App() {
  const [todoList, setTodoList] = useState<Array<string>>([])
  const [task, setTask] = useState("")

  const onClickButton = () => {
    if (task === "") return
    setTodoList([...todoList, task])
    setTask("")
  }

  return (
    <div className="flex flex-col w-full justify-center items-center gap-10"> 
      <h1 className='text-5xl font-semibold text-center mt-5'>Todo App</h1>
      
      <div className="flex justify-center items-center space-x-4 bg-blue-500/50 p-10 rounded-lg shadow">
      
        <input 
          type="text" 
          className="border p-2"
          onChange={e => setTask(e.target.value)}
          value={task}
        />

        <button 
          className="p-2 rounded border bg-gray-50 hover:bg-gray-100 capitalize"
          onClick={onClickButton} 
        >
          Create task
        </button>
      </div>

      <div className="flex flex-col gap-2 w-[80dvw]">
        <h2 className="text-center text-xl mb-6">Task's List</h2>
        {todoList.map((listTask, i) => (
          <Task task={listTask} key={i} />
        ))}
      </div>

    </div>
  )
}

export default App

