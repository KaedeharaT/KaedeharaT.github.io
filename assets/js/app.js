/* Static portfolio rendering and browser-local preferences. */
(() => {
  'use strict';
  const root = document.documentElement;
  const ids = ['home', 'about', 'projects', 'research', 'experience', 'education', 'skills', 'contact'];
  const storage = {
    get(key) { try { return localStorage.getItem(key); } catch { return null; } },
    set(key, value) { try { localStorage.setItem(key, value); } catch {} }
  };
  const esc = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const external = (url, text, className = '') => `<a class="${className}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(text)}<span aria-hidden="true"> ↗</span></a>`;
  const sectionHead = (id, title, intro = '') => `<div class="section-heading"><h2 id="${id}-heading">${esc(title)}</h2>${intro ? `<p>${esc(intro)}</p>` : ''}</div>`;
  const jump = (id, text) => `<a href="#${id}">${esc(text)}</a>`;
  let lang = storage.get('fy-lang') === 'en' ? 'en' : 'ja';
  let opener;
  const dialog = document.querySelector('#lightbox');

  function gallery(project, text) {
    if (!project.images.length) return '';
    const imageButton = (image, main) => `<button type="button" class="${main ? 'gallery-main' : 'thumb'}" data-image="assets/img/${esc(image[0])}" data-caption="${esc(image[1])}" aria-label="${esc(text.zoom + ': ' + image[1])}"><img loading="lazy" src="assets/img/${esc(image[0])}" alt="${esc(image[1])}" width="1440" height="900">${main ? `<span class="zoom-indicator">${esc(text.zoom)}</span>` : ''}</button>`;
    return `<figure class="gallery">${imageButton(project.images[0], true)}<div class="thumbs">${project.images.slice(1).map(image => imageButton(image, false)).join('')}</div><figcaption>${esc(text.demo)}</figcaption></figure>`;
  }

  function resumeControl(text) {
    const resume = profileConfig.resume;
    if (resume?.approved && /^assets\/docs\/[^/]+\.pdf$/i.test(resume.url)) {
      return `<a class="secondary resume-control" href="${esc(resume.url)}" download>${esc(text.resumeAvailable)}</a>`;
    }
    return `<button type="button" class="resume-control" disabled title="${esc(text.resumePending)}">${esc(text.resumeLabel)}</button>`;
  }

  function projectMarkup(project, index, text) {
    const id = index === 0 ? 'buildingai' : 'healthops';
    return `<article id="${id}" class="project ${index === 0 ? 'featured-project' : 'text-project'}" aria-labelledby="${id}-heading">
      <div class="project-header"><div><p class="project-category">${esc(project.category)}</p><h3 id="${id}-heading" translate="no">${esc(project.name)}</h3></div><span class="badge">${esc(project.status)}</span></div>
      <div class="project-overview"><div><p class="project-description">${esc(project.description)}</p><div class="tags" aria-label="${lang === 'ja' ? '使用技術' : 'Technologies'}">${project.stack.map(item => `<span class="tag" translate="no">${esc(item)}</span>`).join('')}</div>${external(profileConfig.github + '/' + project.repo, text.repository, 'repo-link')}</div>${gallery(project, text)}</div>
      <dl class="case-study"><div><dt>${esc(text.problemLabel)}</dt><dd>${esc(project.problem)}</dd></div><div><dt>${esc(text.responsibility)}</dt><dd>${esc(project.role)}</dd></div><div><dt>${esc(text.implementationLabel)}</dt><dd>${esc(project.technical)}</dd></div><div><dt>${esc(text.resultsLabel)}</dt><dd>${esc(project.outcome)}</dd></div></dl>
      ${index === 0 ? `<div class="project-workflow"><h4>${esc(text.workflowLabel)}</h4><ol>${text.workflow.map(step => `<li>${esc(step)}</li>`).join('')}</ol></div>` : ''}
      ${project.architecture ? `<div class="architecture"><h4>${esc(text.architectureLabel)}</h4><ol>${project.architecture.map(item => `<li><strong translate="no">${esc(item[0])}</strong><span>${esc(item[1])}</span></li>`).join('')}</ol></div>` : ''}
      <details class="project-details"><summary>${esc(text.features)}</summary><ul>${project.points.map(item => `<li>${esc(item)}</li>`).join('')}</ul>${index === 0 ? jump('research', text.researchLink) : ''}</details>
    </article>`;
  }

  function researchMarkup(text) {
    const research = text.phdResearch;
    return `<section id="research" aria-labelledby="research-heading">
      ${sectionHead('research', text.researchTitle)}
      <div class="research-overview"><h3>${esc(research.overviewTitle)}</h3><p>${esc(research.overview)}</p></div>
      <figure class="phd-overview" aria-labelledby="phd-figure-title">
        <h4 id="phd-figure-title">${esc(research.figureTitle)}</h4>
        <button type="button" class="research-figure-button" data-image="assets/img/phd-research-overview.png" data-caption="${esc(research.caption)}" aria-label="${esc(text.zoom + ': ' + research.figureTitle)}">
          <img src="assets/img/phd-research-overview.png" alt="${esc(research.alt)}" width="1672" height="941" loading="lazy">
          <span class="zoom-indicator">${esc(text.zoom)}</span>
        </button>
        <figcaption>${esc(research.caption)}</figcaption>
        <p class="figure-note">${esc(research.figureNote)}</p>
      </figure>
      <div class="research-block"><h3>${esc(research.coreTitle)}</h3><div class="research-grid">
        ${research.themes.map(theme => `<article class="research-item"><h4>${esc(theme.title)}</h4><dl><div><dt>${esc(research.methodLabel)}</dt><dd>${esc(theme.method)}</dd></div><div><dt>${esc(research.goalLabel)}</dt><dd>${esc(theme.goal)}</dd></div></dl></article>`).join('')}
      </div></div>
      <div class="research-block research-results"><h3>${esc(research.resultsTitle)}</h3><p class="result-source">${esc(research.source)}</p>
        <dl class="research-metrics">${research.results.map(result => `<div><dt>${esc(result.label)}</dt><dd><strong>${esc(result.value)}</strong><p>${esc(result.scope)}</p></dd></div>`).join('')}</dl>
        <div class="validation-note"><h4>${esc(research.validationTitle)}</h4><p>${esc(research.validation)}</p></div>
      </div>
      <div class="research-block research-application"><h3>${esc(research.applicationTitle)}</h3><p>${esc(research.application)}</p>${jump('buildingai', research.applicationLink)}</div>
      <article class="masters-research"><h3>${esc(research.mastersTitle)}</h3><p class="research-meta">${esc(research.mastersPeriod)}</p><p>${esc(research.mastersText)}</p></article>
    </section>`;
  }

  function render() {
    const t = content[lang];
    root.lang = lang;
    document.title = t.title;
    document.querySelector('meta[name="description"]').content = t.description;
    document.querySelector('meta[property="og:title"]').content = t.title;
    document.querySelector('meta[property="og:description"]').content = t.description;
    document.querySelector('.skip').textContent = t.skip;
    const language = document.querySelector('#language');
    language.textContent = lang === 'ja' ? 'English' : '日本語';
    language.lang = lang === 'ja' ? 'en' : 'ja';
    language.setAttribute('aria-label', t.languageLabel);
    document.querySelector('#theme-label').textContent = t.theme;
    for (const option of document.querySelector('#theme').options) option.textContent = t[option.value];
    document.querySelector('#close-lightbox').textContent = t.close;
    document.querySelector('#zoom-lightbox').textContent = t.originalSize;
    document.querySelector('.lightbox-viewport').setAttribute('aria-label', t.imageViewport);
    document.querySelector('#nav').setAttribute('aria-label', t.navLabel);
    document.querySelector('#nav').innerHTML = ids.map((id, i) => `<a href="#${id}">${esc(t.nav[i])}</a>`).join('');
    document.querySelector('main').innerHTML = `
      <section id="home" class="hero" aria-labelledby="profile-name">
        <div class="hero-copy"><h1 id="profile-name" translate="no">Feng Yuanze</h1><p class="name-japanese" lang="ja" translate="no">${esc(t.nameJapanese)}</p><div class="position">${t.position.map(item => `<p>${esc(item)}</p>`).join('')}</div><p class="role">${esc(t.role)}</p><p class="graduation">${esc(t.graduation)}</p><p class="intro">${esc(t.intro)}</p><div class="actions"><a class="primary" href="#projects">${esc(t.projectsCta)}</a>${external(profileConfig.github, 'GitHub', 'secondary')}<a class="text-link" href="mailto:${esc(profileConfig.email)}">${esc(t.contactCta)}</a>${resumeControl(t)}</div></div>
        <figure class="portrait"><img src="assets/img/profile.jpg" width="454" height="454" alt="${esc(t.portrait)}" fetchpriority="high"><figcaption>${esc(t.photoLabel)}</figcaption></figure>
        <div class="quick-links" role="group" aria-label="${esc(t.quickLabel)}">${t.shortcuts.map(item => `<a href="#${item[0]}"><strong>${esc(item[1])}</strong><span>${esc(item[2])}</span></a>`).join('')}</div>
      </section>
      <section id="about" aria-labelledby="about-heading">${sectionHead('about', t.aboutTitle)}<div class="about-copy">${t.about.map(item => `<p>${esc(item)}</p>`).join('')}</div></section>
      <section id="projects" aria-labelledby="projects-heading">${sectionHead('projects', t.projectsTitle, t.projectsIntro)}${t.projects.map((item, i) => projectMarkup(item, i, t)).join('')}</section>
      ${researchMarkup(t)}
      <section id="experience" aria-labelledby="experience-heading">${sectionHead('experience', t.experienceTitle)}<div class="timeline">${t.experience.map((item, i) => `<article class="timeline-item"><p class="date">${esc(item[0])}</p><div class="timeline-body"><h3>${esc(item[1])}</h3><p class="subtitle">${esc(item[2])}</p><ul>${t.experiencePoints[i].map(point => `<li>${esc(point)}</li>`).join('')}</ul></div></article>`).join('')}</div></section>
      <section id="education" aria-labelledby="education-heading">${sectionHead('education', t.educationTitle)}<div class="timeline education-timeline">${t.education.map(item => `<article class="timeline-item"><p class="date">${esc(item[0])}</p><div class="timeline-body"><h3>${esc(item[1])}</h3><p class="subtitle">${esc(item[2])}</p>${item[3] ? `<p>${esc(item[3])}</p>` : ''}</div></article>`).join('')}</div></section>
      ${profileConfig.publications.length ? `<section id="publications">${sectionHead('publications', 'Publications')}${profileConfig.publications.map(item => `<p>${external(item.url, item.citation)}</p>`).join('')}</section>` : ''}
      <section id="skills" aria-labelledby="skills-heading">${sectionHead('skills', t.skillsTitle, t.skillsIntro)}<div class="skills-grid">${t.skills.map(group => `<article class="skill-col"><h3>${esc(group.title)}</h3><dl>${group.rows.map(row => `<div><dt>${esc(row[0])}</dt><dd>${esc(row[1])}</dd></div>`).join('')}</dl><div class="skill-evidence">${group.links.map(link => jump(link[0], link[1])).join('')}</div></article>`).join('')}</div></section>

      <section id="contact" class="contact" aria-labelledby="contact-heading">${sectionHead('contact', t.contactTitle)}<p>${esc(t.contactText)}</p><div class="contact-links"><a href="mailto:${esc(profileConfig.email)}">${esc(profileConfig.email)}</a>${external(profileConfig.github, 'GitHub')}${profileConfig.linkedin ? external(profileConfig.linkedin, 'LinkedIn') : ''}</div></section>`;
    document.querySelector('footer').innerHTML = `<span>© ${new Date().getFullYear()} ${esc(t.footer)}</span><a href="#home">${esc(t.top)}</a>`;
    updateNavigation();
  }

  const theme = document.querySelector('#theme');
  const systemTheme = matchMedia('(prefers-color-scheme: dark)');
  theme.value = ['light', 'dark'].includes(storage.get('fy-theme')) ? storage.get('fy-theme') : 'system';
  function applyTheme() {
    root.dataset.theme = theme.value === 'system' ? (systemTheme.matches ? 'dark' : 'light') : theme.value;
    document.querySelector('meta[name="theme-color"]').content = root.dataset.theme === 'dark' ? '#15212b' : '#ffffff';
  }
  theme.addEventListener('change', () => { storage.set('fy-theme', theme.value); applyTheme(); });
  systemTheme.addEventListener('change', applyTheme);

  function updateNavigation() {
    const boundary = document.querySelector('.topbar').getBoundingClientRect().height + 64;
    const sections = [...document.querySelectorAll('main > section')];
    const current = sections.filter(section => section.getBoundingClientRect().top <= boundary).pop() || sections[0];
    for (const link of document.querySelectorAll('#nav a')) {
      if (link.hash === '#' + current.id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
  }
  let scrollPending = false;
  window.addEventListener('scroll', () => {
    if (!scrollPending) { scrollPending = true; requestAnimationFrame(() => { updateNavigation(); scrollPending = false; }); }
  }, {passive: true});
  window.addEventListener('resize', updateNavigation);

  document.querySelector('#language').addEventListener('click', () => {
    // Include the reading space below the sticky header, including anchor margins.
    const boundary = document.querySelector('.topbar').getBoundingClientRect().height + 96;
    // Preserve a case study as well as a section if it is the current reading anchor.
    const candidates = [...document.querySelectorAll('main > section, .project')];
    const current = candidates.filter(item => item.getBoundingClientRect().top <= boundary).pop() || document.querySelector('#home');
    const id = current.id;
    const offset = current.getBoundingClientRect().top;
    const expanded = [...document.querySelectorAll('.project-details[open]')].map(item => item.closest('.project').id);
    lang = lang === 'ja' ? 'en' : 'ja';
    storage.set('fy-lang', lang);
    render();
    for (const projectId of expanded) document.querySelector('#' + projectId + ' details').open = true;
    const targetY = document.getElementById(id).getBoundingClientRect().top + scrollY - offset;
    window.scrollTo({top: targetY, behavior: 'instant'});
    updateNavigation();
  });

  document.querySelector('main').addEventListener('click', event => {
    const button = event.target.closest('[data-image]');
    if (!button) return;
    opener = button;
    dialog.querySelector('img').src = button.dataset.image;
    const image = dialog.querySelector('img');
    const thumbnail = button.querySelector('img');
    image.alt = thumbnail.alt;
    image.width = Number(thumbnail.getAttribute('width'));
    image.height = Number(thumbnail.getAttribute('height'));
    dialog.classList.remove('is-original');
    document.querySelector('#zoom-lightbox').textContent = content[lang].originalSize;
    document.querySelector('#zoom-lightbox').setAttribute('aria-pressed', 'false');
    document.querySelector('#image-caption').textContent = button.dataset.caption;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
  });
  document.querySelector('#close-lightbox').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  });
  document.querySelector('#zoom-lightbox').addEventListener('click', () => {
    const original = dialog.classList.toggle('is-original');
    const button = document.querySelector('#zoom-lightbox');
    button.textContent = original ? content[lang].fitSize : content[lang].originalSize;
    button.setAttribute('aria-pressed', String(original));
    if (original) document.querySelector('.lightbox-viewport').focus();
  });
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const controls = [...dialog.querySelectorAll('button, [tabindex="0"]')];
    const first = controls[0], last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  dialog.addEventListener('close', () => { document.body.style.overflow = ''; opener?.focus({preventScroll: true}); });
  applyTheme();
  render();
})();
