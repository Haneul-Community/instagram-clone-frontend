import React, { useState, useEffect } from 'react';
import imagelogo from "./instagram_logo.png";
import './index.css';


const MainPage = () => {
    const [id, setId]= React.useState('')
    const [password, setPassword]= React.useState('')

    return (
        <div class =" container">
        
            <div className ="my-box">
                <div>
                    <img src= {imagelogo} className ="image"/>
                </div>
                
                <div>
                    <input type="text" className="form-control" id="id" 
                    placeholder="전화번호, 사용자 이름 또는 이메일" 
                    value={id} required
                    

                    />
                    <div className="invalid-feedback"> 전화번호, 사용자 이름 또는 이메일 </div>

                    <input type="text" className="form-control" id="password" placeholder="비밀번호" 
                    value={password} required
                    
                    />
                    <div className="invalid-feedback"> 비밀번호 </div>
                </div>
                <button className= "loginbutton" >   
                    로그인
                </button>
                <div className="hr-sect">또는</div>
                <div className="facebook">
                    <a href="https://www.facebook.com/" className="페북" >Facebook으로 로그인</a>
                </div>
                <div className="foget_password">
                    <a href="" className="비밀번호" onclick="clickBtn();">비밀번호를 잊으셨나요?</a>
                </div>
                

            </div>
            <div className="mini-box">
                <div className="assignbox">
                    계정이 없으신가요? 
                    <button className ="account" >
                        로그인하기
                    </button>
                </div>
            </div>
        </div>
    )

}


export default MainPage;