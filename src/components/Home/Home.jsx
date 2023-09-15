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