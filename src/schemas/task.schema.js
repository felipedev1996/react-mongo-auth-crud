import { z } from "zod";
export const createTaskSchema = z.object({
    title: z.string({
        required_error: "Title is required",
        invalid_type_error: "Title must be a string",
    }),
    description: z.string({
        required_error: "Description is required",
        invalid_type_error: "Description must be a string",
    }),
    date: z.string({
        required_error: "Date is required",
        invalid_type_error: "Date must be a string",
    }).datetime().optional(),
   
})