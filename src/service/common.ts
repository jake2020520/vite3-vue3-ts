import request from "@/utils/request";
/**
 * 测试接口
 */
export const getOrgTreeDataApi = (params?: {
  id?: string;
  nodeType?: string;
}) => {
  return request({
    baseURL: "",
    url: `/api/v1/org/getOrgTree?nodeId=${params?.id || ""}&nodeType=${
      params?.nodeType || 0
    }`,
    method: "get",
  });
};
