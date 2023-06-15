import 'bootstrap/dist/css/bootstrap.min.css'

const registerContent =[
    {
        id:'UsernameInput',
        name:'Username',
        type: 'text'
    },
    {
        id:'PasswordInput',
        name:'Password',
        type: 'password'
    },
    {
        id:'ConPasswordInput',
        name:'Confirmation Password',
        type: 'password'
    },
    {
        id:'EmailInput',
        name:'Email',
        type: 'email'
    },
    {
        id:'PhoneInput',
        name:'Phone number',
        type: 'tel'
    },
    {
        id:'DepartmentInput',
        name:'Department',
        type: 'text'
    }
]

function RegisterTextfield(props){
    const {id, name, type} = props.content
    return(
        <div className="col-md-12 mb-3">
            <label htmlFor={id} className="form-label">{name}</label>
            <input type={type} id={id} className="form-control" aria-labelledby="passwordHelpBlock"/>
        </div>
    )
}


export default function RegisterForm(){
    return(
        <div className='card w-50 m-auto position-absolute top-50 start-50 translate-middle d-flex justify-content-center'>
            <div className="card-header">
                <h5>Registration Form</h5>
            </div>
            <div className='card-body'>
                <form action='' method='post'>
                    {registerContent.map(content=>{
                        return <RegisterTextfield key={content.id} content={content}/>
                        })
                    }
                    <div>
                      <button type="submit" className="btn btn-primary" name = "submit" id='RegisterSubmit'>Add User</button>
                    </div>
                </form>
            </div>
        </div>
        
    )
}