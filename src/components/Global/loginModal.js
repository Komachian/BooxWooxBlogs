import React, {useState, useEffect} from 'react'
import ReactDom from 'react-dom';
import axios from 'axios';
import './nav.css'

import dialCodes from '../Home/components/dial-codes';
import chevronDown from '../../assets/chevron-down.svg'
import x from '../../assets/x.svg'
import backArrow from '../../assets/back-arrow.svg'
import verticalLine from '../../assets/|.svg'

function LoginModal( {showOverlay, setShowOverlay} ) {
    const [OTPToken, setOTPToken] = useState("");
    const [loginToken, setLoginToken] = useState("");

    const [showLogin, setShowLogin] = useState(true);
  const [showOTP, setShowOTP] = useState(false);
  const [showCodesList, setShowCodesList] = useState(false);


  const [showError,setShowError] = useState(false);
  const [showOTPError,setShowOTPError] = useState(false);
  const [dialCode, setDialCode] = useState("+91");

  function handleLogin() {
    if(document.getElementById("input-pn").value.length < 10) {
      setShowError(true);
    }
    else {
      setPN(dialCode + document.getElementById("input-pn").value);
    //   axios({
    //     method: 'post',
    //     url: 'https://wz66sw2su9.execute-api.ap-south-1.amazonaws.com/Prod/sendauthotp',
    //     data: { "phone":{pn}}
    //   }).then(response => setOTPToken(response.token)).catch(err => err);
      console.log(pn);
      document.getElementById("time-left").innerText = ('2' + ':' + '00');
      setShowLogin(false);
      setShowOTP(true);
      setShowError(false);
    }
  }

  function handleOTP() {
    if(document.getElementById("dig1").value == '' || document.getElementById("dig2").value == '' || document.getElementById("dig3").value == '' || document.getElementById("dig4").value == '') {
      setShowOTPError(true);
    }
    else {
      setOtp(document.getElementById("dig1").value + document.getElementById("dig2").value + document.getElementById("dig3").value + document.getElementById("dig4").value);
      console.log(otp);
      console.log(pn);
      axios({
          method: 'post',
          url: 'https://wz66sw2su9.execute-api.ap-south-1.amazonaws.com/Prod/verifyOtp',
          data:  {"otp":{otp}} ,
          headers: {token: {OTPToken}}
        }).then(response => setOTPToken(response.token)).catch(err => err);
      setShowOTPError(false);
    }
  }

  const [otp,setOtp] = useState('');
  const [pn,setPN] = useState('');
  const [time, setTime] = useState(120);
  const [timeLeft, setTimeLeft] = useState("2:00");

  // function counter(id) {
  //   var timer = timeLeft;
  //   timer = timer.split(':');
  //   var minutes = timer[0];
  //   var seconds = timer[1];
  //   if (minutes == 0 && seconds == 0) {
  //     setTime(0);
  //     setTimeLeft('0:00')
  //     document.getElementById("time-left").innerText = ('0:00');
  //     clearInterval(id);
  //     return;
  //   }
  //   else if (seconds <= 10 && seconds > 0) {
  //     seconds = '0' + --seconds;
  //   }
  //   else if(seconds == 0) {
  //     minutes--;
  //     seconds = 59;
  //   }
  //   else {
  //     seconds--;
  //   }
  //   setTimeLeft(minutes + ':' + seconds);
  //   document.getElementById("time-left").innerText = (minutes + ':' + seconds);
  //   setTime((minutes * 60) + seconds);

  // };

  // useEffect(() => {
  //   var timerID = setInterval(counter, 1000);
  //   if(time == 0) {
  //     clearInterval(timerID);
  //   }
  //   return () => {clearInterval(timerID)};
  // }, [])

  function handleIt(item) {
    setDialCode(item.code);
    setShowCodesList(false);
  }

  function CodeList() {
    var itemHolder = [];
    dialCodes.sort((a,b) => (a.country > b.country) ? 1 : ((b.country > a.country) ? -1 : 0))
    dialCodes.map((item) =>
      itemHolder.push(
        <div id="code-item" onClick={() => {handleIt(item)}}>
          {item.code} {item.country}
        </div>
      )
    );
  
    return <div id={showCodesList ? "codes-list" : "codes-list-inactive"}>{itemHolder}</div>;
  }
    if(!showOverlay) return null;
    return (
        <div>
            <>
                <div id="overlay">
                </div>
      <div className="overlay-box" id={(showLogin && showOverlay) ? "log-sign-box" : "log-sign-box-inactive"}>
        <div id="log-sign">
          Login/Signup
          <img onClick={() => {setShowOverlay(false); setShowError(false)}} id="x" src={x} />
        </div>
        <div id="enter-your-pn">Enter your phone number</div>
        <div id="number-box">
          <div id="local-code" onClick={() => setShowCodesList(!showCodesList)}>
            <div id="text">{dialCode}</div>
            <img id={showCodesList ? "chevron-up" : "chevron-down"} src={chevronDown} />
            <img id="vertical-line" src={verticalLine} />
          </div>
          <input
            id="input-pn"
            type="tel"
            maxlength="10"
            pattern="\d*"
            placeholder="* * * * * * * * * *"
          />
        </div>
        <CodeList onBlur={() => setShowCodesList(false)} />
        <div id={showError ? "error-message" : "error-message-inactive"}>*The entered phone number must nescessarily have 10 digits</div>
        <div id="sendotp-btn"  onClick={handleLogin}><div>Send OTP</div></div>
      </div>

      <div className="overlay-box" id={(showOTP && showOverlay) ? "otp-box" : "otp-box-inactive"} >
        <div id="log-sign">
          <img id="back-arrow" src={backArrow} onClick={() => {setShowOTP(false); setShowLogin(true)}} />
          Login/Signup
        </div>
        <div id="enter-your-otp">Please enter the 4-digit OTP</div>
        <div id="your-pn">
          Sent on your phone number <div id="pn">xxxxxx7654</div>
        </div>
        <div id="input-otp">
          <input id="dig1" className="input-digit" type="number" maxlength="1" />
          <input id="dig2" className="input-digit" type="number" maxlength="1" />
          <input id="dig3" className="input-digit" type="number" maxlength="1" />
          <input id="dig4" className="input-digit" type="number" maxlength="1" />
        </div>
        <div id={showOTPError ? "error-message" : "error-message-inactive"}>*The OTP must nescessarily be of 4 digits</div>
        <div id={time != 0 ? "resend" : "resend-inactive"}>Resend in <div id="time-left">2:00</div></div>
        <div id={time == 0 ? "resend-otp" : "resend-inactive"}>Resend OTP</div>
        <div id="login-btn" onClick={handleOTP}><div>Login</div></div>
        
        <div id="tnc">
          By continuing, you agree to BooxWoox's Terms of Use and Privacy
          Policy
        </div>
      </div>
      </>
        </div>
    )
}

export default LoginModal
