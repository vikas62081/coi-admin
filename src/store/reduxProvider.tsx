import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import store from ".";

function ReduxProvider(props: PropsWithChildren<any>) {
  const { children } = props;
  return <Provider store={store}>{children}</Provider>;
}

export default ReduxProvider;
