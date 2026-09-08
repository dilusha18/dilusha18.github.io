'use strict';

const sidebar = document.querySelector('[data-sidebar]');
const sidebarButton = document.querySelector('[data-sidebar-btn]');
const navigationLinks = [...document.querySelectorAll('[data-nav-link]')];
const pages = [...document.querySelectorAll('[data-page]')];
const cards = [...document.querySelectorAll('.project-card, .ongoing-card')];
const viewer = document.querySelector('.image-viewer');
const detail = document.createElement('article');
detail.className = 'project-detail';
detail.hidden = true;
document.querySelector('#content').append(detail);

let currentProject = null;
let galleryIndex = 0;
let returnFocus = null;
const mediaPath = (file) => './assets/media/' + file;

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function githubLink(project) {
  const link = element('a', 'secondary-action project-github', 'View on GitHub');
  link.href = project.githubUrl;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.title = 'Open team GitHub page in a new tab';
  link.setAttribute('aria-label', 'View ' + project.title + ' on GitHub (opens in a new tab)');
  const icon = element('ion-icon');
  icon.setAttribute('name', 'logo-github');
  icon.setAttribute('aria-hidden', 'true');
  link.prepend(icon);
  return link;
}

function imageLink(file, caption) {
  const link = element('a', 'gallery-image-link');
  link.href = mediaPath(file);
  link.title = 'Enlarge image';
  const img = element('img');
  img.src = mediaPath(file);
  img.alt = caption;
  link.append(img);
  link.addEventListener('click', (event) => {
    event.preventDefault();
    openImage(link.href, caption);
  });
  return link;
}

function openImage(src, caption) {
  returnFocus = document.activeElement;
  viewer.querySelector('img').src = src;
  viewer.querySelector('img').alt = caption;
  viewer.querySelector('.viewer-caption').textContent = caption;
  viewer.showModal();
  document.body.classList.add('viewer-open');
}

viewer.addEventListener('click', (event) => {
  if (event.target === viewer) viewer.close();
});
viewer.addEventListener('close', () => {
  document.body.classList.remove('viewer-open');
  returnFocus?.focus({ preventScroll: true });
});

function setGallery(index) {
  galleryIndex = (index + currentProject.images.length) % currentProject.images.length;
  const [file, caption] = currentProject.images[galleryIndex];
  const stage = detail.querySelector('.gallery-stage');
  stage.replaceChildren(imageLink(file, caption));
  detail.querySelector('.gallery-caption').textContent = caption;
  detail.querySelector('.gallery-count').textContent =
    (galleryIndex + 1) + ' / ' + currentProject.images.length;
  detail.querySelectorAll('.gallery-thumb').forEach((button, i) => {
    button.setAttribute('aria-pressed', String(i === galleryIndex));
  });
}

function renderProject(project) {
  currentProject = project;
  detail.replaceChildren();
  const back = element('a', 'back-link', 'Back to projects');
  back.href = '#projects';
  detail.append(back);

  const header = element('header', 'detail-header');
  header.append(element('p', 'project-type', project.type));
  const heading = element('h2', '', project.title);
  heading.tabIndex = -1;
  header.append(heading);
  if (project.githubUrl) {
    const actions = element('div', 'project-actions');
    actions.append(githubLink(project));
    header.append(actions);
  }
  detail.append(header);

  const gallery = element('section', 'project-gallery');
  gallery.setAttribute('aria-label', project.title + ' photographs');
  const stage = element('div', 'gallery-stage');
  gallery.append(stage);
  const toolbar = element('div', 'gallery-toolbar');
  toolbar.append(element('p', 'gallery-count'));
  const controls = element('div', 'gallery-controls');
  for (const [label, icon, offset] of [
    ['Previous image', 'chevron-back-outline', -1],
    ['Next image', 'chevron-forward-outline', 1]
  ]) {
    const button = element('button', 'icon-button');
    button.type = 'button';
    button.title = label;
    button.setAttribute('aria-label', label);
    const symbol = element('ion-icon');
    symbol.setAttribute('name', icon);
    symbol.setAttribute('aria-hidden', 'true');
    button.append(symbol);
    button.disabled = project.images.length === 1;
    button.addEventListener('click', () => setGallery(galleryIndex + offset));
    controls.append(button);
  }
  toolbar.append(controls);
  gallery.append(toolbar);
  const caption = element('p', 'gallery-caption');
  caption.setAttribute('aria-live', 'polite');
  gallery.append(caption);
  const thumbs = element('div', 'gallery-thumbnails');
  project.images.forEach(([file, label], index) => {
    const button = element('button', 'gallery-thumb');
    button.type = 'button';
    button.setAttribute('aria-label', label);
    const img = element('img');
    img.src = mediaPath(file);
    img.alt = '';
    img.loading = 'lazy';
    button.append(img);
    button.addEventListener('click', () => setGallery(index));
    thumbs.append(button);
  });
  gallery.append(thumbs);
  detail.append(gallery);

  const copy = element('div', 'detail-copy');
  copy.append(element('h3', '', 'The project'), element('p', '', project.overview));
  if (project.article) {
    const article = element('section', 'project-article');
    article.setAttribute('aria-labelledby', 'project-article-title');
    const title = element('h3', '', project.article.title);
    title.id = 'project-article-title';
    article.append(element('p', 'project-article-label', 'From my LinkedIn'), title,
      element('p', '', project.article.description));
    const link = element('a', 'secondary-action project-article-link', 'Read on LinkedIn');
    link.href = project.article.url;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.title = 'Read the article on LinkedIn in a new tab';
    link.setAttribute('aria-label', 'Read on LinkedIn (opens in a new tab)');
    const icon = element('ion-icon');
    icon.setAttribute('name', 'logo-linkedin');
    icon.setAttribute('aria-hidden', 'true');
    link.prepend(icon);
    article.append(link);
    copy.append(article);
  }
  copy.append(element('h3', '', 'My contribution'));
  const contributions = element('ul');
  project.contributions.forEach((text) => contributions.append(element('li', '', text)));
  copy.append(contributions, element('h3', '', 'Result and progress'), element('p', '', project.outcome));
  if (project.tags.length) {
    copy.append(element('h3', '', 'Tools and technologies'));
    const tags = element('ul', 'tag-list');
    project.tags.forEach((tag) => tags.append(element('li', '', tag)));
    copy.append(tags);
  }
  if (project.video) {
    copy.append(element('h3', '', 'Prototype demonstration'));
    const video = element('video', 'project-video');
    video.controls = true;
    video.preload = 'none';
    video.playsInline = true;
    video.poster = mediaPath('smartwall-hardware.jpg');
    video.src = mediaPath(project.video);
    copy.append(video);
  }
  detail.append(copy);
  setGallery(0);
}

