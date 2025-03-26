import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/UserContext';
import authServices from '../services/authService';
import { useForm } from "react-hook-form";

function Login() {
    const [forgotPassword, setForgotPassword] = useState(false);
    const navigate = useNavigate();
    const { handleSubmit, register } = useForm();

    const { setUserData } = useAuth()

    useEffect(() => {
        setUserData(null)
    }, [])
    const login = async (username, password) => {
        try {
            const userData = await authServices.login({ username, password })
        } catch (error) {
            alert(error)
        }
    }

    const forgot_password = async (username, password, security_question, answer) => {
        try {
            const userData = await authServices.forgot_password({ username, password, security_question, answer })
        } catch (error) {
            alert(error)
        }
    }

    const onSubmit = async (data) => {
        if (!forgotPassword) {

            try {
                const userData = await authServices.login({ username: data.username, password: data.password })
                setUserData(userData)
                navigate(`/${userData.role.toLowerCase()}`)
            } catch (error) {
                alert(error)
            }
        } else {
            try {
                const userData = await authServices.forgot_password({ username: data.username, password: data.password, security_question: data.security_question, answer: data.answer })
                setForgotPassword(false)
            } catch (error) {
                alert(error)
            }
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm w-full p-6 bg-white rounded-lg shadow-md">
                {/* Login Heading */}
                <h2 className="text-2xl font-semibold text-center text-gray-900 mb-4">Login</h2>

                {/* <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">
                    Select Role
                </label>
                <select
                    id="role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                    <option value="">Select...</option>
                    <option value="Admin">Admin</option>
                    <option value="Farmer">Farmer</option>
                    <option value="Manufacturer">Manufacturer</option>
                </select> */}

                <label className="block mb-2 text-sm font-medium text-gray-900">
                    Username
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type='text'
                    {...register('username')}
                />
                <label className="block mb-2 text-sm font-medium text-gray-900">
                    {forgotPassword ? 'New Password' : 'Password'}
                </label>
                <input
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    type='password'
                    {...register('password')}
                />

                {forgotPassword && (
                    <>
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Security Question
                        </label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type='text'
                            {...register('security_question')}
                        />
                        <label className="block mb-2 text-sm font-medium text-gray-900">
                            Answer
                        </label>
                        <input
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            type='text'
                            {...register('answer')}
                        />
                    </>
                )}

                {/* Login Button */}

                <button
                    type="submit"
                    className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg focus:ring-2 focus:ring-blue-300"
                >
                    {forgotPassword ? 'Change Password' : 'Login'}
                </button>

                {/* Home Button */}
                <button
                    type="button"
                    onClick={() => { navigate('/') }}
                    className="mt-2 w-full bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 rounded-lg focus:ring-2 focus:ring-gray-300"
                >
                    Home
                </button>
                <div
                    className='mt-2 mx-auto w-fit'
                    onClick={() => { setForgotPassword(true) }}
                >
                    Forgot Password
                </div>
            </form>
        </div>
    );
}

export default Login;
