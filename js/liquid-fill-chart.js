var options = [{
        series: [{
            type: 'liquidFill',
            data: [0.075],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '臺北市\n\n7.5%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '新北市\n\n0%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.008],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '臺中市\n\n0.8%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.034],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '高雄市\n\n3.4%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.109, , , 0.059],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '桃園市\n\n10.9%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.04],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '臺南市\n\n4%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.16, , , 0.11],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '彰化縣\n\n16%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.028],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '屏東縣\n\n2.8%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.063],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '新竹縣\n\n6.3%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.004],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '雲林縣\n\n0.4%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '新竹市\n\n0%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.082],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '花蓮縣\n\n8.2%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.093],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '嘉義市\n\n9.3%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.026],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '宜蘭縣\n\n2.6%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.006],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '南投縣\n\n0.6%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.046],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '嘉義縣\n\n4.6%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.167, , , 0.117],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '基隆市\n\n16.7%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.06],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '苗栗縣\n\n6%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.061],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '臺東縣\n\n6.1%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.089],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '澎湖縣\n\n8.9%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.072],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '金門縣\n\n7.2%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.098],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '連江縣\n\n9.8%'
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