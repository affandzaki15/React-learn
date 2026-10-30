import useCounterStore from "../store/counterStore";

function CounterDisplay() {
  const count = useCounterStore((state) => state.count);

  return <h1>Counter: {count}</h1>;
}

export default CounterDisplay;