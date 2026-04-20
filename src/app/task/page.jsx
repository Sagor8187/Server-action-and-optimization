import Showtask from "@/Component/Showtask"
import { getTask } from "@/lib/task"

export default async function TaskPage() {
  const task = await getTask()
  return (
    <div> 

      <div className="grid grid-cols-3 gap-10 mx-20 my-10">
     {task.map(item=>(<Showtask key={item.id} item={item}></Showtask>))}
      </div>
     
      
      </div>
  )
}
