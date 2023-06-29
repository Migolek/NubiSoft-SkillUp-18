export default function StateManagement() {
  const code = `import React, { useState } from 'react';

  function Example() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }

  function SecondExample() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    );
  }`;

  return (
    <>
      <section data-auto-animate>
        <h2 data-id="code-title">With Animations</h2>
        <pre>
          <code>
            (def lazy-fib (concat [0 1] ((fn rfib [a b] (lazy-cons (+ a b) (rfib
            b (+ a b)))) 0 1)))
          </code>
        </pre>
      </section>
      <section data-auto-animate>
        <pre>
          <code>
            <table>
              <tr>
                <td>Apples</td>
                <td>$1</td>
                <td>7</td>
              </tr>
              <tr>
                <td>Oranges</td>
                <td>$2</td>
                <td>18</td>
              </tr>
              <tr>
                <td>Kiwi</td>
                <td>$3</td>
                <td>1</td>
              </tr>
            </table>
          </code>
        </pre>
      </section>
      <section data-auto-animate>
        <pre>
          <code data-line-numbers="3-5">
            <table>
              <tr>
                <td>Apples</td>
                <td>$1</td>
                <td>7</td>
              </tr>
              <tr>
                <td>Oranges</td>
                <td>$2</td>
                <td>18</td>
              </tr>
              <tr>
                <td>Kiwi</td>
                <td>$3</td>
                <td>1</td>
              </tr>
            </table>
          </code>
        </pre>
      </section>
    </>
  );
}
