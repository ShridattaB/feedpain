
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
      pv: Math.round(Math.random() * 51),
      uv: Math.round(Math.random() * 51),
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

export const getUserData = () => {
  return parseJwt();
};
export function parseJwt() {
  try {
    const token = localStorage.getItem("accessToken");
    if (!token) return null;
    var base64Url = token.split(".")[1];
    var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (error) {
    localStorage.clear()
    window.location="/"
  }
}

export function isEmpty(obj) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) {
      return false;
    }
  }

  return true;
}