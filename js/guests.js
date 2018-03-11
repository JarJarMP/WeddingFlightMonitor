function GuestList (left, right) {
  this.selectors = {left, right};
  this.header = [
    {
      name: 'Család / Név',
      nameClass: '',
      placement: 'Város / Asztal',
      status: 'Státusz',
      statusClass: '',
      rowClass: 'flight-board-arrivals__header'
    }
  ];
  this.list = mockData;
  this.updateInterval = 60000;
  this.apiUrl = 'https://github.com/JarJarMP/WeddingFlightMonitor';

  this.init();
}

GuestList.prototype.init = function () {
  const self = this;

  self.updateData();
  window.setInterval(self.updateData.bind(self), self.updateInterval);
}

GuestList.prototype.updateData = function () {
  const self = this;

  self
    .makeRequest('GET', self.apiUrl)
    .then(function (data) {
      console.log(data);
      /*self.list = data;
      self.render();*/
    })
    .catch(function (err) {
      console.error('No user data, backend seems to be down!', err.statusText);
      self.list = mockData;
      self.render();
    });
}

GuestList.prototype.makeRequest = function (method, url) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };

    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };

    xhr.send();
  });
}

GuestList.prototype.render = function () {
  const header = this.getTable(['flight-board-arrivals__headers'], this.header),
        left = `${header}${this.getTable(['flight-board-arrivals__guests'], this.list.left)}`,
        right = `${header}${this.getTable(['flight-board-arrivals__guests'], this.list.right)}`;
  
  this.setHTML(this.selectors.left, left);
  this.setHTML(this.selectors.right, right);
}

GuestList.prototype.getTable = function (classList, data) {
  return `<table class="${classList.join(' ')}">${data.map(guest => this.getOneRow(guest)).join('')}</table>`;
}

GuestList.prototype.getOneRow = function (data) {
  const {name, placement, status, rowClass, nameClass, statusClass} = data;

  return `<tr class="${rowClass}">
  <td class="${nameClass}" width=45%>${name}</td>
  <td width=30%>${placement}</td>
  <td class="${statusClass}" width=25%>${status}</td>
</tr>`;
}

GuestList.prototype.setHTML = function (classSelector, html) {
  document.getElementsByClassName(classSelector)[0].innerHTML = html;
}

const mockData = {
  left: [
    {
      name: 'Józsi',
      nameClass: 'text-yellow',
      placement: 'Szeged',
      status: 'Késik',
      statusClass: 'text-red',
      rowClass: 'flight-board-arrivals__guest'
    },
    {
      name: 'Józsi',
      nameClass: 'text-yellow',
      placement: 'Szeged',
      status: 'Késik',
      statusClass: 'text-red',
      rowClass: 'flight-board-arrivals__guest'
    },
    {
      name: 'Józsi',
      nameClass: 'text-yellow',
      placement: 'Szeged',
      status: 'Úton',
      statusClass: '',
      rowClass: 'flight-board-arrivals__guest'
    },
    {
      name: 'Józsi',
      nameClass: 'text-yellow',
      placement: 'Szeged',
      status: 'Megérkezett',
      statusClass: 'text-green',
      rowClass: 'flight-board-arrivals__guest'
    },
    {
      name: 'Józsi',
      nameClass: 'text-yellow',
      placement: 'Szeged',
      status: 'Úton',
      statusClass: '',
      rowClass: 'flight-board-arrivals__guest'
    },
    {
      name: 'Józsi',
      nameClass: 'text-yellow',
      placement: 'Szeged',
      status: 'Úton',
      statusClass: '',
      rowClass: 'flight-board-arrivals__guest'
    },
    {
      name: 'Józsi',
      nameClass: 'text-yellow',
      placement: 'Szeged',
      status: 'Megérkezett',
      statusClass: 'text-green',
      rowClass: 'flight-board-arrivals__guest'
    },
    {
      name: 'Józsi',
      nameClass: 'text-yellow',
      placement: 'Szeged',
      status: 'Megérkezett',
      statusClass: 'text-green',
      rowClass: 'flight-board-arrivals__guest'
    }
  ],
  right: [
    {
      name: 'Józsi',
      nameClass: 'text-yellow',
      placement: 'Szeged',
      status: 'Késik',
      statusClass: 'text-red',
      rowClass: 'flight-board-arrivals__guest'
    },
    {
      name: 'Józsi',
      nameClass: 'text-yellow',
      placement: 'Szeged',
      status: 'Késik',
      statusClass: 'text-red',
      rowClass: 'flight-board-arrivals__guest'
    },
    {
      name: 'Józsi',
      nameClass: 'text-yellow',
      placement: 'Szeged',
      status: 'Úton',
      statusClass: '',
      rowClass: 'flight-board-arrivals__guest'
    },
    {
      name: 'Józsi',
      nameClass: 'text-yellow',
      placement: 'Szeged',
      status: 'Megérkezett',
      statusClass: 'text-green',
      rowClass: 'flight-board-arrivals__guest'
    },
    {
      name: 'Józsi az irdatlan hosszú nevű pék',
      nameClass: 'text-yellow',
      placement: 'Szeged',
      status: 'Úton',
      statusClass: '',
      rowClass: 'flight-board-arrivals__guest'
    },
    {
      name: 'Józsi',
      nameClass: 'text-yellow',
      placement: 'Szeged és csodálatos környéke',
      status: 'Úton',
      statusClass: '',
      rowClass: 'flight-board-arrivals__guest'
    },
    {
      name: 'Józsi',
      nameClass: 'text-yellow',
      placement: 'Szeged',
      status: 'Megérkezett',
      statusClass: 'text-green',
      rowClass: 'flight-board-arrivals__guest'
    },
    {
      name: 'Józsi',
      nameClass: 'text-yellow',
      placement: 'Szeged',
      status: 'Megérkezett',
      statusClass: 'text-green',
      rowClass: 'flight-board-arrivals__guest'
    }
  ]};
