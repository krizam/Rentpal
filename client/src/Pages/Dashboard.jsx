'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
} from '@headlessui/react'
import logo from '../images/Logo.png'
import {
  ChartBarSquareIcon,
  Cog6ToothIcon,
  FolderIcon,
  GlobeAltIcon,
  ServerIcon,
  SignalIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { Bars3Icon, ChevronRightIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Dashboard', href: '#', icon: FolderIcon, current: false },
  { name: 'Bookings', href: '#', icon: ServerIcon, current: true },
  { name: 'Activity', href: '#', icon: SignalIcon, current: false },
  { name: 'Users', href: '#', icon: GlobeAltIcon, current: false },
  { name: 'Rooms', href: '#', icon: ChartBarSquareIcon, current: false },
]
const statuses = {
  offline: 'text-gray-500 bg-gray-100/10',
  online: 'text-green-400 bg-green-400/10',
  error: 'text-rose-400 bg-rose-400/10',
}
const environments = {
  Preview: 'text-gray-400 bg-gray-400/10 ring-gray-400/20',
  Production: 'text-indigo-400 bg-indigo-400/10 ring-indigo-400/30',
}
const bookings = [
  {
    id: 1,
    href: '#',
    locationName: 'Walter White',
    teamName: 'Albuquerque',
    status: 'offline',
    statusText: 'Pending Approval',
    description: 'Booked 3 days ago',
    environment: 'Preview',
  },
  {
    id: 2,
    href: '#',
    locationName: 'Jesse Pinkman',
    teamName: 'Rio Rancho',
    status: 'online',
    statusText: 'Approved',
    description: 'Booked 7 days ago',
    environment: 'Preview',
  },
  {
    id: 3,
    href: '#',
    locationName: 'Skyler White',
    teamName: 'Corrales',
    status: 'offline',
    statusText: 'Pending Approval',
    description: 'Booked 5 days ago',
    environment: 'Preview',
  },
  {
    id: 4,
    href: '#',
    locationName: 'Saul Goodman',
    teamName: 'Santa Fe',
    status: 'online',
    statusText: 'Approved',
    description: 'Booked 10 days ago',
    environment: 'Preview',
  },
  {
    id: 5,
    href: '#',
    locationName: 'Hank Schrader',
    teamName: 'San Felipe',
    status: 'offline',
    statusText: 'Pending Approval',
    description: 'Booked 15 days ago',
    environment: 'Preview',
  },
  {
    id: 6,
    href: '#',
    locationName: 'Gus Fring',
    teamName: 'Los Pollos Hermanos',
    status: 'online',
    statusText: 'Approved',
    description: 'Booked 1 day ago',
    environment: 'Preview',
  },
  {
    id: 7,
    href: '#',
    locationName: 'Mike Ehrmantraut',
    teamName: 'Las Cruces',
    status: 'online',
    statusText: 'Approved',
    description: 'Booked 20 days ago',
    environment: 'Preview',
  },
  {
    id: 8,
    href: '#',
    locationName: 'Todd Alquist',
    teamName: 'Farmington',
    status: 'offline',
    statusText: 'Pending Approval',
    description: 'Booked 2 days ago',
    environment: 'Preview',
  },
  {
    id: 9,
    href: '#',
    locationName: 'Lydia Rodarte-Quayle',
    teamName: 'Houston',
    status: 'online',
    statusText: 'Approved',
    description: 'Booked 6 days ago',
    environment: 'Preview',
  },
  {
    id: 10,
    href: '#',
    locationName: 'Jane Margolis',
    teamName: 'Taos',
    status: 'offline',
    statusText: 'Pending Approval',
    description: 'Booked 8 days ago',
    environment: 'Preview',
  },
];
const activityItems = [
  {
    user: {
      name: 'Krisam Byanju',
      imageUrl:
        'https://media.licdn.com/dms/image/v2/D4D03AQEStf5lz2zIsA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1679298563237?e=1741219200&v=beta&t=4XLfv1FSrDLBfygiUvOaxRUo34a3WQ-USclzvtS0woc',
    },
    locationName: 'Kathmandu',
    dateTime: '2023-01-23T11:00',
  },
  {
    user: {
      name: 'Aarav Sharma',
      imageUrl:
        'https://media.licdn.com/dms/image/D4D03AQEhJk89G2v7A/profile-displayphoto-shrink_800_800/0/1608374656789?e=1741219200&v=beta&t=d8BHGk7kL3uTxSOv21kJlFn7LSqEKHBJhnDjqlX3BaI',
    },
    locationName: 'New Delhi',
    dateTime: '2023-02-10T14:30',
  },
  {
    user: {
      name: 'Meera Joshi',
      imageUrl:
        'https://media.licdn.com/dms/image/D4D03AQEo1UwcyzzQpA/profile-displayphoto-shrink_800_800/0/1633928734567?e=1741219200&v=beta&t=oW5Xm0bhP5_MAj2gWj9IOsEs78ovI3JJHFGQ2Aw5J9E',
    },
    locationName: 'Mumbai',
    dateTime: '2023-03-05T10:15',
  },
  {
    user: {
      name: 'Ravi Thapa',
      imageUrl:
        'https://media.licdn.com/dms/image/D4D03AQFbLP5P0mdsZg/profile-displayphoto-shrink_800_800/0/1628437290046?e=1741219200&v=beta&t=kYxFfLXrBLoaH1xjwD6egRww2DjsU93kdMKF9N_7eH4',
    },
    locationName: 'Pokhara',
    dateTime: '2023-04-18T16:45',
  }
];


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>

        <div className="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5">
            <div className="flex h-16 shrink-0 items-center">
              <a href="/">
                <img
                  alt="RentPal"
                  src={logo}
                  className="h-10 w-auto"
                />
              </a>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-800 text-white'
                              : 'text-gray-400 hover:bg-gray-800 hover:text-white',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon aria-hidden="true" className="size-6 shrink-0" />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>

                <li className="-mx-6 mt-auto">
                  <a
                    href="#"
                    className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-white hover:bg-gray-800"
                  >
                    <img
                      alt=""
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      className="size-8 rounded-full bg-gray-800"
                    />
                    <span className="sr-only">Your profile</span>
                    <span aria-hidden="true">Walter White</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="xl:pl-72">
          {/* Sticky search header */}
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8">
            <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-white xl:hidden">
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="size-5" />
            </button>

            <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
              <form action="#" method="GET" className="grid flex-1 grid-cols-1">
                <input
                  name="search"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  className="col-start-1 row-start-1 block size-full bg-transparent pl-8 text-base text-white outline-none placeholder:text-gray-500 sm:text-sm/6"
                />
                <MagnifyingGlassIcon
                  aria-hidden="true"
                  className="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-500"
                />
              </form>
            </div>
          </div>

          <main className="lg:pr-96">
            <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
              <h1 className="text-base/7 font-semibold text-white">Bookings</h1>

              {/* Sort dropdown */}
              <Menu as="div" className="relative">
                <MenuButton className="flex items-center gap-x-1 text-sm/6 font-medium text-white">
                  Sort by
                  <ChevronUpDownIcon aria-hidden="true" className="size-5 text-gray-500" />
                </MenuButton>
                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2.5 w-40 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                    >
                      Name
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                    >
                      Date updated
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-3 py-1 text-sm/6 text-gray-900 data-[focus]:bg-gray-50 data-[focus]:outline-none"
                    >
                      Environment
                    </a>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </header>

            {/* Deployment list */}
            <ul role="list" className="divide-y divide-white/5">
              {bookings.map((deployment) => (
                <li key={deployment.id} className="relative flex items-center space-x-4 px-4 py-4 sm:px-6 lg:px-8">
                  <div className="min-w-0 flex-auto">
                    <div className="flex items-center gap-x-3">
                      <div className={classNames(statuses[deployment.status], 'flex-none rounded-full p-1')}>
                        <div className="size-2 rounded-full bg-current" />
                      </div>
                      <h2 className="min-w-0 text-sm/6 font-semibold text-white">
                        <a href={deployment.href} className="flex gap-x-2">
                          <span className="truncate">{deployment.teamName}</span>
                          <span className="text-gray-400">/</span>
                          <span className="whitespace-nowrap">{deployment.locationName}</span>
                          <span className="absolute inset-0" />
                        </a>
                      </h2>
                    </div>
                    <div className="mt-3 flex items-center gap-x-2.5 text-xs/5 text-gray-400">
                      <p className="truncate">{deployment.description}</p>
                      <svg viewBox="0 0 2 2" className="size-0.5 flex-none fill-gray-300">
                        <circle r={1} cx={1} cy={1} />
                      </svg>
                      <p className="whitespace-nowrap">{deployment.statusText}</p>
                    </div>
                  </div>
                  <div
                    className={classNames(
                      environments[deployment.environment],
                      'flex-none rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset',
                    )}
                  >
                    {deployment.environment}
                  </div>
                  <ChevronRightIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                </li>
              ))}
            </ul>
          </main>

          {/* Activity feed */}
          <aside className="bg-black/10 lg:fixed lg:bottom-0 lg:right-0 lg:top-16 lg:w-96 lg:overflow-y-auto lg:border-l lg:border-white/5">
            <header className="flex items-center justify-between border-b border-white/5 px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
              <h2 className="text-base/7 font-semibold text-white">Activity feed</h2>
              <a href="#" className="text-sm/6 font-semibold text-indigo-400">
                View all
              </a>
            </header>
            <ul role="list" className="divide-y divide-white/5">
              {activityItems.map((item) => (
                <li key={item.commit} className="px-4 py-4 sm:px-6 lg:px-8">
                  <div className="flex items-center gap-x-3">
                    <img alt="" src={item.user.imageUrl} className="size-6 flex-none rounded-full bg-gray-800" />
                    <h3 className="flex-auto truncate text-sm/6 font-semibold text-white">{item.user.name}</h3>
                    <time dateTime={item.dateTime} className="flex-none text-xs text-gray-600">
                      {item.dateTime}
                    </time>
                  </div>
                  <p className="mt-3 truncate text-sm text-gray-500">
                    Booking Location <span className="text-gray-400">{item.locationName} | Just a second ago</span>
                  </p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </>
  )
}
