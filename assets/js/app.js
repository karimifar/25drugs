// ***** fullpage JS *****

var myFullpage = new fullpage('#fullpage', {
	//Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors:['firstPage', 'sec2', 'sec3', 'sec4'],
	navigation: true,
	navigationPosition: 'right',
	navigationTooltips: [' ', 'secondSlide'],
	showActiveTooltip: true,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//Scrolling
	css3: true,
	scrollingSpeed: 1200,
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
	dragAndMove: false,
	offsetSections: false,
	resetSliders: false,
	fadingEffect: false,
	normalScrollElements: 'canvas',
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
	// sectionsColor : ['#000', '#FF7F51', "#720026", "#C7EFCF", "#333745"],
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


// ***** Sidebar *****
$("#nav-btn").on("click", function(){
	$("#sidebar").toggleClass("expanded")
})

$("#nav-btn").on("mouseover", function(){
	$("#sidebar").addClass("expanded")
})
$("#fullpage").on("mouseover", function(){
	if($("#sidebar").hasClass("expanded")){
		$("#sidebar").removeClass("expanded")
	}
	
})


//seting the height of the graphic so that it's centered vertically
var mwidth = document.getElementById("svg-container").offsetWidth
var mheight = document.getElementById("svg-container").offsetHeight
$("#graphic-container").css("height", mheight)


// $(".more").on("click",function(){
// 	console.log("click")
// 	// $(this).text
// 	$(this).siblings(".complete").toggleClass("expand"); 

// });







// ***** Matter JS physics engine *****

// module aliases
var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
	Bodies = Matter.Bodies,
	MouseConstraint = Matter.MouseConstraint,
	Mouse = Matter.Mouse,
	Body = Matter.Body,
	Svg = Matter.Svg,
    Vertices = Matter.Vertices,
	Constraint = Matter.Constraint,
	Events = Matter.Events;

// create an engine
var engine1 = Engine.create();
engine1.world.gravity.y = 0.2;
var homeMatter = document.getElementById('home-matter');
console.log(homeMatter)
// create a renderer
var render1 = Render.create({
    element: homeMatter,
    engine: engine1,
    options: {
        width: 1116,
        height: 730,
        pixelRatio: 1,
        background: 'none',
		wireframeBackground: '#111',
		wireframes: false,

        // hasBounds: false,
        // enabled: false,
        
        // showSleeping: true,
        // showDebug: true,
        // showBroadphase: false,
        // showBounds: false,
        // showVelocity: false,
        // showCollisions: false,
        // showSeparations: false,
        // showAxes: false,
        // showPositions: false,
        // showAngleIndicator: false,
        // showIds: false,
        // showShadows: false,
        // showVertexNumbers: false,
        // showConvexHulls: false,
        // showInternalEdges: false,
        // showMousePosition: false
    }
}
);


var pillpath= "330.6,0 1116,0 1116,730 0,730 0,0 330.6,0 332.1,86.2 310.1,86.3 242.3,102.5 181.1,140.9 128.3,191.7 97,271.9 97,415.2 117.9,488.8 175.9,565.1 241,613.9 336.8,639.4 827.7,639.4 871.2,632.4 927.4,603.3 982.7,546 1024.9,447.8 1031.4,390.5 1031.4,308.4 994.3,208.7 927.1,136.3 804,86.2 332.1,86.2 330.6,0";


var pillVertices = [];
parsePath(pillpath, pillVertices);

// a custom function to parse illustrator paths into arrays of verticies
//Get's a path sting and an empty array and posh point coordinates into the array
function parsePath(path, vertices){
	var splitted = path.split(" ")
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

var colors=["rgba(247,147,30,1)", "rgba(102,166,196,1)", "rgba(252,115,117,1)"]
var colors2=["rgba(68,98,120,1)", "rgba(255,217,125,1)", "rgba(244,96,54,1)", "rgba(244,96,54,1)"]
var circlesArr = []
for(var i=0; i<25; i++){
	var pickedColor = getRandom(0,2);
	circlesArr.push(Bodies.circle(getRandom(155,890), getRandom(150,345),getRandom(50,70), {
		render:{
			fillStyle: colors[pickedColor]
		}
	}));
	World.add(engine1.world, circlesArr[i]);
	// console.log("YAY", circlesArr)
}


// create two boxes and a ground

var ceiling = Bodies.rectangle(1116/2,40,1110,86, {
	isStatic:true,
	render:{
		fillStyle: 'rgba(200,200,0,0)'
	}
})

var pillShell = Bodies.fromVertices(1110/2,730/2, pillVertices , {
	isStatic : true,
	render: {
		fillStyle: 'rgba(200,200,0,0)',
		strokeStyle: "rgba(0,0,0,0)",
   }
})

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

// add all of the bodies to the world
World.add(engine1.world, [ pillShell, ceiling]);
// World.add(engine.world, circlesArr);
console.log(circlesArr)

var mouse = Mouse.create(render1.canvas),
	mouseConstraint = MouseConstraint.create(engine1, {
		mouse: mouse,
		constraint: {
			stiffness: 0.01,
			render: {
				visible: false
			}
		}
	});

World.add(engine1.world, mouseConstraint);


// keep the mouse in sync with rendering
render1.mouse = mouse;

// run the engine1
Engine.run(engine1);

// run the renderer
Render.run(render1);

var homeCanvas = document.getElementById("home-matter")
var hovered = null;
var hoveredIndex;
homeCanvas.addEventListener("mousemove", function(e){
	var coordinates = getMousePos(homeCanvas, e);
	// console.log(coordinates)
	var hoveredArr = Matter.Query.point(circlesArr,coordinates)
	if (!hovered){
		hovered = Matter.Query.point(circlesArr,coordinates)[0]
		hoveredIndex = hovered.id -1
		hovered.render.strokeStyle = "rgba(255,255, 255,1)"
		hovered.render.lineWidth = 3
	}else{
		if (hoveredArr.length ===1){
			// homeCanvas.addEventListener("click", function(){
			// 	window.location.href = '#sec3'
			// })
			homeCanvas.style.cursor = 'grab';
			if(hoveredArr[0].id === hovered.id){
				hovered = Matter.Query.point(circlesArr,coordinates)[0]
				hoveredIndex = hovered.id -1
				hovered.render.strokeStyle = "rgba(255,255, 255,1)"
				hovered.render.lineWidth = 3
			}else{
				hoveredIndex = hovered.id -1
				var unhovered = circlesArr[hoveredIndex];
				unhovered.render.lineWidth = 0
				hovered = Matter.Query.point(circlesArr,coordinates)[0]
			}
		}else{
			homeCanvas.style.cursor = 'default';
			console.log(hoveredIndex)
			var unhovered = circlesArr[hoveredIndex];
			unhovered.render.lineWidth = 0
		}


	}
	
})
function getMousePos(canvas, evt) {
	var rect = canvas.getBoundingClientRect();
	var skewedX = evt.clientX - rect.left,
		skewedY = evt.clientY - rect.top,
		canvasWidth = rect.width,
		canvasHeight= rect.height;

	var realX= (1116/canvasWidth)*skewedX,
		realY= (1116/canvasWidth)*skewedY;

    return {
      x: realX,
      y: realY
    };
}

function applyForce(){
	for(var i=0; i<circlesArr.length; i++){
		Body.applyForce(circlesArr[i], {x: circlesArr[i].position.x, y: circlesArr[i].position.y}, {x: getRandom(-0.005,0.005), y: getRandom(-0.001,-0.0001)})
	}
}

window.setInterval(applyForce, 2000);




///Matter JS for section 2
var engine2 = Engine.create();
var sec2Matter = document.getElementById("sec2-matter")
var render2 = Render.create({
    element: sec2Matter,
    engine: engine2,
    options: {
        width: 640,
        height: 800,
        pixelRatio: 1,
        background: 'rgba(200,200,0,0)',
		wireframeBackground: '#eee',
		wireframes: false,
    }
}
);




var gland = Bodies.circle(315, 285,30, {
	render:{
		fillStyle: "rgba(252,115,117,1)",
	}
})
// var gladPoint = Bodies.circle(300, 290,1, {
// 	isStatic: true,
// })
var glandConnection = Constraint.create({
	pointA: {x: 315, y: 285},
	bodyB: gland,
	// pointB: {x:300, y: 280},
	stiffness: 0.05,
	length: 1,
	render:{
		visible: false,
	}
})
World.add(engine2.world, [gland, glandConnection]);

var mouse2 = Mouse.create(render2.canvas),
        mouseConstraint = MouseConstraint.create(engine2, {
            mouse: mouse2,
            constraint: {
				stiffness: 0.05,
                render: {
					visible: false,
                }
			}
        });

World.add(engine2.world, mouseConstraint);


// keep the mouse in sync with rendering
render2.mouse = mouse2;
// run the engine1
Engine.run(engine2);

// run the renderer
Render.run(render2);

function applyForce2(){
	Body.applyForce(gland, {x: gland.position.x, y: gland.position.y}, {x: randomPosNeg()*Math.random()*0.1, y: randomPosNeg()*Math.random()*0.1})
}

window.setInterval(applyForce2, 4500);


function randomPosNeg(){
	if(Math.random()>0.5){
		return -1;
	}else{
		return 1;
	}
}



///Matter JS for section 3
var engine3 = Engine.create();
// engine3.world.gravity.y = 0.4;

var sec3Matter = document.getElementById("sec3-matter")
var render3 = Render.create({
    element: sec3Matter,
    engine: engine3,
    options: {
        width: 640,
        height: 800,
        pixelRatio: 1,
        background: 'rgba(200,200,0,0)',
		wireframeBackground: '#eee',
		wireframes: false,
    }
}
);




var wall2= Bodies.rectangle(650, 400,20, 1800, {isStatic:true, render:{visible: false}, restitution:0.9})
var ground= Bodies.rectangle(320, 850,1200, 100, {isStatic:true, render:{visible: false}, restitution:0.9})

var cell1options = {
	friction:0.5,
	frictionAir:0.01,
	restitution:0.5,
	render:{
		fillStyle: colors[getRandom(0,2)]
	}
}
var cell = Bodies.circle(145, 565,45, cell1options)




var cellConnection = Constraint.create({
	pointA: {x: 145, y: 565},
	bodyB: cell,
	// pointB: {x:300, y: 280},
	stiffness: 0.007,
	length: 1,
	render:{
		visible: true,
		type: "line",
		lineWidth: 1
	}
})

var cell2options = {
	friction:0.05,
	frictionAir:0.05,
	restitution:0.9,
	render:{
		fillStyle: colors2[getRandom(0,2)]
	}
}
var cell2 = Bodies.circle(383, 330,15,cell2options)

var cell2Connection = Constraint.create({
	pointA: {x: 383, y: 330},
	bodyB: cell2,
	// pointB: {x:300, y: 280},
	stiffness: 0.05,
	length: 1,
	render:{
		visible: true,
		type: "line",
		lineWidth: 1
	}
})
World.add(engine3.world, [cell, cellConnection, ground, wall2, cell2, cell2Connection]);

var mouse3 = Mouse.create(render3.canvas),
        mouseConstraint = MouseConstraint.create(engine3, {
            mouse: mouse3,
            constraint: {
				stiffness: 0.5,
                render: {
					visible: false,
                }
			}
        });

// Events.on(engine3, 'afterUpdate', function() {
// 	if (mouseConstraint.mouse.button === -1 && (cell.position.x > 165 || cell.position.y < 545)) {
// 		cell = Bodies.circle(145, 565, 45, {density: 0.004, render:{
// 			fillStyle: colors[getRandom(0,2)],
// 		}});
// 		World.add(engine3.world, cell);
// 		cellConnection.bodyB = cell;
// 	}
// });
// World.add(engine3.world, mouseConstraint);


addCanon(145,565,45,cell,cellConnection, cell1options, colors);
addCanon(383,330,15,cell2,cell2Connection, cell2options, colors2);



function addCanon(x,y,radius, object, objectConnection, options, colArr){
	Events.on(engine3, 'afterUpdate', function() {
		if (mouseConstraint.mouse.button === -1 && (object.position.x > x+30 || object.position.y < y-30)) {
			options.render.fillStyle = colArr[getRandom(0,colArr.length-1)]
			object = Bodies.circle(x, y, radius, options);
			World.add(engine3.world, object);
			objectConnection.bodyB = object;
		}
	});
	World.add(engine3.world, mouseConstraint);
	
}

// keep the mouse in sync with rendering
render3.mouse = mouse3;
Engine.run(engine3);

// run the renderer
Render.run(render3);