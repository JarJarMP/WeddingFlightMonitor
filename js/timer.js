window.addEventListener('load', function () {
  updateTime();
  window.setInterval(updateTime, 1000);
});

function updateTime () {
  var element = document.getElementsByClassName('header-time__value')[0],
      currentTime = new Date();

  currentTimeStamp = [
    formatNumberWithZero(currentTime.getHours()),
    formatNumberWithZero(currentTime.getMinutes()),
    formatNumberWithZero(currentTime.getSeconds())
  ];
  
  element.innerText = currentTimeStamp.join(':');
}

function formatNumberWithZero (num) {
  return num < 10 ? '0' + num : num;
}
