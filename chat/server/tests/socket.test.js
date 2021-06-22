const io = require('socket.io-client');

let firstSocket;
let secondSocket;
let roomData;

jest.setTimeout(60000);

beforeEach(done => {
  firstSocket = io.connect('http://localhost:5000');
  secondSocket = io.connect('http://localhost:5000');

  firstSocket.emit('join', { name: 'test1', room: 'test1' }, () => {});
  secondSocket.emit('join', { name: 'test2', room: 'test1' }, () => {});

  secondSocket.on('roomData', data => {
    roomData = data;
    done();
  });
});

describe('socket.io testing', () => {
  test('should join', done => {
    expect(roomData.users.length).toBe(2);
    firstSocket.disconnect();
    secondSocket.disconnect();
    done();
  });

  test('should have proper room', done => {
    expect(roomData.room).toBe('test1');
    firstSocket.disconnect();
    secondSocket.disconnect();
    done();
  });

  test('should send message', done => {
    secondSocket.on('message', msg => {
      expect(msg.text).toBe('testing sending message');
      firstSocket.disconnect();
    secondSocket.disconnect();
      done();
    });

    firstSocket.emit('sendMessage', 'testing sending message', () => {});
  });
  
  test('should message have proper name', done => {
    secondSocket.on('message', msg => {
      expect(msg.user).toBe('test1');
      firstSocket.disconnect();
    secondSocket.disconnect();
      done();
    });

    firstSocket.emit('sendMessage', 'testing sending message', () => {});
  })

  test('should receive disconnect message', done => {
    secondSocket.on('message', msg => {
      expect(msg.text).toBe('test1 has left.');
      firstSocket.disconnect();
      secondSocket.disconnect();
      done();
    });

    firstSocket.disconnect();
  });

  test('should disconnect', done => {
    firstSocket.disconnect();
    secondSocket.disconnect();

    expect(firstSocket.connected).toBe(false);
    done();
  });
});