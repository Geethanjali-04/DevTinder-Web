import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from './Body'
import Login from './Login'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'
function App() {
  return (
    <>
      <Provider store = {appStore}> 
        <BrowserRouter basename = '/'>
          <Routes>
            <Route path="/" element = {<Body/>}>
              <Route path="/login" element = {<Login/>}/>
              <Route path = "/profile" element = {<div>profile</div>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
