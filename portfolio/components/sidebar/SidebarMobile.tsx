import React, { useState, useCallback, useRef, useEffect } from 'react'
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import Link from 'react-scroll/modules/components/Link'
import Slide from '@material-ui/core/Slide'
import { MdMenu } from 'react-icons/md'
import styled from 'styled-components'

import { MenuItemInfo } from './types'
import { menuItems } from './menuItemInfo'

const SidebarMobile = (): JSX.Element => {
  const [toggled, setToggled] = useState(false)
  const [items, setItems] = useState<MenuItemInfo[]>(menuItems)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleMenuClick = () => !menuRef.current && setToggled(!toggled)

  // close the menu when clicked outside of the menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as HTMLElement))
        setToggled(false)
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  // determine which content is currently on screen according to the spy result
  const handleActive = useCallback((id: number, active: boolean) => {
    let newMenuItems = [...items]
    newMenuItems[id].isActive = active ? true : false
    setItems(newMenuItems)
  }, [])

  return (
    <>
      <SidebarHeaderWrapper>
        <ProSidebar>
          <SidebarHeader>
            <MdMenu color={'#333'} size={42} onClick={handleMenuClick} />
            <Link to='top' smooth={true} offset={-64}>
              <span className='logo'>Mizuki Hashimoto</span>
            </Link>
          </SidebarHeader>
        </ProSidebar>
      </SidebarHeaderWrapper>
      <Slide direction='right' in={toggled} mountOnEnter unmountOnExit>
        <SidebarContentWrapper ref={menuRef}>
          <ProSidebar>
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
                        offset={-64}
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
        </SidebarContentWrapper>
     </Slide>
    </>
  )
}

const SidebarHeaderWrapper = styled.div(props =>`
  position: fixed;
  z-index: 10000;
  top: 0;
  width: 100%;
  .pro-sidebar {
    width: inherit;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .3);
    .pro-sidebar-header {
      display: grid;
      grid-template-rows: 64px;
      grid-template-columns: 64px 1fr;
      text-align: center;
      padding: 0;
      border-bottom: 0;
      cursor: default;
      background-color: ${props.theme.palette.primary.main};
      svg {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        margin: auto;
        cursor: pointer;
        z-index: 1010;
      }
      a { 
        grid-row: 1 / 2;
        grid-column: 1 / 3; 
        .logo {
          font-size: 1.75rem;
          color: ${props.theme.palette.text.primary};
          user-select: none;
          line-height: 64px;
          vertical-align: middle;
          transform: translate(-32px);
          cursor: pointer;
        }
      }
    }
  }
`)

const SidebarContentWrapper = styled.div(props => `
  position: fixed;
  z-index: 9999;
  top: 0;
  margin-top: 64px;
  width: 200px;
  height: 100%;
  .pro-sidebar {
    width: inherit;
    min-width: inherit;
    box-shadow: 2px 0 5px 0 rgba(0, 0, 0, .3);
    .pro-sidebar-content {
      background-color: ${props.theme.palette.primary.main};
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
            &.skills { border-left: 3px solid ${menuItems[3].color}; }
            &.contact { border-left: 3px solid ${menuItems[4].color}; }
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
`)

export default SidebarMobile