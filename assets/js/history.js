function initHistoryPage() {
    const historySection = document.querySelector('.history');
    if (!historySection) {
        return;
    }

    // 섹션 전체 표시
    setTimeout(() => {
        historySection.classList.add('show');
    }, 100);

    // 연혁 블록 순차 표시
    const yearBlocks = historySection.querySelectorAll('.year-block');
    yearBlocks.forEach((block, index) => {
        setTimeout(() => {
            block.classList.add('show');
        }, 200 + index * 150);
    });
}

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function () {
    initHistoryPage();
});