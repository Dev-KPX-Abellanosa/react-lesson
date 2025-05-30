import React from 'react';

// Function Component
const FunctionComponent = () => {
  return <div>This is a Function Component</div>;
};

// Class Component
class ClassComponent extends React.Component {
  render() {
    return <div>This is a Class Component</div>;
  }
}

// Component with Props
interface PropsComponentProps {
  name: string;
  age: number;
}

const PropsComponent: React.FC<PropsComponentProps> = ({ name, age }) => {
  return (
    <div>
      <h3>Props Component</h3>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

// Main Component Example
const ComponentExample = () => {
  return (
    <div className="component-example">
      <h1>React Components</h1>
      
      <section>
        <h2>Function Component</h2>
        <FunctionComponent />
      </section>

      <section>
        <h2>Class Component</h2>
        <ClassComponent />
      </section>

      <section>
        <h2>Component with Props</h2>
        <PropsComponent name="John Doe" age={25} />
      </section>
    </div>
  );
};

export default ComponentExample; 