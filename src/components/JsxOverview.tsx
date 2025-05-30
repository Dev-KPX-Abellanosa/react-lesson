import React from 'react';

const JsxOverview = () => {
  const name = "React Developer";
  const element = <h2>Hello, {name}!</h2>;
  const user = {
    firstName: 'John',
    lastName: 'Doe'
  };

  return (
    <div className="jsx-overview">
      <h1>JSX Overview</h1>
      
      <section>
        <h2>Basic JSX</h2>
        <div className="example">
          <p>This is a paragraph with JSX</p>
          {element}
        </div>
      </section>

      <section>
        <h2>JavaScript Expressions</h2>
        <div className="example">
          <p>Full name: {user.firstName} {user.lastName}</p>
          <p>2 + 2 = {2 + 2}</p>
        </div>
      </section>

      <section>
        <h2>Attributes</h2>
        <div className="example">
          <input type="text" placeholder="Enter your name" />
          <button className="btn">Click me</button>
        </div>
      </section>

      <section>
        <h2>Children</h2>
        <div className="example">
          <div>
            <h3>Nested Elements</h3>
            <p>This is a nested paragraph</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JsxOverview; 