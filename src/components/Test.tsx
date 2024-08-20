import React from 'react'


class Test extends React.Component{
    state:any={
        myNumber:0
    };
    myF = (e: any)=>{
       let myNumber =e.target.value;
        this.setState({myNumber:+myNumber})
    }
    renderMyBox=()=>{
        if(this.state?.myNumber<0)
            return
        let ar = new Array(this.state?.myNumber).fill(0);
        return ar.map((e,k)=>{
            return <div className='box' key={k}>

            </div>
        })
    }
    render(){
       
        return(
            <>
            {JSON.stringify(this.state)}
             <div>Hello</div>
             <input type='number' onChange={this.myF} value={this.state.myNumber}/>
             <div className='flex'>
             {this.renderMyBox()}
             </div>

            </>
           
        )
    }
}

export default Test;