$(function () {
    var zTreeObj;
    // zTree 的参数配置，深入使用请参考 API 文档（setting 配置详解）
    var setting = {};
    // zTree 的数据属性，深入使用请参考 API 文档（zTreeNode 节点数据详解）
    var zNodes = [{
        name: "电信",
        open: true,
        children: [{
            name: "CCTV1高清(124.25.12.3:5050) 当前输出: 主",
            open: true,
            children: [{
                name: "CCTV1高清-省台(udp://238.165.12.33)"
            }, {
                name: "CCTV1高清-成都台(udp://238.165.12.33)"
            }, {
                name: "CCTV1高清-文广(udp://238.165.12.33)"
            }]
        }, {
            name: "CCTV1高清(124.25.12.3:5050) 当前输出: 主",
            open: true,
            children: [{
                name: "CCTV1高清-省台(udp://238.165.12.33)"
            }, {
                name: "CCTV1高清-成都台(udp://238.165.12.33)"
            }, {
                name: "CCTV1高清-文广(udp://238.165.12.33)"
            }]
        }, {
            name: "CCTV1高清(124.25.12.3:5050) 当前输出: 主",
            open: true,
            children: [{
                name: "CCTV1高清-省台(udp://238.165.12.33)"
            }, {
                name: "CCTV1高清-成都台(udp://238.165.12.33)"
            }, {
                name: "CCTV1高清-文广(udp://238.165.12.33)"
            }]
        }, {
            name: "CCTV1高清(124.25.12.3:5050) 当前输出: 主",
            open: true,
            children: [{
                name: "CCTV1高清-省台(udp://238.165.12.33)"
            }, {
                name: "CCTV1高清-成都台(udp://238.165.12.33)"
            }, {
                name: "CCTV1高清-文广(udp://238.165.12.33)"
            }]
        }, {
            name: "CCTV1高清(124.25.12.3:5050) 当前输出: 主",
            open: true,
            children: [{
                name: "CCTV1高清-省台(udp://238.165.12.33)"
            }, {
                name: "CCTV1高清-成都台(udp://238.165.12.33)"
            }, {
                name: "CCTV1高清-文广(udp://238.165.12.33)"
            }]
        }, {
            name: "CCTV1高清(124.25.12.3:5050) 当前输出: 主",
            open: true,
            children: [{
                name: "CCTV1高清-省台(udp://238.165.12.33)"
            }, {
                name: "CCTV1高清-成都台(udp://238.165.12.33)"
            }, {
                name: "CCTV1高清-文广(udp://238.165.12.33)"
            }]
        }]
    }];
    zTreeObj = $.fn.zTree.init($("#treeView"), {
        view: {
            showIcon: false,
            fontCss: {
                "color": "#fff"
            }
        }
    }, zNodes);

    var zNodes2 = [{
        name: "北京",
        open: true,
        children: [{
            name: "昌平区",
            open: true,
            children: [{
                name: "昌平"
            }]
        }, {
            name: "朝阳区",
            open: true,
            children: [{
                name: "朝阳"
            }]
        }, {
            name: "海淀区",
            open: true,
            children: [{
                name: "海淀"
            }]
        }]
    }];
    var zTreeObj2 = $.fn.zTree.init($("#treeView2"), {
        view: {
            showIcon: false,
            fontCss: {
                "font-weight": "bold;"
            }
        }
    }, zNodes2);

    var zNodes3 = [{
        name: "切换板卡",
        open: true,
        iconSkin: "pIcon_none",
        icon: "",
        children: [{
            name: "172.17.13.67",
            iconSkin: "icon_red"
        }, {
            name: "172.17.13.68",
            iconSkin: "icon_green"
        }, {
            name: "192.168.15.11",
            iconSkin: "icon_red"
        }, {
            name: "192.168.15.12",
            iconSkin: "icon_green"
        }]
    }, {
        name: "质量评估设备(IP89)",
        open: true,
        iconSkin: "pIcon_none",
        children: [{
            name: "127.23.23.6",
            iconSkin: "icon_green"
        }, {
            name: "127.23.23.7",
            iconSkin: "icon_green"
        }, {
            name: "127.23.23.8",
            iconSkin: "icon_red"
        }]
    }, {
        name: "故障识别设备(Display)",
        open: true,
        iconSkin: "pIcon_none",
        children: [{
            name: "127.24.2.2",
            iconSkin: "icon_green"
        }, {
            name: "127.24.2.3",
            iconSkin: "icon_green"
        }, {
            name: "127.24.2.4",
            iconSkin: "icon_green"
        }]
    }];

    var zTreeObj3 = $.fn.zTree.init($("#treeView3"), {
        view: {
            fontCss: {
                "color": "#fff"
            }
        }
    }, zNodes3);

    var zNodes4 = [{
        name: "北京",
        open: true,
        children: [{
            name: "昌平区",
            open: true,
            children: [{
                name: "昌平"
            }]
        }, {
            name: "朝阳区",
            open: true,
            children: [{
                name: "朝阳"
            }]
        }, {
            name: "海淀区",
            open: true,
            children: [{
                name: "海淀"
            }]
        }]
    }];
    var zTreeObj4 = $.fn.zTree.init($("#treeView4"), {
        view: {
            showIcon: false,
            fontCss: {
                "font-weight": "bold;"
            }
        }
    }, zNodes4);
})