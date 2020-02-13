let ipUrl = 'http://192.144.231.96:7001/default/' 

let servicePath = {
    getArticleList: ipUrl + 'getArticleList' ,  //  首页文章列表接口
    getArticleById: ipUrl + 'getArticleById/',  //  文章详细页内容接口 ,需要接收参数
    getTypeInfo: ipUrl + 'getTypeInfo',         //  获得文章类别接口
    getListById: ipUrl + 'getListById/',         //  根据类别Id获取文章列表
}
export default servicePath;