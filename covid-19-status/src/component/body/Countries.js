import React from 'react'
import moment from 'moment'
import formatNumber from '../Scripts'

function Countries(props) {

    const countries = props.data;
    console.log(countries)

    const list = countries ? countries.map(country => {
        return (
            <div key={country.CountryCode}>
                <div className="row">
                    <div className="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{country.Country}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Recovery rate <b>{Math.round((country.TotalRecovered/country.TotalConfirmed * 100) *100) / 100}%</b></h6>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <h5>New Confirmed</h5>
                                            <h3>{formatNumber(country.NewConfirmed)}</h3>
                                        </div>
                                        <div className="col-md-2">
                                            <h5>Total Confirmed</h5>
                                            <h3>{formatNumber(country.TotalConfirmed)}</h3>
                                        </div>
                                        <div className="col-md-2">
                                            <h5>New Deaths</h5>
                                            <h3>{formatNumber(country.NewDeaths)}</h3>
                                        </div>
                                        <div className="col-md-2">
                                            <h5>Total Deaths</h5>
                                            <h3>{formatNumber(country.TotalDeaths)}</h3>
                                        </div>
                                        <div className="col-md-2">
                                            <h5>New Recovered</h5>
                                            <h3>{formatNumber(country.NewRecovered)}</h3>
                                        </div>
                                        <div className="col-md-2">
                                            <h5>Total Recovered</h5>
                                            <h3>{formatNumber(country.TotalRecovered)}</h3>
                                        </div>
                                    </div>
                                </div>
                                <a href="#" class="card-link">View Status</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }) : <div className="col-md-12"><h3>Country data loading..</h3></div>

    return (
        <div>
            {list}
        </div>
    )
}

export default Countries
