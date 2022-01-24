import * as THREE from "three";

function createPathStrings(filename: string): string[] {
    const basePath = "/assets/";
    const baseFilename = basePath + filename;
    const fileType = ".png";
    const sides = ["right", "left", "top", "bot", "front", "back"];
    const pathStings = sides.map((side) => {
        return baseFilename + "_" + side + fileType;
    });
    return pathStings;
}

function createMaterialArray(filename: string): THREE.Material[] {
    const skyboxImagepaths = createPathStrings(filename);

    const materialArray = skyboxImagepaths.map((image) => {
        let texture = new THREE.TextureLoader().load(image);
        return new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.BackSide,
        });
    });
    return materialArray;
}

function setupSkybox(name: string): THREE.Mesh {
    const skyboxGeo = new THREE.BoxGeometry(1000, 1000, 1000);
    const materialArray = createMaterialArray(name);
    return new THREE.Mesh(skyboxGeo, materialArray);
}

export default setupSkybox;
