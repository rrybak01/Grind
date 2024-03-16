const API_URL = "http://192.168.1.138:8080";

export const post = async (url, payload) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(payload),
  };

  let response = await fetch(`${API_URL}/${url}`, requestOptions);
  return response.json();
}

export const get = async (url) => {
  console.log("4");
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
  };

  console.log(`${API_URL}/${url}`);
  const response = await fetch(`${API_URL}/${url}`, requestOptions);
  console.log("5");
  return response.json();
}

export const put = async (url, payload) => {
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
    body: JSON.stringify(payload),
  };

  let response = await fetch(`${API_URL}/${url}`, requestOptions);
  return { status: response.status, data: await response.json() };
}

export const deleteMethod = async (url) => {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
  };

  let response = await fetch(`${API_URL}/${url}`, requestOptions);
  return response.json();
}
