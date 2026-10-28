import {z} from "zod"

export const taskSchema = z.object({
    title: z.string().min(3, "Judul minimal 3 karakter")
})

