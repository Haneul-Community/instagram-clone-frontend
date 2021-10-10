import React, { useState, useEffect } from 'react';
import imagelogo from "./instagram_logo.png";
import './index.css';
import checkidpassword from "./chechlogin"

const LoginPage = ({history}) => {
    const [id, setId]= React.useState('')
    const [password, setPassword]= React.useState('')
    const [check, setCheck]= React.useState('')
    
    const onChangeId = (e) => {
        setId(e.target.value);
   }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
   }

    const gotomainpage = () => {
        checkidpassword(id, password).then((res) => {
          if (res.resultcode === 1) {
              history.push("main");
          }else{
            alert("로그인에 실패하였습니다.")
          }
        });
      }

    const makeaccount = () => {
              history.push("account");
      }
      
    useEffect(() => {
        // const unblock = history.block('로그인에 성공했습니다.')
        // return () =>{
        //     unblock();
        // };
        console.log(1)
    },[id])
        

   
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
                    onChange={onChangeId}

                    />
                    <div className="invalid-feedback"> 전화번호, 사용자 이름 또는 이메일 </div>

                    <input type="text" className="form-control" id="password" placeholder="비밀번호" 
                    value={password} required
                    onChange={onChangePassword}
                    />
                    <div className="invalid-feedback"> 비밀번호 </div>
                </div>
                <button className= "loginbutton" onClick={gotomainpage}>   
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
                    <button className ="account" onClick={makeaccount}>
                        가입하기
                    </button>
                </div>
            </div>
    </div>
  )
}

export default LoginPage;