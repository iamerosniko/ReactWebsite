import React from 'react';

class App extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data: [],
         nums: 0
      }
	
      this.setStateHandler = this.setStateHandler.bind(this);
   };

   setStateHandler() {
      var item = "setState..."
      var myArray = this.state.data;
      var num = this.state.nums;
      myArray.push(item)
      num+=1;
      this.setState({data: myArray})
      this.setState({nums: num})
   };

   render() {
      return (
         <div>
            <button onClick = {this.setStateHandler}>SET STATE</button>
            <h4>State Array: {this.state.data}</h4>
         </div>
      );
   }
}

export default App;