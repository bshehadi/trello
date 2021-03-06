import React from "react";
import {connect} from "react-redux";
import Board from "../components/Board"
import {init, addCard, deleteCard, editCard, addBoard, deleteBoard} from "../actions/trelloActions"
const last = arr => arr[arr.length-1]
class App extends React.Component {

	addCardFunc = () => {
		const {cardList} = this.props.trello;
		console.log(last(cardList).id+1);
		const testCard = {
			id: last(cardList).id+1,
			name:"testing",
			doing: null,
			boardId: 4,
			started: false
		}
		this.props.addCard(testCard)
	}
	componentDidMount(){
		console.log(this.props.trello);
	}
    render() {
        return (
            <div className="container" id="flexParent">
				{/* <button onClick={this.addCardFunc}></button> */}
				{this.props.trello.boardList.map(board => (
					<Board 
					key={board.id}
					name={board.name}
					/>
				))}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
	  trello: state.trello
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        init: (payload) => {
            dispatch(init(payload));
		},
		addCard: (card) => {
			dispatch(addCard(card))
		},
		deleteCard: (cardId) => {
			dispatch(deleteCard(cardId))
		},
		addBoard: (board) => {
			dispatch(addBoard(board))
		},
		deleteBoard: (boardId) =>{
			dispatch(deleteBoard(boardId))
		},
		editCard:(card) =>{
			dispatch(editCard(card))
		}
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
