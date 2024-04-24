// @flow
import * as React from 'react';
import TestUseMemo from './TestUseMemo';
type Props = {
  myColor: string,
};
type State = {
    color: string
};
export class ClassTest extends React.Component<Props, State>{
  
    constructor(props:Props){
        super(props)
        console.log("Constructor");
       
    }
    inputb = React.createRef<any>();
    state:State = {
        color: this.props.myColor
    }
   
    static getDerivedStateFromProps(props:Props, state:State) {
        console.log("I am in getDerivedStateFromProps ")
        return { shape: 'rectangle'};
      }
    componentDidMount(){
        console.log("Did Mount")
        this.inputb.current.value= 'shrey';
        this.inputb.current.style.border = '2px solid green'
    }
    
    shouldComponentUpdate(nextProp : any,nextState: any){
        console.log('shouldComponentUpdate nextProp ',nextProp,' nextState ',nextState);
        
        return true;
    }
    getSnapshotBeforeUpdate(prevProps:any,prevState:any){
        console.log('ggetSnapshotBeforeUpdate Before props ', 'prevProps ',' prevState ',prevProps,prevState)
        return null;
    }
    componentDidUpdate(prevProps:Props, prevState:State){
        console.log("componentDidUpdate ",'prevProps ', prevProps,' prevState ',prevState)
    }
    componentWillUnmount(){
        console.log("will  Unmount")
    }



    handleClick=(e : React.MouseEvent<HTMLInputElement>)=>{
        this.setState({color:'red'})  //won't work as getDerrivedStateFromProps will be called just before renders called and will reset state
        console.log(e.target);
    }
  render() {

    console.log("render")

    return (
      <div>
            <h1>
            Class Component testing
            </h1>
            <input type={'text'} ref={this.inputb}/>
            <div onClick={this.handleClick} style={{color:this.state.color}}>My Color</div>
            <TestUseMemo/>
      </div>
    );
  };
};