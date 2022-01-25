import React, { useState } from "react";
function Status({ isOnline }) {
  //   return isOnline ? "online" : "offline";
  //   return (
  //     <>
  //       {isOnline === true && "online"}
  //       {isOnline === false && "false"}
  //       {isOnline === undefined && <h1>loadig...</h1>}
  //     </>
  //   );

  if (isOnline) {
    return "online";
  }
  return "offline";
}

export default Status;
