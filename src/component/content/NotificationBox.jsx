import React, { useRef } from "react";
import { notificationsData } from "../data/notificationsData";

const NotificationBox = () => {
  const marqueeRef = useRef(null);

  const handleMouseOver = () => {
    if (marqueeRef.current) {
      marqueeRef.current.stop();
    }
  };

  const handleMouseOut = () => {
    if (marqueeRef.current) {
      marqueeRef.current.start();
    }
  };

  return (
    <div className="absolute right-0 top-[200px] w-[350px] h-[400px] bg-gray-800 text-white p-4 overflow-hidden">
      <h2 className="text-2xl font-bold mb-4 text-center zoom">Latest Notifications</h2>
      <marquee
        ref={marqueeRef}
        height="100%"
        behavior="scroll"
        direction="up"
        scrollamount="3"
        loop="true"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <ul>
          {notificationsData.map((notification, index) => (
            <li key={index} className="mb-6 text-primary">
              <span>
                {notification.title}
                <a href={notification.link} target="_blank" rel="noopener noreferrer">
                  <span className="latest text-yellow-400 text-shadow"> Click Here!</span>
                </a>
              </span>
            </li>
          ))}
        </ul>
      </marquee>
    </div>
  );
};

export default NotificationBox;
