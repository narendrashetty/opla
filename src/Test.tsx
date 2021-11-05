import { useEffect } from "react";
import { useSelector } from "react-redux";
import "./styles.css";
import { Flex } from "@twilio-paste/core/flex";
import { Input } from "@twilio-paste/core/input";
import { Button } from "@twilio-paste/core/button";
import { CustomizationProvider } from "@twilio-paste/core/customization";
import { ArrowForwardIcon } from "@twilio-paste/icons/esm/ArrowForwardIcon";

const MessageInput = () => {
  return (
    <Flex>
      <Input
        type="text"
        placeholder="Type your message"
        insertAfter={
          <Button variant="link">
            <ArrowForwardIcon
              decorative={false}
              size="sizeIcon20"
              title="Send"
            />
          </Button>
        }
      />
    </Flex>
  );
};

const MessageList = () => {
  return (
    <div className="messageList">
      <div className="mine messages">
        <div className="message last">Dude</div>
      </div>
      <div className="yours messages">
        <div className="message">Hey!</div>
        <div className="message">You there?</div>
        <div className="message last">Hello, how's it going?</div>
      </div>
      <div className="mine messages">
        <div className="message">Great thanks!</div>
        <div className="message last">How about you?</div>
      </div>
    </div>
  );
};

export function Test() {
  return (
    <CustomizationProvider
      baseTheme="default"
      style={{ minHeight: "100%", minWidth: "100%" }}
    >
      <Flex height="100vh" hAlignContent="center" vAlignContent="center">
        <div className="App">
          <MessageList />
          <MessageInput />
        </div>
      </Flex>
    </CustomizationProvider>
  );
}
