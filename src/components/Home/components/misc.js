import React, { useState, useEffect } from "react";
import OtpInput from 'react-otp-input';
// import ReactScrollableList from 'react-scrollable-list'
import dialCodes from "./dial-codes";
import chevronDown from '../../../assets/chevron-down.svg'
import x from '../../../assets/x.svg'
import backArrow from '../../../assets/back-arrow.svg'
import verticalLine from '../../../assets/|.svg'
import tick from '../../../assets/tick-symbol.svg'
import user from '../../../assets/user.svg'
import pen from '../../../assets/pen.svg'
import drafts from '../../../assets/drafts.svg'
import logout from '../../../assets/logout.svg'
import "./misc.css";
import Loader from "react-loader-spinner";

function Login() {
  const [showOverlay, setShowOverlay] = useState(true);
//   const [showLogin, setShowLogin] = useState(true);
//   const [showOTP, setShowOTP] = useState(false);


//   const [showError,setShowError] = useState(false);
//   const [dialCode, setDialCode] = useState("+91");

//   function handleLogin() {
//     if(document.getElementById("input-pn").value.length < 10) {
//       setShowError(true);
//     }
//     else {
//       setShowLogin(false);
//       setShowOTP(true);
//     }
//   }

//   const [otp,setOtp] = useState('');

//   function handleChange(otp) {
//       setOtp(otp);
//   }

//   const [time, setTime] = useState(120);

  

//   function counter(id) {
//     var timer = document.getElementById("time-left").innerText;
//     timer = timer.split(':');
//     var minutes = timer[0];
//     var seconds = timer[1];
//     if (minutes == 0 && seconds == 0) {
//       setTime(0);
//       document.getElementById("time-left").innerText = ('0' + ':' + '00');
//       clearInterval(id);
//       return;
//     }
//     else if (seconds <= 10 && seconds > 0) {
//       seconds = '0' + --seconds;
//     }
//     else if(seconds == 0) {
//       minutes--;
//       seconds = 59;
//     }
//     else {
//       seconds--;
//     }

//     document.getElementById("time-left").innerText = (minutes + ':' + seconds);
//     setTime((minutes * 60) + seconds);
//   };

//   useEffect(() => {
//     var timerID = setInterval(counter, 1000);
//     if(time == 0) {
//       clearInterval(timerID);
//     }
//     return () => {clearInterval(timerID)};
//   }, [])
 
   return (
     <div id={showOverlay ? "overlay" : "overlay-inactive"}>
      {/* <div className="overlay-box" id={showLogin ? "log-sign-box" : "log-sign-box-inactive"} >
        <div id="log-sign">
          Login/Signup
          <img id="x" src={x} />
        </div>
        <div id="enter-your-pn">Enter your phone number</div>
        <div id="number-box">
          <div id="local-code">
            <div id="text">{dialCode}
            </div>
            <img id="chevron-down" src={chevronDown} />
            <img id="vertical-line" src={verticalLine} />
          </div>
          <input
            id="input-pn"
            type="tel"
            maxlength="10"
            placeholder="* * * * * * * * * *"
          />
        </div>
        <div id={showError ? "error-message" : "error-message-inactive"}>*The entered phone number must nescessarily have 10 digits</div>
        <div id="sendotp-btn"  onClick={handleLogin}><div>Send OTP</div></div>
      </div>

      <div className="overlay-box" id={showOTP ? "otp-box" : "otp-box-inactive"}>
        <div id="log-sign">
          <img id="back-arrow" src={backArrow} />
          Login/Signup
        </div>
        <div id="enter-your-otp">Please enter the 4-digit OTP</div>
        <div id="your-pn">
          Sent on your phone number <div id="pn">xxxxxx7654</div>
        </div>
        <div id="input-otp">
          <input id="input-digit" type="number" maxlength="1" />
          <input id="input-digit" type="number" maxlength="1" />
          <input id="input-digit" type="number" maxlength="1" />
          <input id="input-digit" type="number" maxlength="1" />
        </div>
        <div id={time != 0 ? "resend" : "resend-inactive"}>Resend in <div id="time-left">2:00</div></div>
        <div id={time == 0 ? "resend-otp" : "resend-inactive"}>Resend OTP</div>
        <div id="login-btn"><div>Login</div></div>
        
        <div id="tnc">
          By continuing, you agree to BooxWoox's Terms of Use and Privacy
          Policy
        </div>
      </div> */}

      <div id="modal-prompt">
      <Loader
        type="Rings"
        color="#FFBD06"
        height={200}
        width={200}
      />
      </div>
      <div id="modal-prompt">
        <img src={tick} height='60' />
        <div>
          Successfully logged in!
        </div>
      </div>
      <div id="modal-prompt">
      <div>
        Oops! There seems to be an error.<br/>Please try again.
      </div>
      </div>
      </div>
   )
}

function Misc() {
   
  



  return (
    <div>
      


      <div className="dialog-box" id="submit-box">
        <div id="submit-prompt">Are you sure you want to submit your blog?</div>
        <div id="notify">
          Your blog will be screened by our committee and you will be further
          notified with regards to publishing your blog
        </div>
        <div class="toggle" id="cancel-confirm">
          <div id="cancel">Cancel</div>
          <div id="confirm">Confirm</div>
        </div>
      </div>

      <div class="dialog-box" id="thanks-box">
        <img src={tick} id="tick" />
        <div id="thanks-box">
          <div id="thanks">Thanks for writing a blog!</div>
          <div id="notify">
            Your blog will be screened by our committee and you will be further
            notified with regards to publishing your blog
          </div>
        </div>
      </div>

      <div className="dialog-box" id="comments-box">
        <h1>Comments</h1>
        <div id="comment-prompt">
          Do you want people to comment on your blogs?
        </div>
        <div class="toggle" id="yes-no">
          <div id="no"><div>No</div></div>
          <div id="yes"><div>Yes</div></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
