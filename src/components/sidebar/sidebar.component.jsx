import React from 'react';
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SideBtnWrap,
  SidebarLink,
  SidebarRoute,
} from './sidebar.styles';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink onClick={toggle} to='about'>
            About
          </SidebarLink>
          <SidebarLink onClick={toggle} to='discover'>
            Discover
          </SidebarLink>
          <SidebarLink onClick={toggle} to='services'>
            Services
          </SidebarLink>
          <SidebarLink onClick={toggle} to='signup'>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/signin'>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SideBarContainer>
  );
};

export default Sidebar;
