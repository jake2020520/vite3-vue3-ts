export interface UserData {
  current: number;
  pageSize: number;
  total: number;
  result: UserItem[];
}

export interface UserItem {
  userId: string;
  tenantId: number;
  userName: string;
  department: string;
  status: boolean;
}

export interface topOrgSelectItemType {
  id: string;
  name: string;
  nodeType: string;
  systemType: string;
}
export interface orgTreeItemType {
  adminId: string;
  adminName: string;
  children: orgTreeItemType[];
  code: string;
  id: string;
  nodeType: string;
  pid: string;
  pidNodeType: string;
  systemType: string;
  title: string;
  type: string;
  typeDesc: string;
}

export interface OrgDimensionDataParamsType {
  pNodeId?: string;
  nodeId?: string;
  orgId?: string;
  roleCode?: string;
  maxDepth?: string;
  pageNum?: number;
  pageSize?: number;
}
export interface OrgUserDataParamsType {
  orgId?: string;
  userInfo?: string;
  status?: string;
  pageNum?: number;
  pageSize?: number;
  nodeId?: string;
  maxDepth?: string;
}

export interface DimensionItemType {
  bindFlag: boolean;
  children: DimensionItemType[];
  id: number;
  pid: number;
  title: string;
}

export interface BingParamsType {
  orgId?: string | number;
  roleCode?: string;
  roleId?: string;
  roleName?: string;
  userNos?: (string | number)[];
  users?: UsersItem[];
  resourceIds?: (string | number)[];
}

export interface UsersItem {
  userName: string;
  userNo: string;
}
export interface DimensionDataType {
  code: string;
  id: number;
  name: string;
  note: string;
}
