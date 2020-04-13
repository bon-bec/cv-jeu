// fix IE

var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Remove Cover

window.onload = function () {
    if (isIE) {
        zoneDeJeu.removeChild(cover);
    };
};

// Declaracion du compteur

var counter = 0;

// Déclaration de divs

var zoneDeJeu = document.getElementById("zoneDeJeu");
var player = document.getElementById("player");
var skill = document.getElementById('skill');
var displayPort = document.getElementById('displayPort');
var ethernet = document.getElementById('ethernet');
var poeHat = document.getElementById('poeHat');
var usbController = document.getElementById('usbController');
var ethernetControler = document.getElementById('ethernetControler');
var bluetooth = document.getElementById('bluetooth');
var processeur = document.getElementById('processeur');
var ram = document.getElementById('ram');
var gpioHeader = document.getElementById('gpioHeader');
var hdmi1 = document.getElementById('hdmi1');
var hdmi2 = document.getElementById('hdmi2');
var audioVideo = document.getElementById('audioVideo');
var usb2 = document.getElementById('usb2');
var usb3 = document.getElementById('usb3');
var powerSlot = document.getElementById('powerSlot');
var chips = document.getElementById('chips');
var cameraPort = document.getElementById('cameraPort');
var newDiv = document.getElementById('skill');

// Largeur et Hauteur

var largeurPlayer = parseInt(getComputedStyle(player).width);
var hauteurPlayer = parseInt(getComputedStyle(player).height);

var largeurDisplayPort = parseInt(getComputedStyle(displayPort).width);
var hauteurDisplayPort = parseInt(getComputedStyle(displayPort).height);

var largeurEthernet = parseInt(getComputedStyle(ethernet).width);
var hauteurEthernet = parseInt(getComputedStyle(ethernet).height);

var largeurPoeHat = parseInt(getComputedStyle(poeHat).width);
var hauteurPoeHat = parseInt(getComputedStyle(poeHat).height);

var largeurUsbController = parseInt(getComputedStyle(usbController).width);
var hauteurUsbController = parseInt(getComputedStyle(usbController).height);

var largeurEthernetControler = parseInt(getComputedStyle(ethernetControler).width);
var hauteurEthernetControler = parseInt(getComputedStyle(ethernetControler).height);

var largeurBluetooth = parseInt(getComputedStyle(bluetooth).width);
var hauteurBluetooth = parseInt(getComputedStyle(bluetooth).height);

var largeurProcesseur = parseInt(getComputedStyle(processeur).width);
var hauteurProcesseur = parseInt(getComputedStyle(processeur).height);

var largeurRam = parseInt(getComputedStyle(ram).width);
var hauteurRam = parseInt(getComputedStyle(ram).height);

var largeurGpioHeader = parseInt(getComputedStyle(gpioHeader).width);
var hauteurGpioHeader = parseInt(getComputedStyle(gpioHeader).height);

var largeurHdmi1 = parseInt(getComputedStyle(hdmi1).width);
var hauteurHdmi1 = parseInt(getComputedStyle(hdmi1).height);

var largeurHdmi2 = parseInt(getComputedStyle(hdmi2).width);
var hauteurHdmi2 = parseInt(getComputedStyle(hdmi2).height);

var largeurAudioVideo = parseInt(getComputedStyle(audioVideo).width);
var hauteurAudioVideo = parseInt(getComputedStyle(audioVideo).height);

var largeurUsb2 = parseInt(getComputedStyle(usb2).width);
var hauteurUsb2 = parseInt(getComputedStyle(usb2).height);

var largeurUsb3 = parseInt(getComputedStyle(usb3).width);
var hauteurUsb3 = parseInt(getComputedStyle(usb3).height);

var largeurPowerSlot = parseInt(getComputedStyle(powerSlot).width);
var hauteurPowerSlot = parseInt(getComputedStyle(powerSlot).height);

var largeurSkill = parseInt(getComputedStyle(skill).width);
var hauteurSkill = parseInt(getComputedStyle(skill).height);

var largeurChips = parseInt(getComputedStyle(chips).width);
var hauteurChips = parseInt(getComputedStyle(chips).height);

var largeurCameraPort = parseInt(getComputedStyle(cameraPort).width);
var hauteurCameraPort = parseInt(getComputedStyle(cameraPort).height);

