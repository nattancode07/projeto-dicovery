function toggleMode(){
    const html = document.documentElement
    setTimeout(html.classList.toggle('light'),5000)
    /* if(html.classList.contains('light')) {
            html.classList.remove('light')
        }else {
            html.classList.add('light')
        }*/ 

        const img = document.querySelector("#profile img")

       if(html.classList.contains('light')){
        img.setAttribute('src','assets/avatar-light.jpg' )
       } else{
        img.setAttribute("src","assets/avatar.jpg")
       }

       //pegar a tag img
       //substituir a imagem
       //se tiver light mode, adicionar a imagem
}