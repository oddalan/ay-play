import * as THREE from 'three';
import { addScene,} from './add-scene';
import { addToScene } from './add-to-scene';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

addScene(THREE)
addScene(THREE, scene)

function loop(){
    renderer.render(scene, camera)
    requestAnimationFrame(loop)
}
requestAnimationFrame(loop)


