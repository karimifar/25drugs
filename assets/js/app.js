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
	sectionsColor : ['#333', '#FF7F51', "#720026", "#C7EFCF", "#333745"],
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
        background: '#fff',
        wireframeBackground: '#111',
        hasBounds: false,
        enabled: true,
        wireframes: true,
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

// create two boxes and a ground
var boxA = Bodies.rectangle(400, 200, 80, 80);
var boxB = Bodies.rectangle(450, 50, 80, 80);
var ground = Bodies.rectangle(300, 410, 510, 60, { isStatic: true });
var pill = Bodies.polygon(200, 200, 4, 500, { isStatic: true });
//var pill2 = Bodies.fromVertices(100,100, ['L 0 0 L 40 0 L 40 40 L 0 40'])



// add all of the bodies to the world
World.add(engine.world, [boxA, boxB, ground, pill]);

// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);