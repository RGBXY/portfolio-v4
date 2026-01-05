"use client";

import { useEffect, useState } from "react";

const Test = () => {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");

  // useEffect(() => {
  //   let authParams = {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/x-www-form-urlencoded",
  //     },
  //     body: "grant_type=client_credentials&client_id=" + clientId + "&client_secret=" + clientSecret,
  //   };

  //   fetch("https://accounts.spotify.com/api/token", authParams)
  //     .then((result) => result.json())
  //     .then((data) => {
  //       setAccessToken(data.access_token);
  //     });
  // }, []);

  return <div>Test</div>;
};

export default Test;
