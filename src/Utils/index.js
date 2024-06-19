export async function isServerUp(url) {
  try {
    const response = await fetch(url, { method: 'HEAD' });
    if (response.ok) {
      console.log(`Server is up. Status: ${response.status}`);
      return true;
    } else {
      console.log(`Server responded but not OK. Status: ${response.status}`);
      return false;
    }
  } catch (error) {
    console.error(`Failed to fetch from the server. Error: ${error.message}`);
    return false;
  }
}
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
export function getTokenFromLocalStorage() {
  return localStorage.getItem("accessToken");
}
export function parseJwt() {
  try {
    const token = getTokenFromLocalStorage();
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
    localStorage.clear();
    window.location = "/";
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
export const statusColor = {
  1: `primary`,
  5: `secondary`,
  4: `success`,
  6: `error`,
  2: `warning`,
  3: `info`,
};

export const formateDate = (date = new Date()) => {
  const d = new Date(date);
  return d.getDate() + '-' + d.getMonth() + '-' + d.getFullYear()
}