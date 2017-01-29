var quotes = [
    "I’ll see you soon.",
    "The thought of being with you tomorrow gives me the strength to get through today",
    "You’re worth every mile between us.",
    "You’re my sun, my moon and all my stars.",
    "I want to come home to you.",
    "Everything is fine when your head is resting next to mine.",
    "You make me smile so effortlessly",
    "I’m in my bed. You’re in your bed. I’m in the wrong place. <br> But that mistake is going to be corrected soon.",
    "My day is not complete if I don’t tell you I love you.",
    "You are the first and last thing on my mind each and every day.",
    "Do you know this feeling when it gets like really warm around your heart when you think of someone you love? <br> That’s how I feel when I think about you",
    "It’s not being in love that makes me happy. It is the person that I am in love with that does.",
    "Adventures are great, especially when the person you love is your destination",
    "You’re beautiful",
    "Not to brag, but I think we’re really cute together.",
    "I can’t wait to fuck up your lipstick",
    "If you think missing me is hard, you should try missing you.",
    "I miss your stupid face.",
    "I might not be there yet, but I’m closer than I was yesterday.",
    "Life isn’t always wonderful. <br> But you are.",
    "I exist in two places, here and where you are.",
    "I knew when I met you, that an adventure was going to happen.",
    "Just thinking about you makes me smile.",
    "My taste in music is your face.",
    "Love will travel as far as you let it. It has no limits.",
    "You stole my heart, but I’ll let you keep it.",
    "Can’t wait to cuddle the crap out of you.",
    "Have I mentioned today how lucky I am to have you in my life?",
    "Just one more month",
    "You are the source of my joy, the center of my world and the whole of my heart.",
    "I keep myself busy with things to do, but overtime I pause, I still think of you.",
    "When I’m there, we’re gonna cuddle all day long",
    "My world is you.",
    "We are one day closer",
    "I want to be with you. It’s as simple, as complicated as that."
];

