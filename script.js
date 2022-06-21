document.addEventListener('DOMContentLoaded', reload)
function reload(e)
{   

    axios.get("https://crudcrud.com/api/5a4462c3e0c74bb7b3faa1e927baeaf2/appointmentData").
    then(displayData =>
        {
            for(let i=0; i<displayData.data.length; i++)
            {
                showOutput(displayData.data[i])
            }
        })
}

let getCallBtn = document.getElementById('clicked')
getCallBtn.addEventListener('click', postUserData)
function postUserData(event01)
{   
    event01.preventDefault()
    console.log('Button is working')
    let canName = document.getElementById('fname').value
    let canEmail = document.getElementById('email').value              
    let canPhone = document.getElementById('phone').value
    let canTime = document.getElementById('birthdaytime').value
    let userObj = {"Name": canName, "Email":canEmail,"Phone":canPhone,"Time":canTime}
    function addUserToCrudCrud()
    {
        axios.post("https://crudcrud.com/api/5a4462c3e0c74bb7b3faa1e927baeaf2/appointmentData", userObj)
    }
    addUserToCrudCrud()
    showOutput(userObj)

}

function showOutput(obj)
{
    
    let mainClass = document.getElementById('users')
    let childClass = document.createElement('li')
    childClass.textContent = `${obj.Name}  -  ${obj.Email}  -  ${obj.Phone}  -  ${obj.Time}`
    mainClass.append(childClass)
    let editBtn = document.createElement('button')
    editBtn.textContent = 'Edit'
    editBtn.style.backgroundColor = 'green'
    childClass.appendChild(editBtn)
    let delBtn = document.createElement('button')
    delBtn.textContent = 'Delete'
    delBtn.style.backgroundColor = 'red'
    childClass.appendChild(delBtn)
    delBtn.addEventListener('click', ()=>
    {
        if(confirm('Delete User Info?'))
            {
                axios.get('https://crudcrud.com/api/5a4462c3e0c74bb7b3faa1e927baeaf2/appointmentData')
                .then(deleteObj =>
                    {
                        let results = [];

                        let toSearch = obj.Email;

                        for(var i=0; i<deleteObj.data.length; i++) {
                        for(key in deleteObj.data[i]) {
                            if(deleteObj.data[i][key].indexOf(toSearch)!=-1) {
                            results.push(deleteObj.data[i]);
                            }
                        }
                        }
                        let delId = results[0]._id
                        console.log(delId)
                        let delUrl = `https://crudcrud.com/api/5a4462c3e0c74bb7b3faa1e927baeaf2/appointmentData/${delId}`
                        console.log(delUrl)
                        axios.delete(delUrl)
 
                    })


                mainClass.removeChild(childClass)
                
                
            }
             }
             )
    editBtn.addEventListener('click', ()=>
    {   
                
        
        let newName = prompt('Add Name')
        let newEmail = prompt('Add Email')
        let newPhone = prompt('Add Phone Number')
        let newTime = prompt('Add Meeting Time','YYYY-MM-DD HH:MM')
        childClass.textContent = `${newName}  -  ${newEmail}  -  ${newPhone}  -  ${newTime}`          
        let obj01 = {Name:newName,Email:newEmail,Phone:newPhone,Time:newTime}
        childClass.append(delBtn)
        childClass.appendChild(editBtn)


             })
         }







// document.addEventListener('DOMContentLoaded', Reload)
// function Reload(event01)
// {   
//     if(localStorage.length!=0)
//     {

//         for (let i = 0; i < localStorage.length; i++) 
//         {
//             const key = localStorage.key(i);
//             let x = localStorage.getItem(key)
//             let y = JSON.parse(x)
//             function fillList(object01)
//             {
//                 let mainClass = document.getElementById('users')
//                 let childClass = document.createElement('li')
//                 childClass.textContent = `${y.Name}  -  ${y.Email}  -  ${y.Phone}  -  ${y.Time}`
//                 mainClass.append(childClass)
                
//                 let editBtn = document.createElement('button')
//                 editBtn.textContent = 'Edit'
//                 editBtn.style.backgroundColor = 'green'
//                 editBtn.style.position = 'absolute'
//                 editBtn.style.cssFloat = 'right'
//                 childClass.appendChild(editBtn)
//                 let delBtn = document.createElement('button')
//                 delBtn.textContent = 'Delete'
//                 delBtn.style.backgroundColor = 'red'
//                 delBtn.style.position = 'absolute'
//                 delBtn.style.marginLeft = '350px'
//                 childClass.appendChild(delBtn)
//                 delBtn.addEventListener('click', ()=>
//                 {
//                     if(confirm('Delete User Info?'))
//                     {
//                         mainClass.removeChild(childClass)
//                         localStorage.removeItem(y.Email)
//                     }
//                 })
//                 editBtn.addEventListener('click', ()=>
//                 {   
                    
