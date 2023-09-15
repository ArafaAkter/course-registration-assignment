// import React from 'react';
import"./Cart.css";
const Cart = ({selectedCourse}) => {
    
    return (
        <div>
           <h3>Course Name</h3> 
           {
            // eslint-disable-next-line react/prop-types
            selectedCourse.map(course =>(
             // eslint-disable-next-line react/jsx-key
             <li key={course.id}>{course.course_name}</li>   
            ))
           }
        </div>
    );
};

export default Cart;