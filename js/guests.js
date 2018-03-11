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
  this.list = {
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
    ]
  };
}

GuestList.prototype.render = function () {
  const self = this,
        header = `<table class="flight-board-arrivals__headers">${self.header.map(entry => self.getOneRow(entry)).join('')}</table>`,
        left = `${header}<table class="flight-board-arrivals__guests">${self.list.left.map(guest => self.getOneRow(guest)).join('')}</table>`,
        right = `${header}<table class="flight-board-arrivals__guests">${self.list.right.map(guest => self.getOneRow(guest)).join('')}</table>`;
  
  self.setHTML(self.selectors.left, left);
  self.setHTML(self.selectors.right, right);
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
