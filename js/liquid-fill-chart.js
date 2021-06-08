var options = [{
        series: [{
            type: 'liquidFill',
            data: [0.044],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '臺北市\n\n4.4%'
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
            data: [],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '臺中市\n\n0%'
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
                formatter: '高雄市\n\n0%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.123, , , 0.073],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '桃園市\n\n12.3%'
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
                formatter: '臺南市\n\n0%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.115, , , 0.065],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '彰化縣\n\n11.5%'
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
                formatter: '屏東縣\n\n0%'
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
                formatter: '雲林縣\n\n0%'
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
            data: [],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '新竹縣\n\n0%'
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
                formatter: '嘉義市\n\n0%'
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
                formatter: '花蓮縣\n\n3.4%'
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
                formatter: '宜蘭縣\n\n0%'
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
                formatter: '南投縣\n\n0%'
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
                formatter: '嘉義縣\n\n0%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.169, , , 0.119],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '基隆市\n\n16.9%'
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
                formatter: '苗栗縣\n\n0%'
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
                formatter: '臺東縣\n\n0%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.123, , , 0.073],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '澎湖縣\n\n12.3%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.058],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '金門縣\n\n5.8%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.284, , , 0.234],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '連江縣\n\n28.4%'
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