var largeurZoneDeJeu = parseInt(getComputedStyle(zoneDeJeu).width);
var hauteurZoneDeJeu = parseInt(getComputedStyle(zoneDeJeu).height);

// Touches

var touches = {
    ArrowLeft: false,
    ArrowRight: false,
    ArrowUp: false,
    ArrowDown: false,
    Left: false,
    Right: false,
    Up: false,
    Down: false
};

window.addEventListener("keydown", function (evenement) {
    switch (evenement.key) {
        case "ArrowLeft":
            touches.ArrowLeft = true;
            evenement.preventDefault();
            break;
        case "ArrowRight":
            touches.ArrowRight = true;
            evenement.preventDefault();
            break;
        case "ArrowUp":
            touches.ArrowUp = true;
            evenement.preventDefault();
            break;
        case "ArrowDown":
            touches.ArrowDown = true;
            evenement.preventDefault();
            break;
        case "Left":
            touches.Left = true;
            evenement.preventDefault();
            break;
        case "Right":
            touches.Right = true;
            evenement.preventDefault();
            break;
        case "Up":
            touches.ArrowUp = true;
            evenement.preventDefault();
            break;
        case "Down":
            touches.ArrowDown = true;
            evenement.preventDefault();
            break;
    }
});

window.addEventListener("keyup", function (evenement) {
    switch (evenement.key) {
        case "ArrowLeft":
            touches.ArrowLeft = false;
            break;
        case "ArrowRight":
            touches.ArrowRight = false;
            break;
        case "ArrowUp":
            touches.ArrowUp = false;
            break;
        case "ArrowDown":
            touches.ArrowDown = false;
            break;
        case "Left":
            touches.Left = true;
            break;
        case "Right":
            touches.Right = true;
            break;
        case "Up":
            touches.ArrowUp = true;
            break;
        case "Down":
            touches.ArrowDown = true;
            break;
    }
});

// Coordonnées pour les skills a collecter

var coordonnees = [];

var allCoordonnees = [
    [200, 500],
    [380, 500],
    [150, 770],
    [470, 530],
    [460, 760],
    [450, 360],
    [430, 260],
    [340, 190],
    [470, 140],
    [310, 750],
    [120, 570],
    [190, 370],
    [240, 370],
    [200, 540],
    [380, 650],
    [440, 430],
    [310, 600],
    [470, 10],
    [190, 50],
    [50, 50],
    [10, 10],
    [290, 5],
    [350, 5]
]

