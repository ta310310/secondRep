class App {
	constructor(scene) {
		this.scene = scene;
	}

	init() {
/*
		var light = new THREE.DirectionalLight(0xFFFFFF);
		light.position.set(2, 2, 0);
		this.scene.add( light );

		var ambientLight = new THREE.AmbientLight(0x888888);
		this.scene.add( ambientLight );
*/
		this.meshEarth = new THREE.Mesh();
		var loaderEarth = new THREE.TextureLoader();
		var textureEarth = loaderEarth.load( './img/earth.png');
		var materialEarth = new THREE.MeshBasicMaterial({ map:textureEarth });
		var geometryEarth = new THREE.SphereGeometry(18,32,32);
		this.meshEarth = new THREE.Mesh( geometryEarth, materialEarth );
		this.meshEarth.position.set(0, 0, 50);
		this.scene.add( this.meshEarth );

		this.meshCloud = new THREE.Mesh();
		var loaderCloud = new THREE.TextureLoader();
		var textureCloud = loaderCloud.load( './img/cloud.png');
		var materialCloud = new THREE.MeshBasicMaterial({ map:textureCloud, transparent:true });
		var geometryCloud = new THREE.SphereGeometry(18.1,32,32);
		this.meshCloud = new THREE.Mesh( geometryCloud, materialCloud );
		this.meshCloud.position.set(0, 0, 50);
		this.scene.add( this.meshCloud );

		this.meshMoon = new THREE.Mesh();
		var loaderMoon = new THREE.TextureLoader();
		var textureMoon = loaderMoon.load( './img/moon.png');
		var materialMoon = new THREE.MeshBasicMaterial({ map:textureMoon});
		var geometryMoon = new THREE.SphereGeometry(5,32,32);
		this.meshMoon = new THREE.Mesh( geometryMoon, materialMoon );
		this.sceneCenter = new THREE.Scene();

		this.sceneCenter.position.set(0, 0, 50);
		this.sceneCenter.add( this.meshMoon );
		this.meshMoon.position.set(0, 0, 50);
		this.scene.add( this.sceneCenter );
	}

	update(dt) {
		this.meshCloud.rotation.y += dt * 0.1
		this.meshEarth.rotation.y += dt * 0.2
		this.sceneCenter.rotation.y += dt * 0.5;
	}

	render(dt) {

	}
}
