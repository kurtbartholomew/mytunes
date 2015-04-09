// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  events: {
    'click .dequeue' : 'dequeueSong'
  },

  dequeueSong: function() {
    this.model.dequeue();
  },

  template: _.template("<span><%= artist %></span> - "+
                       "<span><%= title %></span> "+
                       "<a class=\"dequeue\" href=\"#\">Remove</a>"),

  render: function(){
    return this.$el.html(this.template(this.model.toJSON()));
  }
});
