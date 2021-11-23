import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';
import GUI from 'lil-gui';

// Canvas
const canvas = document.getElementById('webgl');

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
// const positionsArray = new Float32Array([0, 0, 0, 0, 1, 0, 1, 0, 0]);
// const positionsAttribute = new THREE.BufferAttribute(positionsArray, 3);
// const geometry = new THREE.BufferGeometry();
// geometry.setAttribute('position', positionsAttribute);

const geometry = new THREE.BoxGeometry(1, 1, 1, 18, 18, 18);
const material = new THREE.MeshBasicMaterial({
  color: '#5fb6e2',
  wireframe: true,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.x = 0;
scene.add(mesh);

/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.y = 0;
// camera.lookAt(mesh.position);
scene.add(camera);

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);

/**
 * Controls
 */
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Debug
 */
const gui = new GUI();
const parameters = {
  color: material.color,
  spin: () => {
    gsap.to(mesh.rotation, { duration: 1, y: mesh.rotation.y + Math.PI * 2 });
  },
};

gui.add(mesh.position, 'x', -2, 2, 0.01).name('pos X');
gui.add(mesh.position, 'y', -2, 2, 0.01).name('pos Y');
gui.add(mesh, 'visible');
gui.add(material, 'wireframe');
gui.addColor(parameters, 'color').onChange(() => {
  material.color.set(parameters.color);
});
gui.add(parameters, 'spin');

/**
 * Event Listenner
 */
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// Animation
const tick = () => {
  // mesh.rotation.y += 0.01;
  // mesh.rotation.y -= 0.01;
  controls.update();

  renderer.render(scene, camera);

  window.requestAnimationFrame(tick);
};

tick();
