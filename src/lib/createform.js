import { revalidatePath } from "next/cache";
import { posttask } from "./task";

export const createforms = async (formdata) => {
  "use server";
  const title = formdata.get("title");
  const description = formdata.get("description");
  const status = formdata.get("status");
  const priority = formdata.get("priority");

  const mytask = {
    title,
    description,
    status,
    priority,
  };
  const res = await posttask(mytask);

  if(res.success){
    revalidatePath("/task")
  }

  return res;
};
