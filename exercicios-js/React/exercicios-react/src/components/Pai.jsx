import React from "react";

function childrenWithProps(props) {
  return React.Children.map(props.children, (child) => {
    return React.cloneElement(child, {
      ...props,
      ...child.props,
    });
  });
}

const Pai = (props) => {
  return (
    <div>
      <h1>
        {props.nome} {props.sobrenome}
      </h1>
      <h2>Filho</h2>
      <ul>
        {/* {React.cloneElement(props.children, {
          ...props,
          ...props.children.props,
        })} */}
        {/* para receber multiplos elementos, usar a funçãop map() */}

        {childrenWithProps(props)}
      </ul>
    </div>
  );
};

export default Pai;
