// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
      //localStorage.setItem('songQueue',JSON.stringify(this));
    },this);

    this.on('ended', function(){
      this.shift();
      if(this.length){
        this.playFirst();
      }
    });
    this.on('dequeue', function(song) {
      this.remove(song);
    });
    this.on('moveUp', function(song) {
      var songIndex = this.indexOf(song);
      if(this.at(songIndex - 1)) {
        var previousSong = this.at(songIndex - 1);
        this.models[songIndex] = previousSong;
        this.models[songIndex - 1] = song;
      }
    });
    this.on('moveDown', function(song) {
      var songIndex = this.indexOf(song);
      if(this.at(songIndex + 1)){
        var nextSong = this.at(songIndex + 1);
        this.models[songIndex] = nextSong;
        this.models[songIndex + 1] = song;
      }
    });
    this.on('all', function(){
      localStorage.setItem('songQueue',JSON.stringify(this));
    });
  },

  playFirst: function(){
    this.at(0).play();
  }

});
