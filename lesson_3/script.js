console.log('Hello Qi');
const canvas = document.querySelector();

// Scene
const scene = new THREE.Scene();

// Red Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: '#ff0000' });
const cube = new THREE.Mesh(geometry, material);

scene.add(cube);

// Sizes
const sizes = {
  width: 800,
  height: 600,
  ratio: width / height,
};

// Camera fov
const camera = new THREE.PerspectiveCamera(75, ratio);
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({});
