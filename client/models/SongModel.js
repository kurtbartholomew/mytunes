// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  defaults: {
    beingPlayed: false,
    // NEW NEW NEW NEW NEW
    playCount: 0

  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  ended: function() {
    this.set('beingPlayed', false);
    this.trigger('ended', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  moveUp: function() {
    this.trigger('moveUp', this);
  },

  moveDown: function() {
    this.trigger('moveDown', this);
  }

});
