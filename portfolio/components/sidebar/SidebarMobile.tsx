import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { ProSidebar, Menu, MenuItem, SidebarHeader, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import Link from 'react-scroll/modules/components/Link';
import { styled, Slide, Switch } from '@mui/material';
import { MdMenu } from 'react-icons/md';

import { MenuItemInfo } from './types';
import { menuItems } from './menuItemInfo';

const SidebarMobile = (): JSX.Element => {
  const router = useRouter();
  const changeTo = router.locale === 'en' ? 'ja' : 'en';
  const [isToggled, setIsToggled] = useState(false);
  const [items, setItems] = useState<MenuItemInfo[]>(menuItems);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleLangChange = (newLocale: string) => {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };

  const handleMenuClick = () => !menuRef.current && setIsToggled(!isToggled);

  // close the menu when clicked outside of the menu
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as HTMLElement)) setIsToggled(false);
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  // determine which content is currently on screen according to the spy result
  const handleActive = useCallback((id: number, active: boolean) => {
    let newMenuItems = [...items];
    newMenuItems[id]!.isActive = active ? true : false;
    setItems(newMenuItems);
  }, []);

  return (
    <>
      <SidebarHeaderWrapper>
        <ProSidebar>
          <SidebarHeader>
            <MdMenu color={'#333'} size={42} onClick={handleMenuClick} />
            <Link to="top" href="top" smooth={true} offset={-64} style={{ textDecoration: 'none' }}>
              <span className="logo">Mizuki Hashimoto</span>
            </Link>
          </SidebarHeader>
        </ProSidebar>
      </SidebarHeaderWrapper>
      <Slide direction="right" in={isToggled} mountOnEnter unmountOnExit>
        <SidebarContentWrapper ref={menuRef}>
          <ProSidebar>
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
        </SidebarContentWrapper>
      </Slide>
    </>
  );
};

const SidebarHeaderWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  zIndex: 10000,
  top: 0,
  width: '100%',
  '.pro-sidebar': {
    width: 'inherit',
    boxShadow: '0 2px 5px 0 rgba(0, 0, 0, .3)',
    '.pro-sidebar-header': {
      display: 'grid',
      gridTemplateRows: '64px',
      gridTemplateColumns: '64px 1fr',
      textAlign: 'center',
      padding: 0,
      borderBottom: 0,
      cursor: 'default',
      backgroundColor: theme.palette.primary.main,
      svg: {
        gridRow: 1 / 2,
        gridColumn: 1 / 2,
        margin: 'auto',
        cursor: 'pointer',
        zIndex: 1010,
      },
      a: {
        gridRow: 1 / 2,
        gridColumn: 1 / 3,
        '.logo': {
          fontSize: '1.75rem',
          color: theme.palette.text.primary,
          userSelect: 'none',
          lineHeight: '64px',
          verticalAlign: 'middle',
          transform: 'translate(-32px)',
          cursor: 'pointer',
        },
      },
    },
  },
}));

const SidebarContentWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  zIndex: 9999,
  top: 0,
  marginTop: '64px',
  width: '200px',
  height: '94vh',
  '.pro-sidebar': {
    width: 'inherit',
    minWidth: 'inherit',
    boxShadow: '2px 0 5px 0 rgba(0, 0, 0, .3)',
    '.pro-sidebar-content': {
      backgroundColor: theme.palette.primary.main,
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
      backgroundColor: theme.palette.primary.main,
      width: 'inherit',
      minWidth: 'inherit',
      padding: '40px',
      textAlign: 'center',
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
}));

export default SidebarMobile;
