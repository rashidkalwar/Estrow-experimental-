import { LockClosedIcon } from '@heroicons/react/solid';
import { useState } from 'react';

import axiosInstance from 'src/utils/axios';

export default function UserSignIn() {
  const initialFormData = Object.freeze({
    username: '',
    password: '',
  });

  const [formData, updateFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialFormData);

  const handleChange = (e) => {
    console.log(formData);
    updateFormData({
      ...formData,
      //triming white spaces
      [e.target.name]: e.target.value.trim(),
    });
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    if (window !== 'undefined') {
      axiosInstance
        .post(`user/token/`, {
          username: formData.username,
          password: formData.password,
        })
        .then((res) => {
          localStorage.setItem('access_token', res.data.access);
          localStorage.setItem('refresh_token', res.data.refresh);
          axiosInstance.defaults.headers['Authorization'] =
            'Bearer ' + localStorage.getItem('access_token');
          // history.push("/");
          console.log(res);
          console.log(res.data);
        })
        .catch((error) => {
          setErrors(error.response.data);
        });
    }
  };

  return (
    <>
      <div className="min-h-full mt-20 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white dark:bg-slate-900 drop-shadow-2xl rounded-3xl p-6">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-slate-700 dark:text-slate-200">
              Sign In
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            action="#"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  value={formData.username}
                  autoFocus
                  required
                  className="appearance-none dark:bg-slate-800 dark:border-slate-800  h-14 mt-3 rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 dark:placeholder-slate-400 text-gray-900 dark:text-slate-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1  focus:z-10 sm:text-sm"
                  placeholder="Username or Email"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  className="appearance-none dark:bg-slate-800 dark:border-slate-800  h-14 mt-3 rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 dark:placeholder-slate-400 text-gray-900 dark:text-slate-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1  focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center relative">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 cursor-pointer text-blue-600 focus:ring-blue-500 border-gray-300 dark:bg-slate-800 dark:border-slate-800 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>

              <div className="text-sm relative">
                <a
                  href="#"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group h-12 relative w-full flex justify-center items-center py-2 px-4 border border-transparent text-md font-medium rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                    aria-hidden="true"
                  />
                </span>
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
