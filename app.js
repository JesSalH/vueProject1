
new Vue ({

      // la id del elemento con el que nos enalzamos
      el: '#vue-app',

      data: {
        name: 'John',
        job: 'Ninja',
        website: 'https://google.com',
        websiteTag: '<a href="https://google.com"> The same link here </a> ',
        age: 25
      },

      methods: {

        greet: function( time ) {
          return 'Greetings ' + this.name + ', happy ' + time;
        },

        substract: function( years ) {
          this.age -= years ;
        },

        add: function( years) {
           this.age += years;
        }

      }

 });
