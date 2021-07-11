var options = [{
        series: [{
            type: 'liquidFill',
            data: [0.317, , , 0.1],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '臺北市\n\n31.7%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.396, , , 0.1],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '新北市\n\n39.6%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.19, , , 0.14],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '臺中市\n\n19%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.293, , , 0.243],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '高雄市\n\n29.3%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.298, , , 0.248],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '桃園市\n\n29.8%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.26, , , 0.21],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '臺南市\n\n26%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.376, , , 0.1],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '彰化縣\n\n37.6%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.26, , , 0.21],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '屏東縣\n\n26%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.275, , , 0.225],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '雲林縣\n\n27.5%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.311, , , 0.1],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '苗栗縣\n\n31.1%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.312, , , 0.1],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '宜蘭縣\n\n31.2%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.244, , , 0.194],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '新竹市\n\n24.4%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.336, , , 0.1],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '基隆市\n\n33.6%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.414, , , 0.1],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '嘉義縣\n\n41.4%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.471, , , 0.1],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '南投縣\n\n47.1%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.382, , , 0.1],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '花蓮縣\n\n38.2%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.385, , , 0.1],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '新竹縣\n\n38.5%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.307, , , 0.1],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '嘉義市\n\n30.7%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.478, , , 0.1],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '臺東縣\n\n47.8%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.268, , , 0.218],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '澎湖縣\n\n26.8%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.386, , , 0.1],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '金門縣\n\n38.6%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.176, , , 0.126],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '連江縣\n\n17.6%'
            }
        }]
    }
];

var charts = [];
for (var i = 0; i < options.length; ++i) {
    var chart = echarts.init($('.chart')[i]);

    if (i > 0) {
        options[i].series[0].silent = true;
    }
    chart.setOption(options[i]);
    chart.setOption({
        baseOption: options[i],
        media: [{
            query: {
                maxWidth: 300
            },
            option: {
                series: [{
                    label: {
                        fontSize: 26
                    }
                }]
            }
        }]
    });
    charts.push(chart);
}
$(window).resize(function() {
    for (var i = 0; i < charts.length; ++i) {
        charts[i].resize();
    }
});