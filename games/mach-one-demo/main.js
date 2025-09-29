        function addError(){
          let thing = thingyThingThing
        }
        // addError()

        messages = []
        
        let loaded = false
       
        import * as THREE from "three";
        import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        const loader = new GLTFLoader();

        let mode = 1

        //objects objects objects objects objects objects objects objects 

        let cars = [
          {
            geometry: new THREE.BoxGeometry( 2, 1, 4 ), 
            material: new THREE.MeshBasicMaterial( { color: 0x555555 } ), 
            position: {x:0, y:-2, z:-7}
          },
          {
            geometry: new THREE.BoxGeometry( 2, 1, 4 ), 
            material: new THREE.MeshBasicMaterial( { color: 0x550000 } ), 
            position: {x:5, y:-2, z:-7}
          },
         ]

        function addAnObject(a){
          const geometry = a.geometry
          const material = a.material
          const object = new THREE.Mesh( a.geometry, a.material );
          object.position.set(a.position.x, a.position.y, a.position.z)
          scene.add( object )
          console.log(object)
        }

        function run(){
          for( let car of cars){
            console.log("car")
          }
        }

        console.log(scene)

        

        const start = Date.now();

        for (let object of cars){
          addAnObject(object)
        }

        function loop(){
          if (loaded = true){
            renderer.render(scene, camera)
          }

          const ms = Date.now() - start
          if (ms < 10000){
            console.log("time", ms,)
          }
         
          requestAnimationFrame(loop)
        }

        requestAnimationFrame(loop)

          window.addEventListener("load", (event) => {
          loaded = true
          console.log("finished loading!");
          
        });
