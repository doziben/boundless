//get notifications that are read using uid from appslice
//notifications = read /unread

import { useState } from "react";
import tw from "twin.macro";

const Notifications = () => {
  const [showNotifications, setShowNotifications] = useState<boolean>(false);
  const [newNotifications, setNewNotifications] = useState<boolean>(false);

  return (
    <div tw="relative">
      <button tw="p-2 rounded-full hover:(bg-[#fafafa])">
        {" "}
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.3909 18.5148C14.8197 20.1152 13.8699 21.7602 12.2695 22.189C10.6691 22.6178 9.02414 21.6681 8.59531 20.0677M10.8914 6.24085C11.1956 5.69355 11.2958 5.03205 11.121 4.37945C10.7636 3.04579 9.39275 2.25433 8.05909 2.61168C6.72542 2.96904 5.93397 4.33988 6.29132 5.67355C6.46619 6.32614 6.88372 6.84891 7.42082 7.17079M16.2358 9.94529C15.8788 8.61316 14.9259 7.49919 13.5866 6.84846C12.2474 6.19773 10.6314 6.06353 9.09437 6.47539C7.55729 6.88725 6.22496 7.81142 5.39048 9.04461C4.556 10.2778 4.28773 11.719 4.64467 13.0511C5.23524 15.2552 5.12057 17.0135 4.74761 18.3497C4.32255 19.8725 4.11001 20.634 4.16743 20.7869C4.23312 20.9618 4.28064 21.0098 4.45488 21.0773C4.60717 21.1363 5.24694 20.9649 6.52648 20.622L18.3915 17.4428C19.6711 17.1 20.3109 16.9285 20.4132 16.8013C20.5304 16.6557 20.5475 16.5904 20.517 16.406C20.4902 16.2449 19.9255 15.6918 18.7959 14.5855C17.8049 13.6148 16.8264 12.1493 16.2358 9.94529Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {newNotifications && (
            <svg
              width="4"
              height="5"
              viewBox="0 0 4 5"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2.5" r="2" fill="#D5483E" />
            </svg>
          )}
        </svg>
      </button>
      {showNotifications && <div tw="absolute"></div>}
    </div>
  );
};

export default Notifications;
