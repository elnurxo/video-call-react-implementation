/* eslint-disable react/prop-types */
import { useEffect, useState, useRef } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const ZegoMeet = ({ roomID, userName, onLeave }) => {
  const [meetingInstance, setMeetingInstance] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!roomID || !userName) {
      console.error("roomID or userName is missing!");
      return;
    }

    const initZegoMeet = async () => {
      const appID = 1984327852;
      const serverSecret = "dcd804d25b9c8abc5e04694b8985c712";

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appID,
        serverSecret,
        roomID,
        Date.now().toString(),
        userName
      );

      const zp = ZegoUIKitPrebuilt.create(kitToken);

      try {
        if (containerRef.current) {
          await zp.joinRoom({
            container: containerRef.current,
            scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
            showTurnOffRemoteCameraButton: true,
            showTurnOffRemoteMicrophoneButton: true,
            showRemoveUserButton: true,
          });

          setMeetingInstance(zp);
        } else {
          console.error("Meeting container not found.");
        }
      } catch (error) {
        console.error("Error joining room:", error);
      }
    };

    initZegoMeet();

    return () => {
      if (meetingInstance) {
        meetingInstance.destroy();
      }
    };
  }, [roomID, userName]);

  return (
    <div>
      <div ref={containerRef} style={{ width: "100%", height: "600px" }}></div>
      <button
        onClick={onLeave}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "5px",
          margin: "10px",
          cursor: "pointer",
        }}
      >
        Leave Room
      </button>
    </div>
  );
};

export default ZegoMeet;
