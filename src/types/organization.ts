// 组织列表数据
interface listInfo {
    id: number,
    name: string,
    nodeType: number
}

interface orgDetail {
    
}


// 组织表单
interface OrgState {
    name: string,
    code: string,
    describe: string,
    parentName: string
}

export {
    listInfo,
    OrgState
}