//                     localStorage.removeItem(y.Email)
//                     let newName = prompt('Add Name',y.Name)
//                     let newEmail = prompt('Add Email',y.Email)
//                     let newPhone = prompt('Add Phone Number',y.Phone)
//                     let newTime = prompt('Add Meeting Time','YYYY-MM-DD HH:MM')
//                     childClass.textContent = `${newName}  -  ${newEmail}  -  ${newPhone}  -  ${newTime}`          
//                     let obj01 = {Name:newName,Email:newEmail,Phone:newPhone,Time:newTime}
//                     let obj01_serialized = JSON.stringify(obj01)
//                     localStorage.setItem(newEmail,obj01_serialized)
//                     childClass.append(delBtn)
//                     childClass.appendChild(editBtn)


//                 })
//             }

//             fillList(y)
        
//         }  
//     }         
        
//         let getCallBtn = document.getElementById('clicked')
//         getCallBtn.addEventListener('click',fetchData)
//         function fetchData(event02)
//         {   
//             event02.preventDefault()  
//             let canName = document.getElementById('fname').value
//             let canEmail = document.getElementById('email').value 
//             let canPhone = document.getElementById('phone').value
//             let canTime = document.getElementById('birthdaytime').value
//             let y = {Name:canName,Email:canEmail,Phone:canPhone,Time:canTime}
//             let mainClass = document.getElementById('users')
//             let childClass = document.createElement('li')
//             childClass.textContent = `${y.Name}  -  ${y.Email}  -  ${y.Phone}  -  ${y.Time}`
//             mainClass.append(childClass)
//             x = JSON.stringify(y)
//             localStorage.setItem(y.Email,x)
//             let editBtn = document.createElement('button')
//             editBtn.textContent = 'Edit'
//             editBtn.style.backgroundColor = 'green'
//             editBtn.style.position = 'absolute'
//             editBtn.style.cssFloat = 'right'
//             childClass.appendChild(editBtn)
//             let delBtn = document.createElement('button')
//             delBtn.textContent = 'Delete'
//             delBtn.style.backgroundColor = 'red'
//             delBtn.style.position = 'absolute'
//             delBtn.style.marginLeft = '350px'
//             childClass.appendChild(delBtn)
//             delBtn.addEventListener('click', ()=>
//                 {
//                     if(confirm('Delete User Info?'))
//                     {
//                         mainClass.removeChild(childClass)
//                         localStorage.removeItem(y.Email)
                    
//                     }
//                 })
//                 editBtn.addEventListener('click', ()=>
//                 {       
//                     if(localStorage.length!=0)
//                     {
//                         localStorage.removeItem(y.Email)
//                     }
//                     let newName = prompt('Add Name',y.Name)
//                     let newEmail = prompt('Add Email',y.Email)
//                     let newPhone = prompt('Add Phone Number',y.Phone)
//                     let newTime = prompt('Add Meeting Time','YYYY-MM-DD HH:MM')
//                     childClass.textContent = `${newName}  -  ${newEmail}  -  ${newPhone}  -  ${newTime}`          
//                     let obj01 = {Name:newName,Email:newEmail,Phone:newPhone,Time:newTime}
//                     let obj01_serialized = JSON.stringify(obj01)
//                     localStorage.setItem(newEmail,obj01_serialized)
//                     childClass.append(delBtn)
//                     childClass.appendChild(editBtn)


//                 })


    
//     }
   
// }




// Vinays


// let formName = document.getElementById("clicked")
// formName.addEventListener('click', uploadData)
// let count =0

// document.addEventListener('DOMContentLoaded', function(){

//     axios.get("https://crudcrud.com/api/d5de682592b4477dba03b2dc6ab10c6c/appointmentData")
//     .then((response) => console.log(response))
//     .catch((err) => console.log(err))


//     // for (let i = 0; i < localStorage.length; i++) {
        
//     //     if(i==localStorage.length-1)

//     //     {   
//     //         console.log(i)
//     //         const keyval = localStorage.key(i);
            
//     //         const val = localStorage.getItem(keyval)
//     //         let newVal = JSON.parse(val)
            
//     //         document.getElementById("fname").value = newVal.name
//     //         console.log(newVal.name)
//     //     }
    
//     // }

// });

// ss

// function uploadData(e)
// {
//     count+=1
//     e.preventDefault()

