const hamburger = document.getElementById('hamburger');
const buttons = document.getElementById('buttons');

hamburger.addEventListener('click', () => {
    buttons.classList.toggle('active');
});

function loadContent(page, toggleMenu) {
    let section = '';

    if (page === 'inicio') {
        section = `
            <div id="inicio">
            <p>
            En <i>invento laser</i> transformamos ideas en objetos únicos a través de la precisión y versatilidad del corte láser.
            <p>
            Nos especializamos en diseñar y crear piezas personalizadas en una variedad de materiales como MDF y acrílicos.
            <br>
            Desde cartelería y decoración hasta soluciones funcionales y de diseño, ofrecemos productos que combinan creatividad con tecnología avanzada.
            </p>
            <p>
                Ya sea que necesites destacar tu marca, embellecer un espacio o crear una pieza única, estamos aquí para dar vida a tus proyectos con la máxima calidad y detalle.
            </p>
            </div>
            `;
    } else if (page === 'contacto') {
        section = `
        <p>Si tenés alguna consulta o necesitás más información sobre nuestros servicios, no dudes en contactarnos.<br>Estamos ubicados en Haedo, y siempre estamos disponibles para responder a tus preguntas.</p>
        <br><iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1641.3147536062788!2d-58.59579578828499!3d-34.63880179662057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc780a6c5da95%3A0x7cdf05dffac6d233!2sLos%20Andes%201400%2C%20B1706BRV%20Haedo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1723922763444!5m2!1ses-419!2sar" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <br><p>Teléfono: +54 11 5588-1953</p>
        `;
    } else if (page == 'servicios') {
        section = `
        <div style="text-align: left;">
        <p>Cómo Trabajamos: Paso a Paso del Servicio de Diseño y Corte Láser Personalizado</p>

        <ol>
            <li><strong>Consulta Inicial:</strong> Comenzamos con una consulta para entender tus necesidades y expectativas. Hablamos sobre el diseño, el material y el uso final del producto.</li>
            <li><strong>Propuesta y Diseño:</strong> Creamos un diseño personalizado basado en tus ideas y requisitos. Te enviamos una propuesta visual para tu revisión y aprobación.</li>
            <li><strong>Revisión y Ajustes:</strong> Si es necesario, realizamos ajustes al diseño según tus comentarios. Aseguramos que el diseño final cumpla con tus expectativas antes de proceder.</li>
            <li><strong>Preparación para el Corte:</strong> Preparamos el archivo final para el corte láser, asegurándonos de que todos los detalles estén correctos y listos para la producción.</li>
            <li><strong>Corte Láser:</strong> Utilizamos tecnología de corte láser de alta precisión para cortar el material seleccionado según el diseño aprobado.</li>
            <li><strong>Revisión de Calidad:</strong> Inspeccionamos cada pieza cortada para garantizar la máxima calidad y precisión.</li>
            <li><strong>Entrega o Recogida:</strong> Te entregamos el producto final o coordinamos la recogida, según tu preferencia.</li>
            <li><strong>Soporte Postventa:</strong> Estamos disponibles para cualquier consulta o ajuste adicional que puedas necesitar después de la entrega.</li>
        </ol>

        <p>Contáctanos para comenzar tu proyecto y transformar tus ideas en realidad con nuestra tecnología de corte láser de última generación.</p>
        </div>
        `;
    } else if (page == 'productos') {
        section = `
            <div id="categorias">
                <a class="categoria" href="#" draggable="false" onclick="loadContent('exhibidores', true)">
                    <img src="assets/categorias/cajas.jpg">
                    <div class="categoria-overlay"></div>
                    <span class="categoria-text">cajas</span>
                </a>
                <a class="categoria" href="#" draggable="false" onclick="loadContent('cajas', true)">
                    <img src="assets/categorias/exhibidores.jpg">
                    <div class="categoria-overlay"></div>
                    <span class="categoria-text">exhibidores</span>
                </a>
                <a class="categoria" href="#" draggable="false" onclick="loadContent('deco', true)">
                    <img src="assets/categorias/deco.jpg">
                    <div class="categoria-overlay"></div>
                    <span class="categoria-text">deco</span>
                </a>
            </div>
        `
        // section = '<div id="grid">';
        // fetch('products/products.csv')
        //     .then(response => response.text())
        //     .then(data => {
        //         const filas = data.split('\n').slice(1);
        //         const product = {};
        //         filas.forEach(fila => {
        //             const dato = fila.split(',');
        //             product.name = dato[0];
        //             product.description = dato[1];
        //             product.price = dato[2];
        //             section += '<div id="product">' + dato[0] + dato[1] + '$' + dato[2] + '</div>';
        //         });
        //         section += '</div>';
        //         document.getElementById('section').innerHTML = section;
        //     })
        //     .catch(error => console.error('Error:', error));
    }

    document.getElementById('section').innerHTML = section;
    if (toggleMenu)
        buttons.classList.toggle('active');
}

loadContent('inicio', false);