import { BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineFolderOpen } from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { MdContacts } from 'react-icons/md'

import { MenuItemInfo } from './types'

export const menuItems: MenuItemInfo[] = [
  {
    id: 0,
    name: 'About',
    color: '#ed542a',
    icon: <BsFillPersonFill color={'#ed542a'} size={42}/>,
    isActive: false,
  },
  {
    id: 1,
    name: 'Experiences',
    color: '#338f85',
    icon: <BiTrendingUp color={'#338f85'} size={42} />,
    isActive: false,
  },
  {
    id: 2,
    name: 'Projects',
    color: '#00a4ac',
    icon: <AiOutlineFolderOpen color={'#00a4ac'} size={42}/>,
    isActive: false,
  },
  {
    id: 3,
    name: 'Contact',
    color: '#e1ad01',
    icon: <MdContacts color={'#e1ad01'} size={42} />,
    isActive: false,
  }
]