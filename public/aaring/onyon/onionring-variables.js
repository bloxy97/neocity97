// onionring.js is made up of four files - onionring-widget.js, onionring-index.js, onionring-variables.js (this one!), and onionring.css
// it's licensed under the cooperative non-violent license (CNPL) v4+ (https://thufie.lain.haus/NPL.html)
// it was originally made by joey + mord of allium (蒜) house, last updated 2020-11-24

// === ONIONRING-VARIABLES ===
//this file contains the stuff you edit to set up your specific webring

//the full URLs of all the sites in the ring
var sites = [
    'https://bloxy97.nekoweb.org/',
    'https://mylilarea.nekoweb.org/',
    'https://hal.nekoweb.org/',
    'https://ay-3-8910-online.w10.site/',
    'https://nagisako.neocities.org'
];

//they name
var wname = [
    'Roxy',
    'Kitsune',
    'Hal',
    'AY',
    'nagisa'
];

//they button
var sbutton = [
    'https://bloxy97.nekoweb.org/images/button.gif',
    'https://mylilarea.nekoweb.org/MyLilAreaButton.jpeg',
    'https://hal.nekoweb.org/sitebutton.png',
    'https://files.catbox.moe/l3g0r4.png',
    'https://nagisako.neocities.org/images/buttons/taskbar/blonde%20moment.jpg'
];

//site name
var sname = [
    'Action97',
    'My Lil Area',
    'HAL',
    `AY's site`,
    'nagisako'
];

//they tag
var tags = [
    `（　´∀｀）`,
    `（　´∀｀）`,
    `（　´∀｀）`,
    ``,
    `<丶｀∀´>`
];

//they desc
var desc = [
'this is where i put all of my slop and sludge and endeavors. you might be here.',
'aero :)',
`A comprehensive personal blog (that's more like a wiki in reality)`,
'A random site where I put my stuff I guess',
'peach-scented princess castle'
];

//the name of the ring
var ringName = 'AAring';

/* the unique ID of the widget. two things to note:
 1) make sure there are no spaces in it - use dashes or underscores if you must
 2) remember to change 'webringid' in the widget code you give out and all instances of '#webringid' in the css file to match this value!*/
var ringID = 'AAring';

//should the widget include a link to an index page?
var useIndex = false;
//the full URL of the index page. if you're not using one, you don't have to specify anything here
var indexPage = 'https://bloxy97.nekoweb.org/aaring/';

//should the widget include a random button?
var useRandom = true;
