var TIMEOUT_ANIMATE = 2000;
var TIMEOUT_REFRESHRANDOM = 2000;

$(document).ready(function () {
  var guests = getGuests();
  var ordering = getOrdering(guests.length);

  initHeading($);
  initDashboard($, guests);

  window.setTimeout(function () {
    animateDashboard($, ordering, guests.length, 0);
  }, TIMEOUT_ANIMATE);

  window.setTimeout(function () {
    refreshDashboardRandomly($, guests, null);
  }, TIMEOUT_REFRESHRANDOM * (guests.length + 10));
});

function getSplitFlapConf (ratio) {
  return {
    charWidth: 50 * ratio,
    charHeight: 100 * ratio,
    imageSize: (2500 * ratio) + 'px ' + (100 * ratio) + 'px'
  }
}

function initHeading($) {
  var config = Object.assign(
    {}, 
    getSplitFlapConf(0.5), 
    {
      text: 'Zsoka es Peti eskuvoi jarata'
    }
  );

  $('.heading').splitFlap(config);
}

function initDashboard($, guests) {
  var nameColumnWidth = 19;
  var tableColumnWidth = 7;
  var rowsInSection = 18;

  for (var i = 0; i < guests.length; i++) {
    var id = 'rows_' + i;
    var sectionId = i < rowsInSection ? 'firstSection' : (i < 2 * rowsInSection ? 'secondSection' : 'thirdSection');
    var guest = guests[i];
    var newDomElement = '<div id=' + id + '>' + guest.name.padEnd(nameColumnWidth) + ' ' + guest.table.padEnd(tableColumnWidth) + '</div>';
    var config = Object.assign(
      {}, 
      getSplitFlapConf(0.3),
      {
        textInit: ''.padEnd(nameColumnWidth + 1 + tableColumnWidth),
        autoplay: false,
      }
    );

    $('#' + sectionId).append(newDomElement);
    $('#' + id).splitFlap(config);
  }
}

function animateDashboard($, ordering, length, idx) {
  window.setTimeout(function () {
    if (idx !== length) {
      $('#rows_' + ordering[idx])
        .splitFlap('splitflap')
        .animate();
      
      animateDashboard($, ordering, length, idx + 1);
    }
  }, TIMEOUT_ANIMATE);
}

function refreshDashboardRandomly($, guests, prevIdx) {
  window.setTimeout(function () {
    var randomIdx = Math.floor(Math.random() * guests.length);
    var config = Object.assign(
      {}, 
      getSplitFlapConf(0.3),
      {
        text: 'Itt a piros hol a piros?'.padEnd(27),
      }
    );

    while (randomIdx == prevIdx) { //to avoid collision
      randomIdx = Math.floor(Math.random() * guests.length);
    }

    //TODO: variate text with for example good wishes
    $('#rows_' + randomIdx).splitFlap(config);

    if (prevIdx != null) {
      var guest = guests[prevIdx];
      var text = guest.name.padEnd(19) + ' ' + guest.table.padEnd(7);

      config = Object.assign(
        {}, 
        getSplitFlapConf(0.3),
        {
          text: text.padEnd(27),
        }
      );

      $('#rows_' + prevIdx).splitFlap(config);
    }

    refreshDashboardRandomly($, guests, randomIdx);
  }, TIMEOUT_REFRESHRANDOM * 10);
}
