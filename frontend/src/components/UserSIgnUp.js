import { LockClosedIcon } from '@heroicons/react/solid';

export default function UserSignUp() {
  return (
    <>
      <div className="min-h-full mt-20 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white dark:bg-slate-900 drop-shadow-2xl rounded-3xl p-6">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold text-slate-700 dark:text-slate-200">
              Register
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div className="md:flex justify-between">
                <div className="md:pr-1">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="first-name"
                    name="first_name"
                    type="name"
                    autoComplete="email"
                    className="appearance-none dark:bg-slate-800 dark:border-slate-800 h-14 mt-3 rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 dark:placeholder-slate-400 text-gray-900 dark:text-slate-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1 focus:z-10 sm:text-sm"
                    placeholder="First name"
                  />
                </div>
                <div className="md:pl-1">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="appearance-none dark:bg-slate-800 dark:border-slate-800 h-14 mt-3 rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 dark:placeholder-slate-400 text-gray-900 dark:text-slate-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1 focus:z-10 sm:text-sm"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="username"
                  required
                  className="appearance-none dark:bg-slate-800 dark:border-slate-800  h-14 mt-3 rounded-xl relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 dark:placeholder-slate-400 text-gray-900 dark:text-slate-200 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1 focus:z-10 sm:text-sm"
                  placeholder="Username"
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
                />
              </div>
            </div>

            <div className="flex justify-center items-center relative text-sm text-gray-600 dark:text-gray-300">
              By clicking sign up you will agree to our terms & conditions.
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
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
