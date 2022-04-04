import { useState } from "react";
import { ContextColor } from "../types";

export default () => {
  const color: ContextColor = "light";
  const [context, setContext] = useState(color);
  return context;
};
