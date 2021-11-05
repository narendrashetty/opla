import { Client } from "@twilio/conversations";
// import { Dispatch } from "redux";
export const ACTION_START_SESSION = "ACTION_START_SESSION";

export function initSession({ token, conversationSid }: any) {
  return async function (dispatch) {
    console.log(Client, token);
    const client = await Client.create(token);
    const conversation = await client.getConversationBySid(conversationSid);
    dispatch({
      type: "ACTION_START_SESSION",
      payload: {
        token,
        conversationSid,
        client,
        conversation
      }
    });
  };
}
