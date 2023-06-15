import 'bootstrap/dist/css/bootstrap.min.css'

function LoginForm(){
 return(
    <div className='card w-50 m-auto position-absolute top-50 start-50 translate-middle d-flex justify-content-center'>
            <div className="card-header">
                <h5>Registration Form</h5>
            </div>
            <div className='card-body'>
                <form action='' method='post'>
                    <div className="input-field">
                        <input type="email" className="form-control" placeholder="Email" name="useremail" id="LoginEmail"/>
                        <i class='bx bx-user'></i>
                    </div>

                    <div className="input-field">
                        <input type="password" className="form-control" placeholder="Password" name="userpassword" id="LoginPassword"/>
                        <i class='bx bx-lock-alt'></i>
                    </div>
                    <div>
                      <button type="submit" className="btn btn-primary" name = "submit" id='LoginSubmit'>Sign In</button>
                    </div>
                </form>
            </div>
        </div>
 )
}