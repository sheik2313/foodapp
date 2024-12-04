import React from 'react';
import './recipes.css';
import Navbar from './Nabar';

function Recipes() {
    return (
        <div className='out-linebordeer'>
            <Navbar />
            <div className='main-content'>
                <div className="input-container">
                    <input placeholder="Enter Your Search Request" className="input-field" type="text" />
                    <label htmlFor="input-field" className="input-label">Enter text</label>
                    <button type="button" id='prebtn' className="btn btn-danger">Go to Premimum</button>

                </div>
                <div className='bestrec'>
                    <img src="https://png.pngtree.com/png-clipart/20230312/original/pngtree-food-logo-design-for-restaurant-and-business-png-image_8985084.png" alt="Profile" />
                    <h1>only the best recipes!</h1>
                    <h1 id='recn'>168</h1>
                    <h1 >304</h1>
                </div>
                <div>
                    <div class="card mt-5">
                        <div class="image-container">
                            <img
                                src="https://www.recipetineats.com/tachyon/2016/06/Chinese-Noodle-Soup-SQ.jpg"
                                alt="Noodle Chicken Soup"
                                class="image"
                            />
                        </div>
                        <h3 class="title">Noodle Chicken Soup</h3>
                        <p class="level">Intermediate</p>
                        <div class="info">
                            <div class="info-item">
                                <strong>25</strong>
                                <span>Min</span>
                            </div>
                            <div class="info-item">
                                <strong>95</strong>
                                <span>Kcal</span>
                            </div>
                            <div class="info-item">
                                <strong>Meat</strong>
                            </div>
                        </div>
                        <div class="rating">
                            ★★★★☆
                        </div>
                        <button class="button">Start Cooking</button>
                    </div>
                </div>








          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
            </div>


        </div>
    );
}

export default Recipes;
