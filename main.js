import './style.css'

import * as THREE from 'three';
import { PointLight, RectAreaLight } from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';

const scene = new THREE.Scene();


const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.set(0, 0, 30);

renderer.render(scene, camera);

const marsTexture = new THREE.TextureLoader().load('mars-4k.jpg');
const marsNormal = new THREE.TextureLoader().load('mars-normal-20.png');

const geometry = new THREE.SphereGeometry(10, 25, 25);
const material = new THREE.MeshStandardMaterial({color:0xFF6347 , map: marsTexture, /*normalMap: marsNormal*/});   
const mars = new THREE.Mesh(geometry, material);

scene.add(mars);



const light = new THREE.DirectionalLight(0xffffff, 1);
light.target.position.set(0, 0, 0);
light.position.set(50, 50, 50);


//const lightHelper = new THREE.PointLightHelper(light);
//const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(lightHelper, gridHelper);


scene.add(light);
scene.add(light.target);


//const controls = new OrbitControls(camera, renderer.domElement);





/*function addStar() {

  const asteroidTexture = new THREE.TextureLoader().load('asteroid.jpg');
  const asteroidNormal = new THREE.TextureLoader().load('asteroid-normal.png');
  const geometry = new THREE.SphereGeometry(1.5, 25, 25);
  const material = new THREE.MeshStandardMaterial({color: 0xffffff, map: asteroidTexture});
  const star = new THREE.Mesh(geometry, material);

  
  var [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread( 100 ) );
  star.position.set(x, y, z);
  scene.add(star);
  
}*/

//Array(50).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('distStars.jpg');
//scene.background = spaceTexture;

//renderer.render(scene, camera);

var pictureMesh = new THREE.Mesh(new THREE.PlaneGeometry(5, 3.8), new THREE.MeshLambertMaterial({
  map: new THREE.TextureLoader().load('asteroid.jpg')
}));
pictureMesh.position.set(0, 4, 10);
//scene.add(pictureMesh);

/*document.getElementById("next1").addEventListener("click", function() {
  camera.rotation.x -= 0.01;
});
*/

const updateCamera = (event) => {
  camera.rotation.x = -window.scrollY * 0.001;
  
}

window.addEventListener('scroll', updateCamera);

const audioListener = new THREE.AudioListener();

// add the listener to the camera
camera.add( audioListener );

// instantiate audio object
const oceanAmbientSound = new THREE.Audio( audioListener );

// add the audio object to the scene
scene.add( oceanAmbientSound );

// instantiate a loader
const audioloader = new THREE.AudioLoader();

// load a resource
audioloader.load(
	// resource URL
	'space-sound.mp3',

	// onLoad callback
	function ( audioBuffer ) {
		// set the audio object buffer to the loaded object
		oceanAmbientSound.setBuffer( audioBuffer );

		// play the audio
		oceanAmbientSound.play();
	},

	// onProgress callback
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},

	// onError callback
	function ( err ) {
		console.log( 'An error happened' );
	}
);

const gltfloader = new GLTFLoader();

// Optional: Provide a DRACOLoader instance to decode compressed mesh data
//const dracoLoader = new DRACOLoader();
//dracoLoader.setDecoderPath( '/examples/js/libs/draco/' );
//gltfloader.setDRACOLoader( dracoLoader );

// Load a glTF resource
gltfloader.load(
	// resource URL
	'iss3d.gltf',
	// called when the resource is loaded
  
	function ( gltf ) {

    const iss = gltf.scene;
		scene.add( iss );
    iss.position.set(0, -5, 30);
    iss.rotation.set(2, -0.2, 1);

		gltf.animations; // Array<THREE.AnimationClip>
		gltf.scene; // THREE.Group
		gltf.scenes; // Array<THREE.Group>
		gltf.cameras; // Array<THREE.Camera>
		gltf.asset; // Object

	},
	// called while loading is progressing
	function ( xhr ) {

		console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

	},
	// called when loading has errors
	function ( error ) {

		console.log( 'An error happened' );

	}
);



function animate() {
  requestAnimationFrame(animate);

  mars.rotation.y += -0.0005;
  //iss.rotation.y += 0.0007;
  
  //mars.rotation.z += 0.0002;
  


  //controls.update();

  renderer.render(scene, camera);
}

animate();