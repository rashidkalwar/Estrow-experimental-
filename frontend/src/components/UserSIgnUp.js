import { LockClosedIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import Loader from 'src/components/Loader';
import { register } from 'src/actions/auth';

export default function UserSignUp() {
  const dispatch = useDispatch();
  const router = useRouter();
  const register_success = useSelector((state) => state.auth.register_success);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
  });

  const { first_name, last_name, username, email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(register(first_name, last_name, username, email, password));
  };

  if (typeof window !== 'undefined' && isAuthenticated)
    router.push('/dashboard');
  if (register_success) router.push('/login');

  return (
    <>
      <div className="min-h-full mt-20 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white dark:bg-slate-900 drop-shadow-2xl rounded-3xl p-6">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-slate-700 dark:text-slate-200">
              Register
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={onSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="md:flex justify-between">
                <div className="md:pr-1">
                  <label htmlFor="first_name" className="sr-only">
                    First Name
                  </label>
                  <input
                    id="first-name"
                    name="first_name"
                    type="text"
                    autoComplete="given-name"
                    className="appearance-none dark:bg-slate-800 dark:border-slate-800 h-14 mt-3 rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 dark:placeholder-slate-400 text-gray-900 dark:text-slate-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1 focus:z-10 sm:text-sm"
                    placeholder="First name"
                    onChange={onChange}
                    value={first_name}
                  />
                </div>
                <div className="md:pl-1">
                  <label htmlFor="last_name" className="sr-only">
                    Last Name
                  </label>
                  <input
                    id="last_name"
                    name="last_name"
                    type="text"
                    autoComplete="family-name"
                    className="appearance-none dark:bg-slate-800 dark:border-slate-800 h-14 mt-3 rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 dark:placeholder-slate-400 text-gray-900 dark:text-slate-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1 focus:z-10 sm:text-sm"
                    placeholder="Last name"
                    onChange={onChange}
                    value={last_name}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none dark:bg-slate-800 dark:border-slate-800  h-14 mt-3 rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 dark:placeholder-slate-400 text-gray-900 dark:text-slate-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1 focus:z-10 sm:text-sm"
                  placeholder="Username"
                  onChange={onChange}
                  value={username}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none dark:bg-slate-800 dark:border-slate-800  h-14 mt-3 rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 dark:placeholder-slate-400 text-gray-900 dark:text-slate-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1  focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={onChange}
                  value={email}
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
                  autoComplete="new-password"
                  required
                  className="appearance-none dark:bg-slate-800 dark:border-slate-800  h-14 mt-3 rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 dark:placeholder-slate-400 text-gray-900 dark:text-slate-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1  focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={onChange}
                  value={password}
                />
              </div>
            </div>

            <div className="flex justify-center items-center relative text-sm text-gray-600 dark:text-gray-300">
              By clicking sign up you will agree to our terms & conditions.
            </div>

            <div>
              {loading ? (
                <Loader />
              ) : (
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
                  Sign Up
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
