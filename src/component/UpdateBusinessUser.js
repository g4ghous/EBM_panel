import React, { Component } from 'react';
import { Serverurl } from '../Common/ServerUrl';
import axios from 'axios';
import $ from 'jquery';
import swal from 'sweetalert';


var menus = []

export class UpdateBusinessUser extends Component {
    

    render() {
        return (
            <div>

                <div class="container">
                    <div class="row">
                        <div class="col-lg-11 col-md-12 card">
                            <div class="parent">
                                {/* <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Englsh</a>
                                    </li>
                                    {/* <li class="nav-item">
                                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">اردو</a>
                                    </li> 
                                </ul> */}
                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <h4 class="mt-0 header-title">Update User</h4>

                                        {/* <div class="form-group row input-margin">
                                            <label for="example-search-input" class="col-sm-2 col-form-label">Profile Image Upload</label>
                                            <div class="col-sm-12">
                                                <input type="file" id="input-file-now" name="avatar" onChange={this.handleFileInput.bind(this)} class="dropify" />
                                            </div>
                                        </div> */}
                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Name</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="name"  type="text" id="example-text-input" />
                                            </div>
                                        </div>


                                        <div class="form-group row">
                                            <label for="example-email-input" class="col-sm-2 col-form-label">Email</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="email"  type="email" id="example-email-input" />
                                            </div>
                                        </div>

                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">phone</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="phone"  type="text" id="example-text-input" />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="example-number-input" class="col-sm-2 col-form-label">Password</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="password"  type="text" id="example-number-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-password-input" class="col-sm-2 col-form-label">Confirm Password</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="c_password"  type="text" id="example-password-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-password-input" class="col-sm-2 col-form-label">User Type</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="user_type"  type="number" id="example-password-input" />
                                            </div>
                                        </div>
                                       
                                         <div class="form-group row">
                                            <div class="button-align">
                                                <button type="button" class="btn btn-danger waves-effect waves-light submit-button" >Update</button>
                                            </div>
                                        </div>
                                        {/* {this.state.errorText ?
                                            <p style={{ color: 'red' }}>{this.state.errorText}</p>
                                            : null
                                        }
                                        <div id="err">{this.state.error}</div> */}
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

export default UpdateBusinessUser