// Each card remains a normal link so deep links and browser history work.
cards.forEach((card, index) => {
  const project = projectDetails[index];
  const title = card.querySelector('h3, h4');
  project.title = title.textContent;
  project.tags = [...card.querySelectorAll('.tag-list li')].map((tag) => tag.textContent);
  const href = '#projects/' + project.id;
  const titleLink = element('a', '', project.title);
  titleLink.href = href;
  title.replaceChildren(titleLink);
  const media = card.querySelector('.project-media, :scope > img');
  const cover = element('a', 'project-cover-link');
  cover.href = href;
  cover.setAttribute('aria-label', 'Open ' + project.title);
  media.replaceWith(cover);
  cover.append(media);
  const more = element('a', 'project-open', 'View project');
  more.href = href;
  const arrow = element('ion-icon');
  arrow.setAttribute('name', 'arrow-forward-outline');
  arrow.setAttribute('aria-hidden', 'true');
  more.append(arrow);
  if (project.githubUrl) {
    const actions = element('div', 'project-actions');
    actions.append(more, githubLink(project));
    card.append(actions);
  } else {
    card.append(more);
  }
});

document.querySelectorAll('.certificate-link').forEach((link) => {
  link.title = 'View certificate';
  link.addEventListener('click', (event) => {
    event.preventDefault();
    openImage(link.href, link.querySelector('img').alt);
  });
});

function route(focus = true) {
  const [requested, id] = window.location.hash.slice(1).split('/');
  const target = pages.some((page) => page.dataset.page === requested) ? requested : 'about';
  const project = target === 'projects' ? projectDetails.find((item) => item.id === id) : null;
  detail.querySelectorAll('video').forEach((video) => video.pause());
  pages.forEach((page) => page.classList.toggle('active', !project && page.dataset.page === target));
  navigationLinks.forEach((link) => {
    const active = link.dataset.target === target;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
  detail.hidden = !project;
  if (project) renderProject(project);
  const heading = project ? detail.querySelector('h2') : document.querySelector('.page.active h2');
  if (focus) {
    heading.tabIndex = -1;
    heading.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
  document.title = (project ? project.title : 'Dilusha Heshan Hemachandra') + ' | Mechanical Engineering Portfolio';
}

navigationLinks.forEach((link) => {
  link.addEventListener('click', () => { window.location.hash = link.dataset.target; });
});
document.querySelectorAll('[data-go-to]').forEach((button) => {
  button.addEventListener('click', () => { window.location.hash = button.dataset.goTo; });
});
sidebarButton.addEventListener('click', () => {
  const open = sidebar.classList.toggle('active');
  sidebarButton.setAttribute('aria-expanded', String(open));
});
window.addEventListener('hashchange', () => route());
route(false);
document.querySelector('[data-current-year]').textContent = new Date().getFullYear();
