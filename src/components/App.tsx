import { useAppDispatch, useAppSelector } from "../hooks/use-redux-hooks";
import { increment } from "../redux/CounterSlice";
import Badge from "./core/Badge";

const App = () => {
  const counter = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <p>{{ counter }}</p>
      <button onClick={() => dispatch(increment())}></button>
      <Badge contextType="primary">
        <>
          hola...<span>hola...</span>
        </>
      </Badge>
    </div>
  );
};

export default App;