//     let Name = document.getElementById("fname").value
//     let Email = document.getElementById("email").value
//     let Phone = document.getElementById("phone").value
//     let MTime = document.getElementById("birthdaytime").value

//     let newObj = {
//         "name" : Name,
//         "Email" : Email,
//         "phone": Phone,
//         "meetingtime": MTime,
//         "count":count
//     }
//     console.log(newObj);

//     axios.post("https://crudcrud.com/api/d5de682592b4477dba03b2dc6ab10c6c/appointmentData", newObj)


//     function showUserData()
//     {
        
//     }

// }
















// // let formName = document.getElementsByTagName("form")[0]
// // formName.addEventListener('submit',sendData)
// // let count =0;

// // //Task 12 - deliverable 3
// // document.addEventListener('DOMContentLoaded', function(){
// //     for (let i = 0; i < localStorage.length; i++) {
        
// //         if(i==localStorage.length-1)

// //         {   
// //             console.log(i)
// //             const keyval = localStorage.key(i);
            
// //             const val = localStorage.getItem(keyval)
// //             let newVal = JSON.parse(val)
            
// //             document.getElementById("fname").value = newVal.name
// //             console.log(newVal.name)
// //         }
    
// //     }

// // });

// // function sendData(e)
// // {
// //     count+=1
// //     e.preventDefault()
// //     let newObj = {
// //         "name" : document.getElementById("fname").value,
// //         "Email" : document.getElementById("email").value,
// //         "phone": document.getElementById("phone").value,
// //         "meetingtime": document.getElementById("birthdaytime").value,
// //         "count":count

// //     }
//     // axios.post("https://crudcrud.com/api/d5de682592b4477dba03b2dc6ab10c6c/appointmentData", newObj)
//     //     .then((response) => {
//     //         console.log(response)
//     //     });


// //     let serializedObj = JSON.stringify(newObj)
// //     //let newName = localStorage.setItem(newObj.name, serializedObj)


// //     let reloadObj = localStorage.getItem(newObj.name)
// //     let reloadString = JSON.parse(reloadObj)

// //     let li = document.createElement('li')
// //     li.className = 'listItems'

// //     li.appendChild(document.createTextNode('Name is: ' + reloadString.name + " " + '& Email is:' +  reloadString.Email))

// //     let getId = document.querySelector('#users')
// //     getId.appendChild(li)

// //     //function with delete button

// //     function deleteButton()
// //     {
// //         let button = document.createElement('button');
// //         button.innerHTML = 'Delete';
// //         button.className = 'deleteItem';
// //         button.id = 'delete';
// //         button.style.backgroundColor = 'red';
// //         button.style.border = 'solid 1px white';
// //         button.setAttribute('title', 'detele user details');
// //         li.appendChild(button);

// //         return button
// //     }

// //     let delbtn = deleteButton()

// //     delbtn.addEventListener('click', function()
// //     {
// //         if(confirm('Are you sure?'))
// //         {
// //             getId.removeChild(li);
// //             localStorage.removeItem(reloadString.name);

// //         }
// //     })

// //     let editBtn = document.createElement('button');
// //     editBtn.innerHTML = 'Edit';
// //     editBtn.className = 'editbtn';
// //     editBtn.id = 'edit';
// //     editBtn.style.backgroundColor = 'yellow';
// //     editBtn.style.border = 'solid 1px white';
// //     editBtn.setAttribute('title', 'edit user details');
// //     li.appendChild(editBtn);

// //     editBtn.addEventListener('click', function()
// //     {
// //         let getUserName = prompt('User Name : ')
// //         let getUserEmail = prompt('User Email :')
// //         li.textContent = 'Name is : ' + getUserName + 'Email is : ' + getUserEmail + '   ';
// //         let delbtnn = deleteButton();

// //         delbtnn.addEventListener('click', function()
// //         {
// //             if(confirm('Are you sure?'))
// //             {
// //                getId.removeChild(li);
// //                 localStorage.removeItem(reloadString.name);

// //             }
// //         })
// //     })


// // //     localStorage.setItem('The Name is',document.getElementById("fname").value)
// // //     localStorage.setItem('The Email is',document.getElementById("email").value)
// // //     localStorage.setItem('The Phone Number is',document.getElementById("phone").value)
// // //     localStorage.setItem('The Meeting time is',document.getElementById("birthdaytime").value)
// // // 
// // }

// // // let reloadObj = localStorage.getItem("newdata")
// // // let reloadString = JSON.parse(reloadObj)

// // // document.getElementById("fname").value = reloadString.name
// // // document.getElementById("email").value = reloadString.Email
// // // document.getElementById("phone").value = reloadString.phone
// // // document.getElementById("birthdaytime").value = reloadString.meetingtime
