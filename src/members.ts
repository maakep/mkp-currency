import { Member } from "./types";

const members: Member[] = 
[
  {
    code: 'urb', 
    amount: 9,
  },
  {
    code: 'haj', 
    amount: 0,
  },
  {
    code: 'lax', 
    amount: 9,
  },
  {
    code: 'nik',
    amount: 0,
  }
];

var m = fetch('/members').then((res) => {
  // const m = JSON.parse(res.json());
  // this.members = 
  // make this fetch shit work
});

export default members.sort((a, b) => {
    if (a.amount > b.amount)
      return -1;
    if (a.amount < b.amount)
      return 1;
    return 0;
  });