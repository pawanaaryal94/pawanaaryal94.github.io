const chapters = [
  {
    "tag": "01 / ROOTS",
    "title": "Nepal, always part of me.",
    "text": "My connection to Nepal shapes the stories I tell. Language, festivals, family and the feeling of home are threads I carry into life in Australia.",
    "note": "Culture • Connection • Belonging"
  },
  {
    "tag": "02 / EXPERIENCE",
    "title": "Learning through caring.",
    "text": "Working in aged care as an Assistant in Nursing taught me the importance of listening, patience and respecting each person’s dignity. My cleaning work has also strengthened my attention to detail and sense of responsibility.",
    "note": "Empathy • Teamwork • Reliability"
  },
  {
    "tag": "03 / CURIOSITY",
    "title": "Making room for something new.",
    "text": "I’m exploring data analytics through Google Cloud learning and hands-on BigQuery exercises. I enjoy turning a question into a query, exploring the results and gradually making sense of the story behind the data.",
    "note": "Google Cloud • BigQuery • Continuous learning"
  },
  {
    "tag": "04 / CREATIVITY",
    "title": "A story worth sharing.",
    "text": "My creative interests include Nepali short videos, funny skits and emotional stories. From festival moments to the travelling monkey adventures of Sabzi Mafia, I enjoy exploring different ways to make people smile and feel connected.",
    "note": "Short videos • Nepali stories • Humour"
  }
];

const menu = document.querySelector('.menu');
const nav = document.querySelector('header nav');
function setMenu(open) {
  nav.classList.toggle('open', open);
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? 'Menu −' : 'Menu +';
}
menu.addEventListener('click', () => setMenu(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenu(false)));

const tabs = [...document.querySelectorAll('.chapters button')];
const panel = document.querySelector('#chapter-panel');
function selectChapter(index) {
  const chapter = chapters[index];
  tabs.forEach((tab, i) => {
    tab.classList.toggle('selected', i === index);
    tab.setAttribute('aria-selected', String(i === index));
    tab.tabIndex = i === index ? 0 : -1;
  });
  panel.setAttribute('aria-labelledby', tabs[index].id);
  panel.querySelector('.chapter-number').firstChild.textContent = String(index + 1).padStart(2, '0');
  panel.querySelector('.eyebrow').textContent = chapter.tag;
  panel.querySelector('h3').textContent = chapter.title;
  panel.querySelector('p:not(.eyebrow)').textContent = chapter.text;
  panel.querySelector('.chapter-note').textContent = chapter.note;
}
tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => selectChapter(i));
  tab.addEventListener('keydown', event => {
    const targets = {ArrowLeft: (i + tabs.length - 1) % tabs.length, ArrowRight: (i + 1) % tabs.length, Home: 0, End: tabs.length - 1};
    const target = targets[event.key];
    if (!Number.isInteger(target)) return;
    event.preventDefault();
    selectChapter(target);
    tabs[target].focus();
  });
});
selectChapter(0);
