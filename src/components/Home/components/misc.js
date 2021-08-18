import React, { useState, useEffect } from "react";
import OtpInput from 'react-otp-input';
// import ReactScrollableList from 'react-scrollable-list'
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
import { getElementError } from "@testing-library/react";

function Misc() {
    const [otp,setOtp] = useState('');
    function handleChange(otp) {
        setOtp(otp);
    }

    const [time, setTime] = useState(120);
    var timerID = setInterval(counter, 1000);
    function counter() {
      var timer = document.getElementById("time-left").innerText;
      timer = timer.split(':');
      var minutes = timer[0];
      var seconds = timer[1];
      seconds -= 1;
      if (minutes < 0) return;
      else if (seconds < 0 && minutes != 0) {
          minutes -= 1;
          seconds = 59;
      }
      else if (seconds < 10 && seconds.length != 2) {
        seconds = '0' + seconds;
      }

      document.getElementById("time-left").innerText = (minutes + ':' + seconds);
      setTime((minutes * 60) + seconds);

      if (minutes == 0 && seconds == 0) {
        setTime(0);
        document.getElementById("time-left").innerText = ('0' + ':' + '00');
        clearInterval(timerID);
      }
      console.log(time);
    };

  return (
    <div>
      <div id="log-sign-box">
        <div id="log-sign">
          Login/Signup
          <img id="x" src={x} />
        </div>
        <div id="enter-your-pn">Enter your phone number</div>
        <div id="number-box">
          <div id="local-code">
            <div id="text">+91</div>
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
        <div id="sendotp-btn"><div>Send OTP</div></div>
      </div>

      <div id="log-sign-box">
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
        <div id={time != 0 ? "resend" : "resend-inactive"}>Resend in <div id="time-left">0:10</div></div>
        <div id={time == 0 ? "resend-otp" : "resend-inactive"}>Resend OTP</div>
        <div id="login-btn"><div>Login</div></div>
        {/* <OtpInput
          value={otp}
          onChange={handleChange}
          numInputs={4}
          isInputNum={true}
        />
        <div id="sendotp-btn">Login</div>
        <ReactScrollableList
  listItems=[{ id: 'us', content: 'USA' }, {
  id: 'IN',
  content: 'India'
}]
  heightOfItem={30}
  maxItemsToRender={50}
  style={{ color: '#333' }}
/> */}
        <div id="tnc">
          By continuing, you agree to BooxWoox's Terms of Use and Privacy
          Policy
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

      <div id="menu">
        <div class="menu-item"> <img src={user} class="icon"/>My Account</div>
        <div class="menu-item"> <img src={pen} class="icon"/>My Blogs</div>
        <div class="menu-item"> <img src={drafts} class="icon"/>My Drafts</div>
        <div class="menu-item"> <img src={logout} class="icon"/>Logout</div>
        </div>
    </div>
  );
}

export default Misc;
