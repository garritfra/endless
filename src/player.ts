import * as THREE from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

function createPlayerTexture(scene: THREE.Scene) {
    const loader = new FBXLoader();
    const texture = new THREE.MeshStandardMaterial();
    loader.load("/assets/player.fbx", function (object) {
        object.scale.set(0.001, 0.001, 0.001);
        object.receiveShadow = true;
        object.traverse(function (child) {
            if (child instanceof THREE.Mesh) {
                // apply texture
                child.material.map = texture;
                child.material.needsUpdate = true;
                child.geometry.computeVertexNormals();
            }
        });

        scene.add(object);
    });
}

export default createPlayerTexture;
