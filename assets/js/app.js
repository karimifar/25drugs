var idArr = ["home"]
var winHeight = window.innerHeight	
var winWidth = window.innerWidth
content.forEach(function(drug){
	var secId = "section"+drug.num;
	var fpId = "drug"+drug.num
	idArr.push(fpId)
	var matterId = "sec"+drug.num+"-matter"

	var drugSec = $("<div class='section' id='"+secId+"'></div>")
	var secWrap = $("<div class='sec-wrap'></div>")
	var graphicCol = $("<div class='d-graphicCol'></div>")
	var graphicContain = $("<div class='graphic-container d-graphic-container'></div>")
	var staticImg = $("<div class='pngAndCanvas png-container'><img src='"+drug.illustration+"'></div>")
	if(drug.matter){
		var matterDiv = $("<div class='pngAndCanvas d-canvas' id='"+matterId+"'></div>");
		graphicContain.append(matterDiv)
	}
	var infoCol= $("<div class='d-info-col'>")
	var drugNum = $("<div class='num'><h1>"+drug.num+"</h1><div>")
	var title = $("<div class='title'><h1>"+drug.title+"</h1></div>");
	var subhead = $("<div class='subhead'><p>"+drug.subhead+"</p></div>")
	var links = $("<div class='links'><div class='link'><a href='"+drug.link+"' target='_blank'><i class='fas fa-link'></i> Read More</a></div><div class='inst-logo'><img src='"+drug.instLogo+"'></div></div>")
	
	drugSec.insertBefore( "#last-sec" );
	// $("#fullpage").append(drugSec);
	drugSec.append(secWrap)
	secWrap.append(graphicCol)
	graphicCol.append(graphicContain)
	graphicContain.append(staticImg)
	secWrap.append(infoCol)
	infoCol.append(drugNum)
	infoCol.append(title)
	infoCol.append(subhead)
	infoCol.append(links)


	if(drug.shortTitle.length>25){
		drug.shortTitle = drug.shortTitle.substr(0,25)+"..."
	}
	var navItem = $("<a class='nav-item' id='d-num-"+drug.num+"' href='#"+fpId+"'><li><span class='drug-number' >"+drug.num+"</span><span class='drug-title'>"+drug.shortTitle+"</span></li></a>");
	$(".navlist ul").append(navItem)
	navItem.insertBefore("#about-btn")
	})
idArr.push("about")
// ***** fullpage JS *****


var scrollState = true;
if(winWidth<640){
	scrollState = false;
}

var myFullpage = new fullpage('#fullpage', {
	//Navigation
	menu: '#menu',
	lockAnchors: false,
	anchors: idArr,
	navigation: false,
	// navigationPosition: 'top',
	navigationTooltips: [''],
	showActiveTooltip: true,
	slidesNavigation: false,
	slidesNavPosition: 'bottom',

	//Scrolling
	css3: true,
	scrollingSpeed: 1000,
	autoScrolling: scrollState,
	fitToSection: false,
	fitToSectionDelay: 100,
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
	fadingEffect: true,
	normalScrollElements: '.subhead, .navlist, .nav-item',
	scrollOverflow: false,
	scrollOverflowReset: false,
	scrollOverflowOptions: null,
	touchSensitivity: 5,
	normalScrollElementTouchThreshold: 10,
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
	responsiveSlides: true,
	parallax: false,
	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

	//Custom selectors
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,

	//events
	onLeave: function(origin, destination, direction){
		var navList = document.getElementById("navlist")
		// console.log(winHeight/35)
		navList.scrollTop = (destination.index-1) * 35
		console.log(origin, destination,direction)
		if (origin.index === 0 ||destination.index === 0){
			$(".sidebar").toggleClass("invisible")
			$("#nav-btn").toggleClass("invisible")
		}
		$(".nav-item").removeClass("active")
		var targetNav = "#d-num-"+destination.index;
		$(targetNav).addClass("active")
		if (destination.index === 26){
			$("#about-btn").addClass("active")
		}


	},
	afterLoad: function(origin, destination, direction){
		// console.log(destination)
		
	},
	afterRender: function(){},
	afterResize: function(width, height){},
	afterResponsive: function(isResponsive){},
	afterSlideLoad: function(section, origin, destination, direction){},
	onSlideLeave: function(section, origin, destination, direction){}
});

// ***** Sidebar *****
$("#nav-btn").on("click", function(){
	$("#sidebar").toggleClass("mob-expanded expanded")
	$("#nav-btn").toggleClass("opened")
	$("#nav-btn i").toggleClass("fa-times")
	$("#nav-btn i").toggleClass("fa-bars")

})

$("#sidebar").on("mouseover", function(){
	$("#sidebar").addClass("expanded")
})
$("#fullpage").on("mouseover", function(){
	if($("#sidebar").hasClass("expanded")){
		$("#sidebar").removeClass("expanded")
	}
	
})

$(".nav-item").on("click", function(){
	setTimeout(function(){
		$("#sidebar").toggleClass("mob-expanded expanded")
		$("#nav-btn").toggleClass("opened")
		$("#nav-btn i").toggleClass("fa-times")
		$("#nav-btn i").toggleClass("fa-bars")
	},200)
	
})



///THIS IS GOING TO BE CREATING ALL SLIDES






//seting the height of the graphic so that it's centered vertically
function alignHomeslide(){
	var mwidth = document.getElementById("svg-container").offsetWidth
	var mheight = document.getElementById("svg-container").offsetHeight
	$("#graphic-container").css("height", mheight)
}
alignHomeslide();
window.addEventListener('resize', alignHomeslide);


// see more function for subheads
var showChar = 200;
var ellipsestext = "...";
var moretext = ">>";
var lesstext = "<<";
$('.subhead p').each(function () {
    var content = $(this).html();
    if (content.length > showChar) {
        var show_content = content.substr(0, showChar);
        var hide_content = content.substr(showChar, content.length - showChar);
        var html = show_content + '<span class="moreelipses">' + ellipsestext + '</span><span class="remaining-content"><span>' + hide_content + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
        $(this).html(html);
    }
});

$(".morelink").click(function () {
    if ($(this).hasClass("less")) {
        $(this).removeClass("less");
        $(this).html(moretext);
    } else {
        $(this).addClass("less");
        $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
});







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







var firstSlide = document.getElementById("section1")
window.addEventListener("scroll", function(){
	console.log(window.pageYOffset)
})
