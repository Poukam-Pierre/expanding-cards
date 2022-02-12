
const sections = document.querySelectorAll('.section')
const name = document.querySelectorAll('h3')
sections.forEach((section)=>{
    section.addEventListener('click', ()=>{
        sections.forEach((section)=>{
             section.classList.remove("active")
            })
            section.classList.add("active")
    })
})
