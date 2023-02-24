// import Vue from 'vue'
import axios from "axios";
import { notification } from "ant-design-vue";
import { ACCESS_TOKEN } from "@/const/index";
import Cookies from "js-cookie";
import { LOGOUT_URI } from "@/const/index";
import store from "@/store";
import { toLogin } from "@/utils/util";
// 创建 axios 实例
const request = axios.create({
  baseURL: "/org-center/api/v1", // api base_url
  timeout: 20000, // 请求超时时间
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const err = (error: any) => {
  if (error.response) {
    notification.error({
      message: error.response.status,
      description: error.response.statusText,
    });
    if (error.response.status == 401) {
      toLogin();
    }
  }
  return Promise.reject(error);
};

// request interceptor
// eslint-disable-next-line @typescript-eslint/no-explicit-any
request.interceptors.request.use((config: any) => {
  const token = localStorage.getItem(ACCESS_TOKEN) || Cookies.get(ACCESS_TOKEN);
  if (token) {
    config.headers["Authentication"] = "Bearer " + token;
    config.headers["x-user-id"] = store.getters["user/getterUserInfo"].id;
    config.headers["sysCode"] = "G00044";
  }
  return config;
}, err);

// response interceptor
request.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (!res.code) {
      return res;
    } else if (res.code && res.code === 10000) {
      return res;
    } else if (
      res.code === 10005 ||
      res.code === 10004 ||
      res.code === 10001 ||
      res.code === 15000
    ) {
      return res;
    } else if (res.code === 200) {
      return res;
    } else if (res.code === 40001) {
      window.location.href = `${LOGOUT_URI}${window.location.origin}`;
    } else {
      notification.error({
        message: res.code,
        description: res.msg,
      });
      return Promise.reject(response);
    }
  },
  (err) => {
    if (err.message.includes("timeout")) {
      notification.error({
        message: "网络超时",
        description: "当前请求已超时取消，请检查网络后重试",
      });
    } else {
      if (err.response) {
        notification.error({
          message: err.response.status,
          description: err.response.statusText,
        });
        if (err.response.status == 401) {
          toLogin();
        }
      }
    }
    return Promise.reject(err);
  }
);

// const installer = {
//   vm: {},
//   install(Vue) {
//     Vue.use(request);
//   },
// };

export default request;

export { request as axios };
