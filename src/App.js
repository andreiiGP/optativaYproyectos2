import logo from './logo.svg';
import './index.css';

function App() {
  return (
    <div>
      <section >
        <h2 id='NombreEmpresa'>TrendyCloset Todo En Moda Para Tí</h2>
      </section>

      <div class="imagenPrin">
        <img id="tamaño2" src="portada.jpg"></img>
      </div>

      <section className='separador'>
        <div className='nosotros'>
          <h2>Acerca De Nosotros</h2>
          <p>
            Somos una marca apasionada y dedicada a la moda y al estilo. Desde nuestro inicio, nos hemos
            comprometido a ofrecer prendas de alta calidad y diseños innovadores que reflejen las últimas
            tendencias en el mundo de la moda.
            <br></br>
            <br></br>
            Nuestro equipo de diseñadores creativos trabaja arduamente para crear colecciones únicas y
            versátiles, con atención meticulosa a los detalles y a la calidad de los materiales que
            utilizamos. Nos esforzamos por combinar estilo y comodidad en todas nuestras prendas, para
            que nuestros clientes se sientan seguros y elegantes en cualquier ocasión.
            <br></br>
            <br></br>
            En TrendyCloset, valoramos la individualidad y la diversidad. Creemos que la moda es una
            forma de expresión personal y queremos ser una marca que ayude a nuestros clientes a mostrar
            su estilo único al mundo. Ofrecemos una amplia gama de opciones, desde ropa casual hasta
            prendas más sofisticadas, para adaptarnos a diferentes gustos y preferencias.
            <br></br>
            <br></br>
            Además de nuestra dedicación a la moda, también nos preocupamos por la sostenibilidad y el
            impacto ambiental. Nos esforzamos por adoptar prácticas responsables en cada etapa de nuestra
            cadena de suministro, desde la selección de materiales sostenibles hasta la implementación de
            procesos de producción éticos. Nos enorgullece el excelente servicio al cliente que ofrecemos. Nuestro equipo está siempre dispuesto a brindar asesoramiento de estilo y responder a cualquier pregunta que puedas tener. Queremos que tu experiencia de compra sea excepcional, desde el momento en que visitas nuestro sitio web o tienda hasta que recibes tus prendas en casa. En TrendyCloset nos emociona compartir nuestra pasión por la moda contigo.
          </p>
        </div>
      </section>

      <section className='separador'>
        <div class="mision">
          <h2>Misión</h2>
          <p>Nuestra misión es es proporcionar a nuestros clientes prendas de vestir de alta calidad y
            estilo, que les permitan expresar su individualidad y sentirse confiados en su apariencia.
            Nos esforzamos por ofrecer productos que superen las expectativas de nuestros clientes en
            términos de diseño, durabilidad y comodidad. Buscamos ser una marca reconocida por nuestra
            excelencia en moda y servicio al cliente, estableciendo relaciones duraderas con nuestros
            clientes basadas en la confianza y la satisfacción.
          </p>
        </div>
        <div class="vision">
          <h2>Visión</h2>
          <p>Nuestra visión es convertirnos en una marca líder en la industria de la moda, reconocida
            a nivel nacional e internacional por nuestra calidad excepcional, diseños innovadores y
            atención al detalle. Buscamos ser la elección preferida de los amantes de la moda,
            brindándoles una amplia gama de opciones que reflejen las últimas tendencias y estilos.
            Nos esforzamos por expandir nuestra presencia en el mercado, manteniendo al mismo tiempo
            los más altos estándares éticos y de sostenibilidad.
          </p>
        </div>
      </section>
      <section class="separador">
        <h2>Contáctenos</h2>
          <ul>
            <div class="centro">
              <a href="https://www.facebook.com" target="_blank">
                <img id="tamaño" src="facebook.png"></img> </a>
              <a href="https://accounts.google.com/" target="_blank">
                <img id="tamaño" src="gmail.png"></img></a>
              <a href="https://web.whatsapp.com/" target="_blank">
                <img id="tamaño" src="whatsapp.png"></img></a>
              <a href="https://www.instagram.com/" target="_blank">
                <img id="tamaño" src="instagram.png"></img></a>
             
              
            </div>
          </ul>
      </section>
    </div>
  );
}

export default App;
