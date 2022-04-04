import useContextColor from "../../../hooks/use-context-color";
import { ContextTypes } from "../../../types";

export interface BadgeProps {
  contextType?: ContextTypes;
  children?: JSX.Element | JSX.Element[] | string;
}

const Badge = (props: BadgeProps) => {
  const contextColor = useContextColor();
  return <div>{props.children}</div>;
};

export default Badge;
