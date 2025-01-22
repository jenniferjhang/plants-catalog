import { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
  } from '@headlessui/react'
import { sortOptions } from '../db/SortFilterData'
import { ChevronDownIcon, FunnelIcon } from '@heroicons/react/20/solid'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function SortBy() {
  const { mobileFiltersOpen, setMobileFiltersOpen } = useContext(MyContext);
  const { searchTerm, setSearchTerm, handleSearch } = useContext(MyContext);
  const { sortBy, handleSortChange } = useContext(MyContext);

  return (
    <div className="flex items-center">
          {/* Search */}
          <div className="flex lg:ml-6 border border-zinc-700 rounded-full p-1 mr-2 outline outline-1 -outline-offset-1 outline-zinc-700 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-green-800">
            <a href="#" className="text-zinc-500 hover:text-gray-500 flex">
              <span className="sr-only">Search</span>
              <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
              <input
                type='search'
                placeholder='Search plants...'
                className='bg-transparent text-sm outline-none w-32 placeholder:italic placeholder:text-zinc-500'
                value={searchTerm}
                onChange={handleSearch}
              />
            </a>
          </div>
          {/* Sort by */}
          <Menu value={sortBy}
              onChange={handleSortChange} as="div" className="relative inline-block text-left border border-zinc-700 rounded-full px-3 py-1">
            <div>
              <MenuButton
                className="group inline-flex justify-center text-sm font-medium text-zinc-700 hover:text-gray-900"
              >
                Sort by
                <ChevronDownIcon
                  aria-hidden="true"
                  className="-mr-1 ml-1 size-5 shrink-0 text-zinc-500 group-hover:text-zinc-500"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                {sortOptions.map((option) => (
                  <MenuItem key={option.name} value={option.value}>
                    <a
                      // href={option.href}
                      className={classNames(
                        option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                        'block px-4 py-2 text-sm data-[focus]:bg-gray-100 data-[focus]:outline-none',
                      )}
                    >
                      {option.name}
                    </a>
                  </MenuItem>
                ))}
              </div>
            </MenuItems>
          </Menu>

{/*
          <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
            <span className="sr-only">View grid</span>
            <Squares2X2Icon aria-hidden="true" className="size-5" />
          </button>
*/}
          <button
            type="button"
            onClick={() => setMobileFiltersOpen(true)}
            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
          >
            <span className="sr-only">Filters</span>
            <FunnelIcon aria-hidden="true" className="size-5" />
          </button>
        </div>
  )
}