
/*
function que llenara el feed principal de noticias 
*/
function llenarPecera(){
    console.log("aqui");
    
    var elem = document.querySelector('#feedPricipal');
    elem.innerHTML=diseñoRamdom()+elem.innerHTML;
    var msnry = new Masonry( elem, { 
    });
    msnry.layout();
}

/*
function que limpiara el feed principal de noticias 
*/
function vaciarPecera(){
    document.getElementById("feedPricipal").remove();
    //<div class='row' id='feedPricipal' data-masonry='{&quot;percentPosition&quot;: true }' style='position: relative; '></div>
    //const div = document.createElement("div");
    document.getElementById("feedNoticias").innerHTML="<div class='row' id='feedPricipal' data-masonry='{&quot;percentPosition&quot;: true }' style='position: relative; '></div>";
}

/*
function que llenara el feed principal de noticias 
*/
function llenarPeceraDos(){
    document.getElementById("feedSugerencias").innerHTML=document.getElementById("feedSugerencias").innerHTML+'<div class="card" style="margin-bottom: 1.5em;"><div class="card-body"><h5 class="card-title">Noticia sin imagen</h5><strong class="d-inline-block mb-2 text-warning">Actualidad</strong><p class="card-text">Noticia sin imagen que si cae aca es porque no tiene imagen xd</p><p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p></div></div>';
}

/*
function que limpiara el feed principal de noticias 
*/
function vaciarPeceraDos(){
    document.getElementById("feedSugerencias").innerHTML="";
    }


/*
function que retorna un diseño cualquiera de noticia  
*/
function diseñoRamdom(){
    const diseño = new Array(" <div class='col-sm-6 col-lg-4 mb-4' style='position: absolute; left: 0%; top: 0px;'><div class='card'><img src='../data/J_1.jpg' class='card-img-top' alt='...'><div class='card-body'><strong class='d-inline-block mb-2 text-warning'>Actualidad</strong><h3 class='mb-0'>Rectora</h3><div class='mb-1 text-muted'>Dec 1</div><p class='card-text mb-auto'>La Rectoría es una dependencia de la Universidad Francisco de Paula Santander a cargo del rector</p><a href='#' class='stretched-link'>Continue reading</a></div></div></div>", 
    //este diseño si sale de primero limita los otros'<div class="col-sm-6 col-md-6 col-lg-8" style="position: absolute; left: 0%; top: 0px;"><div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-200 position-relative"><div class="col-auto d-none d-lg-block"><img src="../data/4H3H07Gh_400x400.jpg" class="icard-img-top" alt="..."></div><div class="col p-4 d-flex flex-column position-static"><strong class="d-inline-block mb-2 text-success">Finanzas</strong><h3 class="mb-0">Caida Nequi</h3><div class="mb-1 text-muted">Dec 3</div><p class="mb-auto">Se cayo nequi, sin importar  cuando sea leida esta Noticia</p><a href="#" class="stretched-link">Continue reading</a></div></div></div>',
    '<div class="col-sm-6 col-lg-4 mb-4" style="position: absolute; left: 0%; top: 0px;"><div class="card" ><img src="../data/petro.jpg" class="card-img-top" alt="..."><div class="card-body"><strong class="d-inline-block mb-2 text-primary">Politica</strong><h3 class="mb-0">Petro</h3><div class="mb-1 text-muted">Dec 1</div><p class="card-text mb-auto">Presindente petro tiene un viru</p><a href="#" class="stretched-link">Continue reading</a></div></div></div>'
   );
   return diseño[Math.floor(Math.random() * 2)];
}

function imagenRandom(){

    const imagenes= new Array("../data/J_1.jpg","../data/petro.jpg","../data/news.jpg");
    return imagenes[Math.floor(Math.random() * 3)];
}

function tituloRandom(){

    const titulo = new Array("",",","");
}