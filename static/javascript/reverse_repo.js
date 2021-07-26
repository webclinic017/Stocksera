function reverse_repo() {
    var date_list = [], amount_list = [], parties_list = [];
    var table = document.getElementsByTagName("table")[0];
    var tr = table.querySelectorAll("tr");
    for (i=tr.length-1; i>0; i--) {
        var td = tr[i].querySelectorAll("td");
        date_list.push(td[0].innerHTML)
        amount_list.push(td[1].innerHTML)
        parties_list.push(td[2].innerHTML)
        td[1].innerHTML = "$" + td[1].innerHTML + "B"
        td[3].innerHTML = "$" + td[3].innerHTML + "B"
    }

    var reverse_repo_chart = document.getElementById('reverse_repo_chart');
    var reverse_repo_chart = new Chart(reverse_repo_chart, {
        data: {
            labels: date_list,
            datasets: [
                {
                    label: 'Amount',
                    type: 'line',
                    data: amount_list,
                    borderColor: 'wheat',
                    backgroundColor: 'transparent',
                    yAxisID: 'A',
                },
                {
                    label: 'Num Parties',
                    type: 'bar',
                    data: parties_list,
                    borderColor: 'rgb(38, 166, 154)',
                    backgroundColor: 'rgb(38, 166, 154)',
                    yAxisID: 'B',
                }
                ]
        },

        options: {
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true
             },
            scales: {
                yAxes: [
                    {
                        position: 'left',
                        gridLines: {
                            display: false
                        },
                        type: "linear",
                        id: "A",
                        scaleLabel: {
                            display: true,
                            labelString: 'Amount [$B]',
                            beginAtZero: true,
                        },
                    },
                    {
                        position: 'right',
                        gridLines: {
                            display: false
                        },
                        type: "linear",
                        id: "B",
                        scaleLabel: {
                            display: true,
                            labelString: 'Num Parties',
                            beginAtZero: true,
                        },

                    }
                    ],

                xAxes: [{
                    ticks: {
                      maxTicksLimit: 10,
                      maxRotation: 45,
                      minRotation: 0,
                    },
                    gridLines: {
                        drawOnChartArea: false
                    },
                }],
            },

            // To show value when hover on any part of the graph
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'index',
                intersect: false
            },
        },
    });
}