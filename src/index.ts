import * as THREE from "three";
import "./styles.css";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import createSkyboxTexture from "./skybox";
import createPlayerTexture from "./player";

let camera: THREE.Camera, scene: THREE.Scene, renderer: THREE.WebGLRenderer;

init();

function init() {
    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // camera
    camera = new THREE.PerspectiveCamera(
        40,
        window.innerWidth / window.innerHeight,
        1,
        1000
    );
    camera.position.set(15, 20, 30);
    scene.add(camera);

    // controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // ambient light
    scene.add(new THREE.AmbientLight(0xffffff));

    const dirLight = new THREE.DirectionalLight(0xffffff);
    dirLight.position.set(0, 1, 0);
    scene.add(dirLight);

    // helper
    scene.add(new THREE.AxesHelper(20));

    // Cube
    const geometry = new THREE.BoxGeometry(10, 10, 10);
    const material = new THREE.MeshNormalMaterial();
    const cube = new THREE.Mesh(geometry, material);

    // Player
    createPlayerTexture(scene);

    const skyboxMaterial = createSkyboxTexture("skybox_lightblue");
    scene.background = skyboxMaterial;
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
