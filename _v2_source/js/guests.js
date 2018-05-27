function getGuests() {
  return [
    { name: 'Az ujdonsult csalad', table:'Elol'},
    { name: 'Csala Csalad', table: 'Rome' },
    { name: 'Ujlaki Csalad', table: 'Rome' },
    { name: 'Ujlaki + Gluck', table: 'Rome' },
    { name: 'Varacskai + Kakuk', table: 'Rome' },
    { name: 'Nagy Peti', table: 'Rome' },
    { name: 'Kovacs + Ujlaki', table: 'Rome' },
    { name: 'Bajzat + Czukor', table: 'Abisko' },
    { name: 'Barna + Kovacs', table: 'Rome' },
    { name: 'Lakszner + Kata', table: 'Rome' },
    { name: 'Zoltan + Guba', table: 'Abisko' },
    { name: 'Csala Gabor', table: 'Rome' },
    { name: 'Molnar Maria', table: 'Rome' },
    { name: 'Molnar + Brasko', table: 'Rome' },
    { name: 'Szeredi Csalad', table: 'Rome' },
    { name: 'Kereszteny+ Szeredi', table: 'Rome' },
    { name: 'Szeredi Balazs', table: 'Rome' },
    { name: 'Schiller Csalad', table: 'Madeira' },
    { name: 'Schiller Gergely', table: 'Rome' },
    { name: 'Maxim + Schiller', table: 'Rome' },
    { name: 'Kossuth Csalad', table: 'Rome' },
    { name: 'Hodsagi-Molnar Cs.', table: 'Paris' },
    { name: 'Remias Csalad', table: 'Paris' },
    { name: 'Molnar J. Csalad', table: 'Paris' },
    { name: 'Molnar T. Csalad', table: 'Paris' },
    { name: 'Szilva Csalad', table: 'Paris' },
    { name: 'Takacs Csalad', table: 'Paris' },
    { name: 'Galambos Csalad', table: 'Paris' },
    { name: 'Szivak + Beni', table: 'Paris' },
    { name: 'Csepregi Csalad', table: 'Paris' },
    { name: 'Babar Csalad', table: 'Paris' },
    { name: 'Polgar + Egedy', table: 'Paris' },
    { name: 'Varadi + Timar', table: 'Paris' },
    { name: 'Engelhardt Vica', table: 'Paris' },
    { name: 'Lexiek', table: 'Paris' },
    { name: 'Osvath Csalad', table: 'Paris' },
    { name: 'Demeter Adrienn', table: 'Paris' },
    { name: 'Maroti Peter', table: 'Paris' },
    { name: 'Feher Patrik', table: 'Paris' },
    { name: 'Blasko Peter', table: 'Paris' },
    { name: 'Gedo + Csabai', table: 'BP.' },
    { name: 'Vas + Kadar', table: 'BP.' },
    { name: 'Simon Csaba', table: 'BP.' },
    { name: 'Kapusi Csalad', table: 'BP.' },
    { name: 'Janosi Ferenc', table: 'BP.' },
    { name: 'Kuronya Csalad', table: 'BP.' },
    { name: 'Magedli Csalad', table: 'BP.' },
    { name: 'Szilagyi Tunde', table: 'BP.' },
    { name: 'Mar Csilla', table: 'BP.' },
    { name: 'Sarhelyi Erika', table: 'BP.' },
    { name: 'Ver Diana', table: 'BP.' },
    { name: 'Kojnok Balazs', table: 'BP.' },
    { name: 'Szucs + Szabo', table: 'BP.' },
    { name: 'Vass Bence', table: 'BP.' },
  ].sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    
    if (a.name > b.name) {
      return 1;
    }

    return 0;
  });
};
