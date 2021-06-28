import React from "react";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
  margin-left: auto;
`;

const RegisterButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #810020;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #01F4FA;
  background-image: linear-gradient(to right, 
    #01f4fa,
    #00dbe1, 
    #00c3c8,
    #00aaaf,
    #009296);
    border: 2px solid #810020;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #01F4FA;
  }
  &:not(:last-of-type) {
    margin-right: 1px;
  }
  height: 35px;
  margin: 10px;
  
`;

const LoginButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #810020;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #01F4FA;
  background-image: linear-gradient(to right, 
    #01f4fa,
  #00dbe1, 
  #00c3c8,
  #00aaaf,
  #009296);
  border: 2px solid #810020;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #01F4FA;
  }
  &:not(:last-of-type) {
    margin-right: 1px;
  }
  height: 35px;
  margin: 10px;
  
`;

const LogOutButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: #810020;
  font-size: 13px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #01F4FA;
  background-image: linear-gradient(to right, 
    #01f4fa,
  #00dbe1, 
  #00c3c8,
  #00aaaf,
  #009296);
  border: 2px solid #810020;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #01F4FA;
  }
  &:not(:last-of-type) {
    margin-right: 1px;
  }
  height: 35px;
  margin: 10px;
  
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <RegisterButton className=''>Register</RegisterButton>
      <LoginButton className=''>Login</LoginButton>
      <LogOutButton className=''>LogOut</LogOutButton>
    </AccessibilityContainer>
  );
}
