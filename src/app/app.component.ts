import { Component,ViewContainerRef,ComponentFactoryResolver } from '@angular/core';
import { UsersDataService } from './users-data.service';
 import {FormControl,FormGroup,Validators} from '@angular/forms';

 interface dataType{
  name:string,
  id:number,
  indian:boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  //Two way binding and getting value of input box on screen
  //   currentValue=""
  //     getVal(val:string)
  //     {
  //       console.log(val)
  //       this.currentValue=val
  //     }


  //  // Property banding can handle disable but interpolation cannot 
  //   disabledBox=true
  //   name="Satendra Patel"
  //     enableBox (){
  //   this.disabledBox=false
  //   }


  //  // If Condition in Angular Eg:1
  //   show=true

  //  // If Condition in Angular Eg:2
  //   show="red";


  //   //[ngSwitch] case in Angular
  //   color="green"


  //    // ngFor for the array of the object
  //     arr=["Satendra","Naresh","Abhishek"]

  //     data=[
  //       {
  //         name:'Satendra Patel',
  //         age:24
  //       },
  //       {
  //         name: 'Naresh Patel',
  //         age: 23
  //       },
  //       {
  //         name: 'Abhishek Patel',
  //         age: 22
  //       }
  //     ]



  //     //Simple form 
  //   getUserValue(value:any){
  // console.log(value)
  //   }



  //   //Style Binding
  // color="pink";
  // err=true
  // updateColor(){
  //   this.color="blue"
  // }



  // Sending data from app component to child component
  // data="satendra patel"

  //Sending data from Parent to Child
  // parentComponent(data:any){
  //   console.warn(data)
  // }




  // Pips in Angular
  // name="Satendra Patel"
  // today=Date.now()
  // val=10



  //Services= It helps in the manipulation of DOM and html
  // name = ""
  // constructor(private user: UsersDataService) {
  //   console.log(this.user.getData)
  //   let data = this.user.getData
  //   this.name = data.name
  // }

  




  //Fetching the data from API
// data=[];
//   constructor(private user:UsersDataService){
       
//     this.user.getData().subscribe(data=>{
//       console.log(data)
//      this.data=data
//     })
//   }


//Modal
// getData(){
//   const data={
//     name:'satendra',
//     id:100,
//     Indian:false
//   }
//   return data
// }



//Lazy Loading component in Angular

// constructor(private viewContainer:ViewContainerRef, private cfr:ComponentFactoryResolver ){}
// async loadAdmin(){
//   this.viewContainer.clear(); 
//   const {AdminListComponent} =await import('./admin-list/admin-list.component')
//   this.viewContainer.createComponent(
//     this.cfr.resolveComponentFactory(AdminListComponent)
//   )
// }

//   async loadUser() {
//     this.viewContainer.clear();
//     const {UserListComponent } = await import('./user-list/user-list.component')
//     this.viewContainer.createComponent(
//       this.cfr.resolveComponentFactory(UserListComponent)
//     )
//   }


//Template driven form
// onSubmit(data:any){
//   console.warn(data);
// }


//   loginForm=new FormGroup({
//     email:new FormControl('',Validators.required),
//     password:new FormControl('')
//   })

// get email(){
//   return this.loginForm.get('email')
// }



//Angular Reactive form validation
// onSubmit(data:any){
// console.log(data)
// }


//Prefilled Angular form value
// userData={
//   email:"test@gmail.com",
//   password:"1234",
//   address:"Uttar Jhitkaiya Kalaiya-16 Nepal ",
//   phone: "9999999999"
// }





loginForm=new FormGroup({
  email:new FormControl('Satendra') ,
  password:new FormControl('satendra')
})

result(){
  console.log(this.loginForm.value)
}

}