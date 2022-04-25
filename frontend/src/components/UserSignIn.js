import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { login, reset_register_success } from 'src/actions/auth';
import Loader from 'src/components/Loader';
import { LockClosedIcon } from '@heroicons/react/solid';

export default function UserSignIn() {
  const dispatch = useDispatch();
  const router = useRouter();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(reset_register_success());
  }, [dispatch]);

  const [errors, setErrors] = useState(formData);

  const onChange = (e) => {
    setFormData({
      ...formData,
      //triming white spaces
      [e.target.name]: e.target.value.trim(),
    });
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(login(username, password));
  };

  if (typeof window !== 'undefined' && isAuthenticated) router.push('/');

  return (
    <>
      <div className="min-h-full mt-20 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white dark:bg-slate-900 drop-shadow-2xl rounded-3xl p-6">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-slate-700 dark:text-slate-200">
              Sign In
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={onSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username or Email
                </label>
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  value={username}
                  autoFocus
                  required
                  className="appearance-none dark:bg-slate-800 dark:border-slate-800  h-14 mt-3 rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 dark:placeholder-slate-400 text-gray-900 dark:text-slate-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1  focus:z-10 sm:text-sm"
                  placeholder="Username or Email"
                  onChange={onChange}
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
                  value={password}
                  className="appearance-none dark:bg-slate-800 dark:border-slate-800  h-14 mt-3 rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 dark:placeholder-slate-400 text-gray-900 dark:text-slate-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1  focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={onChange}
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
                  className="ml-2 block text-sm text-gray-900 dark:text-gray-200"
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
                  Sign In
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
