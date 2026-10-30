import useCounterStore from "../store/counterStore";

function CounterButtons() {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset  = useCounterStore((state) => state.reset);

  return (
    <div>
      <button onClick={increment}>Tambah</button>
      <button onClick={decrement}>Kurang</button>
      <button onClick={reset}>reset</button>
    </div>
  );
}

export default CounterButtons;