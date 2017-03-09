//draw.mtopx.setCoordLimitsM([-1, 5, -1, 5]);
DEG2RAD = Math.PI / 180.0;
j1 = 50 * DEG2RAD;
j2 = -20 * DEG2RAD;

RobotModel.draw([j1, j2]);
draw.axis();

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