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
var renderer = new THREE.WebGLRenderer({ antialias: true, canvas: frame});
renderer.setSize( window.innerWidth-100, window.innerHeight-100 );
renderer.shadowMap.enabled = true;
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 10;




var model;
var modelUrl = 'https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf';

var loader = new THREE.GLTFLoader();
loader.load( modelUrl, function ( gltf ) {

  console.log(gltf)
  mixer = new THREE.AnimationMixer( gltf.scene );
  clips = gltf.animations;
  model = gltf.scene;
  model.scale.set(2.5,2.5,2.5);
  model.position.set(0,0,0);
  scene.add( model );

}, undefined, function ( e ) {
  console.error( e );
});




const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
scene.add(ambientLight);

const light = new THREE.DirectionalLight(0xffffff, 0.5);
light.position.set(4, -5, 5);
light.castShadow = true;
scene.add(light);

const lightTwo = new THREE.DirectionalLight(0xaab6ff, 0.5);
lightTwo.position.set(-5, 3, 2);
lightTwo.castShadow = true;
scene.add(lightTwo);




window.addEventListener('mousemove', function(e) {
    
    let percX = window.innerWidth*0.5 - e.clientX;
  
    camera.position.x = percX / 100;
  
    camera.lookAt(new THREE.Vector3(0,0,0));
});

window.addEventListener('touchmove', function(e) {
    let percX = window.innerWidth*0.5 - e.touches[0].pageX;

      camera.position.x = percX / 100;

      camera.lookAt(new THREE.Vector3(0,0,0));
});

window.addEventListener('scroll', function(e) {
  let elem = document.getElementById("frame");
  let div1 = elem.getBoundingClientRect().top - (window.innerHeight - elem.offsetHeight)/2;
    
    let percY = div1;
    camera.position.y = percY / 100;
  
    camera.lookAt(new THREE.Vector3(0,0,0));
});




function animate() {
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}
animate();
</script>