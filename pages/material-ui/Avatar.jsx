import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

function AvatarPage() {
  return (
    <div>
      <AvatarGroup total={10}>
        <Avatar
          alt="Phonesavan"
          src="/images/me.jpg"
          className="border w-20 h-20 shadow-lg"
        />
        <Avatar
          alt="Phonesavan"
          src="/images/me.jpg"
          className="border w-20 h-20 shadow-lg"
        />
        <Avatar
          alt="Phonesavan"
          src="/images/me.jpg"
          className="border w-20 h-20 shadow-lg"
        />
      </AvatarGroup>
    </div>
  );
}

export default AvatarPage;
