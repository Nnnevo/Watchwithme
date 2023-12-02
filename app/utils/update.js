var io = require('../../server').io
var socket = require('../../server').socket

// НАРАЗІ НЕ ВИКОРИСТОВУЄТЬСЯ
// СЛІД РЕФАКТОРИТИ ВУЗЛИ ТА СОКЕТИ У МАЙБУТНЬОМУ!

module.exports = {

        // Update all users
        // function updateUsernames() {
        //     // io.sockets.emit('get users', users);
        //     // console.log(users)
        // }

        // Оновити імена користувачів кімнат
        RoomUsers: function(roomnum) {
            var roomUsers = io.sockets.adapter.rooms['room-' + socket.roomnum].users
            io.sockets.in("room-" + roomnum).emit('get users', roomUsers);
        },

        // Оновлення плейлиста/черги
        QueueVideos: function() {
            var vidlist = io.sockets.adapter.rooms['room-' + socket.roomnum].queue
            var currPlayer = io.sockets.adapter.rooms['room-' + socket.roomnum].currPlayer
            io.sockets.in("room-" + socket.roomnum).emit('get vidlist', {
                vidlist: vidlist,
                currPlayer: currPlayer,
            });
        }

}
