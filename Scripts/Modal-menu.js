document.getElementById("open-modal").addEventListener("click",function(){
    document.getElementById("modal-menu").classList.add("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById("modal-menu").classList.remove("open")
    }
});

document.getElementById("close-home-modal").addEventListener("click",function(){
    document.getElementById("home-modal").classList.remove("open")
})

