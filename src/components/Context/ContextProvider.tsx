import React from "react";

type Props = {
    children : JSX.Element
};
interface State {
  age: number,
  name: string
};

interface ContextValue extends State {
  setAge: () => void;
}

export const myContext = React.createContext<ContextValue | null>(null);

export class ContextProvider extends React.Component<Props, State> {
  state: State = {
    age: 18,
    name: "shrey",
  };

  setAge = () => {
    this.setState((state: State) => {
      return { ...state, age: state.age + 1 };
    });
  };

  render() {
    const { age, name } = this.state;
    return (
      <myContext.Provider value={{ age, name, setAge: this.setAge }}>
        {this.props.children}
      </myContext.Provider>
    );
  }
}