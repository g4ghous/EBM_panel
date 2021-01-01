import React, { Component } from 'react'
import { Serverurl, Serverurlimg } from '../Common/ServerUrl';
import axios from 'axios';
import renderHTML from 'react-render-html';


export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            name: "",
            email: "",
            message: "",
        }
    }


    componentDidMount() {
        var data;
            var id = localStorage.getItem("contactId")
    
        axios({
            method: 'get',
            url: Serverurl + "contact_show/" + id,
            data: data,
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
            config: {
                headers: { 'Content-Type': 'application/json' }
            }

        }).then(res => {
            console.log('res', res.data.data)
            console.log('hey', res.data)
            this.setState({
                name: res.data.name,
                email: res.data.email,
                message: res.data.message,

            })
            // $(document).ready(function () {
            //     $('#datatable2').DataTable();
            // });
            console.log('data', res.data.data)
        }).catch((err) => {
            console.log(err)
            if (err) {
                console.log('err', err.response)
                console.log({ err })
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div class="row justify-content-center">
                    <div class="col-lg-11 col-sm-11">
                        <div class="card">
                            <div class="card-body table-responsive">
                                <div className="head view-list-style">
                                    <h4>Users Details</h4>
                                    <ul>
                                        <div class="row">
                                            <li class="col-12"><h5>Name</h5>
                                                <h6>{this.state.name}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Email</h5>
                                                <h6>{this.state.email}</h6>
                                            </li>
                                        </div>
                                        <div class="row">
                                            <li class="col-12">
                                                <h5>Message</h5>
                                                <h6>{this.state.message}</h6>
                                            </li>
                                        </div>
                                    </ul>
                                    <div class="button-align">
                                        <a href="/component/gridContact" type="button" class="btn btn-danger waves-effect waves-light submit-button">Back</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