var photos = [

{photo: "url('/resources/arch.jpg')", bg: "rgba(22,26,36,0.6", shadow: "0px 0px 7px #313131"},
{photo: "url('/resources/baltimore3.jpg')", bg: "rgba(0,0,0,0.3", shadow: "0px 0px 10px #313131"},
{photo: "url('/resources/beach3.jpg')", bg: "rgba(137, 157, 188, 0.5", shadow: "0px 0px 7px #313131"},
{photo: "url('/resources/birds.jpg')", bg: "rgba(0, 0, 0, 0.5", shadow: "0px 0px 10px #000"},
{photo: "url('/resources/bus.jpg')", bg: "rgba(0, 0, 0, 0.5", shadow: "0px 0px 10px #000"},
{photo: "url('/resources/dayplane.jpg')", bg: "rgba(48, 60, 72, 0.5", shadow: "0px 0px 10px #313131"},
{photo: "url('/resources/drillfield.jpg')", bg: "rgba(48, 60, 72, 0.5", shadow: "0px 0px 10px #313131"},
{photo: "url('/resources/drive2.jpg')", bg: "rgba(48, 70, 80, 0.35", shadow: "0px 0px 10px #313131"},
{photo: "url('/resources/fall3.jpg')", bg: "rgba(0, 0, 0, 0.35", shadow: "0px 0px 10px #313131"},
{photo: "url('/resources/field2.jpg')", bg: "rgba(180,80,10,0.5", shadow: "0px 0px 10px #313131"},
{photo: "url('/resources/finland.jpg')", bg: "rgba(48, 60, 72, 0.4", shadow: "0px 0px 10px #313131"},
{photo: "url('/resources/fire.jpg')", bg: "rgba(182,90,0,0.2", shadow: "0px 0px 10px #313131"},
{photo: "url('/resources/fog-powerlines.jpg')", bg: "rgba(0, 0, 0, 0.3", shadow: "0px 0px 10px #313131"},
{photo: "url('/resources/foggyroad.jpg')", bg: "rgba(0, 0, 0, 0.3", shadow: "0px 0px 10px #000"},
{photo: "url('/resources/foggyroad2.jpg')", bg: "rgba(0, 0, 0, 0.3", shadow: "0px 0px 10px #000"},
{photo: "url('/resources/landscape.jpg')", bg: "rgba(190,100,100,0.5", shadow: "0px 0px 10px #313131"},
{photo: "url('/resources/lanterns.jpg')", bg: "rgba(50, 60, 60, 0.3", shadow: "0px 0px 10px #313131"},
{photo: "url('/resources/plane-window.jpg')", bg: "rgba(0, 0, 0, 0.5", shadow: "0px 0px 10px #000"},
{photo: "url('/resources/pooltable2.jpg')", bg: "rgba(0, 0, 0, 0.3", shadow: "0px 0px 7px #000"},
{photo: "url('/resources/powerlines2.jpg')", bg: "rgba(0, 0, 0, 0.35", shadow: "0px 0px 10px #313131"},
{photo: "url('/resources/rainy-drillfield3.jpg')", bg: "rgba(0, 0, 0, 0.45", shadow: "0px 0px 10px #000"},
{photo: "url('/resources/release.jpg')", bg: "rgba(0, 0, 0, 0.45", shadow: "0px 0px 10px #000"},
{photo: "url('/resources/snowy-field.jpg')", bg: "rgba(0, 0, 0, 0.3)", shadow: "0px 0px 10px #313131"},
{photo: "url('/resources/speed.jpg')", bg: "rgba(0, 0, 0, 0.35", shadow: "0px 0px 10px #000"},
{photo: "url('/resources/stars1.jpg')", bg: "rgba(0, 0, 0, 0.25", shadow: "0px 0px 10px #000"},
{photo: "url('/resources/stars2.jpg')", bg: "rgba(0, 0, 0, 0.25", shadow: "0px 0px 10px #000"},
{photo: "url('/resources/stars3.jpg')", bg: "rgba(0, 0, 0, 0.5", shadow: "0px 0px 10px #000"},
{photo: "url('/resources/stars4.jpg')", bg: "rgba(0, 0, 0, 0.3", shadow: "0px 0px 10px #000"},
{photo: "url('/resources/stars5.jpg')", bg: "rgba(0, 0, 0, 0.3", shadow: "0px 0px 10px #000"},
{photo: "url('/resources/stars6.jpg')", bg: "rgba(0, 0, 0, 0.3", shadow: "0px 0px 10px #000"},
{photo: "url('/resources/sundown-plane.jpg')", bg: "rgba(0, 0, 0, 0.3", shadow: "0px 0px 10px #000"},
{photo: "url('/resources/trees-and-stars.jpg')", bg: "rgba(0, 0, 0, 0.35", shadow: "0px 0px 10px #000"},
{photo: "url('/resources/umbrella.jpg')", bg: "rgba(0, 0, 0, 0.35", shadow: "0px 0px 10px #000"},
{photo: "url('/resources/tunnel.jpg')", bg: "rgba(0, 0, 0, 0.5", shadow: "0px 0px 10px #000"},
{photo: "url('/resources/slusher.jpg')", bg: "rgba(0, 0, 0, 0.3", shadow: "0px 0px 10px #000"},
{photo: "url('/resources/campfire.jpg')", bg: "rgba(0, 0, 0, 0.8", shadow: "0px 0px 10px #000"},
{photo: "url('/resources/finland2.jpg')", bg: "rgba(48, 60, 72, 0.6", shadow: "0px 0px 10px #313131"},
{photo: "url('/resources/paradox.jpg')", bg: "rgba(182,90,0,0.4", shadow: "0px 0px 10px #313131"},
{photo: "url('/resources/turku.jpg')", bg: "rgba(0, 0, 0, 0.35", shadow: "0px 0px 10px #313131"},
{photo: "url('/resources/turku2.jpg')", bg: "rgba(0, 0, 0, 0.35", shadow: "0px 0px 10px #313131"},
{photo: "url('/resources/raindrops.jpg')", bg: "rgba(0, 0, 0, 0.35", shadow: "0px 0px 10px #313131"},
{photo: "url('/resources/airport1.jpg')", bg: "rgba(0, 0, 0, 0.35", shadow: "0px 0px 10px #313131"}
];

function setContent(daysLeft){

  $("#quote-par").text(quotes[daysLeft]);
  $("html").css('background-image', photos[daysLeft].photo);

}

