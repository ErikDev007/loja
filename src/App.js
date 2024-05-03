import React from 'react';
import './App.css';

function App() {
  return (
    <div id='bd' className="App">
      
      <nav id='nav-bar' className="navbar col-12 m-auto position-fixed navbar-expand-lg bg-black">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img src="https://static.vecteezy.com/ti/vetor-gratis/p3/3618141-dragao-dourado-criatura-grande-cobra-use-pincelada-pintura-sobre-fundo-preto-vetor.jpg" class="nav-bar-img" alt="Logo"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-white sedan-sc-regular" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white sedan-sc-regular" href="#">Produtos</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-white sedan-sc-regular" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Redes-Sociais
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item sedan-sc-regular" href="#">Instagram</a></li>
            <li><a className="dropdown-item sedan-sc-regular" href="#">Facebook</a></li>
            <li><hr className="dropdown-divider sedan-sc-regular"/></li>
            <li><a className="dropdown-item sedan-sc-regular" href="#">Whatsapp</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex sedan-sc-regular" role="search">
        <input className="form-control me-2" type="search" aria-label="Search"/>
        <button className="btn btn-outline-success sedan-sc-regular" type="submit">Pesquisa</button>
      </form>
    </div>
  </div>
</nav>
<br/>
<br/>
<div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://cronoslogistics.com.br/wp-content/uploads/2023/06/modern-stationary-collection-arrangement.jpg" class="d-block w-100 imgs" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://www.engetron.com.br/loja/media/wysiwyg/5-Dicas-para-prolongar-a-vida-_til-dos-eletr_nicos-img-blog.png" class="d-block w-100 imgs" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://idocode.com.br/wp-content/uploads/2018/06/activity-adult-device-1174746-1.jpg" class="d-block w-100 imgs" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<div className='col-11 m-auto text-center'>
<figure class="text-center">
  <blockquote class="blockquote text-success">
    <h1 className='sedan-sc-regular text-pd'>PRODUTOS</h1>
  </blockquote>
</figure>
</div>
<div id='cards-group' class="row row-cols-1 row-cols-md-3 g-4 col-11 m-auto">
  <div class="col">
    <div class="card">
      <img src="https://i5.walmartimages.com/asr/7348e500-9536-4ee6-9117-1bc0949fe008.4d224836742f0cc1d9529023d521e2cf.jpeg" class="card-img-top cards-img" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">PlayStation 2</h3>
        <h5 class="card-text text-success">R$:299,99</h5>
        {/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Descrição
</button>
{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">PlayStation 2</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src="https://i5.walmartimages.com/asr/7348e500-9536-4ee6-9117-1bc0949fe008.4d224836742f0cc1d9529023d521e2cf.jpeg" class="card-img-top cards-img" alt="..."/>
      <p>Resolução Máxima: 1280 ×1024 pixels
        <br/>
         Sistema Operacional: Baseado em Linux
         <br/>
         CPU: 294 MHz (299 MHz após atualização)
         <br/>
         Drive: DVD
         <br/>
         Dimensão: 304.8 x 177.8 x 76.2 mm</p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://images.kabum.com.br/produtos/fotos/403334/console-sony-ps4-jogo-god-of-war-ragnar-k-1tb-preto-cuh-2214b_1692218334_gg.jpg" class="card-img-top cards-img" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">PlayStation 3</h3>
        <h5 class="card-text text-success">R$:1.099,99</h5>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Descrição
</button>
{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">PlayStation 3</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src="https://images.kabum.com.br/produtos/fotos/403334/console-sony-ps4-jogo-god-of-war-ragnar-k-1tb-preto-cuh-2214b_1692218334_gg.jpg" class="card-img-top cards-img" alt="..."/>
      <p>Resolução Máxima: 1080p (HDMI)
        <br/>
         Capacidade: 80 GB (originalmente)
         <br/>
         Sistema Operacional: CellOS
         <br/>
         CPU: 3.2-GHz Cell Broadband Engine
         <br/>
         Drive: DVD
         <br/>
         Dimensão: 290 × 60 × 230 mm</p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png?v=1" class="card-img-top cards-img" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Headset Gamer Logitech</h3>
        <h5 class="card-text text-success">R$:699,99</h5>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Descrição
</button>
{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Headset Gamer Logitech G PRO</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src="https://resource.logitechg.com/w_692,c_lpad,ar_4:3,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/gaming/en/products/pro-x/pro-headset-gallery-1.png?v=1" class="card-img-top cards-img" alt="..."/>
      <p>Tecnologia de microfone Blue VO!CE
         <br/>
         Fone de ouvido DTS X 2.0 com som surround 7.1
         <br/>
         Estrutura resistente em aço e alumínio
         <br/>
         Drivers PRO-G de 50 mm
         <br/>
         Placa de som externa USB superior</p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://m.media-amazon.com/images/I/6177vP0viyL._AC_UF894,1000_QL80_.jpg" class="card-img-top cards-img" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">AULA Teclado mecânico</h3>
        <h5 class="card-text text-success">R$:292,73</h5>
        {/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Descrição
</button>
{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">AULA Teclado mecânico para jogos 60% com fio</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src="https://m.media-amazon.com/images/I/6177vP0viyL._AC_UF894,1000_QL80_.jpg" class="card-img-top cards-img" alt="..."/>
      <p>Marca	AULA
         Dispositivos compatíveis	PC
         Tecnologia de conectividade	USB
         Descrição do teclado	Jogos
         Adequação do controle por rádio	Office, Gaming</p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/ouxjrxdu/file.png" class="card-img-top cards-img" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Mouse Gamer 2400DPI</h3>
        <h5 class="card-text text-success">R$:49,90</h5>
        {/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Descrição
</button>
{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">item</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src="https://m.media-amazon.com/images/I/61lCLrCtuhL._AC_UF894,1000_QL80_.jpg" class="card-img-top cards-img" alt="..."/>
      <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,</p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="https://m.media-amazon.com/images/I/51bbd3rst3L._AC_SX679_.jpg" class="card-img-top cards-img" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Samsung T350</h3>
        <h5 class="card-text text-success">R$:799,01</h5>
        {/* <!-- Button trigger modal --> */}
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
Descrição
</button>
{/* <!-- Modal --> */}
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">item</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRfC0DEtE5uGJwNjPmsPePr3VNJQfAa3EBd-ZeSZHZtg&s" class="card-img-top cards-img" alt="..."/>
      <p>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,</p>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  </div>
</div>
<hr/>
<div className='col-11 m-auto text-center text-pd'>
<h2 className='text-danger sedan-sc-regular'>!!!AVISO IMPORTANTE!!!</h2>
<h3 className='text-danger sedan-sc-regular'>Todos os itens neste site são apenas ilustrativos e não estão à venda</h3>
</div>
<hr/>
{/* footer */}
<footer className='container-fluid text-white bg-black bg-gradient'>
  <div className='row pt-5 pb-5'>
    <section className='col-md-5 mb-5 text-white'>
      <h5>CONTATOS</h5>
      <ul className='nav flex-column'>
        <li className='nav-item'>
          <a className='nav-link text-white' href='https://www.linkedin.com/in/erik-lima-do-nascimento-b18b7524b/' target='_blank'>Linkedin</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link text-white' href='cards-group' target='_blank'>portiflio</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link text-white' href='https://api.whatsapp.com/send?phone=5585992013054' target='_blank'>Whatsapp</a>
        </li >
      </ul>
    </section>
  </div>
</footer>
</div>
  );
}

export default App;
