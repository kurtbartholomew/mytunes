// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add',this.render,this);
    this.collection.on('remove',this.render,this);
  },



  render: function() {
    this.$el.html('<h3>Playlist</h3>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
    return this;
  }

});
