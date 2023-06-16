import {Container, TextField, CssBaseline, Typography, Grid, Box, Button, Link} from '@mui/material';


const registerContent =[
    {
        id:'fnameInput',
        autocomplete: "given-name",
        name:'firstname',
        label: 'First Name',
        type :'text'
    },
    {
        id:'lnameInput',
        autocomplete: "family-name",
        name:'lastname',
        label: 'Last Name',
        type:'text'
    },
    {
        id:'passwordInput',
        autocomplete: "password",
        name:'password',
        label: 'Password',
        type:'password'
    },
    {
        id:'cPasswordInput',
        autocomplete: "Confirm-Password",
        name:'confirmPassword',
        label: 'Confirm Password',
        type:'password'
    },
    {
        id:'email',
        autocomplete: "email",
        name:'email',
        label: 'Email Address',
        type:'email'
    },
    {
        id:'phoneInput',
        autocomplete: "phone-number",
        name:'phone',
        label: 'Phone Number',
        type:'tel'
    },
    {
        id:'departmentInput',
        autocomplete: "department",
        name:'department',
        label: 'Department',
        type:'text'
    }
]

function RegisterTextfield(props){
    const {id, name, autocomplete, label, type} = props.content
    return(
        <Grid item >
            <TextField autoComplete={autocomplete} type={type} name={name} required fullWidth id={id} label={label} sx={{mt: 3}} autoFocus/>
        </Grid>
    )
}


export default function RegisterForm(){
    // contructor(props){
    //     super (props)
    //     this.state={
    //         username :"",
    //         password:"",
    //         email:"",
    //         phone:"",
    //         department:""
    //     }
    // }
    return(
        <Container component="main" maxWidth="sm" sx={{mt: 4, mb:5}}  >
            <CssBaseline/>
                <Typography component="h1" variant='h5' align='center'>Registration Form</Typography>
                <Box component='form' >
                    {registerContent.map(content=>{
                        return <RegisterTextfield key={content.id} content={content}/>
                        })
                    }
                    <Button type="submit" variant="contained" sx={{mt: 3}} fullWidth>Add User</Button>
                    <Grid item justifyContent='flex-end' sx={{mt:2}}>
                        <Typography>Already have an account?<Link href="" variant='body2'>Sign in</Link></Typography>
                    </Grid>
                    
                </Box>
                
        </Container>
        
    )
}