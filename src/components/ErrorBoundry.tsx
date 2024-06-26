// @flow
import * as React from "react";
import { JsxElement } from "typescript";
type Props = {
    children : JSX.Element
};
type State = {
  hasError: boolean;
};
export class ErrorBoundry extends React.Component<Props, State> {
    constructor(props:Props) {
        super(props);
        this.state = { hasError: false };
      }
    
    //   static getDerivedStateFromError(error:any) {
    //     // Update state so the next render will show the fallback UI.
    //     return { hasError: true };
    //   }
    
      componentDidCatch(error:any, errorInfo:any) {
        // You can also log the error to an error reporting service
        this.setState({hasError:true})
        console.log("did catch ",error, errorInfo);
      }
    
      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return <h1>Something went wrong.</h1>;
        }
    
        return this.props.children; 
      }
}
