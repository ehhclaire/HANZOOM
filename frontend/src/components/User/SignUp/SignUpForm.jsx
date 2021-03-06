import { useState, useRef } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { Axios } from '../../../core/axios';
import { axios_apis } from '../../../core/axios';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

export const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [nickName, setNickName] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [password1Type, setPassword1Type] = useState({
    type: 'password',
    visible: false,
  });
  const [password2Type, setPassword2Type] = useState({
    type: 'password',
    visible: false,
  });
  const [emailChkState, setEmailChkState] = useState(false);
  const [nickNameChkState, setNickNameChkState] = useState(false);

  const nickNameInput = useRef();
  const emailInput = useRef();
  const passwordInput = useRef();

  const navigate = useNavigate();

  const signUp = () => {
    if (!nickNameChkState) {
      alert('닉네임 중복확인을 해주세요.');
      nickNameInput.current.focus();
      return;
    }

    if (!emailChkState) {
      alert('이메일 중복확인을 해주세요.');
      emailInput.current.focus();
      return;
    }

    if (password1 != password2) {
      alert('비밀번호가 일치하지 않습니다.');
      passwordInput.current.focus();
      return;
    }

    var rule = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,12}$/;
    if (!rule.test(password1) || !rule.test(password2)) {
      alert('비밀번호는 8 ~ 12 자리수이며 문자, 숫자, 특수기호를 최소 1개씩 포함해야합니다.');
      return;
    }

    Axios.post(`${axios_apis.users.register}/signup`, {
      userEmail: email,
      userNickname: nickName,
      userPassword: password1,
    })
      .then(() => {
        swal('회원가입 성공', '로그인을 진행하여 서비스를 즐겨보세요!', 'success');
        navigate('/login');
      })
      .catch((error) => {
        swal('회원가입 실패', '서버가 잠시 문제가 생겨있으니 기다려주세요.', 'error');
        console.log(error);
      });
  };

  // 닉네임 중복 검사
  const nickNameChk = async () => {
    if (nickName == '') {
      alert('닉네임을 입력해주세요.');
      nickNameInput.current.focus();
      return;
    }

    if (nickName.length < 3 || nickName.length > 12) {
      alert('닉네임은 3~12자리수로 입력해주세요.');
      nickNameInput.current.focus();
      return;
    }

    const chkResult = await Axios.get(`${axios_apis.users.nickNameCheck}/${nickName}`);
    if (chkResult.data) {
      alert('사용 가능한 닉네임입니다.');
      setNickNameChkState(true);
    } else {
      alert('이미 사용 중인 닉네임입니다.');
      setNickNameChkState(false);
    }
  };

  // 이메일 중복 검사
  const emailChk = async () => {
    if (email == '') {
      alert('이메일을 입력해주세요.');
      emailInput.current.focus();
      return;
    }

    var rule = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
    if (!rule.test(email)) {
      alert('유효한 이메일 형식이 아닙니다.');
      return;
    }

    const chkResult = await Axios.get(`${axios_apis.users.emailCheck}/${email}`);
    if (chkResult.data) {
      alert('사용 가능한 이메일입니다.');
      setEmailChkState(true);
    } else {
      alert('이미 사용 중인 이메일입니다.');
      setEmailChkState(false);
    }
  };

  const onKeyPress = (e) => {
    if (e.key == 'Enter') {
      signUp();
    }
  };

  const handlePassword1Type = () => {
    setPassword1Type(() => {
      if (!password1Type.visible) {
        return { type: 'text', visible: true };
      }
      return { type: 'password', visible: false };
    });
  };

  const handlePassword2Type = () => {
    setPassword2Type(() => {
      if (!password2Type.visible) {
        return { type: 'text', visible: true };
      }
      return { type: 'password', visible: false };
    });
  };

  return (
    <>
      <section className="container">
        <div className="row">
          <h2 className="title text-center">SIGN UP</h2>
          <div className="formInput">
            <input
              className="form-control nickName"
              type="text"
              placeholder="닉네임"
              onChange={(e) => {
                setNickName(e.target.value);
                setNickNameChkState(false);
              }}
              onKeyPress={onKeyPress}
              ref={nickNameInput}
            />
            <button className="checkBtn" onClick={nickNameChk}>
              중복확인
            </button>
          </div>
          <div className="formInput">
            <input
              className="form-control"
              type="text"
              placeholder="이메일"
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailChkState(false);
              }}
              onKeyPress={onKeyPress}
              ref={emailInput}
            />
            <button className="checkBtn" onClick={emailChk}>
              중복확인
            </button>
          </div>
          <div className="formInput">
            <input
              className="form-control"
              type={password1Type.type}
              placeholder="비밀번호"
              onChange={(e) => setPassword1(e.target.value)}
              onKeyPress={onKeyPress}
            />
            <span className="visibleIcon">
              {!password1Type.visible ? (
                <VisibilityIcon style={{ fontSize: '32px' }} onClick={handlePassword1Type} />
              ) : (
                <VisibilityOffIcon style={{ fontSize: '32px' }} onClick={handlePassword1Type} />
              )}
            </span>
          </div>
          <div className="formInput">
            <input
              className="form-control"
              type={password2Type.type}
              placeholder="비밀번호 확인"
              onChange={(e) => setPassword2(e.target.value)}
              onKeyPress={onKeyPress}
              ref={passwordInput}
            />
            <span className="visibleIcon">
              {!password2Type.visible ? (
                <VisibilityIcon style={{ fontSize: '32px' }} onClick={handlePassword2Type} />
              ) : (
                <VisibilityOffIcon style={{ fontSize: '32px' }} onClick={handlePassword2Type} />
              )}
            </span>
          </div>
          <button className="formBtn" onClick={signUp}>
            SIGN UP
          </button>
          <div className="loginExplain">
            <Link to="/login">
              <p>이미 계정이 있나요? 로그인하러 가기</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
