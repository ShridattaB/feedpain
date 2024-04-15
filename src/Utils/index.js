export const months = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];
export const getChartData = () => {
  let curm = new Date().getMonth();
  let year = new Date().getFullYear();
  let data = [];
  for (let i = 0; i < 12; i++) {
    data.push({
      pv: Math.round(Math.random() * 51),uv: Math.round(Math.random() * 51),
      name: months[curm] + "-" + year.toString().slice(2),
    });
    if (curm === 0) {
      curm = 12;
      year = year - 1;
    }
    curm = curm - 1;
  }
  return data;
};
