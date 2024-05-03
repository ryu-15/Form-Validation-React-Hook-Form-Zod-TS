import {z} from "zod";

export const formSchema:z.Schema=z.object({
    name:z.string().min(1,'Name cant be null'),
    age:z.string().min(1,'Age cant be null'),
    email:z.string().email('Enter a valid email').min(2,'Value is too short'),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string()
})
    .refine((data)=> (parseInt(data.age)),
    {
        message:"Sorry! Age must be number",
        path: ["age"],
    })
    .refine((data)=> (!parseInt(data.name)),
    {
        message:"Sorry! Name must be string",
        path: ["name"],
    })
    .refine((data)=> parseInt(data.age)>=17,
    {
        message:"Sorry! You need to be at least 18 years old to participate.",
        path: ["age"],
    })
    .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"]
})
export type TFormSchema = z.infer<typeof formSchema>;