/*
'../resources/arch.jpg';
background: rgba(22,26,36,0.6);
text-shadow: 0px 0px 7px #313131;

'../resources/baltimore3.jpg';
background: rgba(0,0,0,0.3);
text-shadow: 0px 0px 10px #313131;

'../resources/beach3.jpg';
background: rgba(137, 157, 188, 0.5);
text-shadow: 0px 0px 7px #313131;

'../resources/birds.jpg';
background: rgba(0, 0, 0, 0.5);
text-shadow: 0px 0px 10px #000;

'../resources/bus.jpg';
background: rgba(0, 0, 0, 0.5);
text-shadow: 0px 0px 10px #000;

'../resources/dayplane.jpg';
background: rgba(48, 60, 72, 0.5);
text-shadow: 0px 0px 10px #313131;

'../resources/drillfield.jpg';
background: rgba(48, 60, 72, 0.5);
text-shadow: 0px 0px 10px #313131;

'../resources/drive2.jpg';
background: rgba(48, 70, 80, 0.35);
text-shadow: 0px 0px 10px #313131;

'../resources/fall3.jpg';
background: rgba(0, 0, 0, 0.35);
text-shadow: 0px 0px 10px #313131;

'../resources/field2.jpg';
background: rgba(180,80,10,0.5);
text-shadow: 0px 0px 10px #313131;

'../resources/finland.jpg';
background: rgba(48, 60, 72, 0.4);
text-shadow: 0px 0px 10px #313131;

'../resources/fire.jpg';
background: rgba(182,90,0,0.2);
text-shadow: 0px 0px 10px #313131;

'../resources/fog-powerlines.jpg';
background: rgba(0, 0, 0, 0.3);
text-shadow: 0px 0px 10px #313131;

'../resources/foggyroad.jpg';
background: rgba(0, 0, 0, 0.3);
text-shadow: 0px 0px 10px #000;

'../resources/foggyroad2.jpg';
background: rgba(0, 0, 0, 0.3);
text-shadow: 0px 0px 10px #000;

'../resources/landscape.jpg';
background: rgba(190,100,100,0.5);
text-shadow: 0px 0px 10px #313131;

'../resources/lanterns.jpg';
background: rgba(50, 60, 60, 0.3);
text-shadow: 0px 0px 10px #313131;

'../resources/plane-window.jpg';
background: rgba(0, 0, 0, 0.5);
text-shadow: 0px 0px 10px #000;

'../resources/pooltable2.jpg';
background: rgba(0, 0, 0, 0.3);
text-shadow: 0px 0px 7px #000;

'../resources/powerlines2.jpg';
background: rgba(0, 0, 0, 0.35);
text-shadow: 0px 0px 10px #313131;

'../resources/rainy-drillfield3.jpg';
background: rgba(0, 0, 0, 0.45);
text-shadow: 0px 0px 10px #000;

'../resources/release.jpg';
background: rgba(0, 0, 0, 0.45);
text-shadow: 0px 0px 10px #000;

'../resources/snowy-field.jpg';
background: rgba(0, 0, 0, 0.3);
text-shadow: 0px 0px 10px #313131;


'../resources/speed.jpg';
text-shadow: 0px 0px 10px #000;
background: rgba(0, 0, 0, 0.35);

'../resources/stars1.jpg';
background: rgba(0, 0, 0, 0.25);
text-shadow: 0px 0px 10px #000;

'../resources/stars2.jpg';
background: rgba(0, 0, 0, 0.25);
text-shadow: 0px 0px 10px #000;

'../resources/stars3.jpg';
background: rgba(0, 0, 0, 0.5);
text-shadow: 0px 0px 10px #000;

'../resources/stars4.jpg';
background: rgba(0, 0, 0, 0.3);
text-shadow: 0px 0px 10px #000;

'../resources/stars5.jpg';
background: rgba(0, 0, 0, 0.3);
text-shadow: 0px 0px 10px #000;

'../resources/stars6.jpg';
background: rgba(0, 0, 0, 0.3);
text-shadow: 0px 0px 10px #000;

'../resources/sundown-plane.jpg';
background: rgba(0, 0, 0, 0.3);
text-shadow: 0px 0px 10px #000;

'../resources/trees-and-stars.jpg';
background: rgba(0, 0, 0, 0.35);
text-shadow: 0px 0px 10px #000;

'../resources/umbrella.jpg';
background: rgba(0, 0, 0, 0.35);
text-shadow: 0px 0px 10px #000;

'../resources/tunnel.jpg';
background: rgba(0, 0, 0, 0.5);
text-shadow: 0px 0px 10px #000;

'../resources/slusher.jpg';
background: rgba(0, 0, 0, 0.3);
text-shadow: 0px 0px 10px #000;

'../resources/campfire.jpg';
background: rgba(0, 0, 0, 0.8);
text-shadow: 0px 0px 10px #000;

'../resources/finland2.jpg';
background: rgba(48, 60, 72, 0.6);
text-shadow: 0px 0px 10px #313131;


'../resources/paradox.jpg';
background: rgba(182,90,0,0.4);
text-shadow: 0px 0px 10px #313131;

'../resources/turku.jpg';
background: rgba(0, 0, 0, 0.35);
text-shadow: 0px 0px 10px #313131;

'../resources/turku2.jpg';
background: rgba(0, 0, 0, 0.35);
text-shadow: 0px 0px 10px #313131;

'../resources/raindrops.jpg';
background: rgba(0, 0, 0, 0.35);
text-shadow: 0px 0px 10px #313131;

'../resources/airport1.jpg';
background: rgba(0, 0, 0, 0.35);
text-shadow: 0px 0px 10px #313131;
*/
