const tags = document.querySelectorAll('{data-tab-target}')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabtabtarget)
        target.classList.add('active')
    })
})