const DOWNLOAD_LINKS = {
    android: 'https://play.google.com/store/apps/details?id=cclab.metaverse.school.durumi&hl=ko',
    ios: 'https://apps.apple.com/kr/app/두루미-gknu-메타버스/id6489841896'
};

function showText() {
    const textDisplay = document.getElementById('floorTextDisplay');
    if (!textDisplay) return;
    textDisplay.innerHTML = '학생회관 1층';
    setTimeout(() => {
        textDisplay.classList.add('show');
    }, 100);
}

function showImage() {
    const mapImage = document.getElementById('floor1StudentCenterImage');
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
    const trigger = document.getElementById('floor1StudentCenterImage');
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

document.addEventListener('DOMContentLoaded', function() {
    showText();
    setTimeout(() => {
        showImage();
        initDeviceModal();
    }, 500);
});