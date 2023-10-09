import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Register = () => {
  const schema = yup.object().shape({
    fullname: yup.string().required("Full Name is Required"),
    email: yup.string().email().required(),
    age: yup.number().positive().integer().required(),
    password: yup.string().min(6).max(10).required(),
    confirmPassword: yup.string().oneOf([yup.ref('password', '')], "Password does not match").required(),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={handleSubmit(onSubmit)} className='border p-[10px] bg-blue-400 lg:w-[450px]'>
        <div className='text-[30px] text-center m-[10px] font-bold text-white bg-red-400 rounded-[6px] shadow-lg'>Register</div>
        <div className='mb-4'>
          <label className='block text-[20px] font-semibold font-montserrat'>Name</label>
          <input type='text' className=' w-full  shadow-sm border border-gray-300 p-2 rounded' placeholder='name' {...register('fullname')} />
          <p className='text-red-500'>{errors.fullname?.message}</p>
        </div>
        <div className='mb-4'>
          <label className='block text-[20px] font-semibold font-montserrat'>Email</label>
          <input type='email' className=' w-full rounded-[5px] shadow-sm border border-gray-300 p-2 rounded' placeholder='email' {...register('email')} />
          <p className='text-red-500'>{errors.email?.message}</p>
        </div>
        <div className='mb-4'>
          <label className='block text-[20px] font-semibold font-montserrat'>Age</label>
          <input type='number' className='border shadow-sm w-full border-gray-300 p-2 rounded' placeholder='age' {...register('age')} />
          <p className='text-red-500'>{errors.age?.message}</p>
        </div>
        <div className='mb-4'>
          <label className='block text-[20px] font-semibold font-montserrat'>Password</label>
          <input type='password' className='border shadow-sm w-full border-gray-300 p-2 rounded' placeholder='password' {...register('password')} />
          <p className='text-red-500'>{errors.password?.message}</p>
        </div>
        <div className='mb-4'>
          <label className='block text-[20px] font-semibold font-montserrat'>Confirm Password</label>
          <input type='password' className='border shadow-sm w-full border-gray-300 p-2 rounded' placeholder='confirm password' {...register('confirmPassword')} />
          <p className='text-red-500'>{errors.confirmPassword?.message}</p>
        </div>
        <div>
          <button type='submit' className=' m-[10px] transition-transform transform  hover:scale-105 bg-red-500 font-montserrat text-[20px]  font-semibold rounded-[6px] text-white px-4 py-2 rounded hover:bg-green-600'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
