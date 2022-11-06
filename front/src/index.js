import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router} from "react-router-dom";
import {Route, Routes } from "react-router-dom";

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import "bootstrap/dist/css/bootstrap.css";

import SignComponets from './components/Account/SignComponents';
import MainPageLoginComponent from './components/Sub/MainPageLoginComponent';
import LogoutComponet from './components/Account/LogoutComponet';
import LoginComponent from './components/Account/LoginComponent';
import PostCreateComponent from './components/Board/PostCreateComponent';
import MypageComponent from './components/Sub/MypageComponent';
import UpdateProfilComponent from './components/Sub/UpdateProfilComponent';
import store from './store';
import { CookiesProvider } from 'react-cookie';
import Detail from './components/Board/Detail';
import Update from './components/Board/Update';
import PostAllLogin from './components/Board/PostAllLogin';
import PostAllLogout from './components/Board/PostAllLogout';
import PostAllViewLogin from './components/Board/PostAllViewLogin';
import PostAllViewLogout from './components/Board/PostAllViewLogout';
import InputFriendRequest from './components/Friendrequest/InputFriendRequest';
import SecretMain from './components/Secret/SecretMainComponent';
import NotFound from './NotFound';
import SecretList from './components/Secret/SecretListComponent';
import SearchResultLoginComponent from './components/Sub/SearchResultLoginComponent';
import SearchResultLogoutComponent from './components/Sub/SearchResultLogoutComponent';
import GelleryResultComponent from './components/Gallery/GelleryResultComponent';
import GetGelleryComponent from './components/Gallery/GetGelleryComponent';
import SecretPostCreateComponent from './components/Secret/SecretPostCreateComponent';
import SecretDetailComponent from './components/Secret/SecretDetailComponent';
import SecretPostUpdate from './components/Secret/SecretPostUpdate';


const root = ReactDOM.createRoot(document.getElementById('root'));

// let persistor = persistStore(store);

root.render(

  // <React.StrictMode>
  //  <App />
  // </React.StrictMode>
  
  <React.Fragment>
  <CookiesProvider>
    <Provider store={store}>

    {/* <PersistGate loading={null} persistor={persistor}> */}

    <div>
        <BrowserRouter>


          <Routes>
            <Route path="/" exact element={<App />} />

            <Route path="/MainPageLogin" exact element={<MainPageLoginComponent />} />
            <Route path="/sign" exact element={<SignComponets />} />
            <Route path="/login" exact element={<LoginComponent />} />
            <Route path="/logout" exact element={<LogoutComponet />} />
            <Route path="/postCreate" exact element={<PostCreateComponent />} />
            <Route path="/mypage" exact element={<MypageComponent />} />  
            <Route path="/updateProfil" exact element={<UpdateProfilComponent />} />  
            <Route path="/searchResultLogin" exact element={<SearchResultLoginComponent />} />  
            <Route path="/searchResultLogout" exact element={<SearchResultLogoutComponent />} />  
            <Route path="/getGellery" exact element={<GetGelleryComponent />} />  
            <Route path="/gelleryResult" exact element={<GelleryResultComponent />} />  
            <Route path="/updatePost" exact element={<Update />} />
            <Route path='/postAllLogin' element={<PostAllLogin/>}/>
            <Route path='/postAllLogout' element={<PostAllLogout/>}/>
            <Route path='/postallviewLogin' element={<PostAllViewLogin/>}/>
            <Route path='/postallviewLogout' element={<PostAllViewLogout/>}/>
            <Route path='/inputfriendrequest' element={<InputFriendRequest />}/>
            <Route path='/secretMain' element={<SecretMain />}/>
            <Route path="/detail" exact element={<Detail />} />  
            <Route path="/update" exact element={<Update />}/>
            <Route path="/secretlist" element={<SecretList/>}/>
            <Route path='/secrePostCreate' element={<SecretPostCreateComponent/>}/>
            <Route path="/*" element={<NotFound />} /> 
            <Route path='/secretDetail' element={<SecretDetailComponent />}/>
            <Route path='/secretPostUpdate' element={<SecretPostUpdate/>}/>
            
          </Routes>
        </BrowserRouter>

    </div>

      {/* </PersistGate> */}
    </Provider>
  </CookiesProvider>
</React.Fragment>



);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
