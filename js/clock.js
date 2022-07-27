const clockArea = document.querySelector("h2#clock");

function updateClockView() {
    const nowDate = new Date();

    // 년월일
    clockArea.innerText  = `${nowDate.getFullYear()}/`;
    clockArea.innerText += `${(nowDate.getMonth() + 1).toString().padStart(2,"0")}/`;  // January가 0임
    clockArea.innerText += `${nowDate.getDate().toString().padStart(2,"0")}`;

    // 공백 한칸
    clockArea.innerText += "\u00a0";

    // 시분초
    clockArea.innerText += `${nowDate.getHours().toString().padStart(2,"0")}:`;
    clockArea.innerText += `${nowDate.getMinutes().toString().padStart(2,"0")}:`;
    clockArea.innerText += `${nowDate.getSeconds().toString().padStart(2,"0")}`;

// 라인별로 빈칸이 삽입되며 2022/ 07/ 02 14: 42: 43  이따구로 표시되어 버럼 
    // clockArea.innerText  = `${nowDate.getFullYear()}/\
    //     ${(nowDate.getMonth() + 1).toString().padStart(2,"0")}/\
    //     ${nowDate.getDate().toString().padStart(2,"0")}\
    //     ${nowDate.getHours().toString().padStart(2,"0")}:\
    //     ${nowDate.getMinutes().toString().padStart(2,"0")}:\
    //     ${nowDate.getSeconds().toString().padStart(2,"0")}\
    //     `;

    // 공맥만 빼니 2022/07/0214:42:43 이따구로 나타남.   젠장  버럼
    // clockArea.innerText = clockArea.innerText.replace(/ /g, "");
 
}

//
// JS Starts HERE!
//
setInterval(updateClockView, 1000);
updateClockView();