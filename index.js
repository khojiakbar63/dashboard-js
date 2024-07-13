const 
sideList = $('#side-list'),
dropdown = $('#dropdown'),
dropdownBtn = $('#dropdown-btn'),
dropdownBody = $('#dropdown-body')



// Render data
function renderData(data) {
    data.length && data.forEach(el => {
        const sideItem = createElement('li', styleSideItem, `
        <i class="${el.icon}"></i><a href="${el.path}">${el.title}</a>
        `)
        sideList.appendChild(sideItem)
    });
}
renderData(sideInfos)

dropdownBtn.addEventListener('click', ()=>{
    dropdownBody.classList.toggle('flex')
    dropdownBody.classList.toggle('hidden')

})




(function(token){
    if(!token){
        location.href = './pages/login.html'
    }
}(localStorage.getItem('token')))

































