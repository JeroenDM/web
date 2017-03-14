// robot description module, static parameters
RobotModel = (function() {
    const name = "richard";
    
    const description = {
        "joints": [
            {
                name: "joint1",
                type: "revolute",
                initValue: 0
            },
            {
                name: "joint1",
                type: "revolute",
                initValue: 0
            }
        ],
        "links": [
            {
                name: "link1",
                length: 2
            },
            {
                name: "link2",
                length: 1
            }
        ]
    };
    
    function drawRobot(jointValues) {
        //draw origin
        //p0 = draw.mtopx.getCoordP(0, 0);
        //draw.circle(10, p0.x, p0.y, "orange");
        
        // get cartesian points for joints
        points = [ {x: 0, y:0} ];
        points = points.concat(forwardKinematics(jointValues));
        //origin = { x: 0, y: 0};
        //[origin].concat(points);
        
        p = [];
        // draw joints
        for (i = 0; i < points.length; i++) {
            p[i] = draw.mtopx.getCoordP(points[i].x, points[i].y);
            draw.circle(10, p[i].x, p[i].y, "orange");
        }
        
        // draw links
        for (i = 0; i < points.length - 1; i++) {
            // console.log(p[i]);
            draw.line(p[i].x, p[i].y, p[i+1].x, p[i+1].y);
        }
    }
    
    function forwardKinematics(jointValues) {
        // TODO, still hard coded now
        j = jointValues;
        l = [];
        for (i=0; i<description.links.length; i++) {
            l[i] = description.links[i].length;
        }
        // cartesian coordinates joint 1
        p1 = {
            x: l[0] * Math.cos(j[0]),
            y: l[0] * Math.sin(j[0])
        };
        
        // cartesian coordinates joint 2
        p2 = {
            x: p1.x + l[1] * Math.cos(j[0] + j[1]),
            y: p1.y + l[1] * Math.sin(j[0] + j[1])
        };
        
        return [ p1, p2 ];
    }
    
    return {
        draw: drawRobot
    };
    
})();