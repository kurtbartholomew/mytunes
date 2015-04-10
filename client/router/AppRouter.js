var AppRouter = Backbone.Router.extend({

  initialize: function(options) {
    this.library = options.library;
  },

  routes: {
    'songs/:title': 'playSong'
  },

  playSong : function(title){
    var song = this.library.findWhere({title: title});

    if (song) {
      song.enqueue();
    }

    this.navigate("songs/"+title,{trigger:true});
  }

});
