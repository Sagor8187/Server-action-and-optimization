import tasks from '../data/task.json'
export const getTask = async()=>{
    return tasks
}

export const posttask = async (newtask)=>{
    newtask.id = tasks.length+1
    tasks.unshift(newtask)
    return {success:true,message:"Task added succesfuly"}

}