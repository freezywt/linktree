var title = new MovingTitle("...f r e e z y....", 300, 10);
title.start();

function MovingTitle(writeText, interval, visibleLetters) {
    var _instance = {};

    var _currId = 0;
    var _numberOfLetters = writeText.length;
    var _currentTitle = "";
    var _intervalId;

    function updateTitle() {
        _currId += 1;
        if(_currId > _numberOfLetters - 1) {
            _currId = 0; 
        }

        var startId = _currId;
        var endId = startId + visibleLetters;
        var finalText;
        if(endId < _numberOfLetters - 1) {
            finalText = writeText.substring(startId, endId);
        } else {
            var cappedEndId = _numberOfLetters;
            endId = endId - cappedEndId;

            finalText = writeText.substring(startId, cappedEndId) + writeText.substring(0, endId);
        }

        _currentTitle = finalText;
        document.title = _currentTitle; 
    }

    _instance.start = function() {
        _intervalId = setInterval(updateTitle, interval);
    };

    _instance.stop = function(){
        clearInterval(_intervalId);
    }

    return _instance;
}