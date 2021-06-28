import React from "react";
import styled from "styled-components";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
  margin-left: 50px;
  justify-content: center;
`;

const LinkItem = styled.li`
  height: 100%;
  margin: 2px;
  padding: 4px .5em;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 2px solid #810020;
  }
  text-shadow: 1px 1px 0px #810020;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
  text-shadow: 1px 1px 0px #810020;
`;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Link href="#">Builds</Link>
        </LinkItem>
        {/* <LinkItem>||</LinkItem> */}
        <LinkItem>
          <Link href="#">Add a Build</Link>
        </LinkItem>
        {/* <LinkItem>||</LinkItem> */}
        <LinkItem>
          <Link href="#">Profile</Link>
        </LinkItem>
        {/* <LinkItem>||</LinkItem> */}
        <LinkItem>
          <Link href="#">Forum</Link>
        </LinkItem>
        {/* <LinkItem>||</LinkItem> */}
        <LinkItem>
          <Link href="#">Wings</Link>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}
