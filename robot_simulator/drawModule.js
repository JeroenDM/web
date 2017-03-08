
draw = (function() {
    SUCCES = true;
    ERROR = false;
    $canvas = document.getElementById("canvas");
    
    function drawCircle(r, x, y, color) {
        // create empty circle element
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        // set user input attributes
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r",  r);

        // set standard attributes
        // TODO can this be done with style attributes in css?
        circle.setAttribute("stroke", "black");
        circle.setAttribute("stroke-width", "3");
        circle.setAttribute("fill", color);

        $canvas.appendChild(circle);
    }

    function drawLine(x1, y1, x2, y2) {
        var line = document.createElementNS("http://www.w3.org/2000/svg", "line");

        // set user input attributes
        line.setAttribute("x1", x1);
        line.setAttribute("y1", y1);
        line.setAttribute("x2", x2);
        line.setAttribute("y2", y2);

        line.setAttribute("stroke", "black");
        line.setAttribute("stroke-width", "3");

        $canvas.appendChild(line);
    }
    
    mtopx = (function() {
    
        // _m is meter, _p is pixel unit
        // canvas coordinate system zeros in upper right corner
        widthP = parseFloat($canvas.getAttribute("width"));
        heightP = parseFloat($canvas.getAttribute("height"));

        x_min = -1;
        x_max = 1;
        y_min = -1;
        y_max = 1;

        console.log("mtopx init, width = ", widthP, " height = ", heightP);

        origin = _calcOriginP();

        function _calcOriginP() {
            // TODO does not work for all sign combinations
            x = Math.abs(x_min) / (x_max - x_min) * widthP;
            y = Math.abs(y_min) / (y_max - y_min) * heightP;

            return {x: x, y: y};
        }

        function _checkBounds(xM, yM) {
            // no message for both values out of bound
            if (xM > x_max || xM < x_min) {
                console.log("x value out of bound.");
                return ERROR;
            }
            if (yM > y_max || yM < y_min) {
                console.log("y value out of bound.");
                return ERROR;
            }
            return SUCCES;
        }

        function getCoordP(xM, yM) {
            // convert from coordinates in meter to pixels in canvas
            if (_checkBounds(xM, yM)) {
                xP = xM / (x_max - x_min) * widthP + origin.x;
                yP = origin.y - yM / (y_max - y_min) * heightP;

                return {x: xP, y: yP};
            } else {
                return {x: 0, y: 0};
            }

        }
        
        function setCoordLimitsM(limits) {
            x_min = limits[0];
            x_max = limits[1];
            y_min = limits[2];
            y_max = limits[3];
        }

        return {
            getCoordP: getCoordP,
            setCoordLimitsM: setCoordLimitsM
        };
    })();
    
    return {
        mtopx: mtopx,
        circle: drawCircle,
        line: drawLine
    }
})();



