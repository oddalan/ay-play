function sceneObjects(THREE, scene){
    const objects = [
    {geometry:new THREE.BoxGeometry( 1, 1, 1 ), material: new THREE.MeshBasicMaterial( { color: 0x00ff00 } ), x: 0, y: 0, z: -5},
    ]
    for(let object of objects){
        const objectMesh = new THREE.Mesh( object.geometry, object.material );
        scene.add(objectMesh)
    }
}

