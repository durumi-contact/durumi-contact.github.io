function initAboutPage() {
    const aboutSection = document.querySelector('.about');
    if (!aboutSection) {
        return;
    }

    // 섹션 표시 애니메이션 시작 (약간의 지연 후)
    setTimeout(() => {
        aboutSection.classList.add('show');
    }, 100);
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function () {
    initAboutPage();
});


