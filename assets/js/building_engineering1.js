function showText() {
    const textDisplay = document.getElementById('floorTextDisplay');
    textDisplay.innerHTML = '공대 1호관 4층';
    // 애니메이션을 위해 약간의 지연 후 클래스 추가
    setTimeout(() => {
        textDisplay.classList.add('show');
    }, 100);
}

function showImage() {
    const mapImage = document.getElementById('floor4EngineeringImage');
    // 애니메이션을 위해 약간의 지연 후 클래스 추가
    setTimeout(() => {
        mapImage.classList.add('show');
    }, 100);
}

// 페이지 로드 시 자동으로 텍스트와 이미지 표시
document.addEventListener('DOMContentLoaded', function() {
    showText();
    // 텍스트 애니메이션 후 이미지 애니메이션 실행
    setTimeout(() => {
        showImage();
        applyImageWidthToElement();
    }, 500); // 0.5초 후 이미지 애니메이션 시작
});
