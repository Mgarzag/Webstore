import React, { Component } from 'react';
import './styles.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
    render () {
        return (
            <>
            <div className="" id="modalRegisterForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header text-center">
                        <h4 className="modal-title w-100 font-weight-bold">Thank you for returning</h4>
        
                    </div>
                    <div class="modal-body mx-3">
                        
                        <div class="md-form mb-5">
                        <i class="fas fa-envelope prefix grey-text"></i>
                        <input type="email" id="orangeForm-email" class="form-control validate" />
                        <label data-error="wrong" data-success="right" for="orangeForm-email">Your email</label>
                        </div>

                        <div class="md-form mb-4">
                        <i class="fas fa-lock prefix grey-text"></i>
                        <input type="password" id="orangeForm-pass" class="form-control validate"/>
                        <label data-error="wrong" data-success="right" for="orangeForm-pass">Your password</label>
                        </div>

                    </div>

                    <br />

                    <div class="modal-footer d-flex justify-content-center">
                        <button type="submit" class="btn btn-deep-orange">Login</button>
                    </div>
                    </div>
                </div>
            </div>
            </>
             );
        }
   }


export default Login;