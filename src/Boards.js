import React, {Component} from "react";
import './Styles.css';

export default class Boards extends Component{
render(){
    const boards = {
        board1:{
        name: "untitled",
        img: "https://static1.squarespace.com/static/54a045c3e4b004237f86d5b5/t/5eb97bc895662464af202e36/1589214152844/green1.png",
        description: "independently hand-crafted deck",
        link: "",
        price: "$120",
        },

        board2:{
        name: "untitled",
        img: "https://static1.squarespace.com/static/54a045c3e4b004237f86d5b5/t/5eb97bb798232c36f5063a75/1589214136322/red1.png",
        description: "independently hand-crafted deck",
        link: "",
        price: "$120",
        },

        board3:{
        name: "untitled",
        img: "https://static1.squarespace.com/static/54a045c3e4b004237f86d5b5/t/5eb97bc080e692462fcdea5f/1589214145354/pink1.png",
        description: "independently hand-crafted deck",
        link: "",
        price: "$120",
        } 
    }



    return(
    <div className="bodySubSub" id="boardsContainer">    
		<div>
            <img src={boards.board1.img}
              alt="board"
              className="boards cursor floatMag">
            </img> 
            <p>
              {boards.board1.name}
              <br />{boards.board1.description}
              <br />{boards.board1.price}
            </p>
		</div>
				
        <div>
            <img src={boards.board2.img}
              alt="board"
              className="boards cursor floatMag" 
              onClick={(e) => this.productFunction("untitledRed")}>
            </img>
            <p>
              {boards.board2.name}
              <br />{boards.board2.description}
              <br />{boards.board2.price}
            </p>
        </div>
                    
        <div>
            <img  src={boards.board3.img}
              alt="board"
              className="boards cursor floatMag" 
              onClick={(e) => this.productFunction("untitledPink")}>
            </img>
                           
            <p>
              {boards.board3.name}
            <br />{boards.board3.description}
            <br />{boards.board3.price}
            </p>
        </div>
    </div>
)
}
}