const formatNumberWithZero = num => num < 10 ? `0${num}` : num,
      updateTime = () => {
        const element = document.getElementsByClassName('header-time__value')[0],
              currentTime = new Date();

        currentTimeStamp = [
          formatNumberWithZero(currentTime.getHours()),
          formatNumberWithZero(currentTime.getMinutes()),
          formatNumberWithZero(currentTime.getSeconds())
        ];
        
        element.innerText = currentTimeStamp.join(':');
      }

      window.addEventListener('load', function () {
        updateTime();
        window.setInterval(updateTime, 1000);
      });
