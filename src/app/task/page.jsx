import { Form } from "@/Component/Form"
import Showtask from "@/Component/Showtask"
import { createforms } from "@/lib/createform"
import { getTask } from "@/lib/task"

export default async function TaskPage() {
  const task = await getTask()
  return (
    <div> 
      <div className="flex justify-center p-5">
        <Form createforms = {createforms}></Form>
      </div>
        
      <div className="grid  lg:grid-cols-3 md:grid-cols-2  gap-10 mx-20 my-10">
     {task.map(item=>(<Showtask key={item.id} item={item}></Showtask>))}
      </div>
     
      
      </div>
  )
}
