import React from 'react';
import { Switcher, Notification, UserAvatar } from '@carbon/react/icons';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from '@carbon/react';
import { Link } from 'react-router-dom';

const ParklinkHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Parklink">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName as={Link} to="/" prefix="IBM">
          ParkLink
        </HeaderName>
        <HeaderNavigation aria-label="Parklink">
          <HeaderMenuItem as={Link} to="/">
            How It Works
          </HeaderMenuItem>
          <HeaderMenuItem as={Link} to="/pay">
            Payment Soultions
          </HeaderMenuItem>
          <HeaderMenuItem as={Link} to="/support">
            Support
          </HeaderMenuItem>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem href="/">How It Works</HeaderMenuItem>
              <HeaderMenuItem href="/pay">Payment Soultions</HeaderMenuItem>
              <HeaderMenuItem href="/support">Support</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction
            aria-label="Notifications"
            tooltipAlignment="center">
            <Notification size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction
            aria-label="User Avatar"
            tooltipAlignment="center">
            <UserAvatar size={20} />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="App Switcher" tooltipAlignment="end">
            <Switcher size={20} />
          </HeaderGlobalAction>
        </HeaderGlobalBar>{' '}
      </Header>
    )}
  />
);

export default ParklinkHeader;
