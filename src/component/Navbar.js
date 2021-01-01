import React, { Component } from 'react';
import logo3 from '../../src/component/assets/images/ebm.png';
import us_flag from '../../src/component/assets/images/flags/us_flag.jpg';
import italy_flag from '../../src/component/assets/images/flags/italy_flag.jpg';
import lady from '../component/assets/images/users/lady.jpg'
import Home from './Home';
import axios from 'axios';
import swal from 'sweetalert';
import { Serverurl, Serverurlimg } from '../Common/ServerUrl';

// var id = 1
export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: 1
        }
    }

    value() {
        this.setState({
            active: 1,
        })
        window.location.href = ""
        console.log("chala",this.state.active)
        localStorage.setItem("customer", this.state.active)
      
    }
    // componentDidMount() {
    //     var data;
    //     axios({
    //         method: 'get',
    //         url: Serverurl + 'notifications',
    //         data: data,
    //         headers: {
    //             'Authorization': `bearer ${localStorage.getItem('token')}`,
    //         },
    //         config: {
    //             headers: { 'Content-Type': 'application/json' }
    //         }

    //     }).then(res => {
    //         console.log('res', res.data.data)
    //         console.log('hey', res.data)
    //         this.setState({
    //             data: res.data.data,
    //         })
    //         // console.log('data', res.data.data)
    //     }).catch((err) => {
    //         console.log(err)
    //         if (err) {
    //             // console.log('err', err.response)
    //             console.log({ err })
    //         }
    //     })
    // }

    // CheckFunction (noti){
    //     console.log(noti)

    //         if(noti == "App\\Notifications\\UserBooking"){
    //             window.location.href="/component/GridBooking"
    //         }

    //         if(noti == "App\\Notifications\\NewFeedback"){
    //             window.location.href="/component/gridContactUs"
    //         }

    //         if(noti == "App\\Notifications\\NewUser"){
    //             window.location.href="/component/gridUsers"
    //         }
    // }

    logout() {
        localStorage.removeItem('userId')
        localStorage.removeItem('email')
        localStorage.removeItem('token')
        window.location.reload();
        window.location.href = "/"
    }

    render() {
        var userId = localStorage.getItem('userId')
        if (window.location.pathname === '/' || !localStorage.getItem('userId')) return null;
        if (window.location.pathname === '/component/TravelForgot' || !localStorage.getItem('userId')) return null;
        return (
            <div>
                <div id="preloader"><div id="status"><div className="spinner"></div></div></div>
                <div id="wrapper">

                    {
                        userId
                            ?
                            <div className="left side-menu">
                                <button type="button" className="button-menu-mobile button-menu-mobile-topbar open-left waves-effect">
                                    <i className="ion-close"></i>
                                </button>

                                <div className="topbar-left">
                                    <div className="text-center">
                                        {/* <!--<a href="index.html" className="logo"><i className="mdi mdi-assistant"></i>Zoter</a>--> */}
                                        <a href="/component/Dashboard" className="logo">
                                            <img src={logo3} alt="" width='300' className="logo-large" />
                                        </a>
                                    </div>
                                </div>

                                <div className="sidebar-inner niceScrollleft">
                                    <div id="sidebar-menu">
                                        <ul>
                                            <li>
                                                <a href="/component/Dashboard" className="waves-effect">
                                                    <i className="fas fa-tv"></i>
                                                    <span> Dashboard </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/component/gridBusinessUsers"  className="waves-effect">
                                                    <i className="fas fa-user-secret"></i>
                                                    <span style={{ fontSize: "10.7px" }}>Customers</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/component/GridBrands" className="waves-effect">
                                                    <i className="fab fa-bootstrap"></i>
                                                    <span style={{ fontSize: "10.7px" }}>Brands</span>
                                                </a>
                                            </li>
                                            {/* <li>
                                                <a href="/component/gridOrders" className="waves-effect">
                                                    <i className="fab fa-first-order"></i>
                                                    <span style={{ fontSize: "10.7px" }}>Orders</span>
                                                </a>
                                            </li> */}
                                            <li>
                                                <a href="/component/gridCities" className="waves-effect">
                                                <i className="fas fa-city"></i>
                                                    <span style={{ fontSize: "10.7px" }}>Cities</span>
                                                </a>
                                            </li>
                                            

                                            <li>
                                                <a href="/component/GridSites" className="waves-effect"><i className="fas fa-building"></i><span style={{ fontSize: "10.7px" }}>Sites</span></a>
                                            </li>
                                            
                                            <li>
                                                <a href="/component/GridCompCategory" className="waves-effect"><i class="fas fa-chalkboard-teacher"></i><span style={{ fontSize: "10.7px" }}>Competitor Categories</span></a>
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    <div className="clearfix"></div>
                                </div>

                            </div>
                            :
                            <div></div>
                    }

                    <div className="content-page">
                        <div className="content">
                            <div className="topbar ">

                                <nav className="navbar-custom fixed-top">

                                    <ul className="list-inline float-right mb-0">
                                        {/* <li className="list-inline-item dropdown notification-list">
                                            <a className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button"
                                                aria-haspopup="false" aria-expanded="false">
                                                <i className="ti-bell noti-icon"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg">

                                                <div className="dropdown-item noti-title">
                                                    <h5>Notifications</h5>
                                                </div>


                                                {/* {this.state.data.map((noti, index) => {

                                                    return (
                                                        <a onClick={this.CheckFunction.bind(this, noti.type)} key={index} className="dropdown-item notify-item">
                                                            <div className="notify-icon bg-primary"><i className="mdi mdi-cart-outline"></i></div>
                                                            <p className="notify-details"><b>{noti.data.message}</b></p>
                                                        </a>
                                                    );

                                                })} */}
{/* 
                                            </div>
                                        </li>  */}

                                        <li className="list-inline-item dropdown notification-list">
                                            <a className="nav-link dropdown-toggle arrow-none waves-effect nav-user" data-toggle="dropdown" href="#" role="button"
                                                aria-haspopup="false" aria-expanded="false">
                                                <img src={lady} alt="user" className="rounded-circle" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right profile-dropdown ">

                                                <div className="dropdown-item noti-title">
                                                    <h5>Welcome</h5>
                                                </div>
                                                {/* <a className="dropdown-item" href="#"><i className="mdi mdi-account-circle m-r-5 text-muted"></i> Profile</a>
                                                <a className="dropdown-item" href="#"><i className="mdi mdi-wallet m-r-5 text-muted"></i> My Wallet</a>
                                                <a className="dropdown-item" href="#"><span className="badge badge-success float-right">5</span><i className="mdi mdi-settings m-r-5 text-muted"></i> Settings</a>
                                                <a className="dropdown-item" href="#"><i className="mdi mdi-lock-open-outline m-r-5 text-muted"></i> Lock screen</a> */}
                                                {/* {/* <div className="dropdown-divider"></div> */}
                                                <a className="dropdown-item" onClick={this.logout.bind(this)}><i className="mdi mdi-logout m-r-5 text-muted"></i> Logout</a>
                                            </div>
                                        </li>

                                    </ul>

                                    <ul className="list-inline menu-left mb-0">
                                        <li className="float-left">
                                            <button className="button-menu-mobile open-left waves-light waves-effect">
                                                <i className="mdi mdi-menu"></i>
                                            </button>
                                        </li>
                                    </ul>

                                    <div className="clearfix"></div>

                                </nav>

                            </div>
                            {/* <Home /> */}
                        </div>



                    </div>
                </div>


            </div>
        )
    }
}

export default Navbar
