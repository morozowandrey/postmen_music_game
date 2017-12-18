/////////////////////////////////////RENDER///////////////////////////////////

var Game = {
    audioBox: document.querySelector('.audio-nodes'),
    playerBox: document.querySelector('.dropzone-box'),
    soundLinksArr: [
        'a/short-bass-with-guitar.wav',
        'a/springy-thud-rolling-away-s11.wav',
        'a/bubbling-boing-0-h16j.wav',
        'a/springy-o36b.wav'
    ],
    currEl: '',
    getCurrEl: function () {
        return this.currEl
    },
    setCurrEl: function (el) {
        this.currEl = el
    },
    createMusicNode: function (nodeId, src) {
        var div = document.createElement('DIV');
        div.classList.add("draggable", "drag-drop");
        div.setAttribute("id", "yes-drop"+nodeId);
        div.setAttribute("data-src", src);
        this.audioBox.appendChild(div);
    },
    createPlayerNode: function (nodeId) {
        var div = document.createElement('DIV');
        div.classList.add("dropzone");
        div.setAttribute("id", "outer-dropzone"+nodeId);
        this.playerBox.appendChild(div);
    },
    createAudio: function (audioSrs) {
        var rootForAudio = document.querySelector('.audio-bank');
        var audio = document.createElement('AUDIO');
        audio.setAttribute("loop", "true");
        audio.setAttribute("autoplay", "true");
        audio.setAttribute("src", audioSrs);

        rootForAudio.appendChild(audio);
        console.log('asas');
    },
    init: function () {
        var that=this;
        this.soundLinksArr.forEach(
            function (val, i) {
                that.createMusicNode(i+1, val);
                // that.createPlayerNode(i+1, val);
            }
        );
        Game.createPlayerNode(1);
    }
};

interact('.draggable')
    .draggable({
        inertia: true,
        restrict: {
            restriction: "#game-fild",
            endOnly: true,
            elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
        },
        autoScroll: true,
        onmove: dragMoveListener,
        onend: function (event) {
            var textEl = event.target.querySelector('p');

            textEl && (textEl.textContent =
                'moved a distance of '
                + (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                    Math.pow(event.pageY - event.y0, 2) | 0))
                    .toFixed(2) + 'px');
        }
    });

function dragMoveListener (event) {
    Game.setCurrEl(event.target.dataset.src);

    var target = event.target,
        // keep the dragged position in the data-x/data-y attributes
        x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
        y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

    // translate the element
    target.style.webkitTransform =
        target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';

    // update the posiion attributes
    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
}

interact('.dropzone').dropzone({
    overlap: 0.75,
    ondropactivate: function (event) {
        event.target.classList.add('drop-active');
    },
    ondragenter: function (event) {
        var draggableElement = event.relatedTarget,
            dropzoneElement = event.target;
        dropzoneElement.classList.add('drop-target');
        draggableElement.classList.add('can-drop');
        draggableElement.textContent = 'in';
    },
    ondragleave: function (event) {
        event.target.classList.remove('drop-target');
        event.relatedTarget.classList.remove('can-drop');
        event.relatedTarget.textContent = 'out';
    },
    ondrop: function (event) {
        Game.createAudio(Game.getCurrEl());

        var pln = $('.dropzone').length;
        Game.createPlayerNode(pln+1);
    },
    ondropdeactivate: function (event) {
        event.target.classList.remove('drop-active');
        event.target.classList.remove('drop-target');
    }
});

window.onload = function () {
    Game.init();
};