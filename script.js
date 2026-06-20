let userName = "사용자"; // 게임 전체에서 쓸 이름 변수 (맨 위에 선언)
let currentScene = "start";
let loveScore = 0; // 호감도 점수
let currentDay = 1; // 현재 날짜 (스토리 진행에 따라 증가)
let clearClassroomEvent = false;

function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}

setScreenSize();
window.addEventListener('resize', setScreenSize);

window.addEventListener('load', function() {
    const nameOverlay = document.getElementById("name-input-overlay");
    if (nameOverlay) {
        // 경로가 images/start.png 가 맞는지 꼭 확인!
        nameOverlay.style.backgroundImage = "url('images/start.png')";
        nameOverlay.style.backgroundSize = "cover";
        nameOverlay.style.backgroundPosition = "center";
    }
    updateUI(); // 초기 UI 업데이트
});
// 1단계: 이름 입력 후 도움말 띄우기
function startGame() {
    const inputField = document.getElementById("user-name-field");
    const name = inputField.value.trim();

    if (name === "") {
        alert("이름을 입력해주세요!");
        return;
    } else if(name ==='손아섭'){
        alert("선배의 이름은 손아섭입니다! 다른 이름을 입력해주세요.");
        return;
    }
   
    userName = name;
    updateUI();
    

    document.getElementById("name-input-overlay").style.display = "none";
    document.getElementById("help-modal").classList.remove("hidden");
}
// 2단계: 도움말 확인 후 진짜 게임 시작
function realStartGame() {
    // 도움말 팝업 숨기기
    document.getElementById("help-modal").classList.add("hidden");
    
    // 게임 엔진 가동 (첫 장면 렌더링)
    renderScene("start");
}

// 1. 스토리 데이터 (백엔드 데이터 역할을 수행)

function checkEnding() {
    if (loveScore >= 80) {
        renderScene("happy_ending"); // 고백 성공!
    } else if (loveScore >= 40) {
        renderScene("normal_ending"); // 그냥 친한 선후배
    } else {
        renderScene("bad_ending"); // 모르는 사이가 됨
    }
} // 최종결론

function updateUI() {
    const displayDay = currentDay || 1;
    const displayScore = loveScore || 0;
    const displayRelation = getRelationship(displayScore);
    const displayName = userName || "이름 없음";

    // 메인 화면 UI
    const mainDay = document.getElementById("main-day");
    const mainLove = document.getElementById("main-love");
    if (mainDay) mainDay.innerText = `Day ${displayDay}`;
    if (mainLove) mainLove.innerText = `선배와의 호감도: ${displayScore} ❤️`;

    // 메뉴창 내부 UI
    const menuName = document.getElementById("status-name");
    const menuDay = document.getElementById("status-day");
    const menuLove = document.getElementById("status-love");
    const menuRelation = document.getElementById("status-relation");

    if (menuName) menuName.innerText = displayName;
    if (menuDay) menuDay.innerText = displayDay;
    if (menuLove) menuLove.innerText = displayScore;
    if (menuRelation) menuRelation.innerText = displayRelation;
}

function renderScene(sceneKey, earnedScore = 0, nextDay = false, eventname) {
    currentScene = sceneKey;
    // renderScene 함수 최상단에 추가
    if (sceneKey === "start") {
        // 게임을 처음부터 다시 시작할 때 데이터 초기화
        if (loveScore <= -60) { 
            loveScore = 0;
            currentDay = 1;
            updateUI();
        }
    }
    if (eventname) {
        clearClassroomEvent = "승인";
    }
    if (sceneKey === "day5") { // Day 5가 시작되는 씬 키값에 맞게 수정하세요
        if (clearClassroomEvent === "승인") {
            sceneKey = "day5start";
            renderScene(sceneKey);// 약속을 잡았다면 이벤트 씬으로 이동!
        } else {
            sceneKey = "day6start";
            currentDay +=1;
            renderScene(sceneKey);// 약속이 없었다면 바로 Day 6로 건너뛰기!
        }
    }
    if (sceneKey === "day7_20") {
        if (loveScore >= 300){
            sceneKey = "day7_21";
            renderScene(sceneKey);
        } else {
            sceneKey = "고백 실패";
            renderScene(sceneKey);
        }
    }
    if (sceneKey === "start_reset") {
        resetGame();
        sceneKey = "start"; // 초기 장면으로 이동
        return;
    }
    if (sceneKey === "force_reload") {
    location.reload();
    return;
    }
    if (nextDay) {
        currentDay += 1;
        showDayTransition(currentDay, ()=> {
            precessRender(sceneKey);
        });
    }
    const gameOverScenes = ["bad_ending_score", "start_reset", "game_over"];
    loveScore += earnedScore; // 선택에 따른 점수 반영
    updateUI(); // UI 업데이트
    if (sceneKey === "start_reset") {
        renderScene("start_reset");
        return;
    }
    if (!gameOverScenes.includes(sceneKey) && checkGameOver()) {
        return; 
    }
    
    const scene = storyData[sceneKey];
    if (!scene) {
        return;
    }

    const processedText = scene.text.replace(/{user}/g, userName);
    const processedText1 = scene.name.replace(/{user}/g, userName);
    
    // 텍스트 및 이름 변경
    document.getElementById("dialogue-box").innerText = processedText;
    document.getElementById("name-box").innerText = processedText1;

    // 이미지 변경
    if (scene.background) {
        document.getElementById("background").style.backgroundImage = `url('${scene.background}')`;
    }
    if (scene.character) {
        document.getElementById("character-img").src = scene.character;
        document.getElementById("character-img").style.display = "block"; // 캐릭터 보이기
    } else if (scene.character === "") {
        // 만약 캐릭터를 화면에서 아예 없애고 싶을 땐 빈 문자열("")을 넣기로 규칙을 정합니다.
        document.getElementById("character-img").style.display = "none";
    }
    
    // 선택지 초기화 및 생성
    const choiceContainer = document.getElementById("choice-container");
    choiceContainer.innerHTML = "";
    
    scene.choices.forEach(choice => {
        const button = document.createElement("button");
        // 선택지 텍스트에도 이름이 들어갈 수 있게 처리
        button.innerText = choice.text.replace(/{user}/g, userName); 
        button.onclick = () => renderScene(choice.next, choice.score || 0, choice.nextDay || false, choice.event || false);
        choiceContainer.appendChild(button);
    });
}

function showDayTransition(dayNumber, callback) {
    const layer = document.getElementById("day-transition");
    const text = document.getElementById("day-text");

    if (!layer) return callback();

    // 1. 텍스트 변경
    text.innerText = `Day ${dayNumber}`;

    // 2. 강제로 display와 opacity 주입
    layer.style.setProperty("display", "flex", "important");
    layer.classList.add("active");
    
    console.log("연출 시작: Day " + dayNumber); // 콘솔창(F12)에서 확인용

    // 3. 1.5초 후 제거
    setTimeout(() => {
        layer.classList.remove("active");
        layer.style.setProperty("display", "none", "important");
        
        console.log("연출 종료");
        if (callback) callback();
    }, 1500);
}

function getRelationship(score) {
    if (score >= 100) return "⚾ 내 인생의 홈런 (연인)";
    if (score >= 70) return "🔥 썸 타는 중";
    if (score >= 40) return "😊 든든한 야구부 후배";
    if (score >= 10) return "👋 조금 친해진 선후배";
    return "🧊 아직은 어색한 사이";
}

function checkGameOver() {
    // 호감도가 -20점 이하로 떨어지면 강제 배드엔딩
    if (loveScore <= -60) {
        alert("아섭선배와의 관계가 회복 불가능할 정도로 나빠졌습니다...");
        renderScene("bad_ending_score"); // 배드 엔딩 장면으로 이동
         // 게임 오버됨을 알림
    }
    return false; // 아직 게임 진행 가능
}
// script.js
// 메뉴 열고 닫기 로직
const menuBtn = document.getElementById('menu-btn');
const menuModal = document.getElementById('menu-modal');
const closeBtn = document.getElementById('close-menu');

menuBtn.onclick = () => menuModal.classList.remove('hidden');
closeBtn.onclick = () => menuModal.classList.add('hidden');

function showHelp() {
    document.getElementById("help-modal").classList.remove("hidden");
}
function closeHelp() {
    document.getElementById("help-modal").classList.add("hidden");
} //도움말 창 제어

document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-menu');

    if (menuBtn) {
        menuBtn.addEventListener('click', function(e) {
            e.preventDefault(); // 기본 동작 방지
            e.stopPropagation(); // 이벤트 전파 방지 (다른 레이어가 클릭을 뺏지 못하게)
            openMenu();
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }
});

// 메뉴 열기
function openMenu() {
    updateUI();
    const modal = document.getElementById('menu-modal');
    if (modal) {
        modal.classList.add('active');
        modal.classList.remove('hidden');
        // 강제로 스타일 주입
        modal.style.setProperty("display", "flex", "important");
    }
}

function closeMenu() {
    const modal = document.getElementById('menu-modal');
    if (modal) {
        modal.classList.remove('active');
        modal.classList.add('hidden');
        modal.style.setProperty("display", "none", "important");
    }
}

function getCurrentBackgroundImage() {
    const background = document.getElementById("background");
    if (!background) return "";

    const inlineBackground = background.style.backgroundImage;
    const cssBackground = window.getComputedStyle(background).backgroundImage;
    return inlineBackground && inlineBackground !== "none" ? inlineBackground : cssBackground;
}

function restoreSavedBackgroundImage(savedBackground) {
    const background = document.getElementById("background");
    if (!background || !savedBackground || savedBackground === "none") return;

    background.style.backgroundImage = savedBackground;
}

// 저장 기능 (다시 점검)
function saveGame() {
    localStorage.setItem('sunbae_user_name', userName);
    localStorage.setItem('sunbae_save_point', currentScene);
    localStorage.setItem('sunbae_love_score', loveScore);
    localStorage.setItem('sunbae_current_day', currentDay);
    localStorage.setItem('sunbae_clear_classroom_event', clearClassroomEvent);
    localStorage.setItem('sunbae_background_image', getCurrentBackgroundImage());
    alert("선배와의 추억이 저장되었습니다!");
    closeMenu();
}

// 불러오기 기능 (다시 점검)
function loadGame() {
    const savedData = localStorage.getItem('sunbae_save_point');
    const savedScore = localStorage.getItem('sunbae_love_score');
    const savedDay = localStorage.getItem('sunbae_current_day');
    const savedName = localStorage.getItem('sunbae_user_name');
    const savedClassroomEvent = localStorage.getItem('sunbae_clear_classroom_event');
    const savedBackground = localStorage.getItem('sunbae_background_image');

    if (savedData && storyData[savedData]) {
        userName = savedName || "주인공";
        loveScore = parseInt(savedScore) || 0;
        currentDay = parseInt(savedDay) || 1;
        clearClassroomEvent = savedClassroomEvent; // 문자열을 불리언으로 변환
        
        // 이름 입력창 및 도움말 확실히 숨기기
        const overlay = document.getElementById("name-input-overlay");
        if (overlay) overlay.style.display = "none";
        document.getElementById("help-modal").classList.add("hidden");

        renderScene(savedData, 0, false); // 점수 중복 합산 방지
        restoreSavedBackgroundImage(savedBackground);
        updateUI();
        
        closeMenu(); // 메뉴창 닫기
        alert("선배와의 기억을 성공적으로 불러왔습니다!");
    } else {
        alert("저장된 기록이 없습니다.");
    }
}

function resetGame() {
    if (confirm("정말 처음부터 다시 시작하시겠어요?")) {
        currentScene = 'start';
        loveScore = 0;
        currentDay = 1;
        updateUI();
        location.reload(); // 이름 입력부터 다시 시작
        menuModal.classList.add('hidden');
        alert("게임이 초기화되었습니다.");
    }
}

startGame(); // 게임 시작 시 이름 입력부터 시작하도록 설정