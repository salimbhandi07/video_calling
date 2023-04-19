import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

function Room() {
  const { roomId } = useParams();

  const data = process.env.REACT_APP_API_KEY;
  const number = process.env.REACT_APP_SERVER_SECRET;

  const myMeetiing = async (element) => {
    const appID = parseInt(data);
    const serverSecret = number;
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Jhon Doe"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };
  return (
    <div>
      <div ref={myMeetiing} />
    </div>
  );
}

export default Room;
