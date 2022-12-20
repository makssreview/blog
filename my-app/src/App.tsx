import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import {
  ArticleUseContext,
  BlogUseContext
} from './pages/homePage/Context'
import { AddPostUseContext } from './pages/newPostPage/Context'

import {
  AuthenticationUseContext,
  LoginUseContext,
  LogoutUseContext
} from './pages/authentication/Context'

function App() {
  return (
    <div>
      <LogoutUseContext />
      <Routes>
        <Route path='/' element={<BlogUseContext />} />
        <Route path='/posts/:id' element={<ArticleUseContext />} />
        <Route path='/posts/:id/edit' element={<AddPostUseContext />} />
        <Route path='/new' element={<AddPostUseContext />} />
        <Route path='/login' element={<LoginUseContext />} />
        <Route path='/register' element={<AuthenticationUseContext />} />
      </Routes>
    </div>
  )
}

export default App
