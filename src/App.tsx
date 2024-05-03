
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {formSchema, TFormSchema} from "./schema.ts";
function App() {

    const {register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,trigger} = useForm<TFormSchema>({resolver:zodResolver(formSchema),mode:"onChange"},)
    const onSubmit = () =>{
        alert('Account successfully created')
        reset();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>Name</div>
            <input
                {...register("name")} type="text" placeholder="Example"/>
            {errors.name && (
                <p>{`${errors.name.message}`}</p>
            )}
            <div>Age</div>
            <input  {...register("age")} type="text" placeholder="18-70"/>
            {errors.age && (
                <p>{`${errors.age.message}`}</p>
            )}
            <div>Email</div>
            <input  {...register("email")} type="email" placeholder="Example@email.com" />
            {errors.email && (
                <p>{`${errors.email.message}`}</p>
            )}
            <div>Password</div>
            <input  {...register("password")} type="password" placeholder="Password" />
            {errors.password && (
                <p>{`${errors.password.message}`}</p>
            )}
            <div>Confirm password</div>
            <input  {...register("confirmPassword")} type="password" placeholder="Confirm Password" />
            {errors.confirmPassword && (
                <p>{`${errors.confirmPassword.message}`}</p>
            )}
            <button
                disabled={isSubmitting}
                type="submit"
            >Signup
            </button>
        </form>
    )
}

export default App
