import './style.css';
import * as THREE from 'three';

console.log('Hello Qi, learn Lesson 4');

// Scene
const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: '#808080' });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

// Sizes
const sizes = {
  width: 800,
  height: 600,
  ratio: 4 / 3,
};

// Camera fov
const camera = new THREE.PerspectiveCamera(75, sizes.ratio);
camera.position.z = 3;
camera.position.x = 1;
camera.position.y = -1;

scene.add(camera);

const canvas = document.getElementById('webgl');

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
