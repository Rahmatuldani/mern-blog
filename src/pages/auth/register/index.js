import React from 'react'
import { RegisterBg } from '../../../assets';
import './style.scss';
import { Button, Gap, Input, Link } from '../../../components';

function Register() {
    return (
        <div className="main-page">
            <div className="left">
                <img src={RegisterBg} className="bg-img" alt="images"></img>
            </div>
            <div className="right">
                <p className="title">Register</p>
                <Input label="Full Name" placeholder="Full Name"></Input>
                <Gap height={20}></Gap>
                <Input label="Email" placeholder="Email"></Input>
                <Gap height={20}></Gap>
                <Input label="Password" placeholder="Password"></Input>
                <Gap height={50}></Gap>
                <Button title="Submit"></Button>
                <Gap height={100}></Gap>
                <Link title="Kembali ke login"></Link>
            </div>
        </div>
    )
}

export default Register
