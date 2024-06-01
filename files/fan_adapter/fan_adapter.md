---
layout: default
---
<p align="center">
  <a href="./disenos.html" style="text-decoration: none;">
    <button style="padding: 10px 20px; margin: 5px; background-color: #008CBA; color: white; border: none; border-radius: 5px;">Diseños</button>
  </a>
  <a href="./descargas.html" style="text-decoration: none;">
    <button style="padding: 10px 20px; margin: 5px; background-color: #33BFFF; color: white; border: none; border-radius: 5px;">Descargas</button>
  </a>
  <a href="./contacto.html" style="text-decoration: none;">
    <button style="padding: 10px 20px; margin: 5px; background-color: #008CBA; color: white; border: none; border-radius: 5px;">Contacto</button>
  </a>
</p>

<body>
    <div id="container"></div>
    <script src="https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.152.2/examples/js/loaders/GLTFLoader.js"></script>
    <script>
        // Escena, cámara y renderizador
        const container = document.getElementById('container');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

        // Cargar el modelo GLTF
        const loader = new THREE.GLTFLoader();
        loader.load(
            'path/to/your/model.glb', // Reemplaza con la ruta de tu archivo GLB
            (gltf) => {
                scene.add(gltf.scene);
                animate();
            },
            undefined,
            (error) => {
                console.error(error);
            }
        );

        camera.position.z = 5;

        // Animación
        function animate() {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
        }

        // Ajustar el tamaño del renderizador al cambiar el tamaño de la ventana
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
    </script>
</body>