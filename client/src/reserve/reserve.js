import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./reserve.css";



export function Reserve() {
    const datepicker = datepicker({
        clearBtn: true,
        format: "dd/mm/yyyy",
    
    


        // reservationDate.on('change', function() {
        // var pickedDate = input.val();
        // pickedDate.html(pickedDate);
    });


return(
    <div>
        <div className="container py-5">
            <header className="text-center">
                <h1 className="display-4 font-weight-bold">Bootstrap Datepicker</h1>
                <p className="font-italic text-muted mb-0">Create a nicely styled reservation form using Bootstrap 4 and <a href="https://github.com/uxsolutions/bootstrap-datepicker" class="text-muted">Bootstrap datepicker</a>.</p>
                <p className="font-italic text-muted">Snippet By <a href="https://bootstrapious.com" class="text-muted">
                    <u>Outtline</u></a>
                </p>
            </header>
        </div>


        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="py-4 text-center"><i className="fa fa-calendar fa-5x"></i></div>

            
                    <div class="form-group mb-4">
                        <div className="datepicker date input-group p-0 shadow-sm">
                            <input type="text" placeholder="Choose a reservation date" className="form-control py-4 px-4" />
                        <div className="input-group-append"><span className="input-group-text px-4"><i className="fa fa-clock-o"></i></span></div>
                    </div>
                </div>

                    <div className="text-center">
                        <p class="font-italic text-muted mb-0">Your reservation day is</p>
                        <h4 className="font-weight-bold text-uppercase mb-3">Not set yet</h4>
                        <a className="btn btn-primary btn-sm px-4 rounded-pill text-uppercase font-weight-bold shadow-sm">Confirm Reservation</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
};