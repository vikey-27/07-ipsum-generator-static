import React, { useState } from 'react';
import data from './data';
function App() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }

    setText(data.slice(0, amount));
  };


  return (
    <section className='section-center'>
      <h3>Tired of boring IPSUM</h3>
      <form className='lorem-form' onSubmit={submitHandler}>
        <label htmlFor='amount'>Paragaraphs:</label>
        <input name="amount" type="number" id="amount" onChange={(e) => { setCount(e.target.value) }} value={count} />
        <button type="submit" className='btn'>Generate</button>
      </form>
      <article className='lorem-text'>
        <p> {text.map((txt, index) => {
          return (
            <div>
              <p key={index}>{txt}</p>
            </div>
          );
        })}
        </p>

      </article>
    </section>
  )
}

export default App;
