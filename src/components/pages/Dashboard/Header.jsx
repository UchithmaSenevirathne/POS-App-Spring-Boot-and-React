import React from 'react'
import { HiOutlineBell, HiOutlineChatAlt, HiOutlineSearch } from 'react-icons/hi'
import { Menu, Popover, Transition } from '@headlessui/react'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import { Fragment } from 'react'

export default function Header() {
    const navigate = useNavigate()

    return(
        <div className='flex items-center justify-between h-16 px-4 bg-white'>
            <div className='relative'>
                <HiOutlineSearch fontSize={20} className='absolute text-gray-400 -translate-y-1/2 top-1/2 left-3'/>
                <input type='text' placeholder='Search...' className='text-sm focus:outline-none active:outline-none h-10 w-[24rem] rounded-md pr-4 pl-11 bg-[#EEF2F5]'/>
            </div>
            <div className='flex items-center gap-2 mr-2'>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open && 'bg-[#D9F3EA]',
                                    'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-[#D9F3EA]'
                                )}
                            >
                                <HiOutlineChatAlt fontSize={24} className='text-[#00B074]'/>
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className="font-medium text-[#00B074]">Messages</strong>
                                        <div className="py-1 mt-2 text-sm">This is messages panel.</div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open && 'bg-[#D9F3EA]',
                                    'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-[#D9F3EA]'
                                )}
                            >
                                <HiOutlineBell fontSize={24} className='text-[#00B074]'/>
                            </Popover.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel className="absolute right-0 z-10 mt-2.5 transform w-80">
                                    <div className="bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 px-2 py-2.5">
                                        <strong className="font-medium text-[#00B074]">Notifications</strong>
                                        <div className="py-1 mt-2 text-sm">This is notification panel.</div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                    )}
                </Popover>
                <Menu as="div" className="relative">
                    <div>
                        <Menu.Button className="flex ml-2 text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-[#D9F3EA]">
                            <span className="sr-only">Open user menu</span>
                            <div
                                className="w-10 h-10 bg-center bg-no-repeat bg-cover rounded-full bg-sky-500"
                                style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_1280.jpg")' }}
                            >
                                <span className="sr-only">Marc Backes</span>
                            </div>
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
                        <Menu.Items className="absolute right-0 z-10 w-48 p-1 mt-2 origin-top-right bg-white rounded-sm shadow-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        onClick={() => navigate('/profile')}
                                        className={classNames(
                                            active && 'bg-[#D9F3EA]',
                                            'active:bg-[#D9F3EA] rounded-md px-4 py-2 text-gray-700 cursor-pointer focus:bg-[#D9F3EA]'
                                        )}
                                    >
                                        Your Profile
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        onClick={() => navigate('/settings')}
                                        className={classNames(
                                            active && 'bg-[#D9F3EA]',
                                            'active:bg-[#D9F3EA] rounded-md px-4 py-2 text-gray-700 cursor-pointer focus:bg-[#D9F3EA]'
                                        )}
                                    >
                                        Settings
                                    </div>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        onClick={() => navigate('/logout')}
                                        className={classNames(
                                            active && 'bg-[#D9F3EA]',
                                            'active:bg-[#D9F3EA] rounded-md px-4 py-2 text-gray-700 cursor-pointer focus:bg-[#D9F3EA]'
                                        )}
                                    >
                                        Logout
                                    </div>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}