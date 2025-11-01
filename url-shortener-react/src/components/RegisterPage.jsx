import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextField from './TextField';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import toast from 'react-hot-toast';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: "",
        },
        mode: "onTouched",
    });

    const registerHandler = async (data) => {
        setLoader(true);
        try {
            const { data: response } = await api.post(
                "/api/auth/public/register",
                data
            );
            reset();
            navigate("/login");
            toast.success("Registeration Successful!")
        } catch (error) {
            console.log(error);
            toast.error("Registeration Failed!")
        } finally {
            setLoader(false);
        }
    };

  return (
    <div
        className='min-h-[calc(100vh-64px)] flex justify-center items-center'>
        <form onSubmit={handleSubmit(registerHandler)}
            className="sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md bg-white">
            <h1 className="text-center font-serif text-btnColor font-bold lg:text-3xl text-2xl">
                Register Here
            </h1>

            <hr className='mt-2 mb-5 text-black'/>

            <div className="flex flex-col gap-3">
                <TextField
                    label="Username"
                    required
                    id="username"
                    type="text"
                    message="*Username is required"
                    placeholder="Type your username"
                    register={register}
                    errors={errors}
                />

                <TextField
                    label="Email"
                    required
                    id="email"
                    type="email"
                    message="*Email is required"
                    placeholder="Type your email"
                    register={register}
                    errors={errors}
                />

                <TextField
                    label="Password"
                    required
                    id="password"
                    type={showPassword ? "text" : "password"}
                    message="*Password is required"
                    placeholder="Type your password"
                    register={register}
                    min={6}
                    errors={errors}
                />

                <label className="inline-flex items-center text-sm text-slate-700 mt-1">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={showPassword}
                      onChange={() => setShowPassword((s) => !s)}
                    />
                    Show password
                </label>
            </div>

            <button
                disabled={loader}
                type='submit'
                aria-busy={loader}
                className='w-full py-2 rounded-md my-3 flex items-center justify-center gap-3 bg-btnColor text-white font-semibold disabled:opacity-60 disabled:cursor-not-allowed'
            >
                {loader && (
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                )}
                <span>{loader ? "Registering..." : "Register"}</span>
            </button>

            <p className='text-center text-sm text-slate-700 mt-6'>
                Already have an account? 
                <Link
                    className='font-semibold underline hover:text-black'
                    to="/login">
                        <span className='text-btnColor'> Login</span>
                </Link>
            </p>
        </form>
    </div>
  )
}

export default RegisterPage