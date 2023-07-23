const BACKEND_URL = process.env.REACT_APP_API_URL;

export async function savePassword(reqBody) {
  const reqOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqBody),
  };

  const resp = await fetch(BACKEND_URL + "/api/password", reqOptions);
  const jsonRes = await resp.json();

  return jsonRes;
}
