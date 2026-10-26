import {taskSchema} from "./schemas/taskSchema"

const task = {
    title: "Belajar react",
    description: "Belajar post api ",
    priority: "high"
};

const result = taskSchema.safeParse(task)
console.log(result)