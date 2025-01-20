// src/components/Dropdown.jsx
import React, { useEffect, useRef } from 'react';

const Profiledown = () => {
  const avatarButtonRef = useRef(null);
  const userDropdownRef = useRef(null);

  useEffect(() => {
    const avatarButton = avatarButtonRef.current;
    const userDropdown = userDropdownRef.current;

    const toggleDropdown = () => {
      userDropdown.classList.toggle('hidden');
    };

    const handleClickOutside = (event) => {
      if (
        avatarButton &&
        !avatarButton.contains(event.target) &&
        !userDropdown.contains(event.target)
      ) {
        userDropdown.classList.add('hidden');
      }
    };

    avatarButton.addEventListener('click', toggleDropdown);
    document.addEventListener('click', handleClickOutside);

    return () => {
      avatarButton.removeEventListener('click', toggleDropdown);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <img
        ref={avatarButtonRef}
        type="button"
        className="w-10 h-10 rounded-full cursor-pointer"
        src="/docs/images/people/profile-picture-5.jpg"
        alt="User dropdown"
      />
      <div
        ref={userDropdownRef}
        className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
      >
        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white cursor-pointer">
          <div>Bonnie Green</div>
          <div className="font-medium truncate">name@flowbite.com</div>
        </div>
        <div className="py-1">
          <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">
            Sign out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profiledown;
