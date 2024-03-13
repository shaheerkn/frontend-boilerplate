let searchTrigger = document.querySelector('[data-search-trigger]');
let searchClose = document.querySelector('[data-search-close]');
let searchEl = document.querySelector('[data-search-el]')

if (searchTrigger && searchEl) {
  function handleSearchEl() {
    searchEl.classList.toggle('search--active')
    searchEl.querySelector('input').focus()
  }
  
  searchTrigger.addEventListener('click', handleSearchEl)
  searchClose.addEventListener('click', handleSearchEl)
}


