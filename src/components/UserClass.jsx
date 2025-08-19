import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count1:1,
            count2:2,
        };
        
    }
    componentDidMount(){
      
    }
    render(){
        
        const {name}=this.props;
        const {count1,count2} = this.state;
            return(
                <div className="user-card">
                    <h1>{count1}</h1>
                    <button onClick={()=>{
                        this.setState({
                            count1:this.state.count1+1,
                        });
                    }
                    }>
                        Count Increase
                    </button>
                    <h1>Name: {name}</h1>
                    <h2>count1: {count1}</h2>
                    <h2>count2: {count2}</h2>
                    <h2>Location: AP</h2>
                    <h2>Contact: praveenudayagiri724@gmail.com</h2>
                </div>
            )
    }
}
export default UserClass;