class App {

	constructor(scene) {
		this.scene = scene;
	}

	init() {


/*
		var light = new THREE.DirectionalLight(0xFFFFFF);
		light.position.set(2, 2, 0);
		this.scene.add( light );
*//*
		var ambientLight = new THREE.AmbientLight(0x888888);
		this.scene.add( ambientLight );

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
*/



var SpaceSize = 1000


var fps = 29.97;//1000 / 30;

this.EarthRag = 180;
this.EarthRagD= 0.001;
this.EarthX=0;
this.EarthY=0;
this.EarthZ=0;
this.EarthD= 10;
this.EarthSize = 1

this.MoonRag = 0;
this.MoonRagD= 0.033;
this.MoonX=0;
this.MoonY=0;
this.MoonZ=0;
this.MoonD= 2;
this.MoonRot=0;
this.MoonRotD=0.0033;


//	this.camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 10000 );
//	this.camera.position.set( 0, 0, 0 );

    var light = new THREE.DirectionalLight(0xFFFFFF);
//    light.position.set(1.0, 1.0, 1.0);
    light.position.set(0, 0, 0);
    this.scene.add( light );

	var ambientLight = new THREE.AmbientLight(0x888888);
	this.scene.add( ambientLight );

//    this.scenePhoto = new THREE.Scene();
    var loaderPhoto = new THREE.TextureLoader();
    var texturePhoto = loaderPhoto.load( './img/starfield.jpg');
    var materialPhoto = new THREE.MeshLambertMaterial({ map:texturePhoto, side:THREE.DoubleSide });
    var geometryPhoto = new THREE.SphereGeometry(SpaceSize,64,64);
    this.meshPhoto = new THREE.Mesh( geometryPhoto, materialPhoto );
    this.meshPhoto.position.set( 0,0,0);
    this.scene.add( this.meshPhoto );

//‚¿‚«‚¤
    var loaderEarth = new THREE.TextureLoader();
    var textureEarth = loaderPhoto.load( './img/Earth.png');
    var materialEarth = new THREE.MeshLambertMaterial({ map:textureEarth, side:THREE.DoubleSide });
    var geometryEarth = new THREE.SphereGeometry(this.EarthSize,64,64);
    this.meshEarth = new THREE.Mesh( geometryEarth, materialEarth );
    this.meshEarth.position.set( 0,50,100);
    this.scene.add( this.meshEarth );

//‚Âª‚««

    var loaderMoon = new THREE.TextureLoader();
    var textureMoon = loaderPhoto.load( './img/Moon.png');
    var materialMoon = new THREE.MeshLambertMaterial({ map:textureMoon, side:THREE.DoubleSide });
//    var materialMoon = new THREE.MeshLambertMaterial({ color: 0xEEEEEE, side:THREE.DoubleSide });
    var geometryMoon = new THREE.SphereGeometry(this.EarthSize/4,64,64);
    this.meshMoon = new THREE.Mesh( geometryMoon, materialMoon );
    this.meshMoon.position.set( 0,0,100+8);
    this.scene.add( this.meshMoon );



	}

	update(dt) {
    	this.EarthRag += this.EarthRagD;
    	if(this.EarthRag>=360)this.EarthRag=0;
    	this.EarthX = Math.cos(this.EarthRag)*this.EarthD;
    	this.EarthZ = Math.sin(this.EarthRag)*this.EarthD;
	    this.meshEarth.position.set( this.EarthX , this.EarthY , this.EarthZ );
    	this.meshEarth.rotation.set(0,
    							this.meshEarth.rotation.y -= 0.01,
    							0);


    	this.MoonRag += this.MoonRagD;
    	if(this.MoonRag>=360)this.MoonRag=0;
    	this.MoonX = Math.cos(this.MoonRag)*this.MoonD;
    	this.MoonZ = Math.sin(this.MoonRag)*this.MoonD;
	    this.meshMoon.position.set( this.EarthX + this.MoonX,
	    							this.EarthY + this.MoonY,
	    							this.EarthZ + this.MoonZ);
    	this.MoonRot -= + this.MoonRotD;
    	if(this.MoonRag<0)this.MoonRot=360;
    	this.meshMoon.rotation.set(0,
    							this.MoonRot,
    							0);





	}

	render(dt) {

	}
}
