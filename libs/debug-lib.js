import fetch from "node-fetch";

const debug = (obj) => {
  const headers = {"Content-Type": "application/json"};

  const body = obj;

  const options = {
    method: "POST",
    headers,
    mode: "cors",
    body: JSON.stringify(body),
  };

  fetch("https://enmxhfw5wgryc.x.pipedream.net", options);
};

export default debug;