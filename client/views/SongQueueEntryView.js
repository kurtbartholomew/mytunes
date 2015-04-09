// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  template: _.template("<span><%= artist %></span> - "+
                       "<span><%= title %></span>"),

  render: function(){
    return this.$el.html(this.template(this.model.toJSON()));
  }
});
