import React,{useState,useEffect} from 'react'
import User from '../User/User'
import UserAdd from '../UserAdd/UserAdd'
import UserEdit from '../UserEdit/UserEdit'
import SearchBar from '../SearchBar/SearchBar'
import {getUsersService,getUserByIdService,addUserService,updateUserService,deleteUserService} from '../../../../Services/AdminServices'

function UserList(props) {
    // It contains everything related to Admin User Operations such as view users in inventory, add, remove and update user
    const [userList,setUserList] = useState([]);
    const [error,setError] = useState(false);
    const [loading,setLoading] = useState(true);
    const [action, setAction] = useState("add");
    const [newUser, setNewUser] = useState();
    const [keyword,setKeyword] = useState("");

    useEffect(()=>{
        refreshUsers();
    },[])

    function refreshUsers() {
        setLoading(true);
        getUsersService()
        .then(json => {
            let jsonList =[];
            json.forEach(item => {
                let user = {
                    "UserId": item.UserId,
                    "Password": item.Password,
                    "FirstName": item.FirstName,
                    "LastName": item.LastName,
                    "City": item.City,
                    "Province": item.Province,
                    "Zip": item.Zip,
                    "Unit": item.Unit

                }
                jsonList.push(user);
            })
            
            setUserList(jsonList);
            setLoading(false);
        }).catch(err => 
            {
                console.log(err);
                setError(err);
            })
    }

    async function addUser(e)  {
        e.preventDefault();
            await addUserService(newUser);
            refreshUsers();
    }

    async function editUser(e) {
        e.preventDefault();
        console.log("inside update user")
        let updatedUser = newUser;
        await updateUserService(updatedUser);
        setAction("add")
        refreshUsers()
    }

    async function deleteUser(e) {
        e.preventDefault();
        await deleteUserService(e.target.value);
        refreshUsers();
    }

    async function renderEditUserForm(e) {
        e.preventDefault();
        let userToUpdate = {};
        userList.forEach((user) => {
            if (user.UserId === e.target.value)   {
                console.log(user)
                userToUpdate = user;
        }})
        setNewUser(userToUpdate)
        setAction("edit")
    }

    function updateUser(e) {
        
        setNewUser({
            ...newUser,
            [e.target.id]: e.target.value
        }) 
        console.log(newUser);
    }

    function updateKeyword(e) {
        
        setKeyword(
            e.target.value
        ) 
    }

    function search(e) {
        setLoading(true);
        if(keyword.trim() !== ""){
            getUserByIdService(keyword)
        .then(json => {
            let jsonList =[];
                let user = {

                    "UserId": json.UserId,
                    "Password": json.Password,
                    "FirstName": json.FirstName,
                    "LastName": json.LastName,
                    "City": json.City,
                    "Province": json.Province,
                    "Zip": json.Zip,
                    "Unit": json.Unit

                }
                jsonList.push(user);
            
            
            setUserList(jsonList);
            setLoading(false);
        }).catch(err => 
            {
                console.log(err);
                setLoading(false);
                setError(err);
            })
        } else {
            refreshUsers();
        }
        
    }
    



    if (loading) return (<div className="alert alert-info">Loading.....</div>)
    if (error) return (<div className="alert alert-danger">Error while loading....</div>)
    return (
        <div className="row border-dark ">
       
        <div className="col-sm-12 col-md-12 ">
        { (action === "add") ?
             <UserAdd action={addUser} update={updateUser} /> : <UserEdit action={editUser} update={updateUser} currentUser={newUser} /> 
           }
        </div>
      
        <div className="col-sm-12 col-md-12 ">
        <br/><br/>
            <SearchBar keyword={keyword} update={updateKeyword} search={search}/>
            <br/>
        <table className="table">
            <thead>
                <tr>
                    <th>User Id</th>
                    <th>User First Name</th>
                    <th>User Last Name</th>
                    <th>Edit</th>
                    <th>Remove</th>
                </tr>

            </thead>
            <tbody>
                {userList.map((user, key) => (
                    <User user={user} key={key} renderEditUserForm={renderEditUserForm} deleteUser={deleteUser}/>
                 
                ))

                }
            </tbody>
        </table>
        </div>
        

      
    </div>
    )
}

export default UserList
