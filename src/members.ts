import { Member } from "./types";

const members: Member[] = 
[
  {
    code: 'urb', 
    amount: 10,
  },
  {
    code: 'haj', 
    amount: 0,
  },
  {
    code: 'lax', 
    amount: 10,
  },
  {
    code: 'nik',
    amount: 0,
  }
];

export default members.sort((a, b) => {
    if (a.amount > b.amount)
      return -1;
    if (a.amount < b.amount)
      return 1;
    return 0;
  });