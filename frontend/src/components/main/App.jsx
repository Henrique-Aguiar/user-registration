import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import './App.css'
import React from 'react'

import Logo from '../template/Logo'
import Nav from '../template/Nav'
import Main from '../template/Main'
import Footer from '../template/Footer'

export default props => 
  <div className="app">
    <Logo />
    <Nav />
    <Main icon="home" title="Início"
      subtitle="Segundo Projeto do capítulo de React."/>
    <Footer />
  </div>