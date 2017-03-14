
// define a class frame to describe the position of a rigid body
// in 2D: pose: [x, y, theta]
function frame(name, pose) {
    this.name = name;
    this.pose = pose;
    this.matrix = [[ Math.cos(pose[2]), Math.sin(pose[2]), pose[0]],
                   [-Math.sin(pose[2]), Math.cos(pose[2]), pose[1]],
                   [ 0,                 0,                 1]];
    this.position = [pose[0], pose[1]];
    this.orientation = pose[2];
}

frame.prototype.toString = function() {
    return "This is a frame called: " + this.name + ".\n" +
        "Pose: " + this.pose + "\n" +
        this.matrix[0] + "\n" +
        this.matrix[1] + "\n" +
        this.matrix[2] + "\n";
}

frame.prototype.inverse = function() {
    return new frame("inv_" + this.name, [-this.pose[0],
                                       -this.pose[1],
                                      -this.pose[2]]);
}

frame.prototype.transformPoint = function(point) {
    
    return numeric.dot(this.matrix, point);
}

var base = new frame("base_link", [0.0, 0.0, 0.0]);
var ee = new frame("end_effector", [0.0, 0.0, Math.PI/2.0]);

console.log(base.toString());
console.log(ee.toString());