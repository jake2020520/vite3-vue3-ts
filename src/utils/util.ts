/**
 * 枚举转数组
 */
export function enumToArray(data: any): Array<any> {
    let list = Object.keys(data)
        .filter((v: any) => isNaN(v) == false)
        .map((key: any) => {
            return {
                value: key,
                label: data[key]
            }
        });
    return list;
}
export const toLogin = (url = location.href) => {
    if (window.location.pathname.split("/")[1] === "login") {
      return;
    }
    window.location.href = `${window.location.origin}/login?redirect_uri=${url}`;
    // router.push("/login?redirect_uri=" + url);
  };