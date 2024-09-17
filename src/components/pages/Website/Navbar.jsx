import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { HiOutlineBars3, HiOutlineShoppingCart, HiOutlineXMark } from 'react-icons/hi2'
import { FaCartShopping } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '#homePage', current: true },
  { name: 'Menu', href: '#', current: false },
  { name: 'About', href: '#aboutPage', current: false },
  { name: 'Contact', href: '#contactPage', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="w-full bg-white">
      <div className="px-2 mx-auto max-w-[1500px] sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="relative inline-flex items-center justify-center p-2 text-black rounded-md group">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <HiOutlineBars3 aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <HiOutlineXMark aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-between">
            <div className="flex items-center gap-3">
              <FaCartShopping className='text-[orange] text-[24px]'/>
              <p className='font-bold text-[24px] font-poppins'>FOODIE</p>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? ' text-[orange]' : 'text-black hover:text-[orange]',
                      'px-3 py-2 text-[16px] font-medium font-poppins',
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative  bg-[orange] rounded-xl px-3 py-2 font-poppins"
            >
              <NavLink className='text-white hover:no-underline' to='/login'>Sign In</NavLink>
            </button>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? ' text-[orange]' : 'text-black hover:text-[orange]',
                'block px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
