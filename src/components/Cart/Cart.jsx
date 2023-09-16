// import React from 'react';
import"./Cart.css";
// eslint-disable-next-line react/prop-types
const Cart = ({selectedCourse,totalCreditHours,totalRemaining}) => {
    
    return (
        <div className="cart-info">
            <h3>Credit Hour Remaining :{totalRemaining} hr</h3>
           <h3>Course Name</h3> 
           {
            // eslint-disable-next-line react/prop-types
            selectedCourse.map(course =>(
             // eslint-disable-next-line react/jsx-key
             <li className="list" key={course.id}>{course.course_name}</li> 
               
            ))
           }
             <h4>Total Credit Hour : {totalCreditHours}</h4>

          
        </div>
    );
};


export default Cart;