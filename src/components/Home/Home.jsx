import { useEffect } from "react";
import"./Home.css";
import { useState } from "react";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

const[allCourse,setAllcourse] = useState([]);
const[selectedCourse,setSelectedCourse] = useState([]);
const [totalCreditHours,setTotalCreditHours] = useState(0);
const[totalRemaining,setTotalRemaining] = useState(0);

    useEffect(() =>{
        fetch("./blog.json")
        .then(res => res.json())
        .then(data => setAllcourse(data));

    },[])

    const handleSelectCourse = (course) =>{
        const isExist = selectedCourse.find(item=>item.id === course.id);

        let count = course.credit_hours;

        if(isExist){

         toast("Already Exist")
         return;
  
        }
        else{

               selectedCourse.forEach((course) => {
                count = parseFloat(count) + parseFloat(course.credit_hours);
            });
            const totalRemaining = 20 - count;
            setTotalRemaining(totalRemaining);
    
            setTotalCreditHours(count);  
            setSelectedCourse([...selectedCourse,course]);
            
        }

    };
    
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
            <button onClick={()=> handleSelectCourse(course)} className="btn">Select</button>
            <ToastContainer />
        </div> 
           )) 
        }
            
            </div>
            <div className="cart">
          
              <Cart 
              selectedCourse = {selectedCourse}
              totalCreditHours ={totalCreditHours} 
              totalRemaining = {totalRemaining}
               ></Cart>
            </div>
            
       </div>
      </div>
    );
};

export default Home;