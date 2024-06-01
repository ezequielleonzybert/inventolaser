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

// Agregar una geometría (por ejemplo, un cubo)
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animación
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();</script>