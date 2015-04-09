// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  attributes: {
    class: 'songQueueSong'
  },

  events: {
    'click .moveUp' : 'moveUp',
    'click .moveDown' : 'moveDown',
    'click .dequeue' : 'dequeueSong'
  },

  moveUp: function() {
    this.model.moveUp();
  },

  moveDown: function() {
    this.model.moveDown();
  },

  dequeueSong: function() {
    this.model.dequeue();
  },

  template: _.template('<div class="songQueueSongColumn"><span><%= artist %></span> - ' +
                       '<span><%= title %></span></div>' +
                       '<a class="moveUp" href="#">Move Up</a> ' +
                       '<a class="moveDown" href="#">Move Down</a> ' +
                       '<a class="dequeue" href="#">Remove</a>'),

  render: function(){
    return this.$el.html(this.template(this.model.toJSON()));
  }
});
