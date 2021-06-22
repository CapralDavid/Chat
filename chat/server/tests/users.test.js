const { addUser, removeUser, getUser, getUsersInRoom } = require('../users.js');

describe('users testing', () => {
  test('add user', done => {
    addUser({ id: 1, name: 'test1', room: 'test1' });
    expect(getUser(1).name).toBe('test1');
    done();
  });

  test('remove user', done => {
    removeUser(1);
    expect(getUsersInRoom('test1').length).toBe(0);
    done();
  });
});