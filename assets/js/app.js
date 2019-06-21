
// var console = { log: function() {} };


var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}
var idArr = ["home"]
var winHeight = window.innerHeight	
var winWidth = window.innerWidth

var colors11 = ["rgba(241,96,54,1)", "rgba(247,148,32,1)", "rgba(102,166,196,1)", "rgba(47,216,190,1)","rgba(68,99,120,1)", "rgba(242,114,117,1)",      "rgba(202,41,35,1)","rgba(234,41,107,1)", "rgba(35,106,54,1)","rgba(106,168,50,1)", "rgba(255,209,75,1)", "rgba(107,75,196,1)" ]



var placeHolder = "assets/img/inst-logos/utsw.png"
content.forEach(function(drug){
	var secId = "section"+drug.num;
	var fpId = "drug"+drug.num
	idArr.push(fpId)
	var matterId = "sec"+drug.num+"-matter"

	var drugSec = $("<div class='section' id='"+secId+"'></div>")
	var secWrap = $("<div class='sec-wrap'></div>")
	var graphicCol = $("<div class='d-graphicCol'></div>")
	var graphicContain = $("<div class='graphic-container d-graphic-container'></div>")
	var staticImg = $("<div class='pngAndCanvas gif-container'><img alt='"+ drug.altText + "'"+ "data-gif ='"+ drug.illustration + "' src='"+drug.static+"'></div>")
	// if(drug.matter){
	// 	var matterDiv = $("<div class='pngAndCanvas d-canvas' id='"+matterId+"'></div>");
	// 	graphicContain.append(matterDiv)
	// }
	var infoCol= $("<div class='d-info-col'>")
	var drugNum = $("<div class='num'><h1 style='border-color:"+colors11[drug.instCode]+"'>"+drug.num+"</h1><div>")
	var title = $("<div class='title'><h1>"+drug.title+"</h1></div>");
	var subhead = $("<div class='subhead'><p>"+drug.subhead+"</p></div>")
	var links = $("<div class='links'><div class='link'><a  aria-label='read more about "+drug.shortTitle+ "' href='"+drug.link+"' target='_blank'><k class='fas fa-link'></k> Read More</a></div><div class='inst-logo'><img alt='"+drug.institution+" logo'" +"src='"+drug.instLogo+"'></div></div>")
	
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


	if(drug.shortTitle.length>35){
		drug.shortTitle = drug.shortTitle.substr(0,25)+"..."
	}
	var navItem = $("<div class='nav-item' id='d-num-"+drug.num+"'><li><span class='drug-number' >"+drug.num+"</span><span class='drug-title'>"+drug.shortTitle+"</span></li></div>");
	$(".navlist ul").append(navItem)
	navItem.insertBefore("#about-btn")
	
})

$("#d-num-Bonus .drug-number").html("<k class='fas fa-asterisk'></k>")
idArr.push("about")
// ***** fullpage JS *****


$(".nav-item").on("click", function(){
	var navId= $(this).attr("id");
	var destNum;
	if(navId==="home-btn"){
		destNum=1;
	}else if(navId==="about-btn"){
		destNum=28;
	}else if(navId==="d-num-Bonus"){
		destNum=27
	}else{
		destNum = parseInt(navId.split("-")[2])+1
	}
	fullpage_api.moveTo(destNum);
})

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
	autoScrolling: !isMobile,
	fitToSection: true,
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
	normalScrollElements: '.navlist, .nav-item, .sidebar',
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
		$("#tooltip").addClass("notShown")
		var navList = document.getElementById("navlist")
		navList.scrollTop = (destination.index-1) * 35
		// console.log(origin, destination,direction)
		if (origin.index === 0 ||destination.index === 0 && !isMobile){
			$(".sidebar").toggleClass("invisible")
			$("#nav-btn").toggleClass("invisible")
		}
		$(".nav-item").removeClass("active")
		var targetNav = "#d-num-"+destination.index;
		$(targetNav).addClass("active")
		if (destination.index === 26){
			$("#d-num-Bonus").addClass("active")
		}
		if (destination.index === 27){
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
	$("#nav-btn k").toggleClass("fa-times")
	$("#nav-btn k").toggleClass("fa-bars")

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
		$("#nav-btn k").toggleClass("fa-times")
		$("#nav-btn k").toggleClass("fa-bars")
	},200)
	
})



