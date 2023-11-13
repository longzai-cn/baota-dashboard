export function randomPassword(length = 16, chars = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz23456789") {
  let maxPos = chars.length;
  let pwd = "";
  for (let i = 0; i < length; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}
