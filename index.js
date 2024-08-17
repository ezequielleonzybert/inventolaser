const hamburger = document.getElementById('hamburger');
const buttons = document.getElementById('buttons');

hamburger.addEventListener('click', () => {
    buttons.classList.toggle('active');
});

function loadContent(page, toggleMenu) {
    let section = '';

    if (page === 'inicio') {
        section = `
            <p>
            En <i>invento laser</i> transformamos ideas en objetos únicos a través de la precisión y versatilidad del corte láser. Nos especializamos en diseñar y crear piezas personalizadas en una variedad de materiales como MDF y acrílicos. 
            Desde cartelería y decoración hasta soluciones funcionales y de diseño, ofrecemos productos que combinan creatividad con tecnología avanzada.
            </p>
            <p>
                Ya sea que necesites destacar tu marca, embellecer un espacio o crear una pieza única, estamos aquí para dar vida a tus proyectos con la máxima calidad y detalle.
            </p>
            `;
    } else if (page === 'contacto') {
        section = `
        <p>Si tenés alguna consulta o necesitás más información sobre nuestros servicios, no dudes en contactarnos.<br>Estamos ubicados en Haedo, y siempre estamos disponibles para responder a tus preguntas.</p>
        <iframe id="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1641.3147536062788!2d-58.59579578828499!3d-34.63880179662057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc780a6c5da95%3A0x7cdf05dffac6d233!2sLos%20Andes%201400%2C%20B1706BRV%20Haedo%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1723922763444!5m2!1ses-419!2sar" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <p>Teléfno: +54 11 5588-1953</p>
        `;
    }

    document.getElementById('section').innerHTML = section;
    if (toggleMenu)
        buttons.classList.toggle('active');
}

loadContent('inicio', false);