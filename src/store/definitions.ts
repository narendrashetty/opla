import Client from "@twilio/conversations";

export type ChatState = {
  token: string;
  conversationSid: string;
  conversationsClient: Client;
  conversation: string;
  participants: string;
  messages: string;
};
