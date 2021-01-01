import React, { Component } from 'react';
import { Serverurl, ServerUrlBuzzingo } from '../Common/ServerUrl';
import axios from 'axios';
import $ from 'jquery';
import swal from 'sweetalert';

export class CreateCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            image: '',
            name: '',
            count: '',
            error1: '',
            error2: '',
            loading: false,
        };

        // This binding is necessary to make `this` work in the callback
        // this.btnSubmitClick = this.btnSubmitClick.bind(this);
    }

    async componentDidMount() {
        var token = await localStorage.getItem('token');
        this.setState({
          token,
        });
    }

    // handleFileInput = (event) => {                   //for image input 
    //     console.log(event.target.files, 'file')
    //     console.log(event.target.files[0], 'file 0')
    //     let file = event.target.files[0]
    //     this.setState({ event_image: file, 
    //         errorText: ""
    //     })
    //     if (event.target.files) {
    //         this.setState({
    //             [event.target.name]: event.target.files[0],
    //             file: URL.createObjectURL(event.target.files[0])
    //         })
    //     }
    //     console.log(event.target.files[0])
    // }

    HandleImageInput(e) {
        // let image = e.target.files[0];
        // let form = new FormData();
        // form.append('image', image);

        console.log(e.target.files, 'file')
        console.log(e.target.files[0], 'file 0')
        let file = e.target.files[0]

        this.setState({
            image: file,
            errorText: ""
        })

        if (e.target.files) {
            this.setState({
                [e.target.image]: e.target.files[0],
                file: URL.createObjectURL(e.target.files[0])
            })
        }
        console.log(e.target.files[0])
    }

    HandleNameInput(e) {
        this.setState({
            name: e.target.value,
            error1: ''
        })
    }

    HandleCountInput(e) {
        this.setState({
            count: e.target.value,
            error2: ''
        })
    }

    HandleBtnSubmitClick() {
        var validation = true;

        if (this.state.name == "") {
            this.setState({
                errorText: "*Category name is required!"
            })
            validation = false;
        }

        if (this.state.count == "") {
            this.setState({
                errorText: "*Category count is required!"
            })
            validation = false;
        }

        if(validation == true){
            let formData = new FormData();
            formData.append('image', this.state.image)
            formData.append('name', this.state.name)
            formData.append('count', this.state.count)

            // var data = {
            //     'image': this.state.image,
            //     'name': this.state.name,
            //     'count': this.state.count
            // }

            this.setState({
                loading: true
            })

            // var error = document.getElementById('err');
            // if (this.state.email === '' || this.state.password === '') {
            //     this.setState({
            //         error: 'Please fill fields carefully'
            //     })
            //     error.classList.add('errorMsg');
            //     setTimeout(() => {
            //         error.classList.remove('errorMsg')
            //         this.setState({
            //             error: ''
            //         })
            //     }, 3000)
            // } 
            // else {
                // var data;
            console.log(this.state.token)

            axios({
                method: 'post',
                url: Serverurl + 'category_add',
                data: formData,
                headers: {
                    Authorization: 'Bearer' + ' ' + this.state.token,
                  },
            })
            .then(res => {
                console.log('res', res.data.data)
            })
            .catch((err) => {
                console.log({ err })
                if (err) {
                    // error.classList.add('errorMsg');
                    console.log(err.res)
                    this.setState({
                        error1: 'Adding category Failed! Please try again',
                        loading: true
                    })
                    // error.classList.add('errorMsg');
                    // setTimeout(() => {
                    //     error.classList.remove('errorMsg')
                    //     this.setState({
                    //         error: '',
                    //         loading: false
                    //     })
                    // }, 3000)
                }
            })
            // }
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
                                        <h4 class="mt-0 header-title">Add Category</h4>

                                        <div class="form-group row input-margin">
                                            <label for="example-search-input" class="col-sm-2 col-form-label">Image Upload</label>
                                            <div class="col-sm-12">
                                                <input type="file" id="input-file-now" name="image" class="dropify" onChange={this.HandleImageInput.bind(this)} />
                                            </div>
                                        </div>
                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Name</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="name" type="text" id="example-text-input" onChange={this.HandleNameInput.bind(this)} placeholder="Category name" required />
                                            </div>
                                        </div>

                                        {this.state.error1 ?
                                            <p style={{ color: 'red' }}>{this.state.error1}</p>
                                            : null
                                        }
                                        <div id="err">{this.state.error1}</div>

                                        {/* <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Discription</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="discription" type="text" id="example-text-input" />
                                            </div>
                                        </div> */}

                                        {/* <div class="form-group row">
                                            <label for="example-email-input" class="col-sm-2 col-form-label">Slug</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="slug" type="text" id="example-email-input" />
                                            </div>
                                        </div> */}

                                        <div class="form-group row input-margin">
                                            <label for="example-text-input" class="col-sm-2 col-form-label">Count</label>
                                            <div class="col-sm-10">
                                                <input class="form-control" name="count" type="number" id="example-text-input" onChange={this.HandleCountInput.bind(this)} placeholder="Total promotions count" required />
                                            </div>
                                        </div>

                                        {this.state.error2 ?
                                            <p style={{ color: 'red' }}>{this.state.error2}</p>
                                            : null
                                        }
                                        <div id="err">{this.state.error2}</div>
                                       
                                         <div class="form-group row">
                                            <div class="button-align">
                                                <button type="submit" class="btn btn-danger waves-effect waves-light submit-button" onClick={this.HandleBtnSubmitClick.bind(this)} >Submit</button>
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

export default CreateCategory

