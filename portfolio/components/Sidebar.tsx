import React, { useState, useCallback, useEffect } from 'react'
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent } from 'react-pro-sidebar'
import 'react-pro-sidebar/dist/css/styles.css'
import Link from 'react-scroll/modules/components/Link'
import Slide from '@material-ui/core/Slide'
import { BsFillPersonFill } from 'react-icons/bs'
import { AiOutlineFolderOpen } from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { MdContacts, MdMenu } from 'react-icons/md'
import styled from 'styled-components'

interface MenuItem {
  id: number,
  name: string,
  color: string,
  icon: object,
  isActive: boolean,
}

const menuItems: MenuItem[] = [
  {
    id: 0,
    name: 'Projects',
    color: '#00a4ac',
    icon: <AiOutlineFolderOpen color={'#00a4ac'} size={42} />,
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
    name: 'About',
    color: '#ed542a',
    icon: <BsFillPersonFill color={'#ed542a'} size={42} />,
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

const Sidebar = (): JSX.Element => {
  const [mediaMatched, setMediaMatched] = useState(false)
  const [toggled, setToggled] = useState(false)
  const [items, setItems] = useState<MenuItem[]>(menuItems)  

  // avoid 'window is not defined' error which probably caused by SSR
  useEffect(() => {
    // initial check
    setMediaMatched(window.matchMedia('(max-width: 1000px)').matches)

    window.matchMedia('(max-width: 1000px)').onchange = (e) =>
    setMediaMatched(e.matches)
  })

  const handleSetActive = useCallback((id: number) => {
    let newMenuItems = [...items]
    newMenuItems[id].isActive = true
    setItems(newMenuItems)
  }, [])

  const handleSetInactive = useCallback((id: number) => {
    let newMenuItems = [...items]
    newMenuItems[id].isActive = false
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

  const handleMenuClick = () => setToggled(!toggled)

  return (
    <SidebarWrapper>
      <ProSidebar>
        <SidebarHeader>
          {mediaMatched && <MdMenu color={'#333'} size={42} onClick={handleMenuClick} />}
          <Link to='top' smooth={true}>
            <span className='logo'>Mizuki Hashimoto</span>
          </Link>
        </SidebarHeader>
        <Slide direction='right' in={(!mediaMatched || toggled)} mountOnEnter unmountOnExit>
          <SidebarContent>
            <div className='inner-box'>
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
                      onSetActive={() => handleSetActive(c.id)}
                      onSetInactive={() => handleSetInactive(c.id)}
                    >
                      {c.name}
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </div>
          </SidebarContent>
        </Slide>
      </ProSidebar>
  </SidebarWrapper>
  )
}

const SidebarWrapper = styled.div(props => `
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  @media screen and (max-width: 1000px) {
    width: 100%;
    height: auto;
  }
  .pro-sidebar { 
    height: 100vh;
    width: 100%;
    min-width: 100%;
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
          @media screen and (max-width: 1000px) {
            display: grid;
            grid-template-rows: 64px;
            grid-template-columns: 64px 1fr;
            text-align: center;
            padding: 0;
            border-bottom: 0;
            cursor: default;
            background-color: ${props.theme.palette.primary.main};
            box-shadow: 0 2px 5px 0 rgba(0, 0, 0, .3);
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
                line-height: 64px;
                vertical-align: middle;
                transform: translate(-32px);
                cursor: pointer;
              }
            }
          }
        }
        .pro-sidebar-content {
          @media screen and (max-width: 1000px) {
            width: 200px;
            background-color: ${props.theme.palette.primary.main};
            box-shadow: 2px 0 5px -2px rgba(0, 0, 0, .3);
            .inner-box {
              width: inherit;
              height: 100%;
              box-shadow: inset 0 3px 5px -2px rgba(0, 0, 0, .3);
            }
          }
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
                &.projects { border-left: 3px solid ${menuItems[0].color}; }
                &.experiences { border-left: 3px solid ${menuItems[1].color}; }
                &.about { border-left: 3px solid ${menuItems[2].color}; }
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