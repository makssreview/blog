import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {AddPostPage} from "./pages/newPostPage/AddPostPage";
import {ArticleUseContext, BlogUseContext} from "./pages/homePage/BlogHomeContext";
import {AddPostUseContext} from "./pages/newPostPage/NewPostContext";

import {AuthenticationUseContext, LoginUseContext, LogoutUseContext} from "./pages/authentication/AuthContext";






function App() {


    return (
            <div>
                <LogoutUseContext/>
                <Routes>
                    <Route path='/' element={<BlogUseContext/>}/>
                    <Route path='/posts/:id' element={<ArticleUseContext/>}/>
                    <Route path='/posts/:id/edit' element={<AddPostPage/>}/>
                    <Route path='/new' element={<AddPostUseContext/>}/>
                    <Route path='/login' element={<LoginUseContext/>}/>
                    <Route path='/register' element={<AuthenticationUseContext/>}/>

                </Routes>
            </div>

    )
}

export default App;
