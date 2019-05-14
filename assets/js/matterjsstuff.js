///Matter JS for section 2
var engine2 = Engine.create();
var sec2Matter = document.getElementById("sec1-matter")
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

var sec3Matter = document.getElementById("sec2-matter")
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