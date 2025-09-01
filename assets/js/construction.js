function showText() {
  const textDisplay = document.getElementById('buildingTextDisplay');
  textDisplay.innerHTML = '국립경국대학교';
  // 애니메이션을 위해 약간의 지연 후 클래스 추가
  setTimeout(() => {
    textDisplay.classList.add('show');
  }, 100);
}

function showImage() {
  const mapImage = document.getElementById('mapImage');
  // 애니메이션을 위해 약간의 지연 후 클래스 추가
  setTimeout(() => {
    mapImage.classList.add('show');
  }, 100);
}

function openModal(title, body, x, y) {
  const modal = document.getElementById("modal");
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalBody").innerText = body;

  // 지도 이미지의 위치를 기준으로 모달 위치 계산
  const mapImage = document.getElementById('mapImage');
  const mapRect = mapImage.getBoundingClientRect();
  
  // 모달 위치 조정 (마커 위쪽에 뜨도록)
  const modalX = mapRect.left + x - 125; // 모달 너비의 절반만큼 왼쪽으로
  const modalY = mapRect.top + y - 150; // 마커 위쪽에 표시

  modal.style.left = modalX + "px";
  modal.style.top = modalY + "px";
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// 페이지 로드 시 자동으로 텍스트와 이미지 표시
document.addEventListener('DOMContentLoaded', function () {
  showText();
  // 텍스트 애니메이션 후 이미지 애니메이션 실행
  setTimeout(() => {
    showImage();
  }, 500); // 0.5초 후 이미지 애니메이션 시작

  // 마커 이벤트 리스너 추가
  const engineering1Marker = document.getElementById('engineering1Marker');
  const studentCenterMarker = document.getElementById('studentCenterMarker');

  // 공학 1호관 마커 이벤트
  engineering1Marker.addEventListener('mouseenter', function() {
    openModal('공학 1호관', '클릭하시면 공대 1호관 4층 복도로 이동하실 수 있습니다..', 600, 220);
  });

  engineering1Marker.addEventListener('mouseleave', function() {
    closeModal();
  });

  // 학생회관 마커 이벤트
  studentCenterMarker.addEventListener('mouseenter', function() {
    openModal('학생회관', '클릭하시면 학생회관 1층 복도로 이동하실 수 있습니다.', 730, 280);
  });

  studentCenterMarker.addEventListener('mouseleave', function() {
    closeModal();
  });
});