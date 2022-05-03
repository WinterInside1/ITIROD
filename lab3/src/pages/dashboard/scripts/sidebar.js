const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const overflow = document.getElementById('dashboard-overflow');
const sectionsToggles = document.querySelectorAll(
  '.sidebar-item[data-section]'
);

let currentSection = document.querySelector('.sidebar-item--selected').dataset.section;

sidebarToggle.addEventListener('click', () => {
  const icon = sidebarToggle.querySelector('img');
  icon.classList.toggle('sidebar-item__icon--rotate');
  overflow.classList.toggle('dashboard__overflow--open');

  sidebar.classList.toggle('sidebar--open');
});

for (const sectionToggle of sectionsToggles) {
  sectionToggle.addEventListener('click', () => {
    const section = sectionToggle.dataset.section;
    document
      .querySelector(`.sidebar-item[data-section="${currentSection}"]`)
      .classList.remove('sidebar-item--selected');
    sectionToggle.classList.add('sidebar-item--selected');

    currentSection = section;

    sidebarToggle
      .querySelector('img')
      .classList.remove('sidebar-item__icon--rotate');
    overflow.classList.remove('dashboard__overflow--open');
    sidebar.classList.remove('sidebar--open');
  });
}
