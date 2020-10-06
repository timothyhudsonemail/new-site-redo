import React, {Component} from "react";
import './Styles.css';

export default class Accessories extends Component{
render(){
    return(
    <div className="bodySubSub" id="shirtsContainer">    
		<div>
            <img src="https://static1.squarespace.com/static/54a045c3e4b004237f86d5b5/t/5eb97bcfe978e852761b3e76/1589214161478/eggsGreen.png" 
             alt="shirt"
             className="shirts cursor floatMag">
            </img> 
            <p>
             eggs
            <br />hand dyed and printed shirt
            <br />$35
            </p>
		</div>
				
        <div>
            <img src="https://static1.squarespace.com/static/54a045c3e4b004237f86d5b5/t/5eb97bcb19290276574a2cac/1589214157615/eggsPurple.png" 
             alt="shirt"
             className="shirts cursor floatMag" 
             >
            </img>
            <p>
            eggs
            <br />hand dyed and printed shirt
            <br />$35
            </p>
        </div>
          
    </div>
)
}
}