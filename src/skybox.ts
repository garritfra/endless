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

function createSkyboxTexture(filename: string): THREE.CubeTexture {
    const skyboxImagepaths = createPathStrings(filename);

    const loader = new THREE.CubeTextureLoader();
    const cubeTexture = loader.load(skyboxImagepaths);

    return cubeTexture;
}

export default createSkyboxTexture;
