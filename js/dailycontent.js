var quotes = [
    "I’ll see you soon",
    "The thought of being with you soon gives me the strength to get through today",
    "You’re worth every mile between us.",
    "You’re my sun, my moon and all my stars.",
    "I want to come home to you",
    "Everything is fine when your head is resting next to mine.",
    "You make me smile so effortlessly.",
    "You’re in your bed. I’m in my bed. <br /> But that mistake is going to be corrected soon.",
    "My day is not complete if I don’t tell you that I love you.",
    "You are the first and last thing on my mind each and every day.",
    "Do you know this feeling when it gets like really warm around your heart when you think of someone you love? <br /> That’s how I feel when I think about you.",
    "It’s not being in love that makes me happy. <br /> It's the person that I am in love with that does.",
    "Adventures are great, <br />especially when the person you love is the destination",
    "You are beautiful",
    "Not to brag, but I think we’re really cute together.",
    "If you think missing me is hard, you should try missing you.",
    "I can’t wait to fuck up your lipstick",
    "<br />I miss your face.",
    "I might not be there yet, but I’m closer than I was yesterday.",
    "Life isn\'t always wonderful. <br /> But you are.",
    "I exist in two places, here and where you are.",
    "I knew when I met you, that an adventure was going to happen.",
    "Just thinking about you makes me smile.",
    "My taste in music is your face.",
    "Love will travel as far as you let it. It has no limits.",
    "You stole my heart, but I’ll let you keep it.",
    "Can’t wait to cuddle the crap out of you",
    "Have I mentioned today how lucky I am to have you in my life?",
    "Just one more month",
    "You are the source of my joy, the center of my world and the whole of my heart.",
    "I keep myself busy with things to do, <br /> but every time I pause, I still think of you.",
    "When I’m there, we’re gonna cuddle all day long",
    "My world is you",
    "We are one day closer",
    "I want to be with you. It’s as simple, as complicated as that."
];

