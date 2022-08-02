import React from "react";
import "./loading.css"

function LoadingComponent (props) {
    const style = {
        width: props.size,
        height: props.size,
        border: `${props.border}px solid #f3f3f3`, /* Light grey */
        borderTop: `${props.border}px solid #383636` /* Black */
    }

     return(
         <div className="loading-container">
             <div className="loading-spinner" style={style}/>
         </div>
     )
}

export default LoadingComponent