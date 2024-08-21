import { useTheme } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';

const BreadCrumbs = () => {
const theme = useTheme();
const location = useLocation();

let crumbsLinks = '';

const crumbs = location.pathname.split('/')
.filter(crumbs => crumbs !== '')
.map(crumbs =>{
    crumbsLinks =+ `/${crumbs}`

    return  (
    <div className='crumbs' key={crumbs} style={{color:'#98c447'}}>
    <Link to={crumbsLinks}> {crumbs} </Link>
    </div>
    )
})


  return (
    <div className='breadcrumbs'
    style={{display:'flex', color:'#98c447'}}>{crumbs}</div>
  )
}

export default BreadCrumbs