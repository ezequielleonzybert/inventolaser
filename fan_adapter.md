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
### Fan Adapter

<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/three/examples/js/loaders/GLTFLoader.js"></script>
<canvas id="canvas"></canvas>
<script>
  // Configurar la escena
  const scene = new THREE.Scene();

  // Configurar la cámara
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Crear un renderizador
  const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas'), antialias: true });
  renderer.setClearColor('#000000');
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Función para cargar el modelo GLTF
  function loadModel() {
      const loader = new THREE.GLTFLoader();

      // Cargar el modelo GLTF
      loader.load(
          'files/fan_adapter/fan_adapter.gltf', // Ruta al archivo GLTF
          function (gltf) {
              // El modelo se carga correctamente
              scene.add(gltf.scene);
          },
          undefined,
          function (error) {
              // Ocurrió un error al cargar el modelo
              console.error(error);
          }
      );
  }

  // Llamar a la función para cargar el modelo
  loadModel();

  // Animación
  function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
  }
  animate();
</script>