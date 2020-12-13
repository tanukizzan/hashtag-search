let wordInput = document.getElementById('window');
const speakButton = document.getElementById('speak-button');
const button = [
  document.getElementById('twitter'),
  document.getElementById('instagram'),
  document.getElementById('facebook'),
  document.getElementById('note'),
];
const random = document.getElementById('random');
const siteLink = [
  'https://twitter.com/',
  'https://instagram.com/',
  'https://facebook.com/',
  'https://note.com/',
];
const linkQuery = 'hashtag/';

// twitter
button[0].onclick = () => {
  if (wordInput.value.length === 0) {
    window.open(siteLink[0]);
  } else {
    window.open(siteLink[0] + linkQuery + encodeURIComponent(wordInput.value));
  }
}
wordInput.addEventListener('keypress', onkeypress);
function onkeypress(event) {
  if (event.keyCode === 13) {
    button[0].onclick();
  }
}

// instagram
button[1].onclick = () => {
  if (wordInput.value.length === 0) {
    window.open(siteLink[1]);
  } else {
    window.open(siteLink[1] + 'explore/tags/' + encodeURIComponent(wordInput.value));
  }
}

// facebook
button[2].onclick = () => {
  if (wordInput.value.length === 0) {
    window.open(siteLink[2]);
  } else {
    window.open(siteLink[2] + linkQuery + encodeURIComponent(wordInput.value));
  }
}

// note
button[3].onclick = () => {
  if (wordInput.value.length === 0) {
    window.open(siteLink[3]);
  } else {
    window.open(siteLink[3] + linkQuery + encodeURIComponent(wordInput.value));
  }
}

// I'm feeling lucky ランダムに表示
random.onclick = () => {
  const randomLink = button[Math.floor(Math.random() * button.length)];
  randomLink.onclick();
}

// 音声入力
SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onend = () => {
  speakButton.style.color = '#5F6368';
}

recognition.onresult = (event) => {
  wordInput.value = event.results[0][0].transcript;
}

speakButton.onclick = () => {
  if ('SpeechRecognition' in window) {
    recognition.start();
    speakButton.style.color = '#dc143c';
  } else {
    alert('お使いのブラウザでは対応していません。');
  }
}