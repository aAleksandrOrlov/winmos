const tabs = (headerSelector, tabSelector, contentSelector, activeClass, displayType = 'block') => {
  const header = document.querySelector(headerSelector),
    tabs = document.querySelectorAll(tabSelector),
    contents = document.querySelectorAll(contentSelector);

  function hideTabContent() {
    contents.forEach((content) => (content.style.display = 'none'));
    tabs.forEach((tab) => tab.classList.remove(activeClass));
  }

  function showTabContent(index = 0) {
    contents[index].style.display = displayType;
    tabs[index].classList.add(activeClass);
  }

  hideTabContent();
  showTabContent();

  header.addEventListener('click', (e) => {
    const { target } = e;

    if (
      (target && target.classList.contains(tabSelector.replace(/\./, ''))) ||
      target.parentNode.classList.contains(tabSelector.replace(/\./, ''))
    ) {
      tabs.forEach((tab, idx) => {
        if (target === tab || target.parentNode === tab) {
          hideTabContent();
          showTabContent(idx);
        }
      });
    }
  });
};

export default tabs;
