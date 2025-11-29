// main의 width를 footer에 적용하는 함수
function applyMainWidthToFooter() {
    const mainElement = document.querySelector('.main');
    const footerElement = document.querySelector('.footer');
    
    if (mainElement && footerElement) {
        const mainWidth = mainElement.offsetWidth;
        footerElement.style.width = mainWidth + 'px';
    } else {
    }
}

// DOM이 로드된 후 초기 실행
document.addEventListener('DOMContentLoaded', () => {
    // 약간의 지연을 두어 모든 요소가 완전히 렌더링된 후 실행
    setTimeout(applyMainWidthToFooter, 100);
});

// 윈도우 리사이즈 시에도 실행
window.addEventListener('resize', () => {
    applyMainWidthToFooter();
});

// 페이지가 완전히 로드된 후에도 실행
window.addEventListener('load', () => {
    setTimeout(applyMainWidthToFooter, 200);
});