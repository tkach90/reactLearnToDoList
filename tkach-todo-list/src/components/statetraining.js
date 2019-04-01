// import React, {Fragment, PureComponent} from 'react';
//
// class StateChanging extends PureComponent{
//     constructor() {
//         super();
//         this.state = {
//             count: ' some words'
//         }
//         this.handlerState = this.handlerState.bind(this);
//         this.generateString = this.generateString.bind(this);
//     }
//
//    generateString() {
//         return (
//             Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
//         )
//     }
//
//     handlerState() {
//         return (
//             this.setState(prevState => {
//                 return {
//                     count: this.state.count = () => {this.generateString()}
//                 }
//             })
//         )
//     }
//
//     render() {
//
//         return (
//             <Fragment>
//                 <h1>Please change my state {this.state.count} </h1>
//                 <button
//                     onClick={this.handlerState}
//                 >
//                     Click for changing state!
//                 </button>
//             </Fragment>
//         )
//     }
//
// }
//
// export default StateChanging;