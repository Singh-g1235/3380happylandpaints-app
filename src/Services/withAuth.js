import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default function withAuth(ComponentInside) {
    return class extends Component {
        constructor() {
            super();
            this.state={
                loading:true,
                redirect:false,
                id:""
            };
        }

        //Call the authorization
        componentDidMount() {
            fetch(`${process.env.REACT_APP_API_BASE_URL}login/auth`, {
                method:"GET",
                credentials: "include",
                headers: { 'x-access-token' : localStorage.getItem('token')}
            })
            .then( res => { 
               // const test = res.json();
                //console.log(localStorage.getItem('sessionId'));
                this.setState({id:localStorage.getItem('sessionId')})
                if (res.status === 200) {
                    this.setState({ loading: false });
                } else {
                    const error = new Error(res.error);
                    alert("Please Login !! \n You are not an authorized user");
                    throw error;
                }
            })
            .catch( err => { 
                console.error(err);
                this.setState({ 
                    loading: false, 
                    redirect: true });
        });
    }

        render() {
            
            const { loading, redirect } = this.state;
            if (loading) {
                return null;
            } if (redirect) {
                return <Redirect to ="/"/>
            }
            return <ComponentInside id={this.state.id} />
        }
    }
}