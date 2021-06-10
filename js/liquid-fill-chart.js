var options = [{
        series: [{
            type: 'liquidFill',
            data: [],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '臺北市\n\n0%'
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
            data: [0.071],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '桃園市\n\n7.1%'
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
            data: [0.093],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '彰化縣\n\n9.3%'
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
                formatter: '花蓮縣\n\n0%'
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
            data: [0.139, , , 0.089],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '基隆市\n\n13.9%'
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
            data: [0.051],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '澎湖縣\n\n5.1%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.043],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '金門縣\n\n4.3%'
            }
        }]
    },
    {
        series: [{
            type: 'liquidFill',
            data: [0.207, , , 0.157],
            radius: '70%',
            outline: {
                show: true
            },
            label: {
                formatter: '連江縣\n\n20.7%'
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