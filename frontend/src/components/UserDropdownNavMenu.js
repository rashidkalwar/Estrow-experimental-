import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { logout } from 'src/actions/auth';

const UserNavMenu = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    if (dispatch && dispatch !== null && dispatch !== undefined)
      dispatch(logout());
  };
  return (
    <div className="hidden md:block">
      <div className="ml-2 flex items-center md:ml-4">
        <Menu as="div" className=" relative">
          <div>
            <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm dark:bg-slate-900 justify-center hover:ring-4 ring-blue-400 transition-all focus:outline-none">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-10 w-10 rounded-full"
                src="https://source.unsplash.com/random/300x300/?cat"
                alt=""
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item key="">
                {({ active }) => (
                  <Link href="#!">
                    <a
                      className={
                        (active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700')
                      }
                      onClick={logoutHandler}
                    >
                      Logout
                    </a>
                  </Link>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
};

export default UserNavMenu;
