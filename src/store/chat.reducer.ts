import { AnyAction, Reducer } from "redux";
import { ChatState } from "./definitions";

export const ChatReducer: Reducer = (
  state: ChatState = {},
  action: AnyAction = {}
): ChatState => {
  switch (action.type) {
    case "ACTION_START_SESSION": {
      return {
        ...state,
        token: action.payload.token,
        conversationSid: action.payload.conversationSid,
        client: action.payload.client,
        conversation: action.payload.conversation
      };
    }
    default:
      return state;
  }
};
