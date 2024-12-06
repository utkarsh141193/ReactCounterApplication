export default function Counter({ onSelect, counterValue, onDecrement }) {
  return (
    <>
      <h2 id="counter-heading">Counter</h2>
      <section id="section-content">
        <div id="counter-value">{counterValue}</div>
      </section>

      <div id="button-adjust">
        <button onClick={onSelect}>Click here</button>
        <button onClick={onDecrement}>Decrease Counter</button>
      </div>
    </>
  );
}
