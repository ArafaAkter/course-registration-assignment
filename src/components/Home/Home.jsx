
import { useEffect } from "react";
import"./Home.css";
import { useState } from "react";
const Home = () => {

const[allCourse,setAllcourse] = useState([]);

    useEffect(() =>{
        fetch("./blog.json")
        .then(res => res.json())
        .then(data => setAllcourse(data));

    },[])
    console.log(allCourse);
    return (
      <div className="container">
       <div className="home-container">
       <div className="card-container">
        {
           allCourse.map(course =>(

            // eslint-disable-next-line react/jsx-key
            <div className="card">
            <div className="card-img">
                <img className="img" src="https://i.ibb.co/Dz6Q4hj/Rectangle-2-2.png" alt="" /> 
            </div>
            <h4 className="card-title">Introduction to C Programming</h4>
            <p className="card-description"><small>An introductory course to the C programming language.</small></p>
            <div className="card-footer">
                <p> $ Price : 15000</p>
                <p>Credit:1hr</p>    
            </div>
            <button className="btn">Select</button>
        </div> 
           )) 
        }
            
            </div>
            <div className="cart">
                <h1>This is cart</h1>
            </div>
       </div>
      </div>
    );
};

export default Home;