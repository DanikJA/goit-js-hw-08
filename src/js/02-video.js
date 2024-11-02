// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';


// const TIME_KEY = 'videoplayer-current-time';
// const iframe = document.querySelector('iframe');
// const player = new Player (iframe);



// const getCurrentTime = function (currentTime) {
//     const timeSeconds = currentTime.seconds;
//     localStorage.setItem(TIME_KEY, JSON.stringify(timeSeconds))
// }

// player.on('timeupdate', throttle(getCurrentTime, 1000));

// const savedTime = JSON.parse(localStorage.getItem(TIME_KEY));


// if (savedTime) {
// player.setCurrentTime(savedTime).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });
// }

//  player.on('play', function() {
//         console.log('played the video!');
//     });

//     player.getVideoTitle().then(function(title) {
//         console.log('title:', title);
//     });


import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const TIME_KEY = "videoplayer-current-time"
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const getCurrentTime = function (currentTime) {
    const timeSeconds = currentTime.seconds;
    localStorage.setItem(TIME_KEY, timeSeconds);
}

const savedTime = localStorage.getItem(TIME_KEY)


player.on('timeupdate', throttle(getCurrentTime, 1000));

if (savedTime) {
  player.setCurrentTime(parseFloat(savedTime)).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});  
}

 player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


