const item = document.querySelectorAll('.swiper-slide')
const txt = document.querySelectorAll('.info')
console.log(item)
txt.forEach(function(t,i){
    t.addEventListener('mouseover',function(){
        txt[i].style.backgroundColor='rgba(2, 255, 255)'
    })
    t.addEventListener('mouseout',function(){
        txt[i].style.background='none'
    })
})