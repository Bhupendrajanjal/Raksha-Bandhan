let cl =console.log;

const loginForm = document.getElementById('loginForm');

const emailControl = document.getElementById('email')

const passworldControl = document.getElementById('Passworld');

let obj=[{
    email:"1234567",
    passworld:"1234567",
},

{
    email :"bhupendra@1",
    passworld:"pooja@123",
}
]


const onlogin = (eve)=>{
    eve.preventDefault();

   setTimeout(()=>{
    let emailval = emailControl.value;
    let passworldval = passworldControl.value;
    


    let isEmailExist;
    obj.forEach(acc=>{
        if(emailval === acc.email){
            isEmailExist = acc
            Swal.fire({
                icon: 'success',
                title: 'Oops...',
                text: 'SuccessFully Login',
                footer: '<a href="">Why do I have this issue?</a>',
                timer:1500,
              }) 
        }

        
    })

    if(isEmailExist){
        //check password 
        if(isEmailExist.passworld === passworldval ){
            redirecttodashBodard()
        }
        else{
           Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>',
            timer:1500,
          }) 
        }
        

    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something Went Wrong !!!',
            footer: '<a href="">Why do I have this issue?</a>',
            timer:1500,
          })

    }


   },2000)

   

}


function redirecttodashBodard(){
    // cl('dashboard is loaded')

  window.location.href='dashboard.html'

}


loginForm.addEventListener("submit", onlogin)