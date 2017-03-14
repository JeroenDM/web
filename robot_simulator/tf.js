// 2D rotation matrix class
// aka only rotations around the z-axis, when considered in 3D
function rotation(angle) {
    this.angle = angle;
    this.matrix = [[ Math.cos(pose[2]), Math.sin(pose[2]) ]
                   [-Math.sin(pose[2]), Math.cos(pose[2]) ]];
};

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
    
    function printMatrix(m, d) {
        // Print a matrix m with floats to d decimal points
        if (d == undefined ) { d = 2; }
        var str = "";
        var row = m.length;
        
        // if vector
        if (m[0].length == undefined ) {
            str += "[";
            for (var i = 0; i < row; i++) {
                str += "\t" + m[i].toFixed(d);
            }
            str += "\t]\n"
        }
        // if matrix
        else {
            var col = m[0].length;
            for (var i = 0; i < row; i++) {
                str += "[";
                for (var j = 0; j < col; j++) {
                    str += "\t" + m[i][j].toFixed(d);
                }
                str += "\t]\n"
            }
        }
        
        return str;
    }
    
    return "Frame\n-----\n" +
        "Name: " + this.name + ".\n" +
        "Pose: " + printMatrix(this.pose) +
        "Matrix:\n" + printMatrix(this.matrix);
        //this.matrix[0] + "\n" +
        //this.matrix[1] + "\n" +
        //this.matrix[2] + "\n";
}

frame.prototype.inverse = function() {
    return new frame("inv_" + this.name, [-this.pose[0],
                                       -this.pose[1],
                                      -this.pose[2]]);
}