import React from 'react'
import { useForm } from "react-hook-form";
import authServices from '../services/authService'
import { useNavigate } from 'react-router-dom';

function Register() {
    const navigate = useNavigate();
	const { handleSubmit, register } = useForm();

	const registerUser = async (username, password, role, security_question, answer) => {
		const result = await authServices.register({ username, password, role, security_question, answer })
		console.log(result);
	}

	const onSubmit = async (data) => {
		try {
			await registerUser(data.username, data.password, data.role, data.security_question, data.answer)
			navigate('/login')
		} catch (error) {
			alert(error)
		}
	}

	return (
		<div className="flex justify-center items-center h-screen">
			<form onSubmit={handleSubmit(onSubmit)} className="max-w-sm w-full p-6 bg-white rounded-lg shadow-md">
				{/* Login Heading */}
				<h2 className="text-2xl font-semibold text-center text-gray-900 mb-4">Register</h2>

				<label className="block mb-2 text-sm font-medium text-gray-900">
					Username
				</label>
				<input
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					type='text'
					{...register('username')}
				/>

				<label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">
					Select Role
				</label>
				<select
					id="role"
					{...register('role')}
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				>
					<option value="">Select...</option>
					<option value="Admin">Admin</option>
					<option value="Farmer">Farmer</option>
					<option value="Manufacturer">Manufacturer</option>
				</select>

				<label className="block mb-2 text-sm font-medium text-gray-900">
					Password
				</label>
				<input
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					type='password'
					{...register('password')}
				/>
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

				{/* Login Button */}

				<button
					type="submit"
					className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-lg focus:ring-2 focus:ring-blue-300"
				>
					Register
				</button>

				{/* Home Button */}
				<button
					type="button"
					onClick={() => { navigate('/') }}
					className="mt-2 w-full bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 rounded-lg focus:ring-2 focus:ring-gray-300"
				>
					Home
				</button>
			</form>
		</div>
	)
}

export default Register