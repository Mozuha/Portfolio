import React, { useState } from 'react'
//import Link from 'next/link'
import { Link } from 'react-scroll'
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from 'react-pro-sidebar'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineFolderOpen } from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { MdContacts } from 'react-icons/md'

import 'react-pro-sidebar/dist/css/styles.css'
import styled from 'styled-components'

const menuItems = [
  {
    name: 'Projects',
    path: '/projects',
    color: '#00a4ac',
    icon: <AiOutlineFolderOpen color={'#00a4ac'} size={42}/>
  },
  {
    name: 'Experiences',
    path: '/experiences',
    color: '#338f85',
    icon: <BiTrendingUp color={'#338f85'} size={42}/>
  },
  {
    name: 'About',
    path: '/about',
    color: '#ed542a',
    icon: <BsFillPersonFill color={'#ed542a'} size={42}/>
  },
  {
    name: 'Contact',
    path: '/contact',
    color: '#e1ad01',
    icon: <MdContacts color={'#e1ad01'} size={42}/>
  }
]

const Sidebar = (): JSX.Element => {
  const [itemSelect, setItemSelect] = useState(false)

  return (
    <SidebarWrapper>
      <ProSidebar>
        <SidebarHeader>
          <Link
            to='top'
            smooth={true}>
              <p>Mizuki Hashimoto</p>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            {/* {menuItems.map(c => (
              <MenuItem className={c.name.toLowerCase()} icon={c.icon}><Link href={c.path}><a>{c.name}</a></Link></MenuItem>
            ))} */}
            {menuItems.map(c => (
              <MenuItem className={c.name.toLowerCase()} icon={c.icon}>
                <Link
                  activeClass='active' 
                  to={c.name.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={800}>
                    {c.name}
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </SidebarContent>
      </ProSidebar>
  </SidebarWrapper>
  )
}


const SidebarWrapper = styled.div(props => `
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  box-shadow: 2px 0 5px 0 rgba(0, 0, 0, .3);
  .pro-sidebar { 
    height: 100vh;
    width: 100%;
    min-width: 100%;
    .pro-sidebar-inner { 
      background-color: inherit;
      box-shadow: 0.5px 0.866px 2px 0px rgba(0, 0, 0, 0.15);
      over-flow-y: hidden;
      margin: 10px 0px;
      .pro-sidebar-layout {
        .pro-sidebar-header { cursor: pointer; }
        p {
          font-size: 30px;
          padding: 0 10px 0 20px;
          color: ${props.theme.palette.text.primary};
        }
        a { text-decoration: none; }
        ul { padding: 0 5px; }
      }
    }
    .pro-menu {
      a {
        color: ${props.theme.palette.text.primary};
        font-size: 16px;
      }
      .pro-menu-item {
        &.projects {
          &:hover, .active:before {
            background-color: ${props.theme.palette.primary.dark};
            transform: scale(.95);
            border-left: 3px solid ${menuItems[0].color};
          }
        }
        &:hover {
          // background-color: ${props.theme.palette.primary.dark};
          // transform: scale(.95);
          // &.projects {
          //   border-left: 3px solid ${menuItems[0].color};
          // }
          &.experiences {
            border-left: 3px solid ${menuItems[1].color}; 
          }
          &.about {
            border-left: 3px solid ${menuItems[2].color}; 
          }
          &.contact {
            border-left: 3px solid ${menuItems[3].color}; 
          }
        }
        .pro-inner-item {
          margin: 10px 0px;
          padding: 8px 15px;
          &:focus { color: none; }
          .pro-icon-wrapper { margin-right: 13px; }
        }
      }
    }
  }
`)

export default Sidebar