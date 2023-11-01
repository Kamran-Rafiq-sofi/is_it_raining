import React from "react"
class Isitraining extends React.Component {
    constructor(){
        super();
        this.state={
            isItRaining:false,
        }
    }
    render(){
        const {isItRaining}=this.state;
        // if(isItRaining){
        //     return <h1>Is it Raining?Yes</h1>
        // }
        // else{
        //     return <h1>Is it Raining?No</h1>
        // }
        return(
            // <div>
            //    {isItRaining} 
            // </div>

            <div>
              <h1>{isItRaining && <h1>Is It Raining Today?Yes</h1>}</h1>
              <h1>{!isItRaining && <h1>Is It Raining Today?No</h1>}</h1>
            </div>
        );
    }
}
export default Isitraining;
