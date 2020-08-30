import React, { Component } from 'react'
import axios from 'axios'
import Global from './body/Global'
import Countries from './body/Countries'

class GetData extends Component {

    constructor () {
        super()

        this.state = {
            data: ''
        }
    }

    componentDidMount () {
        axios.get('https://api.covid19api.com/summary')
        .then((res) => {
            this.setState({
                data: res.data
            })
            //console.log('GetData: ', this.state.data)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <Global data={this.state.data} />
                            <Countries data={this.state.data.Countries} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default GetData;