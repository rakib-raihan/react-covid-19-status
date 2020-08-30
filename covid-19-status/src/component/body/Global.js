import React from 'react'
import moment from 'moment'
import { Bar, Doughnut } from 'react-chartjs-2'
import formatNumber from '../Scripts'

function Global(props) {

    const {Global, Date} = props.data;
    const chartData = Global ? {
        labels: [ 'New Confirmed', 'Total Confirmed', 'New Deaths', 'Total Deaths', 'New Recovered', 'Total Recovered' ],
        datasets: [
            {
                label: 'Global Status',
                data: [
                    Global.NewConfirmed,
                    Global.TotalConfirmed,
                    Global.NewDeaths,
                    Global.TotalDeaths,
                    Global.NewRecovered,
                    Global.TotalRecovered
                ],
                backgroundColor: [
                    'rgba(255, 251, 41, 1)',
                    'rgba(255, 234, 0, 1)',
                    'rgba(255, 82, 82, 1)',
                    'rgba(255, 0, 0, 1)',
                    'rgba(0, 255, 13, 1)',
                    'rgba(0, 173, 9, 1)'
                ]
            }
        ]
    } : null;

    return (
        Global ?
        <div>
            <div className="row">
                <div className="col-md-12">
                    <h3>Global Stats</h3>
                    <p>Updated {moment(Date).fromNow()}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div class="card">
                        <div class="card-header">
                            New Confirmed
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{formatNumber(Global.NewConfirmed)}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <div class="card-header">
                            Total Confirmed
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{formatNumber(Global.TotalConfirmed)}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <div class="card-header">
                            New Deaths
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{formatNumber(Global.NewDeaths)}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <div class="card-header">
                            Total Deaths
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{formatNumber(Global.TotalDeaths)}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <div class="card-header">
                            New Recovered
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{formatNumber(Global.NewRecovered)}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div class="card">
                        <div class="card-header">
                            Total Recovered
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">{formatNumber(Global.TotalRecovered)}</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div id="chart">
                        <Doughnut
                            data={chartData}
                            options={{  }}
                        />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div id="chart">
                        <Bar
                            data={chartData}
                            options={{  }}
                        />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        :
        <div>
            <h4 className="text-center">Loading...</h4>
        </div>
    )
}

export default Global
