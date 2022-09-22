import {useState} from 'react';
import {NavLink} from 'react-router-dom';
import { BsHouseDoorFill, BsBriefcaseFill, BsPhoneVibrateFill } from 'react-icons/bs';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [open, setOpen] = useState(false);

  const handleMenuContent = () => {
    setOpen(!open)
  };

  const menuContent = [
    {id: 1, icon: <BsHouseDoorFill className='w-6 h-6 md:mx-auto'/>, label: 'Home', link: '/'},
    {id: 2, icon: <BsBriefcaseFill className='w-6 h-6 md:mx-auto'/>, label: 'Portfolio', link: '/portfolio'},
    {id: 3, icon: <BsPhoneVibrateFill className='w-6 h-6 md:mx-auto'/>, label: 'Contact', link: '/contact'},
  ];

  return (
    <nav className="shadow-lg bg-slate-300 px-3 py-2 flex justify-between items-center z-30 md:px-5 xl:px-10">
      {/* logo */}
      <div className="flex justify-between items-center z-10">
        <h1 className="logo text-xl md:text-3xl font-black text-blue-900">Peter Oyelegbin</h1>
      </div>

      {/* menu button */}
      <button className="text-4xl cursor-pointer md:hidden block z-10" onClick={handleMenuContent}>
        {/* Icon when menu is closed. Hero icon name: outline/menu Menu open: "hidden", Menu closed: "block" */}
        <HiOutlineMenuAlt3 className={`h-6 w-6 ${open ? "hidden" : "block"}`}/>
      </button>

      {/* menu content */}
      <ul className={`fixed flex flex-col items-center gap-10 bg-slate-300 w-full py-10 top-10 transition-all ease-in-out duration-300 z-20 md:flex-row md:static md:w-auto md:py-0 ${open ? 'right-0' : '-right-full'}`}>
        {menuContent && menuContent?.map((contents) => (
          <li className='flex md:flex-col' key={contents.id}>{contents.icon}<NavLink className={({isActive})=> isActive ? 'text-blue-900 text-xl' : 'ml-1 text-xl md:ml-0'} to={contents.link} onClick={handleMenuContent}>{contents.label}</NavLink></li>
        ))}

        {/* Icon when menu is open. Heroicon name: outline/x Menu open: "block", Menu closed: "hidden" */}
        <FaTimes className={`h-6 w-6 mx-auto cursor-pointer md:hidden ${open ? "block" : "hidden"}`} onClick={handleMenuContent}/>
      </ul>
    </nav>
  )
}

export default Nav