///THIS IS GOING TO BE CREATING ALL SLIDES





//seting the height of the graphic so that it's centered vertically

$("#graphic-container").toggleClass("invisible")
$("#scrollAnim").toggleClass("invisible")
$(".text-anim").toggleClass("invisible")

function alignHomeslide(){
	var mheight = document.getElementById("home-matter").offsetHeight
	$("#graphic-container").css("height", mheight)
	$("svg").css("height", mheight)
}

window.addEventListener('resize', function(){
	var mheight = document.getElementById("home-matter").offsetHeight
	$("svg").css("height", mheight)
});

// TweenMax.staggerFrom(".open-anim" , 2, {scale:0.9, opacity:0, ease:Elastic.easeOut, transformOrigin: "50% 50%", delay:1}, 0.15)
TweenMax.staggerFrom(".text-anim" , 2, {y:20, opacity:0, ease:Power4.easeOut, transformOrigin: "50% 50%", delay:0.3}, 0.25)

// see more function for subheads
var showChar = 200;
var ellipsestext = "...";
var moretext = '<k class="fas fa-arrow-circle-right"></k>'
var lesstext = '<k class="fas fa-arrow-circle-left"></k>';
$('.subhead p').each(function () {
    var content = $(this).html();
    if (content.length > showChar) {
        var show_content = content.substr(0, showChar);
        var hide_content = content.substr(showChar, content.length - showChar);
        var html = show_content + '<span class="moreelipses">' + ellipsestext + '</span><span class="remaining-content"><span>' + hide_content + '</span><a href="" class="morelink">'+ moretext+ '</a></span>';
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
engine1.world.gravity.y = 0.05;
var homeMatter = document.getElementById('home-matter');
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
	}
}


var colors=["rgba(247,147,30,1)", "rgba(102,166,196,1)", "rgba(252,115,117,1)"]
var colors2=["rgba(68,98,120,1)", "rgba(255,217,125,1)", "rgba(244,96,54,1)", "rgba(244,96,54,1)"]
var circlesArr = []
for(var i=0; i<content.length; i++){
	var pickedColor = colors11[content[i].instCode];
	circlesArr.push(Bodies.circle(getRandom(155,890), getRandom(150,345),getRandom(60,60), {
		render:{
			fillStyle: pickedColor
		},
		content: content[i]
	}));
	World.add(engine1.world, circlesArr[i]);
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
var drugLink;
homeCanvas.addEventListener("click", function(){
	// console.log(drugLink)
	if(drugLink){
		window.location.href = drugLink
	}
})
homeCanvas.addEventListener("mousemove", function(e){
	var tooltipX= e.clientX + -15
	var tooltipY= e.clientY + 25
	var coordinates = getMousePos(homeCanvas, e);
	// console.log(coordinates)
	var hoveredArr = Matter.Query.point(circlesArr,coordinates)
	if (!hovered){
		drugLink = null;
		hovered = Matter.Query.point(circlesArr,coordinates)[0]
		if(hovered){
			hoveredIndex = hovered.id -1
			hovered.render.strokeStyle = "rgba(255,255, 255,1)"
			hovered.render.lineWidth = 3
		}
	}else{
		if (hoveredArr.length ===1){
			// homeCanvas.addEventListener("click", function(){
			// 	window.location.href = '#sec3'
			// })
			homeCanvas.style.cursor = 'pointer';

			//when moving mouse on the same circle
			if(hoveredArr[0].id === hovered.id){
				hovered = Matter.Query.point(circlesArr,coordinates)[0]
				drugLink = "#drug"+hovered.content.num
				hoveredIndex = hovered.id -1
				hovered.render.strokeStyle = "rgba(255,255, 255,1)"
				hovered.render.lineWidth = 3
				// console.log(hovered.content)
				$(".t-drug-inst").text(hovered.content.institution)
				$(".t-drug-title").text(hovered.content.shortTitle)
				$(".t-drug-no").text(hovered.content.num)
				$("#tooltip").removeClass("notShown")
				$("#tooltip").css({"left": tooltipX+"px", "top": tooltipY+"px",})
				
			//when moving mouse from one circle to another
			}else{
				hoveredIndex = hovered.id -1
				var unhovered = circlesArr[hoveredIndex];
				unhovered.render.lineWidth = 0
				hovered = Matter.Query.point(circlesArr,coordinates)[0]


				$(".t-drug-inst").text(hovered.content.institution)
				$(".t-drug-title").text(hovered.content.shortTitle)
				$(".t-drug-no").text(hovered.content.num)
				$("#tooltip").removeClass("notShown")
				$("#tooltip").css({"left": tooltipX+"px", "top": tooltipY+"px",})

				// homeCanvas.addEventListener("click", function(){
				// 	console.log(drugLink)
				// 	window.location.href = "#drug"+hovered.content.num
				// })
				// $("#tooltip").addClass("notShown")
			}
		}else{
			homeCanvas.style.cursor = 'default';
			// console.log(hoveredIndex)
			var unhovered = circlesArr[hoveredIndex];
			unhovered.render.lineWidth = 0
			drugLink = null
			$("#tooltip").addClass("notShown")
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
		Body.applyForce(circlesArr[i], {x: circlesArr[i].position.x, y: circlesArr[i].position.y}, {x: getRandom(-0.005,0.005)*getRandom(0.01,0.1), y: getRandom(-0.001,-0.0001)*getRandom(0.1,0.3)})
	}
}

window.setInterval(applyForce, 500);



alignHomeslide();



var firstSlide = document.getElementById("section1")
if(isMobile){
	window.addEventListener("scroll", function(){
		var topScroll = window.pageYOffset;
		// console.log(topScroll)
		if (topScroll>= 0.9*winHeight){
			$(".sidebar").removeClass("invisible")
			$("#nav-btn").removeClass("invisible")
		}else{
			$(".sidebar").addClass("invisible")
			$("#nav-btn").addClass("invisible")
		}
	})
}





//// legend stuff
var legBoxes = $("td .color");

for(var i =0; i<legBoxes.length; i++){
	$(legBoxes[i]).css({"background-color": colors11[i]})
}





////observer test
var images = document.querySelectorAll('.gif-container img');

function loadImage(image){
	var src = image.dataset.gif;
	fetchImage(src).then(function(){
	  image.src = src;
	})
  }

function fetchImage(url){
	return new Promise(function(resolve, reject){
	const image = new Image();
	image.src = url;
	image.onload = resolve;
	image.onerror = reject;
	});
}
var options = {
	rootMargin: '0px 0px 1000px 0px',
	threshold: 0.1
  };
  function handleIntersection(entries, observer){
	entries.forEach( function(entry){
	  if(entry.intersectionRatio > 0) {
		//   console.log(entry)
		loadImage(entry.target)
	  }
	})
  }
var observer = new IntersectionObserver(handleIntersection, options);

images.forEach(function(img){
  observer.observe(img);
})

var url= window.location.href

$(".facebook").on("click", function(){
	// console.log(url)
	window.open('https://www.facebook.com/sharer/sharer.php?u=' + url,
	'facebook-share-dialog',
	'width=600,height=400'
	);
	return false;
})
$(".twitter").on("click", function(){
	// console.log(url)
	window.open("https://twitter.com/intent/tweet?text=25 Drugs from UT Institutions @TXHealthJournal @utsystem &url=" + url,
	'twitter-share-dialog',
	'width=600,height=400'
	);
	return false;
})