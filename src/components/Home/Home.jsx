import { useEffect } from "react";
import"./Home.css";
import { useState } from "react";
import Cart from "../Cart/Cart";

const Home = () => {

const[allCourse,setAllcourse] = useState([]);
const[selectedCourse,setSelectedCourse] = useState([])

    useEffect(() =>{
        fetch("./blog.json")
        .then(res => res.json())
        .then(data => setAllcourse(data));

    },[])

    const handleSelectCourse = (course) =>{
        setSelectedCourse([...selectedCourse,course]);
    }

    
    return (
      <div className="container">
       <div className="home-container">
       <div className="card-container">
        {
           allCourse.map(course =>(

            // eslint-disable-next-line react/jsx-key
            <div key={course.id} className="card">
            <div className="card-img">
                <img className="img" src={course.cover_img}  /> 
                
            </div>
            <h4 className="card-title">{course.course_name}</h4>
            <p className="card-description"><small>{course.course_description}</small></p>
            <div className="card-footer">
                <p> $ Price : {course.price}</p>
                <p>Credit : {course.credit_hours}</p>    
            </div>
            <button onClick={()=>handleSelectCourse(course)} className="btn">Select</button>
        </div> 
           )) 
        }
            
            </div>
            <div className="cart">
              <Cart selectedCourse ={selectedCourse}></Cart>
            </div>
       </div>
      </div>
    );
};

export default Home;