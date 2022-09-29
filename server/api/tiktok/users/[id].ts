import { data } from "../data";

export default defineEventHandler((event) => {
  const id = event.context.params.id

  const user = data.find(v => v.id == id) || null
  
  return user
})
