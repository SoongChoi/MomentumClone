const HIDDEN_CLASS_NAME = "hidden";
const USER_NAME_KEY = "username";
const SHOW_LOGIN_FORM = true;
const HIDE_LOGIN_FORM = false;

const loginForm  = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetingLabel = document.querySelector("#greeting");
const resetLabel = document.querySelector("#resetLabel");

function onSubmitAction(formInfo) {
    formInfo.preventDefault();
    localStorage.setItem(USER_NAME_KEY, loginInput.value);
    prepareGreetingScreen();
}

// 저장된 정보로 화면표시 또는 로그인 화면 노출
function prepareGreetingScreen() {
    savedUserName = localStorage.getItem(USER_NAME_KEY);

    // 최초 로딩 또는 RESET이후 로그인 화면 표시
    if(savedUserName === null) {
        hideNshowControls(SHOW_LOGIN_FORM);
    } else {
        // greetingLabel.innerText = "Hi " + savedUserName +"!";
        // greetingLabel.innerText = 'Hi ${savedUserName} !';
        greetingLabel.innerText = `Hi ${savedUserName} !`;
        hideNshowControls(HIDE_LOGIN_FORM);
    }
}

// 조건에 따라 그리팅 메시지, RESET 라벨, 로그인 화면 노출 스위칭
function hideNshowControls(condition) {
    if(condition === HIDE_LOGIN_FORM) {
        loginForm.classList.add(HIDDEN_CLASS_NAME);
        greetingLabel.classList.remove(HIDDEN_CLASS_NAME);
        resetLabel.classList.remove(HIDDEN_CLASS_NAME);
    } else {
        loginForm.classList.remove(HIDDEN_CLASS_NAME);
        greetingLabel.classList.add(HIDDEN_CLASS_NAME);
        resetLabel.classList.add(HIDDEN_CLASS_NAME);
    }
}

function onClickReset() {
    localStorage.removeItem(USER_NAME_KEY);
    greetingLabel.innerText = "";

    hideNshowControls(SHOW_LOGIN_FORM);
}

//
// Script Starts HERE
//
loginForm.addEventListener("submit",onSubmitAction);
resetLabel.addEventListener("click", onClickReset);
prepareGreetingScreen();