var photos = [
  {photo: "url('resources/sundown-plane.jpg')", bg: "rgba(0, 0, 0, 0.3", shadow: "0px 0px 10px #000"}, //00.
  {photo: "url('resources/rainy-drillfield3.jpg')", bg: "rgba(0, 0, 0, 0.45", shadow: "0px 0px 10px #000"}, //01.
  {photo: "url('resources/plane-window.jpg')", bg: "rgba(0, 0, 0, 0.5", shadow: "0px 0px 10px #000"}, //02.
  {photo: "url('resources/stars2.jpg')", bg: "rgba(0, 0, 0, 0.25", shadow: "0px 0px 10px #000"}, //03.
  {photo: "url('resources/foggyroad2.jpg')", bg: "rgba(0, 0, 0, 0.3", shadow: "0px 0px 10px #000"}, //04.
  {photo: "url('resources/lanterns.jpg')", bg: "rgba(50, 60, 60, 0.3", shadow: "0px 0px 10px #313131"}, //05.
  {photo: "url('resources/birds.jpg')", bg: "rgba(0, 0, 0, 0.5", shadow: "0px 0px 10px #000"}, //06.
  {photo: "url('resources/trees-and-stars.jpg')", bg: "rgba(0, 0, 0, 0.35", shadow: "0px 0px 10px #000"}, //07.
  {photo: "url('resources/stars6.jpg')", bg: "rgba(0, 0, 0, 0.3", shadow: "0px 0px 10px #000"}, //08.
  {photo: "url('resources/drillfield.jpg')", bg: "rgba(48, 60, 72, 0.5", shadow: "0px 0px 10px #313131"}, //09.
  {photo: "url('resources/paradox.jpg')", bg: "rgba(182,90,0,0.4", shadow: "0px 0px 10px #313131"}, //10.
  {photo: "url('resources/beach3.jpg')", bg: "rgba(137, 157, 188, 0.5", shadow: "0px 0px 7px #313131"}, //11.
  {photo: "url('resources/drive2.jpg')", bg: "rgba(48, 70, 80, 0.35", shadow: "0px 0px 10px #313131"}, //12.
  {photo: "url('resources/finland.jpg')", bg: "rgba(48, 60, 72, 0.4", shadow: "0px 0px 10px #313131"}, //13.
  {photo: "url('resources/fire.jpg')", bg: "rgba(182,90,0,0.2", shadow: "0px 0px 10px #313131"}, //14.
  {photo: "url('resources/fog-powerlines.jpg')", bg: "rgba(0, 0, 0, 0.3", shadow: "0px 0px 10px #313131"}, //15.
  {photo: "url('resources/campfire.jpg')", bg: "rgba(0, 0, 0, 0.8", shadow: "0px 0px 10px #000"}, //16.
  {photo: "url('resources/arch.jpg')", bg: "rgba(22,26,36,0.6", shadow: "0px 0px 7px #313131"}, //17.
  {photo: "url('resources/dayplane.jpg')", bg: "rgba(48, 60, 72, 0.5", shadow: "0px 0px 10px #313131"}, //18.
  {photo: "url('resources/raindrops.jpg')", bg: "rgba(0, 0, 0, 0.35", shadow: "0px 0px 10px #313131"}, //19.
  {photo: "url('resources/stars4.jpg')", bg: "rgba(0, 0, 0, 0.3", shadow: "0px 0px 10px #000"}, //20.
  {photo: "url('resources/speed.jpg')", bg: "rgba(0, 0, 0, 0.35", shadow: "0px 0px 15px #000"}, //21.
  {photo: "url('resources/umbrella.jpg')", bg: "rgba(0, 0, 0, 0.35", shadow: "0px 0px 10px #000"}, //22.
  {photo: "url('resources/landscape.jpg')", bg: "rgba(190,100,100,0.5", shadow: "0px 0px 10px #313131"}, //23.
  {photo: "url('resources/airport1.jpg')", bg: "rgba(0, 0, 0, 0.35", shadow: "0px 0px 10px #313131"}, //24.
  {photo: "url('resources/fall3.jpg')", bg: "rgba(0, 0, 0, 0.35", shadow: "0px 0px 10px #313131"}, //25.
  {photo: "url('resources/slusher.jpg')", bg: "rgba(0, 0, 0, 0.3", shadow: "0px 0px 10px #000"}, //26.
  {photo: "url('resources/foggyroad.jpg')", bg: "rgba(0, 0, 0, 0.3", shadow: "0px 0px 10px #000"}, //27.
  {photo: "url('resources/snowy-field.jpg')", bg: "rgba(0, 0, 0, 0.3)", shadow: "0px 0px 10px #313131"}, //28.
  {photo: "url('resources/field2.jpg')", bg: "rgba(180,80,10,0.5", shadow: "0px 0px 10px #313131"}, //29.
  {photo: "url('resources/turku.jpg')", bg: "rgba(0, 0, 0, 0.35", shadow: "0px 0px 10px #313131"}, //30.
  {photo: "url('resources/bus.jpg')", bg: "rgba(0, 0, 0, 0.5", shadow: "0px 0px 10px #000"}, //31.
  {photo: "url('resources/powerlines2.jpg')", bg: "rgba(0, 0, 0, 0.35", shadow: "0px 0px 10px #313131"}, //32.
  {photo: "url('resources/release.jpg')", bg: "rgba(0, 0, 0, 0.45", shadow: "0px 0px 10px #000"} //33.

];

function setContent(daysLeft){

  if(daysLeft == -1) {
    $("#quote-par").html(quotes[0]);

    $("#bg").css('background-image', photos[0].photo);
    $("#quote").css('text-shadow', photos[0].shadow);
    $(".countdown-item").css('background', photos[0].bg);
  }
  else if(daysLeft < -1){
    $("#quote-par").html("I'm here.");
    $("#bg").css('background-image', "url('resources/us.jpg')");
    $("#quote").css('text-shadow', "0px 0px 10px #000");
    $(".countdown-item").css('background', "rgba(0, 0, 0, 0.6");
  }
  else {
    $("#quote-par").html(quotes[daysLeft]);

    $("#bg").css('background-image', photos[daysLeft].photo);
    $("#quote").css('text-shadow', photos[daysLeft].shadow);
    $(".countdown-item").css('background', photos[daysLeft].bg);
  }

}
