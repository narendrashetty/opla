import { render } from "react-dom";
import { secret } from "./secret";
import { Provider, useDispatch } from "react-redux";

import { store } from "./store/store";
import WebchatLite from "./WebchatLite";

const init = ({
  token,
  conversationSid
}: {
  token: string;
  conversationSid: string;
}) => {
  const rootElement = document.getElementById("root");
  render(
    <Provider store={store}>
      <WebchatLite token={token} conversationSid={conversationSid} />
    </Provider>,
    rootElement
  );
};

init(secret);
