var myFullpage = new fullpage('#fullpage', {
	//Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors:['firstPage', 'secondPage'],
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: [' ', 'secondSlide'],
	showActiveTooltip: true,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//Scrolling
	css3: true,
	scrollingSpeed: 700,
	autoScrolling: true,
	fitToSection: true,
	fitToSectionDelay: 1000,
	scrollBar: false,
	easing: 'easeInOutCubic',
	easingcss3: 'ease',
	loopBottom: false,
	loopTop: false,
	loopHorizontal: true,
	continuousVertical: false,
	continuousHorizontal: false,
	scrollHorizontally: false,
	interlockedSlides: false,
	dragAndMove: true,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: '#element1, .element2',
	scrollOverflow: true,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 15,
	normalScrollElementTouchThreshold: 5,
	bigSectionsDestination: null,

	//Accessibility
	keyboardScrolling: true,
	animateAnchor: true,
	recordHistory: true,

	//Design
	controlArrows: true,
	verticalCentered: true,
	sectionsColor : ['#111', '#FF7F51', "#720026", "#C7EFCF", "#333745"],
	paddingTop: '3em',
	paddingBottom: '10px',
	fixedElements: '#header, .footer',
	responsiveWidth: 0,
	responsiveHeight: 0,
	responsiveSlides: false,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

	//Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//events
	onLeave: function(origin, destination, direction){},
	afterLoad: function(origin, destination, direction){},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});

$("#nav-btn").on("click", function(){
	$("#sidebar").toggleClass("expanded")
})





////matter js stuff
var mwidth = document.getElementById("svg-container").offsetWidth
var mheight = document.getElementById("svg-container").offsetHeight
console.log(mwidth, mheight)
// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
	Bodies = Matter.Bodies;
	MouseConstraint = Matter.MouseConstraint,
	Mouse = Matter.Mouse;

// create an engine
var engine = Engine.create();
var myelement = document.getElementById('matter-js-1');
console.log(myelement)
// create a renderer
var render = Render.create({
    element: myelement,
    engine: engine,
    options: {
        width: 1116,
        height: 730,
        pixelRatio: 1,
        background: 'none',
        wireframeBackground: '#111',
        hasBounds: false,
        enabled: false,
        wireframes: false,
        showSleeping: true,
        showDebug: true,
        showBroadphase: false,
        showBounds: false,
        showVelocity: true,
        showCollisions: true,
        showSeparations: false,
        showAxes: false,
        showPositions: false,
        showAngleIndicator: false,
        showIds: false,
        showShadows: false,
        showVertexNumbers: false,
        showConvexHulls: false,
        showInternalEdges: false,
        showMousePosition: false
    }
}
);


var path= "330.6,0 1116,0 1116,730 0,730 0,0 330.6,0 332.1,86.2 310.1,86.3 242.3,102.5 181.1,140.9 128.3,191.7 97,271.9 97,415.2 117.9,488.8 175.9,565.1 241,613.9 336.8,639.4 827.7,639.4 871.2,632.4 927.4,603.3 982.7,546 1024.9,447.8 1031.4,390.5 1031.4,308.4 994.3,208.7 927.1,136.3 804,86.2 332.1,86.2 330.6,0";


// var vertices = Matter.Svg.pathToVertices(path, 15);
 
// console.log(splitted);
var vertices = [];
var splitted = path.split(" ")
createVert();
console.log(splitted, "<<")
function createVert(){
	for(var i =0; i< splitted.length; i++){
		var xyArray = splitted[i].split(",")
		var point = {
			x: parseInt(xyArray[0]),
			y: parseInt(xyArray[1])
		}
		vertices.push(point);
		console.log(vertices)
	}
}


var ver = [
	{x: 100, y:100},
	{x: 800, y:150.7},
	{x: 800, y:200},
	{x: 100, y:200},
	{x: 100, y:50},
]
// create two boxes and a ground
var boxA = Bodies.rectangle(400, 350, 80, 80);
var boxB = Bodies.rectangle(450, 350, 80, 80);
var ceiling = Bodies.rectangle(1116/2,40,1110,86, {
	isStatic:true,
	render:{
		fillStyle: 'rgba(200,200,0,0)'
	}
})
// var floor = Bodies.rectangle(1116/2,40,1110,86, {isStatic:true})
// var ground = Bodies.rectangle(300, 410, 510, 60, { isStatic: true });
// var pill = Bodies.polygon(200, 200, 4, 500, { isStatic: true });
console.log("HHHERRRRE")
var pillShell = Bodies.fromVertices(1110/2,730/2, vertices , {
	isStatic : true,
	render: {
		fillStyle: 'rgba(200,200,0,0)',
		strokeStyle: "rgba(0,0,0,0)",
   }
})



// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, pillShell, ceiling]);


var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.1,
                render: {
                    visible: false
                }
            }
        });

World.add(engine.world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);

