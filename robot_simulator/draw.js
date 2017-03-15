var base = new frame("base_link", [0.0, 0.0, 0.0]);
var ee = new frame("end_effector", [0.0, 0.0, Math.PI/2.0]);

console.log(base.toString());
console.log(ee.toString());

//draw.mtopx.setCoordLimitsM([-1, 5, -1, 5]);
DEG2RAD = Math.PI / 180.0;
j1 = 50 * DEG2RAD;
j2 = -20 * DEG2RAD;

//RobotModel.draw([j1, j2]);
draw.axis();

var robDate = RobotModel.data;

var testdata = {
    joints: [
        [0, 0],
        [1, 1]
    ],
    links: [
        [0, 0, 1, 1],
        [1, 1, 1, 2]
    ]
};
    
draw.robot(testdata);

testdata.joints.push(
    [1, 2]
);
testdata.links.push(
    [1, 2, 2, 2]
);

testdata.joints[0][1] = 1;

//draw.robot(testdata);

//svg.selectAll(".joints").data(testdata.joints).enter().append("circle")
//        .attr("class", "joint")
//        .attr("cx", function(d) { return xScale(d[0]); })
//        .attr("cy", function(d) { return yScale(d[1]); })
//        .attr("r", 10 );
//svg.selectAll(".joints").data(testdata.joints).exit().remove();
//
//svg.selectAll(".link").data(testdata.links).enter().append("line")
//        .attr("class", "link")
//        .attr("x1", function(d) { return xScale(d[0]) })
//        .attr("y1", function(d) { return yScale(d[1]) })
//        .attr("x2", function(d) { return xScale(d[2]) })
//        .attr("y2", function(d) { return yScale(d[3]) });
//svg.selectAll(".links").data(testdata.links).exit().remove();

//DEG2RAD = Math.PI / 180.0;
//
//l1 = 2;
//l2 = 1;
//
//j1 = 30 * DEG2RAD;
//j2 = 30 * DEG2RAD;
//
//p0 = draw.mtopx.getCoordP(0, 0);
//p1 = draw.mtopx.getCoordP(l1 * Math.cos(j1),
//                          l1 * Math.sin(j1));
//p2 = draw.mtopx.getCoordP(l1 * Math.cos(j1) + l2 * Math.cos(j1 + j2),
//                          l1 * Math.sin(j1) + l2 * Math.sin(j1 + j2));
//
//draw.circle(10, p0.x, p0.y, "orange")
//draw.circle(10, p1.x, p1.y, "orange");
//draw.circle(10, p2.x, p2.y, "red");
//
//draw.line(p0.x, p0.y, p1.x, p1.y);
//draw.line(p1.x, p1.y, p2.x, p2.y);