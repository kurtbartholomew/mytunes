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

  it('calls the model\'s moveUp function when clicking the Up button', function(){
    sinon.spy(fakeSong, 'moveUp');
    view = new SongQueueEntryView({model: fakeSong});
    view.render();
    view.$el.children('.moveUp').click();
    expect(fakeSong.moveUp).to.have.been.called;
  });

  it('calls the model\'s moveDown function when clicking the Down button', function(){
    sinon.spy(fakeSong, 'moveDown');
    view = new SongQueueEntryView({model: fakeSong});
    view.render();
    view.$el.children('.moveDown').click();
    expect(fakeSong.moveDown).to.have.been.called;
  });
});
