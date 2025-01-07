import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Body from './Body'
import Login from './Login'
function App() {
  return (
    <>
    <BrowserRouter basename = '/'>
      <Routes>
        <Route path="/" element = {<Body/>}>
          <Route path="/login" element = {<Login/>}/>
          <Route path = "/profile" element = {<div>profile</div>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    <h1 className="text-xl font-bold underline"> hello!!</h1>
    </>
  )
}

export default App
