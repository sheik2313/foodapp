import React from 'react';
import './homepage.css';
import { useNavigate } from 'react-router-dom';

function Homepage() {
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate('/recipes')
    }
    return (
        <div className='bg'>


            <h1 className='welcome'>WELCOME !</h1>
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                       <img src='https://i.pinimg.com/originals/fe/f3/49/fef349aaa57598be42e87b9979892cd1.jpg'alt=''/>
                    </div>
                    <div class="col">
                    <p className='fdpara'>Food is any substance consumed by an organism for nutritional support. Food is usually of plant, animal, or fungal origin and
                contains essential nutrients such as carbohydrates, fats, proteins, vitamins, or minerals. The substance is ingested by an
                organism and assimilated by the organism's cells to provide energy, maintain life, or stimulate growth. Different species of
                animals have different feeding behaviours that satisfy the needs of their metabolisms and have evolved to fill a specific
                ecological niche within specific geographical contexts.</p>
                <button type="button" class="btn btn-danger mt-5" onClick={handleClick}>FOOD LIST</button>

                        
                    </div>
                    
                </div>
            </div>
          


        </div>
    );
}

export default Homepage;
