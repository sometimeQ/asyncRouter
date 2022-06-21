const getters = {
    sidebarType:state=>state.app.sidebarType,
    visitedViews: state => state.tagsView.visitedViews,
    cachedViews: state => state.tagsView.cachedViews,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    introduction: state => state.user.introduction,
    roles: state => state.user.roles,
    permissions: state => state.user.permissions,
    permission_routes: state => state.permission.routes,
    topbarRouters:state => state.permission.topbarRouters,
    defaultRoutes:state => state.permission.defaultRoutes,
    sidebarRouters:state => state.permission.sidebarRouters,
}

export default getters;