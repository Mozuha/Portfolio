import React, { useState, useCallback } from 'react'
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import Link from 'react-scroll/modules/components/Link'
import styled from 'styled-components'

import { MenuItemInfo } from './types'
import { menuItems } from './menuItemInfo'

const Sidebar = (): JSX.Element => {
  const [items, setItems] = useState<MenuItemInfo[]>(menuItems)

  // determine which content is currently on screen according to the spy result
  const handleActive = useCallback((id: number, active: boolean) => {
    let newMenuItems = [...items]
    newMenuItems[id].isActive = active ? true : false
    setItems(newMenuItems)
  }, [])

  // alternative way to set active (if items are few)
  // [active0, setActive0] = useState(false)
  // [active1, setActive1] = useState(false)
  // activeList = [active0, active1]
  // setActiveList = [setActive0, setActive1]

  // handleEvent = (id) => {
  //   setActiveList[id](true)
  // }

  return (
    <SidebarWrapper>
      <ProSidebar>
        <SidebarHeader>
          <Link to='top' smooth={true}>
            <span className='logo'>Mizuki Hashimoto</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            {menuItems.map((c, idx) => (
              <MenuItem
                key={idx}
                className={c.name.toLowerCase()}
                icon={c.icon}
                active={items[c.id].isActive}
              >
                <Link
                  activeClass='active-a' 
                  to={c.name.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={600}
                  onSetActive={() => handleActive(c.id, true)}
                  onSetInactive={() => handleActive(c.id, false)}
                >
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
  height: 100%;
  .pro-sidebar { 
    height: inherit;
    width: inherit;
    min-width: inherit;
    box-shadow: 2px 0 5px 0 rgba(0, 0, 0, .3);
    .pro-sidebar-inner { 
      background-color: inherit;
      over-flow-y: hidden;
      .pro-sidebar-layout {
        .pro-sidebar-header { 
          cursor: pointer;
          padding: 40px;
          padding-left: 20px;
          .logo {
            font-size: 1.75rem;
            color: ${props.theme.palette.text.primary};
            user-select: none;
          }
        }
        .pro-sidebar-content {
          .pro-menu {
            ul { padding: 0 5px; }
            a {
              color: ${props.theme.palette.text.primary};
              font-size: 1rem;
              user-select: none;
            }
            .pro-menu-item {
              &:hover, &.active {
                background-color: ${props.theme.palette.primary.dark};
                transform: scale(.95);
                &.about { border-left: 3px solid ${menuItems[0].color}; }
                &.experiences { border-left: 3px solid ${menuItems[1].color}; }
                &.projects { border-left: 3px solid ${menuItems[2].color}; }
                &.contact { border-left: 3px solid ${menuItems[3].color}; }
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
      }
    }
  }
`)

export default Sidebar