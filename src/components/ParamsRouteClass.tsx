
import * as React from 'react';
import { withParams } from '../HOC/withParams';
type Props = {
  params: any,
  surname: string,
};
type State = {
  
};
class ParamsRouteClass extends React.Component<Props, State>{
    constructor(props:Props){
        super(props);
    }
  render() {
    return (
      <div>
        Params with class and HOC {this.props.params.name } surname {this.props.surname} 
      </div>
    );
  };
};

export default withParams(ParamsRouteClass) ;