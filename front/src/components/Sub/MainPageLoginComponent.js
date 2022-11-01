
import React from 'react';


import SidebarAdminLoginComponent from '../Sidebar/SidebarAdminLoginComponent'
import LoginHeader from '../Header/LoginHeader'
import Cards from '../CardGroup/Cards';
import {Route, Routes, useNavigate} from "react-router-dom";


import { Link } from 'react-router-dom';


export default function MainPageLoginComponent(props) {

  
      return (
  
          <div className='App'>
  
          <LoginHeader>
          </LoginHeader>
  
          <SidebarAdminLoginComponent>
          </SidebarAdminLoginComponent>

          <Cards />
  
        
          </div>
      );
  
  }
  

  
  
  
