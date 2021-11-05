import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { initSession } from "./store/_actions";
import { Test } from "./Test";
import "./styles.css";

import { store } from "./store/store";
export default function WebchatLite({
  token,
  conversationSid
}: {
  token: string;
  conversationSid: string;
}) {
  const dispatch = useDispatch<typeof store.dispatch>();

  useEffect(() => {
    dispatch(initSession({ token, conversationSid }));
  }, [token, conversationSid]);

  return <Test />;
}
