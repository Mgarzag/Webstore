
import React, { Component } from 'react';
import './styles.scss';

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }

    }


    handleSignup = () => {
        fetch("/merchants", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        })
    }

    render () {
        return (
            <>
            <div className="" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header text-center">
                        <h4 className="modal-title w-100 font-weight-bold">Sign up</h4>
        
                    </div>
                    <div class="modal-body mx-3">
                        
                        <div class="md-form mb-5">
                        <i class="fas fa-envelope prefix grey-text"></i>
                        <input value={this.state.email} onChange={(event) => this.setState({email: event.target.value})} type="email" id="orangeForm-email" class="form-control validate" />
                        <label data-error="wrong" data-success="right" for="orangeForm-email">Your email</label>
                        </div>

                        <div class="md-form mb-4">
                        <i class="fas fa-lock prefix grey-text"></i>
                        <input type="password" value={this.state.password} onChange={(event) => this.setState({password: event.target.value})} id="orangeForm-pass" class="form-control validate"/>
                        <label data-error="wrong" data-success="right" for="orangeForm-pass">Your password</label>
                        </div>

                        <div class="md-form mb-4">
                        <i class="fas fa-lock prefix grey-text"></i>
                        <input type="password" id="orangeForm-pass2" class="form-control validate"/>
                        <label data-error="wrong" data-success="right" for="orangeForm-pass">Confirm Password</label>
                        </div>

                    </div>

                    <br />

                    <div class="modal-footer d-flex justify-content-center">
                        <button onClick={this.handleSignup} class="btn btn-deep-orange">Sign up</button>
                    </div>
                    </div>
                </div>
            </div>
            
                <div class="text-center">
                <a href="login" class="btn btn-default btn-rounded mb-4" data-toggle="modal" data-target="#modalRegisterForm">
                    </a>
                </div>
            </>
             );
        }
   }


export default Registration;
