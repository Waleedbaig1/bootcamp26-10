import React from 'react';

function Movie (props) {
       return(
        <div>

          <h1> Today Movie {props.moviename}  </h1>
           <hr/>
           <h1>Pop Corn & {props.drinkname} available</h1>
           <hr/>
           

           </div>
           

       );
     
}
export default Movie;