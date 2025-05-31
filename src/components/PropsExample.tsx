import React from 'react';

// Basic Props
interface UserProps {
  name: string;
  age: number;
  isActive?: boolean;
}

const UserCard: React.FC<UserProps> = ({ name, age, isActive = true }) => {
  return (
    <div className="user-card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
    </div>
  );
};

// Props with Children
interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card = ({ title, children }: CardProps) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="card-content">
        {children}
      </div>
    </div>
  );
};

// Props with Default Values
interface ButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ 
  text, 
  variant = 'primary',
  onClick = () => console.log('Button clicked')
}) => {
  return (
    <button 
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

// Main Props Example Component
const PropsExample = () => {
  return (
    <div className="props-example">
      <h1>React Props</h1>

      <section>
        <h2>Basic Props</h2>
        <UserCard name="John Doe" age={25} />
        <UserCard name="Jane Smith" age={30} isActive={false} />
      </section>

      <section>
        <h2>Props with Children</h2>
        <Card title="Welcome">
          <p>This is content passed as children</p>
          <p>You can pass any valid JSX as children</p>
        </Card>
      </section>

      <section>
        <h2>Props with Default Values</h2>
        <div className="button-group">
          <Button text="Primary Button" />
          <Button text="Secondary Button" variant="secondary" />
          <Button 
            text="Click Me" 
            onClick={() => alert('Button clicked!')} 
          />
        </div>
      </section>
    </div>
  );
};

export default PropsExample; 