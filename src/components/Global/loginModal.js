import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";
import axios from "axios";
import Loader from "react-loader-spinner";
import "./loginModal.css";
import { useUser } from "../Contexts/UserContext";

import dialCodes from "../Home/components/dial-codes";
import chevronDown from "../../assets/chevron-down.svg";
import x from "../../assets/x.svg";
import backArrow from "../../assets/back-arrow.svg";
import verticalLine from "../../assets/|.svg";
import tick from "../../assets/tick-symbol.svg";

function LoginModal({ showOverlay, setShowOverlay }) {
  const { user, setUser } = useUser();
  const newUser = {username: "silverduck04"}

  const [OTPToken, setOTPToken] = useState("");
  const [loginToken, setLoginToken] = useState("");

  const [showLogin, setShowLogin] = useState(true);
  const [showOTP, setShowOTP] = useState(false);
  const [showCodesList, setShowCodesList] = useState(false);

  const [modalLoading, setModalLoading] = useState(false);
  const [modalError, setModalError] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);

  const [showError, setShowError] = useState(false);
  const [showOTPError, setShowOTPError] = useState(false);
  const [showWrongOTP, setShowWrongOTP] = useState(false);
  const [dialCode, setDialCode] = useState("+91");

  function handleLogin() {
    if (document.getElementById("input-pn").value.length < 10) {
      setShowError(true);
    } else {
      setTime(120);
      setModalLoading(true);
      console.log(pn);
      axios({
        method: "post",
        url: "https://wz66sw2su9.execute-api.ap-south-1.amazonaws.com/Prod/sendauthotp",
        data: { phone: pn },
      })
        .then((response) => {
          console.log(response);
          setOTPToken(response.data.token);
          setShowLogin(false);
          setShowError(false);
          setModalLoading(false);
          setShowOTP(true);
        })
        .catch(() => {
          setShowLogin(false);
          setShowError(false);
          setModalLoading(false);
          setModalError(
            true
          ); /*setOTPToken(3000); setShowLogin(false); setShowError(false); setModalLoading(false); setShowOTP(true)*/
        });
      // console.log(pn);
      // setShowLogin(false);
      // setShowOTP(true);
      // setShowError(false);
    }
  }

  function resendOTP() {
    setTime(120);
    setShowOTP(false);
    setModalLoading(true);
    setPN(dialCode + document.getElementById("input-pn").value);
    axios({
      method: "post",
      url: "https://wz66sw2su9.execute-api.ap-south-1.amazonaws.com/Prod/sendauthotp",
      data: { phone: pn },
    })
      .then((response) => {
        setOTPToken(response.data.token);
        setShowLogin(false);
        setShowError(false);
        setModalLoading(false);
        setShowOTP(true);
      })
      .catch(() => {
        /*setShowLogin(false); setShowError(false); setModalLoading(false); setModalError(true)*/ setOTPToken(
          3000
        );
        setShowLogin(false);
        setShowError(false);
        setModalLoading(false);
        setShowOTP(true);
      });
  }

  function handleOTP() {
    if (
      dig1.current.value == "" ||
      dig2.current.value == "" ||
      dig3.current.value == "" ||
      dig4.current.value == "" ||
      dig5.current.value == "" ||
      dig6.current.value == ""
    ) {
      setShowOTPError(true);
    } else {
      setOtp(
        dig1.current.value +
          dig2.current.value +
          dig3.current.value +
          dig4.current.value +
          dig5.current.value +
          dig6.current.value
      );
      setShowOTP(false);
      setModalLoading(true);
      axios({
        method: "post",
        url: "https://wz66sw2su9.execute-api.ap-south-1.amazonaws.com/Prod/verifyOtp",
        data: {
          otp:
            dig1.current.value +
            dig2.current.value +
            dig3.current.value +
            dig4.current.value +
            dig5.current.value +
            dig6.current.value,
        },
        headers: { token: OTPToken },
      })
        .then((response) => {
          setLoginToken(response.data.token);
          setModalLoading(false);
          setShowOTPError(false);
          setUser(newUser);
          clearOTP();
          displaySuccess();
        })
        .catch(() => {
          setModalLoading(false);
          setShowOTPError(false);
          setModalError(true);
        });
    }
  }

  function clearOTP() {
    dig1.current.value = null;
    dig2.current.value = null;
    dig3.current.value = null;
    dig4.current.value = null;
    dig5.current.value = null;
    dig6.current.value = null;
  }

  function displaySuccess() {
    setShowOTP(false);
    setModalSuccess(true);
    setTimeout(() => {
      setModalSuccess(false);
      setShowOverlay(false);
      setShowLogin(true);
    }, 2000);
  }

  const dig1 = useRef("");
  const dig2 = useRef("");
  const dig3 = useRef("");
  const dig4 = useRef("");
  const dig5 = useRef("");
  const dig6 = useRef("");

  const [otp, setOtp] = useState("");
  const [pn, setPN] = useState("");
  const [time, setTime] = useState(120);
  const [timeLeft, setTimeLeft] = useState("2:00");
  const timerID = useRef();

  const minutize = (time) => {
    return (
      parseInt(time / 60) + ":" + (time % 60 < 10 ? "0" : "") + (time % 60)
    );
  };

  function counter() {
    setTime((time) => {
      if (time <= 0) {
        clearInterval(timerID.current);
        return 0;
      }
      setTimeLeft(minutize(time));
      return time - 1;
    });
  }

  useEffect(() => {
    if (!showOTP) return;
    var timerID = setInterval(counter, 1000);
    if (time == 0) {
      clearInterval(timerID);
    }
    return () => {
      clearInterval(timerID);
    };
  }, [showOTP]);

  function handleIt(item) {
    setDialCode(item.code);
    setShowCodesList(false);
  }

  function CodeList() {
    var itemHolder = [];
    dialCodes.sort((a, b) =>
      a.country > b.country ? 1 : b.country > a.country ? -1 : 0
    );
    dialCodes.map((item) =>
      itemHolder.push(
        <div
          id="code-item"
          onClick={() => {
            handleIt(item);
          }}
        >
          {item.code} {item.country}
        </div>
      )
    );

    return (
      <div id={showCodesList ? "codes-list" : "codes-list-inactive"}>
        {itemHolder}
      </div>
    );
  }
  if (!showOverlay) return null;
  return (
    <div>
      <div id="overlay" onBlur={() => setShowOverlay(false)} tabIndex="1"></div>
      <div
        className="overlay-box"
        id={showLogin && showOverlay ? "log-sign-box" : "log-sign-box-inactive"}
      >
        <div id="log-sign">
          Login/Signup
          <img
            onClick={() => {
              setShowOverlay(false);
              setShowError(false);
            }}
            id="x"
            src={x}
          />
        </div>
        <div id="enter-your-pn">Enter your phone number</div>
        <div id="number-box">
          <div id="local-code" onClick={() => setShowCodesList(!showCodesList)}>
            <div id="text">{dialCode}</div>
            <img
              id={showCodesList ? "chevron-up" : "chevron-down"}
              src={chevronDown}
            />
            <img id="vertical-line" src={verticalLine} />
          </div>
          <input
            id="input-pn"
            type="tel"
            maxlength="10"
            pattern="\d"
            placeholder="* * * * * * * * * *"
            min="0"
            max="9"
            value={pn}
            onChange={(e) => {
              setPN(e.target.value);
            }}
          />
        </div>
        <CodeList onBlur={() => setShowCodesList(false)} />
        <div id={showError ? "error-message" : "error-message-inactive"}>
          *The entered phone number must nescessarily have 10 digits
        </div>
        <div id="sendotp-btn" onClick={handleLogin}>
          <div>Send OTP</div>
        </div>
      </div>

      <div
        className="overlay-box"
        id={showOTP && showOverlay ? "otp-box" : "otp-box-inactive"}
      >
        <div id="log-sign">
          <img
            id="back-arrow"
            src={backArrow}
            onClick={() => {
              setShowOTP(false);
              setShowLogin(true);
            }}
          />
          Login/Signup
        </div>
        <div id="enter-your-otp">Please enter the 4-digit OTP</div>
        <div id="your-pn">
          Sent on your phone number <div id="pn">xxxxxx{pn.substr(6, 4)}</div>
        </div>
        <div id="input-otp">
          <input
            id="dig1"
            className="input-digit"
            type="number"
            min="0"
            max="9"
            maxlength="1"
            pattern="[0-9]"
            ref={dig1}
            onChange={() => {
              dig1.current.value != null
                ? dig2.current.focus()
                : dig1.current.focus();
            }}
          />
          <input
            id="dig2"
            className="input-digit"
            type="number"
            min="0"
            max="9"
            maxlength="1"
            pattern="[0-9]"
            ref={dig2}
            onChange={() => {
              dig2.current.value != null
                ? dig3.current.focus()
                : dig2.current.focus();
            }}
          />
          <input
            id="dig3"
            className="input-digit"
            type="number"
            maxlength="1"
            ref={dig3}
            pattern="\d"
            onChange={() => {
              dig3.current.value != null
                ? dig4.current.focus()
                : dig3.current.focus();
            }}
          />
          <input
            id="dig4"
            className="input-digit"
            type="number"
            maxlength="1"
            ref={dig4}
            pattern="\d"
            onChange={() => {
              dig4.current.value != null
                ? dig5.current.focus()
                : dig4.current.focus();
            }}
          />
          <input
            id="dig5"
            className="input-digit"
            type="number"
            maxlength="1"
            ref={dig5}
            pattern="\d"
            onChange={() => {
              dig5.current.value != null
                ? dig6.current.focus()
                : dig5.current.focus();
            }}
          />
          <input
            id="dig6"
            className="input-digit"
            type="number"
            maxlength="1"
            pattern="\d"
            ref={dig6}
          />
        </div>
        <div id={showOTPError ? "error-message" : "error-message-inactive"}>
          *The OTP must nescessarily be of 4 digits
        </div>
        <div id={showWrongOTP ? "error-message" : "error-message-inactive"}>
          *The entered OTP is wrong, please try again
        </div>
        <div id={time != 0 ? "resend" : "resend-inactive"}>
          Resend in <div id="time-left">{timeLeft}</div>
        </div>
        <div
          id={time == 0 ? "resend-otp" : "resend-inactive"}
          onClick={resendOTP}
        >
          Resend OTP
        </div>
        <div id="login-btn" onClick={handleOTP}>
          <div>Login</div>
        </div>

        <div id="tnc">
          By continuing, you agree to BooxWoox's Terms of Use and Privacy Policy
        </div>
      </div>

      <div className={modalLoading ? "modal-prompt" : "modal-prompt-inactive"}>
        <Loader type="Rings" color="#FFBD06" height={200} width={200} />
      </div>

      <div className={modalSuccess ? "modal-prompt" : "modal-prompt-inactive"}>
        <img src={tick} height="60" />
        <div>Successfully logged in!</div>
      </div>

      <div className={modalError ? "modal-prompt" : "modal-prompt-inactive"}>
        <img
          src={x}
          id="error-box-close"
          onClick={() => {
            setModalError(false);
            setShowOverlay(false);
            setShowLogin(true);
          }}
        />
        <div>
          Oops! There seems to be an error.
          <br />
          Please try again.
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
