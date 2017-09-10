export function get(url: string): Promise<any> {
  return fetch(url).then((r) => { 
    return r.json();
  });
}

export function post(url: string, body: any): Promise<any> {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  }).then((r) => { 
    return r.json();
  });
}