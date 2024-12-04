import React from 'react'
import './navbar.css'
import {  useNavigate } from 'react-router-dom';


    const Navbar = () => {
        const navigate=useNavigate()
        const respage=()=>{
            navigate('/recipes')
        }
        const favpage=()=>{
            navigate('/fav')
        }
        const coursepage=()=>{
            navigate('/course')
        }
        return (
          <div className="sidebar">
            <h2>Foodoo</h2>
            <div className="profile">
              <img src="https://th.bing.com/th?id=OIP.Uf2twuNil7gguTKrQ-aFXgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Profile" />
              <h5>Kristin Watson</h5>
              <p>Chef de Partie</p>
              <span>37</span>
            </div>
            <ul className="menu">
              <li onClick={respage}>📕Recipes</li>
              <li onClick={favpage}>❤Favorites</li>
              <li onClick={coursepage}>📚Courses</li>
              <li>👥Community</li>
            </ul>
            <p className="footer">Create a team and take part in a TV show!</p>
          </div>
        );
      };
      


export default Navbar
