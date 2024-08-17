const hamburger = document.getElementById('hamburger');
const buttons = document.getElementById('buttons');

hamburger.addEventListener('click', () => {
    buttons.classList.toggle('active');
});

function loadContent(page) {
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
            <h2>Contacto</h2>
            <p>Este es el contenido de la página de contacto.</p>
            <form>
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre"><br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"><br><br>
                <label for="mensaje">Mensaje:</label><br>
                <textarea id="mensaje" name="mensaje"></textarea><br><br>
                <button type="submit">Enviar</button>
            </form>
        `;
    }

    document.getElementById('section').innerHTML = section;
}

loadContent('inicio');