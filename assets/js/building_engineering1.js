const DOWNLOAD_LINKS = {
    android: 'https://play.google.com/store/apps/details?id=cclab.metaverse.school.durumi&hl=ko',
    ios: 'https://apps.apple.com/kr/app/두루미-gknu-메타버스/id6489841896'
};

function showText() {
    const textDisplay = document.getElementById('floorTextDisplay');
    if (!textDisplay) return;
    textDisplay.innerHTML = '공대 1호관 4층';
    setTimeout(() => {
        textDisplay.classList.add('show');
    }, 100);
}

function showImage() {
    const mapImage = document.getElementById('floor4EngineeringImage');
    if (!mapImage) return;
    setTimeout(() => {
        mapImage.classList.add('show');
    }, 100);
}

function toggleDeviceModal(shouldOpen) {
    const modal = document.getElementById('deviceModal');
    if (!modal) return;
    modal.classList.toggle('show', shouldOpen);
    modal.setAttribute('aria-hidden', shouldOpen ? 'false' : 'true');
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
}

function initDeviceModal() {
    const trigger = document.getElementById('floor4EngineeringImage');
    const modal = document.getElementById('deviceModal');
    const closeButton = document.getElementById('deviceModalClose');
    const androidLink = document.getElementById('deviceModalAndroid');
    const iosLink = document.getElementById('deviceModalIos');

    if (!trigger || !modal || !closeButton || !androidLink || !iosLink) return;

    androidLink.href = DOWNLOAD_LINKS.android;
    iosLink.href = DOWNLOAD_LINKS.ios;

    trigger.addEventListener('click', () => toggleDeviceModal(true));
    closeButton.addEventListener('click', () => toggleDeviceModal(false));
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            toggleDeviceModal(false);
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            toggleDeviceModal(false);
        }
    });
}

function applyImageWidthToElement() {
    // 기존 함수 호출을 유지하기 위한 자리표시자
}

document.addEventListener('DOMContentLoaded', function() {
    showText();
    setTimeout(() => {
        showImage();
        applyImageWidthToElement();
        initDeviceModal();
    }, 500);
});
