angular.module('starter.services', [])

  .factory('Events', function () {
    var events = [{
      id: 0,
      name: 'Da Bounce Comedy Night',
      venue: 'Kunstlinie Almere Flevoland',
      description: 'De meest hilarische comedians uit de USA - Ultra funny voorprogramma: Can You Stand Up? Beats by DJ Leagz - great food \'n drinks en een geweldige sfeer!',
      date: new Date(1463682600000),
      location: 'Esplanade 1, Almere',
      price: 15
    }, {
      id: 1,
      name: 'Da Bounce Comedy Night',
      venue: 'Theater Diligentia',
      description: 'Weer een geweldige show!! Zorg dat je erbij bent! De meest hilarische comedians uit de USA - Ultra funny voorprogramma: Can You Stand Up? Beats by DJ Leagz - en een geweldige sfeer!',
      date: new Date(1463595300000),
      location: 'Lange Voorhout 5, Den Haag',
      price: 14.5
    }, {
      id: 2,
      name: 'Da Bounce Comedy Night',
      venue: 'De Meervaart',
      description: 'De meest hilarische comedians uit de USA - Ultra funny voorprogramma: Can You Stand Up? Beats by DJ Leagz - great food \'n drinks en een geweldige sfeer!',
      date: new Date(1463855400000),
      location: 'Meer en Vaart 300, Amsterdam',
      price: 20
    }, {
      id: 3,
      name: 'Da Bounce Comedy Night',
      venue: 'Theater Zuidplein',
      description: 'De meest hilarische comedians uit de USA - Ultra funny voorprogramma: Can You Stand Up? Beats by DJ Leagz - great food \'n drinks en een geweldige sfeer!',
      date: new Date(1463769000000),
      location: 'Zuidplein 60, Rotterdam',
      price: 19
    }];

    return {
      list: function () {
        return events;
      },
      get: function (id) {
        for (var i = 0; i < events.length; i++) {
          if (events[i].id === parseInt(id)) {
            return events[i];
          }
        }
        return null;
      }
    };
  });
