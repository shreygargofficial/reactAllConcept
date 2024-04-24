// @flow
import * as React from 'react';
type Props = {
  myVal:number
};
type State = {
  
};
export class PureComponent extends React.PureComponent<Props, State>{
  render() {
    console.log("I will not render again and again due to Functiontest compoennt ")
    return (
      <div>
        Hello I am pure COmponent {this.props.myVal}
      </div>
    );
  };
};