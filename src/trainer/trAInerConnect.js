//'use strict';

/**
 * Module that allows sending commands and data to the TrAIner smartphone app.
 */
var TrAInerConnect = (function () {
    let handler = {
        postMessage: function (msg) {
            console.log("No handler for message: ", msg)
        }
    };

    // Connect to the smartphone app, if possible
    if (window.webkit && window.webkit.messageHandlers) {
        handler = window.webkit.messageHandlers.trAInerHandler;
    }

    // PUBLIC

    /**
     * Start a (recording of a) new running session
     */
    function startSession(payload) {
        sendTypedMessage('session-start', payload ? payload : {})
    }

    /**
     * Stops (recording) the current running session
     */
    function stopSession() {
        sendTypedMessage('session-stop', {})
    }

    /**
     * Start polling sensor and running related data
     */
    function startPolling() {
        sendTypedMessage('session-polling-start', {})
    }

    /**
     * Stops polling sensor and running related data, but keep session open (for feedback)
     */
    function stopPolling() {
        sendTypedMessage('session-polling-stop', {})
    }

    /**
     * Send metadata that should be stored along with the running session
     *
     * @param data object generic json serializable object to store as data
     */
    function sendData(data) {
        sendTypedMessage('session-data', data)
    }

    /**
     * Send remarks about a current run
     *
     * @param remarks {string}
     */
    function sendRemarks(remarks) {
        sendData({type:'remarks', remarks: remarks})
    }

    /**
     * Lock and unlock the smartphone UI
     *
     * @param locked bool   true for locking, false for unlocking the ui
     */
    function lockUI(locked) {
        if (locked) {
            sendTypedMessage('lock-ui');
        } else {
            sendTypedMessage('unlock-ui');
        }
    }

    /**
     * Protect the screen (use proximity sensor and disable screen timeout)
     *
     * @param {bool} isProtected    true for protection
     */
    function setScreenProtection(isProtected) {
        sendTypedMessage('protect-ui', {
            isProtected: isProtected
        })
    }

    /**
     * Set the method for communicating raw sensor data with the server.
     * Options: "continuous" to send data real-time, "interval" to send larger packets of data at set intervals, "wifi-end" to buffer all data until wifi is used and the run is over
     *
     * @param {String} dataMode
     */
    function setSessionDataMode(dataMode = 'interval') {
        sendTypedMessage('session-data-mode', {
            dataMode: dataMode
        });
    }

    /**
     * Show and hide the native wrapper ui with advanced settings and debugging options.
     *
     * @param show bool   true for showing, false for hiding the ui
     */
    function showAdvancedUI(show) {
        if (show) {
            sendTypedMessage('show-advanced-ui');
        } else {
            sendTypedMessage('hide-advanced-ui');
        }
    }

    /**
     * Start a connection with Spotify app in order to control the player
     */
    function spotifyConnect() {
        sendTypedMessage('spotify-connect');
    }

    /**
     * Disconnect the connection with Spotify
     */
    function spotifyDisconnect() {
        sendTypedMessage('spotify-disconnect');
    }

    /**
     * Play a track based on a Spotify uri. A connection with the Spotify app is required.
     *
     * @param uri string    the uri of a Spotify track
     * @param seek number   (optional) header position in millis to start playing
     */
    function spotifyPlayTrack(uri, seek = 0) {
        sendTypedMessage('spotify-player-play-track', {
            uri: uri,
            seek: seek
        });
    }

    /**
     * Sets the playhead of the currently playing track
     *
     * @param seek number   header position in millis to start playing
     */
    function spotifySeek(seek = 0) {
        sendTypedMessage('spotify-player-seek', {
            seek: seek
        });
    }

    /**
     * Sets the playhead of the currently playing track to the beginning
     */
    function spotifyPlayBeginning() {
        spotifySeek();
    }

    /**
     * Set the Spotify player to shuffle or not
     * @param shuffle bool
     */
    function spotifyShuffle(shuffle = false) {
        sendTypedMessage('spotify-player-shuffle', {
            shuffle: shuffle
        });
    }

    /**
     * Set the Spotify player to repeat or not
     * @param repeat {String} valid options: 'off','context','track'
     */
    function spotifyRepeatMode(repeat = 'off') {
        sendTypedMessage('spotify-player-repeatmode', {
            repeatMode: repeat
        });
    }

    /**
     * Pause the Spotify player.
     */
    function spotifyPause() {
        sendTypedMessage('spotify-player-pause');
    }

    /**
     * Resume the Spotify player.
     */
    function spotifyResume() {
        sendTypedMessage('spotify-player-resume');
    }

    /**
     * Pause the Spotify player.
     */
    function spotifySkipNext() {
        sendTypedMessage('spotify-player-skip-next');
    }

    /**
     * Pause the Spotify player.
     */
    function spotifySkipPrevious() {
        sendTypedMessage('spotify-player-skip-previous');
    }

    /**
     * Fetch album art using an image uri
     *
     * @param imgUri string the uri to the album art (this is not the same as the track uri)
     */
    function spotifyFetchAlbumArt(imgUri, callback) {
        this.onAlbumArt = function (payload) {
            callback(payload);
        }
        sendTypedMessage('spotify-fetch-album-art', {
            imgUri: imgUri
        });
    }

    function setUserId(userId) {
        sendTypedMessage('set-user-id', {
            userId: userId
        });
    }

    function getUserId(callback) {
        this.onUserId = function (payload) {
            console.log('userId: ' + payload)
            callback(payload);
        }
        sendTypedMessage('get-user-id');
    }

    function unsetUserId() {
        sendTypedMessage('unset-user-id');
    }

    /**
     * Start playing the countdown audio. Updates are received with `onAudioCountdownUpdate`
     *
     * @param remaining {Number} time in seconds to start from the end of the audio
     * @param volume {Number} volume between 0.0 and 1.0 relative to system audio
     */
    function playCountdownAudio(remaining, volume) {
        sendTypedMessage('play-countdown-audio', {
            remaining: remaining,
            volume: volume
        });
    }

    /**
     * Stop playing the countdown audio
     */
    function stopCountdownAudio() {
        sendTypedMessage('stop-countdown-audio');
    }

    /**
     * Start playing an audio notification
     *
     * @param notificationId {String} notification id
     * @param volume {Number} volume between 0.0 - 1.0 relative to system audio
     */
    function playAudioNotification(notificationId, volume) {
        sendTypedMessage('play-audio-notification', {
            notification: notificationId,
            volume: volume
        });
    }

    /**
     * Stop playing the audio notification
     *
     * @param notificationId {String} notification id
     */
    function stopAudioNotification(notificationId) {
        sendTypedMessage('stop-audio-notification', {notification: notificationId});
    }

    /**
     * Catch-all generic communication to the smartphone app, for experimental or custom purposes
     *
     * @param type string   defines the type of message the app will understand, messages with uhandled types will be ignored
     * @param payload   the json serializable object to include as data payload, containing the parameters decorating the message
     */
    function sendTypedMessage(type, payload = {}) {
        handler.postMessage({
            type: type,
            payload: payload
        });
    }

    return {
        startSession: startSession,
        stopSession: stopSession,
        startPolling: startPolling,
        stopPolling: stopPolling,
        sendData: sendData,
        sendTypedMessage: sendTypedMessage,
        lockUI: lockUI,
        setScreenProtection: setScreenProtection,
        setSessionDataMode: setSessionDataMode,
        showAdvancedUI: showAdvancedUI,
        spotifyConnect: spotifyConnect,
        spotifyDisconnect: spotifyDisconnect,
        spotifyPlayTrack: spotifyPlayTrack,
        spotifyPause: spotifyPause,
        spotifyResume: spotifyResume,
        spotifySeek: spotifySeek,
        spotifyPlayBeginning: spotifyPlayBeginning,
        spotifyRepeatMode: spotifyRepeatMode,
        spotifyShuffle: spotifyShuffle,
        spotifySkipNext: spotifySkipNext,
        spotifySkipPrevious: spotifySkipPrevious,
        spotifyFetchAlbumArt: spotifyFetchAlbumArt,
        sendRemarks: sendRemarks,
        setUserId: setUserId,
        getUserId: getUserId,
        unsetUserID: unsetUserId,

        playCountdownAudio: playCountdownAudio,
        stopCountdownAudio: stopCountdownAudio,
        playAudioNotification: playAudioNotification,
        stopAudioNotification: stopAudioNotification,

        onAlbumArt: null,
        onUserId: null,
        onNotification: (notification) => {
            console.debug("Notification arrived:", notification);
        },
        onAudioNotificationEnded: (notificationId) => {
            console.log("Audio notification ended: ", notificationId)
        },
        onAudioCountdownUpdate: (data) => {
            console.log("Countdown update: ", data)
        }
    }
})();

export default TrAInerConnect