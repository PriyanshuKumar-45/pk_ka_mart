import React, { Fragment, useContext, useState, useEffect} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { BsFillCloudSunFill } from 'react-icons/bs';
import { FiSun } from 'react-icons/fi';
import myContext from '../../context/data/myContext';
import { RxCross2 } from 'react-icons/rx';
import { useSelector } from 'react-redux';

function Navbar() {
  const [open, setOpen] = useState(false);
  const context = useContext(myContext);
  const { toggleMode, mode } = context;

  // Debug: Check if context and user are defined
  console.log('Context:', context);

  // Get user data
  const user = JSON.parse(localStorage.getItem('user'));

  const logout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
}, [cartItems])
  return (
    <div className="sticky top-0 z-50 bg-[#0033A0] text-white shadow-xl">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-299"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-299"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-299 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-299 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-[#0033A0] pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-28">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md p-2 text-white"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 />
                  </button>
                </div>
                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  <Link to={'/allproducts'} className="text-sm font-medium text-white hover:text-gray-299">
                    All Products
                  </Link>
                  <div className="flow-root">
                    <Link to={'/order'} className="text-sm font-medium text-white hover:text-gray-299">
                      Order
                    </Link>
                  </div>
                  {user && user.email === 'priyanshu07264@gmail.com' && (
                    <div className="flow-root">
                      <Link to={'/dashboard'} className="text-sm font-medium text-white hover:text-gray-299">
                        Admin
                      </Link>
                    </div>
                  )}
                  <div className="flow-root">
                    <button onClick={logout} className="text-sm font-medium text-white hover:text-gray-300 cursor-pointer">
                      Logout
                    </button>
                  </div>
                  <div className="flow-root">
                    <Link to={'/'} className="text-sm font-medium text-white hover:text-gray-299 cursor-pointer">
                      <img
                        className="inline-block w-10 h-10 rounded-full"
                        src="https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg"
                        alt="Dan_Abromov"
                      />
                    </Link>
                  </div>
                </div>
                <div className="border-t border-gray-200 px-4 py-6">
                  <a href="#" className="flex items-center p-2 text-white hover:text-gray-299">
                    <img
                      src="img/indiaflag.png"
                      alt=""
                      className="block h-auto w-5 flex-shrink-0"
                    />
                    <span className="ml-3 block text-base font-medium">INDIA</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Desktop */}
      <header className="relative">
        <p className="flex h-10 items-center justify-center bg-[#0033A0] text-white px-4 text-sm font-medium sm:px-6 lg:px-8">
          Get free delivery on orders over ₹299
        </p>

        <nav aria-label="Top" className="bg-[#0033A0] px-4 sm:px-6 lg:px-8 shadow-xl text-white">
          <div className="flex h-16 items-center">
            <button
              type="button"
              className="rounded-md p-2 text-white lg:hidden"
              onClick={() => setOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>

            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <Link to={'/'} className="flex items-center">
                <h1 className="text-2xl font-bold text-white px-2 py-1 rounded ml-2">
                  PK-Mart
                </h1>
              </Link>
            </div>

            <div className="ml-auto flex items-center">
              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <Link to={'/allproducts'} className="text-sm font-medium text-white hover:text-gray-299">
                  All Products
                </Link>
                <Link to={'/order'} className="text-sm font-medium text-white hover:text-gray-299">
                  Order
                </Link>
                {user && user.email === 'priyanshu07264@gmail.com' && (
                  <Link to={'/dashboard'} className="text-sm font-medium text-white hover:text-gray-299">
                    Admin
                  </Link>
                )}
                <button onClick={logout} className="text-sm font-medium text-white hover:text-gray-299 cursor-pointer">
                  Logout
                </button>
              </div>

              {/* Search */}
              <div className="flex lg:ml-6">
                <button className="text-white" onClick={toggleMode}>
                  {mode === 'light' ? (
                    <FiSun size={30} />
                  ) : (
                    <BsFillCloudSunFill size={30} />
                  )}
                </button>
              </div>

              {/* Cart */}
              <div className="ml-4 flow-root lg:ml-6">
                <Link to={'/cart'} className="group -m-2 flex items-center p-2 text-white hover:text-gray-299">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                  
                  <span className="ml-2 text-sm font-medium">{cartItems.length}</span> {/* Display item count */}
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
