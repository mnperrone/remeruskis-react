import {React, useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core';
import logo from '../NavBar/logo.png'

const NavBar = () => {

  const classes = useStyle();
  
    return (
      <nav className={classes.navDiv}>
        <div className={classes.logoDiv}>
          <img src={logo} className={classes.logo} />
        </div>
        <div className={classes.menu}>
          <ul className={classes.lista}>
              <li > <a href='#' className={classes.listaItem} >link 1 </a> </li>
              <li ><a href='#' className={classes.listaItem}>link 2 </a> </li>
              <li ><a href='#' className={classes.listaItem}>link 3 </a> </li>
              <li ><a href='#' className={classes.listaItem}>link 4 </a> </li>
          </ul>
        </div>
      </nav>
    )
}

const useStyle = makeStyles( (theme) => ({

  logo: {
    width: "220px"
  },
  navDiv: {
    backgroundColor: "aliceblue",
    display: 'flex',
    justifyContent: 'space-around',
  },
  lista: {
    display: "flex",
    listStyle: "none",
  },
  listaItem: {
    padding: "0px 10px 0px 10px",
    textDecoration: "none"
  }

}) )

export default NavBar