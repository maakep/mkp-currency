export function get(url: string): Promise<any> {
  return fetch(url).then((r) => { 
    return r.json();
  });
}