const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '気温は華氏30度で外は寒かった。 :insertx: は散歩に行った。 :inserty:　についた時、 :insertz:。　体重１００ポンドの:insertx: は驚いたが、ボブは驚かなかった。　:inserty:　ではよくあることだった。';
const insertX = ['スヌーピー', 'サンタクロース', 'ミッキーマウス'];
const insertY = ['津田塾大学', '小平', 'ディズニーランド'];
const insertZ = ['雪が降ったいた', '人がたくさんいた', '雷が鳴っていた'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('ボブ', name);
  }

  if (document.getElementById("日本").checked) {
    
    const weight = `体重${Math.round(100*0.714286)} kg`;
    const temperature =  `摂氏 ${Math.round((30-32)*5/9)} 度`;
    newStory = newStory.replace('華氏30度', temperature);
    newStory = newStory.replace('体重１００ポンド', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
