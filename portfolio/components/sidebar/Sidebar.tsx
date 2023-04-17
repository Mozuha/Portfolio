import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Link from 'react-scroll/modules/components/Link';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';

import { MenuItemInfo } from './types';
import { menuItems } from './menuItemInfo';

const Sidebar = () => {
  const router = useRouter();
  const changeTo = router.locale === 'en' ? 'ja' : 'en';
  const [items, setItems] = useState<MenuItemInfo[]>(menuItems);

  const handleLangChange = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  // determine which content is currently on screen according to the spy result
  const handleActive = useCallback((id: number, active: boolean) => {
    let newMenuItems = [...items];
    newMenuItems[id]!.isActive = active ? true : false;
    setItems(newMenuItems);
  }, []);

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
          <Link to="top" href="top" smooth={true} style={{ textDecoration: 'none' }}>
            <span className="logo">Mizuki Hashimoto</span>
          </Link>
        </SidebarHeader>
        <SidebarContent>
          <Menu>
            {menuItems.map((c, idx) => (
              <MenuItem key={idx} className={c.name.toLowerCase()} icon={c.icon} active={items[c.id]!.isActive}>
                <Link
                  activeClass="active-a"
                  to={c.name.toLowerCase()}
                  href={c.name.toLowerCase()}
                  spy={true}
                  smooth={true}
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
        <SidebarFooter>
          <div>
            <span className="ENLabel">EN</span>
            <Switch
              inputProps={{ 'aria-label': 'language-switch' }}
              checked={router.locale === 'ja'}
              onChange={() => handleLangChange(changeTo)}
            />
            <span className="JALabel">JA</span>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </SidebarWrapper>
  );
};

const SidebarWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '200px',
  height: '100%',
  '.pro-sidebar': {
    height: 'inherit',
    width: 'inherit',
    minWidth: 'inherit',
    boxShadow: '2px 0 5px 0 rgba(0, 0, 0, .3)',
    '.pro-sidebar-inner': {
      backgroundColor: 'inherit',
      overflowY: 'hidden',
      '.pro-sidebar-layout': {
        '.pro-sidebar-header': {
          cursor: 'pointer',
          padding: '40px',
          paddingLeft: '20px',
          '.logo': {
            fontSize: '1.75rem',
            color: theme.palette.text.primary,
            userSelect: 'none',
          },
        },
        '.pro-sidebar-content': {
          '.pro-menu': {
            ul: { padding: '0 5px' },
            a: {
              color: theme.palette.text.primary,
              fontSize: '1rem',
              userSelect: 'none',
            },
            '.pro-menu-item': {
              '&:hover, &.active': {
                backgroundColor: theme.palette.primary.dark,
                transform: 'scale(.95)',
                '&.about': { borderLeft: '3px solid' + menuItems[0]!.color },
                '&.experiences': { borderLeft: '3px solid' + menuItems[1]!.color },
                '&.projects': { borderLeft: '3px solid' + menuItems[2]!.color },
                '&.skills': { borderLeft: '3px solid' + menuItems[3]!.color },
                '&.contact': { borderLeft: '3px solid' + menuItems[4]!.color },
              },
              '.pro-inner-item': {
                margin: '10px 0px',
                padding: '8px 15px',
                '&:focus': { color: 'none' },
                '.pro-icon-wrapper': { marginRight: '13px' },
              },
            },
          },
        },
        '.pro-sidebar-footer': {
          padding: '40px',
          margin: 'auto',
          '& .ENLabel, & .JALabel': {
            color: theme.palette.text.primary,
            userSelect: 'none',
          },
          '.MuiSwitch-switchBase': {
            color: '#346751',
          },
          '.Mui-checked': {
            color: '#346751',
            '& + .MuiSwitch-track': {
              backgroundColor: '#346751',
            },
          },
        },
      },
    },
  },
}));

export default Sidebar;
