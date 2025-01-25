let openacademy=()=>
{
    let event=document.querySelector(".content #event");
        event.style.display="none";
        
    let academy=document.querySelector("#academy");
    academy.style.display="block";
    academy.style.display="grid";
    
    
}
let openevent=()=>
    {
        let academy=document.querySelector("#academy");
        academy.style.display="none";
        let event=document.querySelector(".content #event");
        event.style.display="block";
        event.style.display="grid";
       
       
    }







    
let RegisterKaro=()=>
    {
      let username=document.querySelector("#Rname").value;
      let nameerr=document.querySelector("#Rname");
      let password=document.querySelector("#Rpass").value;
      let passworderr=document.querySelector("#Rpass");
      let cpassword=document.querySelector("#Rcpass").value;
      let cpassworderr=document.querySelector("#Rcpass");
      let error=document.querySelector("#error");
      
      
      if(username=="")
      {
      document.querySelector("#Rname").placeholder="Enter your valid Name";
      nameerr.style.borderColor="red";
      nameerr.style.outlineColor = "red";
      error.innerHTML="Enter Valid Name";
      error.style.color="red";
      error.style.fontSize="30px"
      return false;
    
      }
    
      else if(password=="")
      {
        document.querySelector("#Rpass").placeholder="Enter your valid Password";
        passworderr.style.borderColor="red";
        passworderr.style.outlineColor = "red";
        error.innerHTML="Enter Valid Password";
      error.style.color="red";
      error.style.fontSize="30px"
        return false;
      }
      
      else if(!
        (
             password.match(/[1234567890]/) 
             && 
             password.match(/[!@#$%^&*()]/) 
             && 
             password.match(/[a-z]/) 
             && 
             password.match(/[A-Z]/)
        ))
    {
      document.querySelector("#Rpass").placeholder="Enter your valid Password";
      passworderr.style.borderColor="red";
      error.innerHTML="Enter Valid Password";
      error.style.color="red";
      error.style.fontSize="30px"
      return false;
    }
    
    else if((cpassword!=password))
    {
      document.querySelector("#Rcpass").placeholder="Enter your Confirm same Password";
      cpassworderr.style.borderColor="red";
      error.innerHTML="Enter same Confirm  Password";
      error.style.color="red";
      error.style.fontSize="30px"
      return false;
    }
    let login=document.querySelector("#login");
      let reg=document.querySelector("#Register");
      login.style.display="block";
      reg.style.display="none";
      
    
      
      localStorage.setItem("name",username);
      localStorage.setItem("userpassword",password);
    
      return false;
      }
    
    

      
      let loginKaro=()=>
        {
          let logname=document.querySelector("#logname").value;
          let lnameerr=document.querySelector("#logname");
          let logpass=document.querySelector("#logpass").value;
          let lpasser=document.querySelector("#logpass");
          let error=document.querySelector("#error");
          let para3=localStorage.getItem("name");
          let para4=localStorage.getItem("userpassword");
          if(logname!=para3)
          {
          document.querySelector("#logname").placeholder="Enter your valid Username";
          lnameerr.style.borderColor="red";
          error.innerHTML="Enter valid Username";
        return false;
          }
          else if(logpass!=para4)
          {
          document.querySelector("#logpass").placeholder="Enter your Valid Password";
          lpasser.style.borderColor="red";
          error.innerHTML="Enter your Valid Password";
          return false;
          }
          let login=document.querySelector("#login");
          login.style.display="none";
      
        
          let yourprofile=document.querySelector(".btn");
          let proname=para3.slice(0,7);
          yourprofile.innerHTML=`Hello..<br>${proname}..`;
      
          return false;
        }
      
       
  
        let login=()=>
            {
              let login=document.querySelector("#login");
              let reg=document.querySelector("#Register");
              reg.style.display="none";
               login.style.display="block"
               login.style.display="flex";
            
            }
            let register=()=>
            {
              let login=document.querySelector("#login");
              let reg=document.querySelector("#Register");
              login.style.display="none";
              reg.style.display="block";
              reg.style.display="flex";
              
            }   
            
            

let registerPageHide=document.querySelector("#registerPageHide");
registerPageHide.addEventListener("click",function()
{
  let reg=document.querySelector("#Register");
  reg.style.display="none";
})

let loginPageHide=document.querySelector("#loginPageHide");
loginPageHide.addEventListener("click",function()
{
  let login=document.querySelector("#login");
  login.style.display="none";
})



let bookKaro4=()=>
    {
      let username=localStorage.name;
      let pass=localStorage.userpassword;
      let logname=document.querySelector("#logname").value;
      let lnameerr=document.querySelector("#logname");
      let logpass=document.querySelector("#logpass").value;
      let lpasser=document.querySelector("#logpass");
    
     
      if(username!=null  && pass!=null && logname!="" && logpass!="")
      {
      let bookKaro=document.querySelector("#freetrial");
      bookKaro.style.display="block";
      let homeclose=document.querySelector(".container1");
      homeclose.style.display="none";
      

      }
      else
      {
        alert("login First ");
        if(alert.value=true)
        {
          let login=document.querySelector("#login");
          login.style.display="block";
          login.style.display="flex";
        }
      }
      
      
     
     
    }









    let categoryOpen=()=>
    {
      let cat=document.querySelector("#category");
      let cat1=document.querySelector(" #close");
      let cat2=document.querySelector(" #open");
      cat.style.display="block";
      cat.style.display="flex";
      cat1.style.display="block";
       cat2.style.display="none"

    }

    let catclose=()=>
    {
      let cat=document.querySelector("#category");
      let cat1=document.querySelector("#close");
      let cat2=document.querySelector("#open");
      let cat3=document.querySelector("#cate");
      cat.style.display="none"
      cat2.style.display="block"
      cat1.style.display="none";
      cat3.style.display="flex";
      

      
      
    }




    let logout=()=>
      {
        localStorage.clear();
        confirm("Are you Sure want to Logout");
        if(confirm.value=true)
        {
          alert("you have logout Successfully...");
          location.reload()
        }
      }



      let cricket=()=>
      {
        let academy=document.querySelector("#academy");
        academy.style.display="block";
        academy.style.display="grid";
        let cat=document.querySelector("#category");
        cat.style.display="none";
        let crt=document.querySelector("#category #cricket").textContent;
        let a1=document.querySelector("#academy .box1 #ckt");
        let a2=document.querySelector("#academy .box2 #ckt");
        let a3=document.querySelector("#academy .box3 #ckt");
        let a4=document.querySelector("#academy .box4 #ckt");
        let a5=document.querySelector("#academy .box5 #ckt");
        let a6=document.querySelector("#academy .box6 #ckt");
        let a7=document.querySelector("#academy .box7 #ckt");
        let a8=document.querySelector("#academy .box8 #ckt");
        a1.innerHTML=crt;
        a2.innerHTML=crt;
        a3.innerHTML=crt;
        a4.innerHTML=crt;
        a5.innerHTML=crt;
        a6.innerHTML=crt;
        a7.innerHTML=crt;
        a8.innerHTML=crt;
      }

      let cricket1=()=>
        {
          let academy=document.querySelector("#academy");
          academy.style.display="block";
          academy.style.display="grid";
          let cat=document.querySelector("#category");
          cat.style.display="none";
          let crt=document.querySelector("#category #cricket1").textContent;
          let a1=document.querySelector("#academy .box1 #ckt");
          let a2=document.querySelector("#academy .box2 #ckt");
          let a3=document.querySelector("#academy .box3 #ckt");
          let a4=document.querySelector("#academy .box4 #ckt");
          let a5=document.querySelector("#academy .box5 #ckt");
          let a6=document.querySelector("#academy .box6 #ckt");
          let a7=document.querySelector("#academy .box7 #ckt");
          let a8=document.querySelector("#academy .box8 #ckt");
          a1.innerHTML=crt;
          a2.innerHTML=crt;
          a3.innerHTML=crt;
          a4.innerHTML=crt;
          a5.innerHTML=crt;
          a6.innerHTML=crt;
          a7.innerHTML=crt;
          a8.innerHTML=crt;
        }
  
        let cricket2=()=>
          {
            let academy=document.querySelector("#academy");
            academy.style.display="block";
            academy.style.display="grid";
            let cat=document.querySelector("#category");
            cat.style.display="none";
            let crt=document.querySelector("#category #cricket2").textContent;
            let a1=document.querySelector("#academy .box1 #ckt");
            let a2=document.querySelector("#academy .box2 #ckt");
            let a3=document.querySelector("#academy .box3 #ckt");
            let a4=document.querySelector("#academy .box4 #ckt");
            let a5=document.querySelector("#academy .box5 #ckt");
            let a6=document.querySelector("#academy .box6 #ckt");
            let a7=document.querySelector("#academy .box7 #ckt");
            let a8=document.querySelector("#academy .box8 #ckt");
            a1.innerHTML=crt;
            a2.innerHTML=crt;
            a3.innerHTML=crt;
            a4.innerHTML=crt;
            a5.innerHTML=crt;
            a6.innerHTML=crt;
            a7.innerHTML=crt;
            a8.innerHTML=crt;
          }
    
          let cricket3=()=>
            {
              let academy=document.querySelector("#academy");
              academy.style.display="block";
              academy.style.display="grid";
              let cat=document.querySelector("#category");
              cat.style.display="none";
              let crt=document.querySelector("#category #cricket3").textContent;
              let a1=document.querySelector("#academy .box1 #ckt");
              let a2=document.querySelector("#academy .box2 #ckt");
              let a3=document.querySelector("#academy .box3 #ckt");
              let a4=document.querySelector("#academy .box4 #ckt");
              let a5=document.querySelector("#academy .box5 #ckt");
              let a6=document.querySelector("#academy .box6 #ckt");
              let a7=document.querySelector("#academy .box7 #ckt");
              let a8=document.querySelector("#academy .box8 #ckt");
              a1.innerHTML=crt;
              a2.innerHTML=crt;
              a3.innerHTML=crt;
              a4.innerHTML=crt;
              a5.innerHTML=crt;
              a6.innerHTML=crt;
              a7.innerHTML=crt;
              a8.innerHTML=crt;
            }
      
            let cricket4=()=>
              {
                let academy=document.querySelector("#academy");
                academy.style.display="block";
                academy.style.display="grid";
                let cat=document.querySelector("#category");
                cat.style.display="none";
                let crt=document.querySelector("#category #cricket4").textContent;
                let a1=document.querySelector("#academy .box1 #ckt");
                let a2=document.querySelector("#academy .box2 #ckt");
                let a3=document.querySelector("#academy .box3 #ckt");
                let a4=document.querySelector("#academy .box4 #ckt");
                let a5=document.querySelector("#academy .box5 #ckt");
                let a6=document.querySelector("#academy .box6 #ckt");
                let a7=document.querySelector("#academy .box7 #ckt");
                let a8=document.querySelector("#academy .box8 #ckt");
                a1.innerHTML=crt;
                a2.innerHTML=crt;
                a3.innerHTML=crt;
                a4.innerHTML=crt;
                a5.innerHTML=crt;
                a6.innerHTML=crt;
                a7.innerHTML=crt;
                a8.innerHTML=crt;
              }
        
              let cricket5=()=>
                {
                  let academy=document.querySelector("#academy");
                  academy.style.display="block";
                  academy.style.display="grid";
                  let cat=document.querySelector("#category");
                  cat.style.display="none";
                  let crt=document.querySelector("#category #cricket5").textContent;
                  let a1=document.querySelector("#academy .box1 #ckt");
                  let a2=document.querySelector("#academy .box2 #ckt");
                  let a3=document.querySelector("#academy .box3 #ckt");
                  let a4=document.querySelector("#academy .box4 #ckt");
                  let a5=document.querySelector("#academy .box5 #ckt");
                  let a6=document.querySelector("#academy .box6 #ckt");
                  let a7=document.querySelector("#academy .box7 #ckt");
                  let a8=document.querySelector("#academy .box8 #ckt");
                  a1.innerHTML=crt;
                  a2.innerHTML=crt;
                  a3.innerHTML=crt;
                  a4.innerHTML=crt;
                  a5.innerHTML=crt;
                  a6.innerHTML=crt;
                  a7.innerHTML=crt;
                  a8.innerHTML=crt;
                }
          
                let cricket6=()=>
                  {
                    let academy=document.querySelector("#academy");
                    academy.style.display="block";
                    academy.style.display="grid";
                    let cat=document.querySelector("#category");
                    cat.style.display="none";
                    let crt=document.querySelector("#category #cricket6").textContent;
                    let a1=document.querySelector("#academy .box1 #ckt");
                    let a2=document.querySelector("#academy .box2 #ckt");
                    let a3=document.querySelector("#academy .box3 #ckt");
                    let a4=document.querySelector("#academy .box4 #ckt");
                    let a5=document.querySelector("#academy .box5 #ckt");
                    let a6=document.querySelector("#academy .box6 #ckt");
                    let a7=document.querySelector("#academy .box7 #ckt");
                    let a8=document.querySelector("#academy .box8 #ckt");
                    a1.innerHTML=crt;
                    a2.innerHTML=crt;
                    a3.innerHTML=crt;
                    a4.innerHTML=crt;
                    a5.innerHTML=crt;
                    a6.innerHTML=crt;
                    a7.innerHTML=crt;
                    a8.innerHTML=crt;
                  }
            
                  let cricket7=()=>
                    {
                      let academy=document.querySelector("#academy");
                      academy.style.display="block";
                      academy.style.display="grid";
                      let cat=document.querySelector("#category");
                      cat.style.display="none";
                      let crt=document.querySelector("#category #cricket7").textContent;
                      let a1=document.querySelector("#academy .box1 #ckt");
                      let a2=document.querySelector("#academy .box2 #ckt");
                      let a3=document.querySelector("#academy .box3 #ckt");
                      let a4=document.querySelector("#academy .box4 #ckt");
                      let a5=document.querySelector("#academy .box5 #ckt");
                      let a6=document.querySelector("#academy .box6 #ckt");
                      let a7=document.querySelector("#academy .box7 #ckt");
                      let a8=document.querySelector("#academy .box8 #ckt");
                      a1.innerHTML=crt;
                      a2.innerHTML=crt;
                      a3.innerHTML=crt;
                      a4.innerHTML=crt;
                      a5.innerHTML=crt;
                      a6.innerHTML=crt;
                      a7.innerHTML=crt;
                      a8.innerHTML=crt;
                    }
              
                    let cricket8=()=>
                      {
                        let academy=document.querySelector("#academy");
                        academy.style.display="block";
                        academy.style.display="grid";
                        let cat=document.querySelector("#category");
                        cat.style.display="none";
                        let crt=document.querySelector("#category #cricket8").textContent;
                        let a1=document.querySelector("#academy .box1 #ckt");
                        let a2=document.querySelector("#academy .box2 #ckt");
                        let a3=document.querySelector("#academy .box3 #ckt");
                        let a4=document.querySelector("#academy .box4 #ckt");
                        let a5=document.querySelector("#academy .box5 #ckt");
                        let a6=document.querySelector("#academy .box6 #ckt");
                        let a7=document.querySelector("#academy .box7 #ckt");
                        let a8=document.querySelector("#academy .box8 #ckt");
                        a1.innerHTML=crt;
                        a2.innerHTML=crt;
                        a3.innerHTML=crt;
                        a4.innerHTML=crt;
                        a5.innerHTML=crt;
                        a6.innerHTML=crt;
                        a7.innerHTML=crt;
                        a8.innerHTML=crt;
                      }
                
                      let cricket9=()=>
                        {
                          let academy=document.querySelector("#academy");
                          academy.style.display="block";
                          academy.style.display="grid";
                          let cat=document.querySelector("#category");
                          cat.style.display="none";
                          let crt=document.querySelector("#category #cricket9").textContent;
                          let a1=document.querySelector("#academy .box1 #ckt");
                          let a2=document.querySelector("#academy .box2 #ckt");
                          let a3=document.querySelector("#academy .box3 #ckt");
                          let a4=document.querySelector("#academy .box4 #ckt");
                          let a5=document.querySelector("#academy .box5 #ckt");
                          let a6=document.querySelector("#academy .box6 #ckt");
                          let a7=document.querySelector("#academy .box7 #ckt");
                          let a8=document.querySelector("#academy .box8 #ckt");
                          a1.innerHTML=crt;
                          a2.innerHTML=crt;
                          a3.innerHTML=crt;
                          a4.innerHTML=crt;
                          a5.innerHTML=crt;
                          a6.innerHTML=crt;
                          a7.innerHTML=crt;
                          a8.innerHTML=crt;
                        }
                  
                        let cricket10=()=>
                          {
                            let academy=document.querySelector("#academy");
                            academy.style.display="block";
                            academy.style.display="grid";
                            let cat=document.querySelector("#category");
                            cat.style.display="none";
                            let crt=document.querySelector("#category #cricket10").textContent;
                            let a1=document.querySelector("#academy .box1 #ckt");
                            let a2=document.querySelector("#academy .box2 #ckt");
                            let a3=document.querySelector("#academy .box3 #ckt");
                            let a4=document.querySelector("#academy .box4 #ckt");
                            let a5=document.querySelector("#academy .box5 #ckt");
                            let a6=document.querySelector("#academy .box6 #ckt");
                            let a7=document.querySelector("#academy .box7 #ckt");
                            let a8=document.querySelector("#academy .box8 #ckt");
                            a1.innerHTML=crt;
                            a2.innerHTML=crt;
                            a3.innerHTML=crt;
                            a4.innerHTML=crt;
                            a5.innerHTML=crt;
                            a6.innerHTML=crt;
                            a7.innerHTML=crt;
                            a8.innerHTML=crt;
                          }
                    
                          let cricket11=()=>
                            {
                              let academy=document.querySelector("#academy");
                              academy.style.display="block";
                              academy.style.display="grid";
                              let cat=document.querySelector("#category");
                              cat.style.display="none";
                              let crt=document.querySelector("#category #cricket11").textContent;
                              let a1=document.querySelector("#academy .box1 #ckt");
                              let a2=document.querySelector("#academy .box2 #ckt");
                              let a3=document.querySelector("#academy .box3 #ckt");
                              let a4=document.querySelector("#academy .box4 #ckt");
                              let a5=document.querySelector("#academy .box5 #ckt");
                              let a6=document.querySelector("#academy .box6 #ckt");
                              let a7=document.querySelector("#academy .box7 #ckt");
                              let a8=document.querySelector("#academy .box8 #ckt");
                              a1.innerHTML=crt;
                              a2.innerHTML=crt;
                              a3.innerHTML=crt;
                              a4.innerHTML=crt;
                              a5.innerHTML=crt;
                              a6.innerHTML=crt;
                              a7.innerHTML=crt;
                              a8.innerHTML=crt;
                            }
                      
                            let cricket12=()=>
                              {
                                let academy=document.querySelector("#academy");
                                academy.style.display="block";
                                academy.style.display="grid";
                                let cat=document.querySelector("#category");
                                cat.style.display="none";
                                let crt=document.querySelector("#category #cricket12").textContent;
                                let a1=document.querySelector("#academy .box1 #ckt");
                                let a2=document.querySelector("#academy .box2 #ckt");
                                let a3=document.querySelector("#academy .box3 #ckt");
                                let a4=document.querySelector("#academy .box4 #ckt");
                                let a5=document.querySelector("#academy .box5 #ckt");
                                let a6=document.querySelector("#academy .box6 #ckt");
                                let a7=document.querySelector("#academy .box7 #ckt");
                                let a8=document.querySelector("#academy .box8 #ckt");
                                a1.innerHTML=crt;
                                a2.innerHTML=crt;
                                a3.innerHTML=crt;
                                a4.innerHTML=crt;
                                a5.innerHTML=crt;
                                a6.innerHTML=crt;
                                a7.innerHTML=crt;
                                a8.innerHTML=crt;
                              }
                        
                              let cricket13=()=>
                                {
                                  let academy=document.querySelector("#academy");
                                  academy.style.display="block";
                                  academy.style.display="grid";
                                  let cat=document.querySelector("#category");
                                  cat.style.display="none";
                                  let crt=document.querySelector("#category #cricket13").textContent;
                                  let a1=document.querySelector("#academy .box1 #ckt");
                                  let a2=document.querySelector("#academy .box2 #ckt");
                                  let a3=document.querySelector("#academy .box3 #ckt");
                                  let a4=document.querySelector("#academy .box4 #ckt");
                                  let a5=document.querySelector("#academy .box5 #ckt");
                                  let a6=document.querySelector("#academy .box6 #ckt");
                                  let a7=document.querySelector("#academy .box7 #ckt");
                                  let a8=document.querySelector("#academy .box8 #ckt");
                                  a1.innerHTML=crt;
                                  a2.innerHTML=crt;
                                  a3.innerHTML=crt;
                                  a4.innerHTML=crt;
                                  a5.innerHTML=crt;
                                  a6.innerHTML=crt;
                                  a7.innerHTML=crt;
                                  a8.innerHTML=crt;
                                }
                          
                                let cricket14=()=>
                                  {
                                    let academy=document.querySelector("#academy");
                                    academy.style.display="block";
                                    academy.style.display="grid";
                                    let cat=document.querySelector("#category");
                                    cat.style.display="none";
                                    let crt=document.querySelector("#category #cricket14").textContent;
                                    let a1=document.querySelector("#academy .box1 #ckt");
                                    let a2=document.querySelector("#academy .box2 #ckt");
                                    let a3=document.querySelector("#academy .box3 #ckt");
                                    let a4=document.querySelector("#academy .box4 #ckt");
                                    let a5=document.querySelector("#academy .box5 #ckt");
                                    let a6=document.querySelector("#academy .box6 #ckt");
                                    let a7=document.querySelector("#academy .box7 #ckt");
                                    let a8=document.querySelector("#academy .box8 #ckt");
                                    a1.innerHTML=crt;
                                    a2.innerHTML=crt;
                                    a3.innerHTML=crt;
                                    a4.innerHTML=crt;
                                    a5.innerHTML=crt;
                                    a6.innerHTML=crt;
                                    a7.innerHTML=crt;
                                    a8.innerHTML=crt;
                                  }
                            
                                  let cricket15=()=>
                                    {
                                      let academy=document.querySelector("#academy");
                                      academy.style.display="block";
                                      academy.style.display="grid";
                                      let cat=document.querySelector("#category");
                                      cat.style.display="none";
                                      let crt=document.querySelector("#category #cricket15").textContent;
                                      let a1=document.querySelector("#academy .box1 #ckt");
                                      let a2=document.querySelector("#academy .box2 #ckt");
                                      let a3=document.querySelector("#academy .box3 #ckt");
                                      let a4=document.querySelector("#academy .box4 #ckt");
                                      let a5=document.querySelector("#academy .box5 #ckt");
                                      let a6=document.querySelector("#academy .box6 #ckt");
                                      let a7=document.querySelector("#academy .box7 #ckt");
                                      let a8=document.querySelector("#academy .box8 #ckt");
                                      a1.innerHTML=crt;
                                      a2.innerHTML=crt;
                                      a3.innerHTML=crt;
                                      a4.innerHTML=crt;
                                      a5.innerHTML=crt;
                                      a6.innerHTML=crt;
                                      a7.innerHTML=crt;
                                      a8.innerHTML=crt;
                                    }
                              
                                    let cricket16=()=>
                                      {
                                        let academy=document.querySelector("#academy");
                                        academy.style.display="block";
                                        academy.style.display="grid";
                                        let cat=document.querySelector("#category");
                                        cat.style.display="none";
                                        let crt=document.querySelector("#category #cricket16").textContent;
                                        let a1=document.querySelector("#academy .box1 #ckt");
                                        let a2=document.querySelector("#academy .box2 #ckt");
                                        let a3=document.querySelector("#academy .box3 #ckt");
                                        let a4=document.querySelector("#academy .box4 #ckt");
                                        let a5=document.querySelector("#academy .box5 #ckt");
                                        let a6=document.querySelector("#academy .box6 #ckt");
                                        let a7=document.querySelector("#academy .box7 #ckt");
                                        let a8=document.querySelector("#academy .box8 #ckt");
                                        a1.innerHTML=crt;
                                        a2.innerHTML=crt;
                                        a3.innerHTML=crt;
                                        a4.innerHTML=crt;
                                        a5.innerHTML=crt;
                                        a6.innerHTML=crt;
                                        a7.innerHTML=crt;
                                        a8.innerHTML=crt;
                                      }
                                
                                      let cricket17=()=>
                                        {
                                          let academy=document.querySelector("#academy");
                                          academy.style.display="block";
                                          academy.style.display="grid";
                                          let cat=document.querySelector("#category");
                                          cat.style.display="none";
                                          let crt=document.querySelector("#category #cricket17").textContent;
                                          let a1=document.querySelector("#academy .box1 #ckt");
                                          let a2=document.querySelector("#academy .box2 #ckt");
                                          let a3=document.querySelector("#academy .box3 #ckt");
                                          let a4=document.querySelector("#academy .box4 #ckt");
                                          let a5=document.querySelector("#academy .box5 #ckt");
                                          let a6=document.querySelector("#academy .box6 #ckt");
                                          let a7=document.querySelector("#academy .box7 #ckt");
                                          let a8=document.querySelector("#academy .box8 #ckt");
                                          a1.innerHTML=crt;
                                          a2.innerHTML=crt;
                                          a3.innerHTML=crt;
                                          a4.innerHTML=crt;
                                          a5.innerHTML=crt;
                                          a6.innerHTML=crt;
                                          a7.innerHTML=crt;
                                          a8.innerHTML=crt;
                                        }
                                  
                                        let cricket18=()=>
                                          {
                                            let academy=document.querySelector("#academy");
                                            academy.style.display="block";
                                            academy.style.display="grid";
                                            let cat=document.querySelector("#category");
                                            cat.style.display="none";
                                            let crt=document.querySelector("#category #cricket18").textContent;
                                            let a1=document.querySelector("#academy .box1 #ckt");
                                            let a2=document.querySelector("#academy .box2 #ckt");
                                            let a3=document.querySelector("#academy .box3 #ckt");
                                            let a4=document.querySelector("#academy .box4 #ckt");
                                            let a5=document.querySelector("#academy .box5 #ckt");
                                            let a6=document.querySelector("#academy .box6 #ckt");
                                            let a7=document.querySelector("#academy .box7 #ckt");
                                            let a8=document.querySelector("#academy .box8 #ckt");
                                            a1.innerHTML=crt;
                                            a2.innerHTML=crt;
                                            a3.innerHTML=crt;
                                            a4.innerHTML=crt;
                                            a5.innerHTML=crt;
                                            a6.innerHTML=crt;
                                            a7.innerHTML=crt;
                                            a8.innerHTML=crt;
                                          }
                                    
                                          let cricket19=()=>
                                            {
                                              let academy=document.querySelector("#academy");
                                              academy.style.display="block";
                                              academy.style.display="grid";
                                              let cat=document.querySelector("#category");
                                              cat.style.display="none";
                                              let crt=document.querySelector("#category #cricket19").textContent;
                                              let a1=document.querySelector("#academy .box1 #ckt");
                                              let a2=document.querySelector("#academy .box2 #ckt");
                                              let a3=document.querySelector("#academy .box3 #ckt");
                                              let a4=document.querySelector("#academy .box4 #ckt");
                                              let a5=document.querySelector("#academy .box5 #ckt");
                                              let a6=document.querySelector("#academy .box6 #ckt");
                                              let a7=document.querySelector("#academy .box7 #ckt");
                                              let a8=document.querySelector("#academy .box8 #ckt");
                                              a1.innerHTML=crt;
                                              a2.innerHTML=crt;
                                              a3.innerHTML=crt;
                                              a4.innerHTML=crt;
                                              a5.innerHTML=crt;
                                              a6.innerHTML=crt;
                                              a7.innerHTML=crt;
                                              a8.innerHTML=crt;
                                            }
                                      
                                            let cricket20=()=>
                                              {
                                                let academy=document.querySelector("#academy");
                                                academy.style.display="block";
                                                academy.style.display="grid";
                                                let cat=document.querySelector("#category");
                                                cat.style.display="none";
                                                let crt=document.querySelector("#category #cricket20").textContent;
                                                let a1=document.querySelector("#academy .box1 #ckt");
                                                let a2=document.querySelector("#academy .box2 #ckt");
                                                let a3=document.querySelector("#academy .box3 #ckt");
                                                let a4=document.querySelector("#academy .box4 #ckt");
                                                let a5=document.querySelector("#academy .box5 #ckt");
                                                let a6=document.querySelector("#academy .box6 #ckt");
                                                let a7=document.querySelector("#academy .box7 #ckt");
                                                let a8=document.querySelector("#academy .box8 #ckt");
                                                a1.innerHTML=crt;
                                                a2.innerHTML=crt;
                                                a3.innerHTML=crt;
                                                a4.innerHTML=crt;
                                                a5.innerHTML=crt;
                                                a6.innerHTML=crt;
                                                a7.innerHTML=crt;
                                                a8.innerHTML=crt;
                                              }
                                              let shownumber=()=>
                                                {
                                                  let show=document.querySelector("#freetrial .second .show");
                                                  show.innerHTML="7803869841";
                                                  
                                                }

                                                let book=()=>
                                                {
                                                  let choose=document.querySelector("#chooseTrial");
                                                  let free=document.querySelector("#freetrial");
                                                  choose.style.display="block";
                                                  free.style.display="none";
                                                }                            
                                                                                                                                                                                                                                                                                                                                                                    
let firstNext=()=>
{
  let firstNext1=document.querySelector("#chooseTrial .choose .date");
  firstNext1.style.display="none";
  let firstNext=document.querySelector("#chooseTrial .choose .categorys");
  firstNext.style.display="block";
}

let secondNext=()=>
  {
    let firstNext=document.querySelector("#chooseTrial .choose .categorys");
    firstNext.style.display="none";
    let firstNext1=document.querySelector("#chooseTrial .choose .slot");
    firstNext1.style.display="block";
  }
  let secondPre=()=>
    {
      let firstNext=document.querySelector("#chooseTrial .choose .categorys");
      firstNext.style.display="none";
      let firstNext1=document.querySelector("#chooseTrial .choose .date");
      firstNext1.style.display="block";
    }

    let thirdPre=()=>
      {

        let firstNext1=document.querySelector("#chooseTrial .choose .slot");
        firstNext1.style.display="none";
        let firstNext=document.querySelector("#chooseTrial .choose .categorys");
        firstNext.style.display="block";
      }



      let fillform=()=>
      {
        
        let uma1=document.querySelector("#chooseTrial");
        uma1.style.display="none";
        let uma=document.querySelector("#bookingform");
        uma.style.display="block";
      }