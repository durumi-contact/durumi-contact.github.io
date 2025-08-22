function showText() {
    const textDisplay = document.getElementById('floorTextDisplay');
    textDisplay.innerHTML = '학생회관 1층';
    // 애니메이션을 위해 약간의 지연 후 클래스 추가
    setTimeout(() => {
        textDisplay.classList.add('show');
    }, 100);
}

// 페이지 로드 시 자동으로 텍스트와 이미지 표시
document.addEventListener('DOMContentLoaded', function() {
    showText();
});