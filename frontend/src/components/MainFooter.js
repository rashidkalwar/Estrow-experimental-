import { Twitter, Facebook, GitHub } from 'react-feather';
import Link from 'next/link';

const MainFooter = () => {
  return (
    <footer className="relative top-0 bg-slate-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 px-4">
            <h4 className="text-3xl font-semibold dark:text-slate-700">
              Let&#x27;s keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-slate-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 flex">
              <a href="https://www.twitter.com/RashidAliKalwar" target="_blank">
                <Twitter className="font-xl p-1 bg-white text-blue-500  justify-center align-center rounded-full outline-none focus:outline-none mr-2 text-center" />
              </a>
              <a href="https://www.facebook.com" target="_blank">
                <Facebook className="font-xl p-1 bg-white text-blue-500  justify-center align-center rounded-full outline-none focus:outline-none mr-2 text-center" />
              </a>

              <a href="https://www.github.com/rashidkalwar" target="_blank">
                <GitHub className="font-xl p-1 bg-white text-blue-500  justify-center align-center rounded-full outline-none focus:outline-none mr-2 text-center" />
              </a>
            </div>
            <p className="text-sm mt-6 text-slate-500 font-semibold">
              Currently v1.1.0
            </p>
          </div>
          <div className="w-full md:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                <span className="block uppercase text-slate-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/about-us">
                      <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm">
                        About Us
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog">
                      <a className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm">
                        Blog
                      </a>
                    </Link>
                  </li>
                  <li>
                    <a
                      className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      href="https://www.github.com/creativetimofficial/tailwind-starter-kit"
                      target="_blank"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/bootstrap-themes/free"
                      target="_blank"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto">
                <span className="block uppercase text-slate-500 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      href="https://github.com/creativetimofficial/tailwind-starter-kit/blob/master/LICENSE.md"
                      target="_blank"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms"
                      target="_blank"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy"
                      target="_blank"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-slate-600 hover:text-slate-800 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us"
                      target="_blank"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-slate-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-slate-500 font-semibold py-1">
              Copyright © Estrow {new Date().getFullYear()}.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
