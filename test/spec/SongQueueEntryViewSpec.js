describe('SongQueueEntryView', function() {
  var view, fakeSong;

  beforeEach(function() {
    fakeSong = new SongModel(
      {
        artist: 'data',
        url: '/test/testsong.mp3',
        title:'test song'
      });
  });

  it('dequeues a song when clicking the Remove button', function(){
    sinon.spy(fakeSong, 'dequeue');
    view = new SongQueueEntryView({model: fakeSong});
    view.render();
    view.$el.children().last().click();
    expect(fakeSong.dequeue).to.have.been.called;
  });

  // it('renders when add or remove event fires from the song queue collection', function(){
  //   sinon.spy(SongQueueEntryView.prototype, 'render');
  //   view = new SongQueueEntryView({model: fakeSong});
  //   view.collection.add({
  //     artist: 'data',
  //     url: '/test/testsong3.mp3',
  //     title:'test song 3'
  //   });
  //   view.collection.pop();
  //   expect(view.render).to.have.been.called;
  // });

});
