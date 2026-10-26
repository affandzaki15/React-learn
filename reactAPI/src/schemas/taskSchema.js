import {z} from "zod"

export const taskSchema = z.object ({
    title: z.string().min(3, "Judul minimal 3 karakter"),
    description: z.string().min(3, "deskripisi lebih dari 3 karakter"),
    priority: z.enum(["low", "medium", "high"])
})