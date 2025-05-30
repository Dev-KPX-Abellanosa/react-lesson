import React, { useState } from 'react';

const EventHandling = () => {
  const [inputValue, setInputValue] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  // Click Event Handler
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    alert('Button clicked!');
  };

  // Input Change Handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Form Submit Handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Form submitted with value: ${inputValue}`);
  };

  // Mouse Event Handlers
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div className="event-handling">
      <h1>Event Handling in React</h1>

      <section>
        <h2>Click Events</h2>
        <button onClick={handleClick} className="btn">
          Click Me
        </button>
      </section>

      <section>
        <h2>Form Events</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Type something..."
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
        <p>Current input value: {inputValue}</p>
      </section>

      <section>
        <h2>Mouse Events</h2>
        <div
          className={`hover-box ${isHovered ? 'hovered' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Hover over me!
        </div>
      </section>

      <section>
        <h2>Keyboard Events</h2>
        <input
          type="text"
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              alert('Enter key pressed!');
            }
          }}
          placeholder="Press Enter key..."
        />
      </section>
    </div>
  );
};

export default EventHandling; 