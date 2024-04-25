export function validateEmail(inputText) {
  if (!inputText) return false;
  const mailFormat = /^[\w-.]+@[\w-]+(\.[\w-]+)*$/;
  return inputText.match(mailFormat);
}
export function validateMobileNo(inputText) {
  if (!inputText) return false;
  const mobileFormate = /^\d{10}$/;
  return inputText.match(mobileFormate);
}
export function textOnly(inputText) {
  if (!inputText) return false;
  const formate = /^[A-Za-z]*/;
  return inputText.match(formate);
}
export function checkPassword(inputText) {
  if (!inputText) return false;
  const formate = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return inputText.match(formate);
}