function boucle() {

    // Coordonnees des objets

    var top = parseInt(player.style.top);
    var left = parseInt(player.style.left);
    var right = left + largeurPlayer;
    var bottom = top + hauteurPlayer;

    var displayPortTop = parseInt(displayPort.style.top);
    var displayPortLeft = parseInt(displayPort.style.left);
    var displayPortRight = displayPortLeft + largeurDisplayPort;
    var displayPortBottom = displayPortTop + hauteurDisplayPort;

    var skillTop = parseInt(skill.style.top);
    var skillLeft = parseInt(skill.style.left);
    var skillRight = skillLeft + largeurSkill;
    var skillBottom = skillTop + hauteurSkill;

    var ethernetTop = parseInt(ethernet.style.top);
    var ethernetLeft = parseInt(ethernet.style.left);
    var ethernetRight = ethernetLeft + largeurEthernet;
    var ethernetBottom = ethernetTop + hauteurEthernet;

    var poeHatTop = parseInt(poeHat.style.top);
    var poeHatLeft = parseInt(poeHat.style.left);
    var poeHatRight = poeHatLeft + largeurPoeHat;
    var poeHatBottom = poeHatTop + hauteurPoeHat;

    var usbControllerTop = parseInt(usbController.style.top);
    var usbControllerLeft = parseInt(usbController.style.left);
    var usbControllerRight = usbControllerLeft + largeurUsbController;
    var usbControllerBottom = usbControllerTop + hauteurUsbController;

    var ethernetControlerTop = parseInt(ethernetControler.style.top);
    var ethernetControlerLeft = parseInt(ethernetControler.style.left);
    var ethernetControlerRight = ethernetControlerLeft + largeurEthernetControler;
    var ethernetControlerBottom = ethernetControlerTop + hauteurEthernetControler;

    var bluetoothTop = parseInt(bluetooth.style.top);
    var bluetoothLeft = parseInt(bluetooth.style.left);
    var bluetoothRight = bluetoothLeft + largeurBluetooth;
    var bluetoothBottom = bluetoothTop + hauteurBluetooth;

    var processeurTop = parseInt(processeur.style.top);
    var processeurLeft = parseInt(processeur.style.left);
    var processeurRight = processeurLeft + largeurProcesseur;
    var processeurBottom = processeurTop + hauteurProcesseur;

    var ramTop = parseInt(ram.style.top);
    var ramLeft = parseInt(ram.style.left);
    var ramRight = ramLeft + largeurRam;
    var ramBottom = ramTop + hauteurRam;

    var gpioHeaderTop = parseInt(gpioHeader.style.top);
    var gpioHeaderLeft = parseInt(gpioHeader.style.left);
    var gpioHeaderRight = gpioHeaderLeft + largeurGpioHeader;
    var gpioHeaderBottom = gpioHeaderTop + hauteurGpioHeader;

    var hdmi1Top = parseInt(hdmi1.style.top);
    var hdmi1Left = parseInt(hdmi1.style.left);
    var hdmi1Right = hdmi1Left + largeurHdmi1;
    var hdmi1Bottom = hdmi1Top + hauteurHdmi1;

    var hdmi2Top = parseInt(hdmi2.style.top);
    var hdmi2Left = parseInt(hdmi2.style.left);
    var hdmi2Right = hdmi2Left + largeurHdmi2;
    var hdmi2Bottom = hdmi2Top + hauteurHdmi2;

    var audioVideoTop = parseInt(audioVideo.style.top);
    var audioVideoLeft = parseInt(audioVideo.style.left);
    var audioVideoRight = audioVideoLeft + largeurAudioVideo;
    var audioVideoBottom = audioVideoTop + hauteurAudioVideo;

    var usb2Top = parseInt(usb2.style.top);
    var usb2Left = parseInt(usb2.style.left);
    var usb2Right = usb2Left + largeurUsb2;
    var usb2Bottom = usb2Top + hauteurUsb2;

    var usb3Top = parseInt(usb3.style.top);
    var usb3Left = parseInt(usb3.style.left);
    var usb3Right = usb3Left + largeurUsb3;
    var usb3Bottom = usb3Top + hauteurUsb3;

    var powerSlotTop = parseInt(powerSlot.style.top);
    var powerSlotLeft = parseInt(powerSlot.style.left);
    var powerSlotRight = powerSlotLeft + largeurPowerSlot;
    var powerSlotBottom = powerSlotTop + hauteurPowerSlot;

    var chipsTop = parseInt(chips.style.top);
    var chipsLeft = parseInt(chips.style.left);
    var chipsRight = chipsLeft + largeurChips;
    var chipsBottom = chipsTop + hauteurChips;

    var cameraPortTop = parseInt(cameraPort.style.top);
    var cameraPortLeft = parseInt(cameraPort.style.left);
    var cameraPortRight = cameraPortLeft + largeurCameraPort;
    var cameraPortBottom = cameraPortTop + hauteurCameraPort;


    // Accès au jeu

    var cover = document.querySelector('#cover');
    var link = document.querySelector('.terminalScreen a');
    link.addEventListener('click', start);

    function start() {

        (function () {
            setTimeout(function () {
                cover.style.left = '100px';
                cover.style.opacity = '0';
                setTimeout(function () {
                    zoneDeJeu.removeChild(cover);
                }, 2000);
            }, 1);
        })();
    };

    // Collisions

    // Left

    if (touches.ArrowLeft) {
        if (left - 10 >= 0) {
            left -= 10;
        } else {
            left = 0;
        };

        if (
            top < displayPortBottom &&
            left < displayPortRight &&
            bottom > displayPortTop
        ) {
            left = displayPortRight;
        };

        if (
            right > poeHatLeft &&
            top < poeHatBottom &&
            left < poeHatRight &&
            bottom > poeHatTop
        ) {
            left = poeHatRight;
        };

        if (
            right > usbControllerLeft &&
            top < usbControllerBottom &&
            left < usbControllerRight &&
            bottom > usbControllerTop
        ) {
            left = usbControllerRight;
        };

        if (
            right > bluetoothLeft &&
            top < bluetoothBottom &&
            left < bluetoothRight &&
            bottom > bluetoothTop
        ) {
            left = bluetoothRight;
        };

        if (
            right > processeurLeft &&
            top < processeurBottom &&
            left < processeurRight &&
            bottom > processeurTop
        ) {
            left = processeurRight;
        };

        if (
            right > ramLeft &&
            top < ramBottom &&
            left < ramRight &&
            bottom > ramTop
        ) {
            left = ramRight;
        };

        if (
            right > ethernetControlerLeft &&
            top < ethernetControlerBottom &&
            left < ethernetControlerRight &&
            bottom > ethernetControlerTop
        ) {
            left = ethernetControlerRight;
        };

        if (
            right > gpioHeaderLeft &&
            top < gpioHeaderBottom &&
            left < gpioHeaderRight
        ) {
            left = gpioHeaderRight;
        };

        if (
            right > hdmi1Left &&
            left < hdmi1Right &&
            bottom > hdmi1Top
        ) {
            left = hdmi1Right;
        };

        if (
            right > hdmi2Left &&
            left < hdmi2Right &&
            bottom > hdmi2Top
        ) {
            left = hdmi2Right;
        };

        if (
            right > audioVideoLeft &&
            left < audioVideoRight &&
            bottom > audioVideoTop
        ) {
            left = audioVideoRight;
        };

        if (
            right > powerSlotLeft &&
            left < powerSlotRight &&
            bottom > powerSlotTop
        ) {
            left = powerSlotRight;
        };

        if (
            right > cameraPortLeft &&
            left < cameraPortRight &&
            bottom > cameraPortTop
        ) {
            left = cameraPortRight;
        };

        if (
            right > chipsLeft &&
            top < chipsBottom &&
            left < chipsRight &&
            bottom > chipsTop
        ) {
            left = chipsRight;
        };
    }

    // Right

    if (touches.ArrowRight) {
        if (right + 10 <= largeurZoneDeJeu) {
            left += 10;
        } else {
            left = largeurZoneDeJeu - largeurPlayer;
        };

        if (
            right >= ethernetLeft &&
            top < ethernetBottom &&
            left < ethernetRight
        ) {
            left = ethernetLeft - largeurPlayer;
        };

        if (
            right >= usb2Left &&
            top < usb2Bottom &&
            bottom > usb2Top
        ) {
            left = usb2Left - largeurPlayer;
        };

        if (
            right >= usb3Left &&
            top < usb3Bottom &&
            bottom > usb3Top
        ) {
            left = usb3Left - largeurPlayer;
        };

        if (
            right >= poeHatLeft &&
            top < poeHatBottom &&
            left < poeHatRight &&
            bottom > poeHatTop
        ) {
            left = poeHatLeft - largeurPlayer;
        };

        if (
            right >= usbControllerLeft &&
            top < usbControllerBottom &&
            left < usbControllerRight &&
            bottom > usbControllerTop
        ) {
            left = usbControllerLeft - largeurPlayer;
        };

        if (
            right >= bluetoothLeft &&
            top < bluetoothBottom &&
            left < bluetoothRight &&
            bottom > bluetoothTop
        ) {
            left = bluetoothLeft - largeurPlayer;
        };

        if (
            right >= ethernetControlerLeft &&
            top < ethernetControlerBottom &&
            left < ethernetControlerRight &&
            bottom > ethernetControlerTop
        ) {
            left = ethernetControlerLeft - largeurPlayer;
        };

        if (
            right >= processeurLeft &&
            top < processeurBottom &&
            left < processeurRight &&
            bottom > processeurTop
        ) {
            left = processeurLeft - largeurPlayer;
        };

        if (
            right >= ramLeft &&
            top < ramBottom &&
            left < ramRight &&
            bottom > ramTop
        ) {
            left = ramLeft - largeurPlayer;
        };

        if (
            right >= gpioHeaderLeft &&
            top < gpioHeaderBottom &&
            left < gpioHeaderRight
        ) {
            left = gpioHeaderLeft - largeurPlayer;
        };

        if (
            right >= hdmi1Left &&
            left < hdmi1Right &&
            bottom > hdmi1Top
        ) {
            left = hdmi1Left - largeurPlayer;
        };

        if (
            right >= hdmi2Left &&
            left < hdmi2Right &&
            bottom > hdmi2Top
        ) {
            left = hdmi2Left - largeurPlayer;
        };

        if (
            right >= audioVideoLeft &&
            left < audioVideoRight &&
            bottom > audioVideoTop
        ) {
            left = audioVideoLeft - largeurPlayer;
        };

        if (
            right >= powerSlotLeft &&
            left < powerSlotRight &&
            bottom > powerSlotTop
        ) {
            left = powerSlotLeft - largeurPlayer;
        };

        if (
            right >= cameraPortLeft &&
            left < cameraPortRight &&
            bottom > cameraPortTop
        ) {
            left = cameraPortLeft - largeurPlayer;
        };

        if (
            right >= chipsLeft &&
            top < chipsBottom &&
            left < chipsRight &&
            bottom > chipsTop
        ) {
            left = chipsLeft - largeurPlayer;
        };
    }

    // Up

    if (touches.ArrowUp) {
        if (top - 10 >= 0) {
            top -= 10;
        } else {
            top = 0;
        };

        if (
            top < displayPortBottom &&
            left < displayPortRight &&
            bottom > displayPortTop
        ) {
            top = displayPortBottom;
        };

        if (
            right > ethernetLeft &&
            top < ethernetBottom &&
            bottom > ethernetTop
        ) {
            top = ethernetBottom;
        };

        if (
            right > usb2Left &&
            top < usb2Bottom &&
            bottom > usb2Top
        ) {
            top = usb2Bottom;
        };

        if (
            right > usb3Left &&
            top < usb3Bottom &&
            bottom > usb3Top
        ) {
            top = usb3Bottom;
        };

        if (
            right > poeHatLeft &&
            top < poeHatBottom &&
            left < poeHatRight &&
            bottom > poeHatTop
        ) {
            top = poeHatBottom;
        };

        if (
            right > usbControllerLeft &&
            top < usbControllerBottom &&
            left < usbControllerRight &&
            bottom > usbControllerTop
        ) {
            top = usbControllerBottom;
        };

        if (
            right > bluetoothLeft &&
            top < bluetoothBottom &&
            left < bluetoothRight &&
            bottom > bluetoothTop
        ) {
            top = bluetoothBottom;
        };

        if (
            right > ethernetControlerLeft &&
            top < ethernetControlerBottom &&
            left < ethernetControlerRight &&
            bottom > ethernetControlerTop
        ) {
            top = ethernetControlerBottom;
        };

        if (
            right > processeurLeft &&
            top < processeurBottom &&
            left < processeurRight &&
            bottom > processeurTop
        ) {
            top = processeurBottom;
        };

        if (
            right > ramLeft &&
            top < ramBottom &&
            left < ramRight &&
            bottom > ramTop
        ) {
            top = ramBottom;
        };

        if (
            right > gpioHeaderLeft &&
            top < gpioHeaderBottom &&
            left < gpioHeaderRight
        ) {
            top = gpioHeaderBottom;
        };

        if (
            right > cameraPortLeft &&
            left < cameraPortRight &&
            bottom > cameraPortTop
        ) {
            top = cameraPortBottom;
        };

        if (
            right > chipsLeft &&
            top < chipsBottom &&
            left < chipsRight &&
            bottom > chipsTop
        ) {
            top = chipsBottom;
        };
    }

    // Down

    if (touches.ArrowDown) {
        if (bottom + 10 <= hauteurZoneDeJeu) {
            top += 10;
        } else {
            top = hauteurZoneDeJeu - hauteurPlayer;
        };

        if (
            top < displayPortBottom &&
            left < displayPortRight &&
            bottom >= displayPortTop
        ) {
            top = displayPortTop - hauteurPlayer;
        };

        if (
            right > bluetoothLeft &&
            top < bluetoothBottom &&
            left < bluetoothRight &&
            bottom >= bluetoothTop
        ) {
            top = bluetoothTop - hauteurPlayer;
        };

        if (
            right > usb2Left &&
            top < usb2Bottom &&
            bottom >= usb2Top
        ) {
            top = usb2Top - hauteurPlayer;
        };

        if (
            right > usb3Left &&
            top < usb3Bottom &&
            bottom >= usb3Top
        ) {
            top = usb3Top - hauteurPlayer;
        };

        if (
            right > poeHatLeft &&
            top < poeHatBottom &&
            left < poeHatRight &&
            bottom >= poeHatTop
        ) {
            top = poeHatTop - hauteurPlayer;
        };

        if (
            right > usbControllerLeft &&
            top < usbControllerBottom &&
            left < usbControllerRight &&
            bottom >= usbControllerTop
        ) {
            top = usbControllerTop - hauteurPlayer;
        };

        if (
            right > ethernetControlerLeft &&
            top < ethernetControlerBottom &&
            left < ethernetControlerRight &&
            bottom >= ethernetControlerTop
        ) {
            top = ethernetControlerTop - hauteurPlayer;
        };

        if (
            right > processeurLeft &&
            top < processeurBottom &&
            left < processeurRight &&
            bottom >= processeurTop
        ) {
            top = processeurTop - hauteurPlayer;
        };

        if (
            right > ramLeft &&
            top < ramBottom &&
            left < ramRight &&
            bottom >= ramTop
        ) {
            top = ramTop - hauteurPlayer;
        };

        if (
            right > hdmi1Left &&
            left < hdmi1Right &&
            bottom >= hdmi1Top
        ) {
            top = hdmi1Top - hauteurPlayer;
        };

        if (
            right > hdmi2Left &&
            left < hdmi2Right &&
            bottom >= hdmi2Top
        ) {
            top = hdmi2Top - hauteurPlayer;
        };

        if (
            right > audioVideoLeft &&
            left < audioVideoRight &&
            bottom >= audioVideoTop
        ) {
            top = audioVideoTop - hauteurPlayer;
        };

        if (
            right > powerSlotLeft &&
            left < powerSlotRight &&
            bottom >= powerSlotTop
        ) {
            top = powerSlotTop - hauteurPlayer;
        };

        if (
            right > cameraPortLeft &&
            left < cameraPortRight &&
            bottom >= cameraPortTop
        ) {
            top = cameraPortTop - hauteurPlayer;
        };

        if (
            right > chipsLeft &&
            top < chipsBottom &&
            left < chipsRight &&
            bottom >= chipsTop
        ) {
            top = chipsTop - hauteurPlayer;
        };

    }

    player.style.left = left + "px";
    player.style.top = top + "px";

    // Collision skill

    if (
        right > skillLeft &&
        top < skillBottom &&
        left < skillRight &&
        bottom > skillTop
    ) {
        var langages = ['images/css3.png', 'images/js.png', 'images/nodejs.png', 'images/mongodb.png', 'images/angular.png', 'images/meteor.png', 'images/bootstrap.png'];

        coordonnees = allCoordonnees[Math.floor(Math.random() * allCoordonnees.length)];
        skill.style.top = coordonnees[0] + "px";
        skill.style.left = coordonnees[1] + "px";

        skill.style.backgroundImage = 'url(' + langages[counter] + ')';
        counter = counter + 1;
        document.querySelector("#contador > p").innerHTML = "Skills: " + counter;

        var newDiv = document.createElement('div');
        newDiv.setAttribute("id", "skill");
        newDiv.style.top = '620px';
        newDiv.style.left = '50px';
        document.body.appendChild(newDiv);

        if (counter == 8) {
            //cover.style.display = 'none';
            skill.style.display = 'none';
            player.style.display = 'none';
            var win = document.createElement('div');
            var text = document.createElement('span');
            var link = document.createElement('a');
            var link2 = document.createElement('a');
            text.innerHTML = 'pi@raspberrypi:~ $ Victoire!';
            link.innerHTML = 'Rejouer';

            link.addEventListener('click', reset);

            function reset() {
                counter = 0;
                document.querySelector("#contador > p").innerHTML = "Skills: 0";
                skill.style.backgroundImage = 'url(images/html5.png)';
                document.getElementById('zoneDeJeu').removeChild(win);
                skill.style.display = 'block';
                player.style.display = 'block';
                player.style.top = "60px";
                player.style.left = "10px";
            };

            link2.innerHTML = 'Télécharger CV';
            link.href = '#'
            link2.href = 'Lucas_Silva_DeveloppeurJS.pdf';
            link2.target = '_blank'
            link2.download = 'cv';
            win.setAttribute("id", "win");
            document.getElementById('zoneDeJeu').prepend(win);
            document.getElementById('win').appendChild(text);
            document.getElementById('win').appendChild(link);
            document.getElementById('win').appendChild(link2);
        };
    };
};
setInterval(boucle, 20);

setTimeout(function () {
    skill.style.display = 'block';
    coordonnees = allCoordonnees[Math.floor(Math.random() * allCoordonnees.length)];
    skill.style.top = coordonnees[0] + "px";
    skill.style.left = coordonnees[1] + "px";
}, 1000);