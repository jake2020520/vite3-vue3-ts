// export const ACCESS_TOKEN = process.env.NODE_ENV == "development" ? "four-in-one-gateway": "x_jwt";
export const ACCESS_TOKEN = "four-in-one-gateway";
export const LOGOUT_URI = "/logout?redirect_uri=";

// 表单
export const FROM_COL = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
  LABLE_COL: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  WRAPPER_COL: {
    xs: { span: 24 },
    sm: { span: 19 },
  },
  LABEL_VERTICAL_COL: {
    xs: { span: 24 },
    sm: { span: 3 },
  },
  WRAPPER_PRO_COL: {
    xs: { span: 24 },
    sm: { span: 18 },
  },
};

// 成功状态码
export const SUCCESS_CODE = 10000;

// 组织中心编码
export const SYSTEM_CODE = "OC";

// modal相关设置
export const MODAL = {
  WIDTH: 850,
  MIN_WIDTH: 500,
  MASK_CLOSABLE: false,
  KEYBOARD: false,
};
