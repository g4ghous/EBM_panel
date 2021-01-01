import React, { Component } from 'react';
import { Serverurl } from '../Common/ServerUrl';
import axios from 'axios';
import $ from 'jquery';
import swal from 'sweetalert';


export class CreateCity extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            c_name: "",
        }
    }
    
    // handleChangeCampaign(event) {
    //     this.setState
    //         ({ value: event.target.value })

    // }

    handleChangeBrands(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText:""
        })
    }

    addBrand(e) {

        var validation = true;

        if (this.state.c_name == "") {
            validation = false;
            this.setState({
                errorText: "*City Name is required"
            })
        }

        if (validation == true) {

            let formData = new FormData();
            formData.append('c_name', this.state.c_name)

            this.setState({
                loading: true
            })

            // console.log('mydata', data)

            var error = document.getElementById('err');
            if (this.state.name === "" ||
                this.state.status === ""
            ) {
                this.setState({
                    error: 'Please fill fields carefully'
                })
                error.classList.add('errorMsg');
                setTimeout(() => {
                    error.classList.remove('errorMsg')
                    this.setState({
                        error: ''
                    })
                }, 3000)
            } else {
                axios({
                    method: 'post',
                    url: Serverurl + 'city_add',
                    data: formData,
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                    config: {
                        headers: { 'Content-Type': 'application/json' }
                    }
                })
                    .then((res) => {
                        console.log('res', res.data)
                        if (res.status === "true") {
                            swal("Poof! Your imaginary file has been deleted!", {
                                icon: "success",
                            });
                            this.setState({
                                loading: true
                            })
                        } else {
                            swal("City Succesfully Created!");
                        }
                        setTimeout(() => {
                            window.location.href = "/component/GridCities"
                        }, 3000)
                        console.log('data', res.data)
                    })
                    .catch((err) => {
                        console.log("res", err.response.data.error.message)

                        var error_message = err.response.data.error.message;

                        console.log("error", error_message[0])

                        if (err) {
                            this.setState({
                                loading: true
                            })
                            setTimeout(() => {
                                this.setState({
                                    loading: false
                                })
                                this.setState((willSuccess) => {
                                    if (willSuccess) {
                                        swal(error_message[0], {
                                            icon: "warning",
                                        });
                                    } else {
                                        swal("Your imaginary file is safe!");
                                    }
                                })
                            }, 3000)
                        }
                    })
            }
        }
    }
    
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
                                        <h4 class="mt-0 header-title">Add City</h4>

                                        {/* <div class="form-group row input-margin">
                                            <label for="example-search-input" class="col-sm-2 col-form-label">Image Upload</label>
                                            <div class="col-sm-12">
                                                <input type="file" id="input-file-now" name="avatar"  class="dropify" />
                                            </div>
                                        </div> */}
                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Name</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="c_name" onChange={this.handleChangeBrands.bind(this)} type="text" id="example-text-input" />
                                            </div>
                                        </div>

                                        {/* <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Stock</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="stock"  type="text" id="example-text-input" />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="example-email-input" class="col-sm-2 col-form-label">Price</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="price"  type="text" id="example-email-input" />
                                            </div>
                                        </div>

                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Category</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="category"  type="text" id="example-text-input" />
                                            </div>
                                        </div>

                                        <div class="form-group row">
                                            <label for="example-number-input" class="col-sm-2 col-form-label">Tags</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="tag"  type="text" id="example-number-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label for="example-password-input" class="col-sm-2 col-form-label">Date</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="date"  type="date" id="example-password-input" />
                                            </div>
                                        </div> */}
                                        {/* <div class="form-group row">
                                            <label for="example-password-input" class="col-sm-2 col-form-label">Postal Code</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="password"  type="password" id="example-password-input" />
                                            </div>
                                        </div> */}
                                        {/* <div class="form-group row">
                                            <label class="col-sm-2 col-form-label">Status</label>
                                            <div class="col-sm-10">
                                                <select name="status"  class="form-control">
                                                    <option>Select Status</option>
                                                    <option value="active">Active</option>
                                                    <option value="inactive">In Active</option>
                                                    <option value="block"> Block</option>
                                                </select>
                                            </div>
                                        </div> */}
                                        <div class="form-group row">
                                            <div class="button-align">
                                                <button type="button" class="btn btn-danger waves-effect waves-light submit-button" onClick={this.addBrand.bind(this)}>Submit</button>
                                            </div>
                                        </div>
                                        {/* {this.state.errorText ?
                                            <p style={{ color: 'red' }}>{this.state.errorText}</p>
                                            : null
                                        }
                                        <div id="err">{this.state.error}</div> */}
                                    </div>

                                    {/* <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                        <h4 class="mt-0 header-title ar">صارف بنائیں</h4>

                                        <div class="form-group row input-margin urdu">
                                            <label for="example-search-input" class="col-sm-2 col-form-label">پروفائل تصویری اپ لوڈ</label>
                                            <div class="col-sm-12">
                                                <input type="file" id="input-file-now" name="avatar" onChange={this.handleFileInput.bind(this)} class="dropify" />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin urdu">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">پہلا نام</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="first_name"  type="text" id="example-text-input" />
                                            </div>
                                        </div>

                                        <div class="form-group row input-margin urdu">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">آخری نام</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="last_name" onChange={this.handleChangeAdventure.bind(this)} type="text" id="example-text-input" />
                                            </div>
                                        </div>

                                        <div class="form-group row urdu">
                                            <label for="example-email-input" class="col-sm-2 col-form-label">ای میل</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="email" onChange={this.handleChangeAdventure.bind(this)} type="email" id="example-email-input" />
                                            </div>
                                        </div>

                                        <div class="form-group row input-margin urdu">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">صارف کا نام</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="username" onChange={this.handleChangeAdventure.bind(this)} type="text" id="example-text-input" />
                                            </div>
                                        </div>

                                        <div class="form-group row urdu">
                                            <label for="example-number-input" class="col-sm-2 col-form-label">رابطہ نمبر</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="contact_number" onChange={this.handleChangeAdventure.bind(this)} type="number" id="example-number-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row urdu">
                                            <label for="example-password-input" class="col-sm-2 col-form-label">پاس ورڈ</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="password" onChange={this.handleChangeAdventure.bind(this)} type="password" id="example-password-input" />
                                            </div>
                                        </div>
                                        <div class="form-group row urdu">
                                            <label class="col-sm-2 col-form-label">حالت</label>
                                            <div class="col-sm-10">
                                                <select name="status" onChange={this.handleChangeAdventure.bind(this)} class="form-control">
                                                    <option>حیثیت منتخب کریں</option>
                                                    <option value="active">فعال</option>
                                                    <option value="inactive">غیر فعال</option>
                                                    <option value="block"> بلاک کریں</option>
                                                </select>
                                            </div>
                                        </div>
                                        {this.state.errorText ?
                                            <p style={{ color: 'red' }}>{this.state.errorText}</p>
                                            : null
                                        }
                                        <div id="err">{this.state.error}</div>
                                       

                                    </div> */}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateCity

