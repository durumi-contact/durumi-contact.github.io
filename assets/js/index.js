const TYPED_ANIMATION_CONFIG = {
    texts: ["학교의 모든 공간을", "가상공간에서도 생생하게...."], // 표시할 텍스트 목록
    typingSpeed: 100, // 타이핑 속도 (ms)
    deleteSpeed: 100, // 삭제 속도 (ms)
    delayAfterTyping: 1000, // 타이핑 후 대기 시간 (ms)
    delayAfterDelete: 500, // 삭제 후 대기 시간 (ms)
    cursorSettings: {
        cursorOn: true,
        blinkSpeed: 500 // 커서 깜박임 속도 (ms)
    }
};

const TYPED_ANIMATION_SELECTORS = {
    container: ".typed-container" // 타이핑 애니메이션이 들어갈 컨테이너의 클래스명 
}

// typeAnimation 초기 설정
function initTypedAnimation() {
    const container = document.querySelector(TYPED_ANIMATION_SELECTORS.container);
    if (!container) {
        console.error('${TYPED_ANIMATION_SELECTORS.container} 요소를 찾을 수 없습니다.');
        return;
    }

    let index = 0;
    let contentCount = 0;
    let timeoutId = null;

    // 타이핑될 텍스트를 표시할 요소 생성
    const typedContent = document.createElement("div");
    typedContent.className = "typed-content";
    container.appendChild(typedContent)

    // 텍스트 삭제
    function deleteText() {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }

        timeoutId = setTimeout(() => {
            if (index > 0) {
                //  타이핑될 텍스트의 0 부터 -1 까지(-1 미포함)에 대한 얕은 복사본을 0새로운 배열 객체로 반환
                typedContent.textContent = typedContent.textContent.slice(0, -1);
                index--;
                // 모든 텍스트가 반환될때까지 실행
                deleteText();
            } else {
                setTimeout(() => {
                    typeText();
                }, TYPED_ANIMATION_CONFIG.delayAfterDelete);
            }
        }, TYPED_ANIMATION_CONFIG.deleteSpeed);
    }

    // 텍스트 타이핑
    function typeText() {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            if (index < TYPED_ANIMATION_CONFIG.texts[contentCount].length) {
                typedContent.textContent += TYPED_ANIMATION_CONFIG.texts[contentCount][index];
                index++;
                typeText();
            } else {
                setTimeout(() => {
                    deleteText();
                }, TYPED_ANIMATION_CONFIG.delayAfterTyping);
                if (contentCount < TYPED_ANIMATION_CONFIG.texts.length - 1) {
                    contentCount++;
                } else {
                    contentCount = 0;
                }
            }
        }, TYPED_ANIMATION_CONFIG.typingSpeed);
    }

    // 커서 요소 생성 및 깜빡임 애니메이션 설정
    if (TYPED_ANIMATION_CONFIG.cursorSettings.cursorOn) {
        const cursor = document.createElement("div");
        cursor.className = "cursor";
        container.appendChild(cursor);
        // 일정한 시간 간격을 두고 반복해서 실행하고 싶을때 사용 
        setInterval(() => {
            // 투명도 조절
            cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
        }, TYPED_ANIMATION_CONFIG.cursorSettings.blinkSpeed);
    }

    // 애니메이션 시작
    typeText();
}

// 페이지 로드 시 애니메이션 초기화 
document.addEventListener('DOMContentLoaded', function() {
    initTypedAnimation();
});
