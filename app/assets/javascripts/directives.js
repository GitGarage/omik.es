/**
 * Created by omikes on 10/14/16.
 */


var app = angular.module('app', ['ngResource', 'ngRoute']);

var n1 = 0.000;
var n2 = 0.000;

var coords = [{x: -1.000, y: -1.000, z: -1.000}, {x: -1.000, y: -1.000, z: 1.000},
    {x: -1.000, y: 1.000, z: -1.000}, {x: -1.000, y: 1.000, z: 1.000},
    {x: 1.000, y: -1.000, z: -1.000}, {x: 1.000, y: -1.000, z: 1.000},
    {x: 1.000, y: 1.000, z: -1.000}, {x: 1.000, y: 1.000, z: 1.000}];

var template = [{x: -1.000, y: -1.000, z: -1.000}, {x: -1.000, y: -1.000, z: 1.000},
    {x: -1.000, y: 1.000, z: -1.000}, {x: -1.000, y: 1.000, z: 1.000},
    {x: 1.000, y: -1.000, z: -1.000}, {x: 1.000, y: -1.000, z: 1.000},
    {x: 1.000, y: 1.000, z: -1.000}, {x: 1.000, y: 1.000, z: 1.000}];

var new_coords = [];
var new_back = [];
var curves = [];
var wait = true;


var sides = [[1,3,7,5,0],
    [0,2,6,4,1],
    [2,3,7,6,2],
    [0,1,5,4,3],
    [0,1,3,2,4],
    [4,5,7,6,5]];

function rotate_xs(x, n)
{
    var r = [];
    for (var c = 0; c < n.length; c++)
    {
        r[c] = {x: n[c].x,
            y: n[c].y * Math.cos(x) - n[c].z * Math.sin(x),
            z: n[c].y * Math.sin(x) + n[c].z * Math.cos(x)};
    }
    return r;
}

function rotate_ys(y, n)
{
    var r = [];
    for (var c = 0; c < n.length; c++)
    {
        r[c] = {x: n[c].x * Math.cos(y) + n[c].z * Math.sin(y),
            y: n[c].y,
            z: n[c].z * Math.cos(y) - n[c].x * Math.sin(y)};
    }
    return r;
}

function rotate_x(x)
{
    var n = coords;
    var r = [];
    for (var c = 0; c < 8; c++)
    {
        r[c] = {x: n[c].x,
            y: n[c].y * Math.cos(x) - n[c].z * Math.sin(x),
            z: n[c].y * Math.sin(x) + n[c].z * Math.cos(x)};
    }
    return r;
}

function rotate_y(y, n)
{
    var r = [];
    for (var c = 0; c < 8; c++)
    {
        r[c] = {x: n[c].x * Math.cos(y) + n[c].z * Math.sin(y),
            y: n[c].y,
            z: n[c].z * Math.cos(y) - n[c].x * Math.sin(y)};
    }
    return r;
}

function forward(corners)
{
    var cs = rotate_y(n2, rotate_x(n1));
    return ((cs[corners[0]].z + cs[corners[1]].z + cs[corners[2]].z + cs[corners[3]].z) / 4.000);
}

function draw(r, repeat, clear)
{
    var c = $("#canvas").get(0);
    var ctx = c.getContext("2d");
    if (clear)
        ctx.clearRect(0, 0, c.width, c.height);
    var half = c.height / 2.000;

    var sorted_sides = sides.sort(function(a,b){
        return forward(a) - forward(b);
    });
    for (var s = 0; s < 6; s++)
    {
        var side = sorted_sides[s];
        if (side[4] != 4 || repeat > 9)
        {
            var z = forward(side);

            var style = Math.round(255.000 * z).toString(16);
            var color = '#' + style + style + style;
            ctx.fillStyle = color;
            ctx.strokeStyle = color;

            ctx.beginPath();
            for (var l = 0; l < 5; l++)
            {
                var corner = r[side[l % 4]];
                switch(l) {
                    case 0:
                        ctx.moveTo((corner.x * (half / 1.500)) * ((corner.z + 8) / 10) + half,
                            (corner.y * (half / 1.500)) * ((corner.z + 8) / 10) + half);
                        break;
                    default:
                        ctx.lineTo((corner.x * (half / 1.500)) * ((corner.z + 8) / 10) + half,
                            (corner.y * (half / 1.500)) * ((corner.z + 8) / 10) + half);

                }

                new_coords[side[l % 4]] = {};
                new_coords[side[l % 4]].x = 0 - corner.x * ((corner.z + 8) / 10) * 0.600;
                new_coords[side[l % 4]].y = corner.y * ((corner.z + 8) / 10) * 0.600;
                new_coords[side[l % 4]].z = -1;
            }
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
            if (repeat == 10)
            {
                if (side[4] == 0)
                    drawSide(shapes[0], 0);
                if (side[4] == 5)
                    drawSide(shapes[5], 5);
                if (side[4] == 4)
                    drawCurves(10, ctx);
            }
            if (wait)
            {
                wait = false;

            }
            else {
                if (side[4] == 1)
                {
                    if (repeat > 0)
                    {
                        drawBack(repeat);
                        draw(rotate_ys(n2, rotate_xs(n1, angular.copy(new_coords))), repeat - 1, false);
                    }
                }

            }
        }
        else {
            var z = forward(side);

            var style = Math.round(255.000 * z).toString(16);
            var color = '#' + style + style + style;
            ctx.fillStyle = color;
            ctx.strokeStyle = color;

            ctx.beginPath();
            for (var l = 0; l < 5; l++)
            {
                var corner = r[side[l % 4]];
                switch(l) {
                    case 0:
                        ctx.moveTo((corner.x * (half / 1.500)) * ((corner.z + 8) / 10) + half,
                            (corner.y * (half / 1.500)) * ((corner.z + 8) / 10) + half);
                        break;
                    default:
                        ctx.lineTo((corner.x * (half / 1.500)) * ((corner.z + 8) / 10) + half,
                            (corner.y * (half / 1.500)) * ((corner.z + 8) / 10) + half);

                }

                new_coords[side[l % 4]] = {};
                new_coords[side[l % 4]].x = 0 - corner.x * ((corner.z + 8) / 10) * 0.600;
                new_coords[side[l % 4]].y = corner.y * ((corner.z + 8) / 10) * 0.600;
                new_coords[side[l % 4]].z = -1;
            }
            ctx.closePath();
            ctx.stroke();
            ctx.fill();
            drawCurves(repeat, ctx);
        }
    }
}

var shape = [];
var shapes = [[],[],[],[],[],[]];

app.directive('drawText', function(Draw) {
    return function($scope, $elem, $attrs) {
        $scope.$watch($attrs.drawText, function(text){
            Draw.get({text: text}, function(resp) {
                shapes[0] = resp.side;
                drawSide(shapes[0], 0);
            });
        });
    };
});

app.directive('drawSpiral', function(Draw) {
    return function($scope, $elem, $attrs) {
        $scope.$watch($attrs.drawSpiral, function(text){
            Draw.get({text: '`'}, function(resp) {
                shapes[5] = resp.side;
            });
        });
    };
});

function drawBack(repeat)
{
    var black = [{z: -1.000, y: -0.900, x: -0.900}, {z: -1.000, y: -0.900, x: 0.900},
        {z: -1.000, y: 0.900, x: 0.900}, {z: -1.000, y: 0.900, x: -0.900}];
    var this_shape = repeat == 10 ? rotate_ys(n2, rotate_xs(n1, black)) : rotate_ys(n2, rotate_xs(n1, new_back));

    var c = $("#canvas").get(0);
    var ctx = c.getContext("2d");
    ctx.strokeStyle = '#000';
    ctx.fillStyle = '#000';
    var half = c.height / 2.000;

    ctx.beginPath();
    ctx.moveTo((this_shape[0].x * (half / 1.500)) * ((this_shape[0].z + 8) / 10) + half,
        (this_shape[0].y * (half / 1.500)) * ((this_shape[0].z + 8) / 10) + half);
    for (var z = 1; z < 5; z++)
    {
        ctx.lineTo((this_shape[z%4].x * (half / 1.500)) * ((this_shape[z%4].z + 8) / 10) + half,
            (this_shape[z%4].y * (half / 1.500)) * ((this_shape[z%4].z + 8) / 10) + half);
        new_back[z%4] = {};
        new_back[z%4].x = 0 - this_shape[z%4].x * ((this_shape[z%4].z + 8) / 10) * 0.600;
        new_back[z%4].y = this_shape[z%4].y * ((this_shape[z%4].z + 8) / 10) * 0.600;
        new_back[z%4].z = -1;
    }
    ctx.closePath();
    ctx.fill();
}

var hashma = [];

function drawCurves(repeat, ctx)
{
    var hash = [{z: -1.000, y: -1.000, x: -1.000}, {z: 1.000, y: -1.000, x: -1.000},
        {z: 1.000, y: 1.000, x: -1.000}, {z: -1.000, y: 1.000, x: -1.000}];
    var this_shape = repeat == 10 ? rotate_ys(n2, rotate_xs(n1, hash)) : rotate_ys(n2, rotate_xs(n1, curves));

    var c = $("#canvas").get(0);
    ctx.strokeStyle = '#f00';
    var half = c.height / 2.000;

    for (var z = 0; z < 4; z++)
    {
        ctx.beginPath();
        ctx.moveTo((this_shape[(z+0)%4].x * (half / 1.500)) * ((this_shape[(z+0)%4].z + 8) / 10) + half,
            (this_shape[(z+0)%4].y * (half / 1.500)) * ((this_shape[(z+0)%4].z + 8) / 10) + half);
        ctx.bezierCurveTo((((this_shape[(z+0)%4].x + this_shape[(z+1)%4].x) / 2) * (half / 1.500)) * ((((this_shape[(z+0)%4].z + this_shape[(z+1)%4].z) / 2) + 8) / 10) + half,
            (((this_shape[(z+0)%4].y + this_shape[(z+1)%4].y) / 2) * (half / 1.500)) * ((((this_shape[(z+0)%4].z + this_shape[(z+1)%4].z) / 2) + 8) / 10) + half,
            (((this_shape[(z+1)%4].x + this_shape[(z+2)%4].x) / 2) * (half / 1.500)) * ((((this_shape[(z+1)%4].z + this_shape[(z+2)%4].z) / 2) + 8) / 10) + half,
            (((this_shape[(z+1)%4].y + this_shape[(z+2)%4].y) / 2) * (half / 1.500)) * ((((this_shape[(z+1)%4].z + this_shape[(z+2)%4].z) / 2) + 8) / 10) + half,
            (this_shape[(z+2)%4].x * (half / 1.500)) * ((this_shape[(z+2)%4].z + 8) / 10) + half,
            (this_shape[(z+2)%4].y * (half / 1.500)) * ((this_shape[(z+2)%4].z + 8) / 10) + half);
        ctx.stroke();

        curves[z%4] = {};
        curves[z%4].x = 0 - this_shape[z%4].x * ((this_shape[z%4].z + 8) / 10) * 0.600;
        curves[z%4].y = this_shape[z%4].y * ((this_shape[z%4].z + 8) / 10) * 0.600;
        curves[z%4].z = -1;
    }
}

function drawSide(tshape, s)
{
    var c = $("#canvas").get(0);
    var ctx = c.getContext("2d");
    ctx.strokeStyle = '#000';
    var half = c.height / 2.000;
    var size = 1.00 / 1000.000;
    var spiral = 1.00 / 90.000;
    var t_shape = [];
    var m = -1;

    for (var j = 0; j < tshape.length; j++)
    {
        m++;
        if (j > 0 && tshape[j][0].group == tshape[j-1][0].group)
            m--;
        t_shape[j] = angular.copy(tshape[j]);
        for (var k = 0; k < t_shape[j].length; k++)
        {
            switch (s) {
                case 0:
                    t_shape[j][k].x = (parseFloat(t_shape[j][k].x) + m * 220.000 - 800) * size;
                    t_shape[j][k].y = (parseFloat(t_shape[j][k].y) - 200) * size;
                    t_shape[j][k].z = 1;
                    break;
                case 5:
                    t_shape[j][k].z = (parseFloat(t_shape[j][k].x) + m * 220.000 - 90) * spiral;
                    t_shape[j][k].x = 1;
                    t_shape[j][k].y = (parseFloat(t_shape[j][k].y) - 295) * spiral;
                    break;
            }
        }
        var this_shape = rotate_ys(n2, rotate_xs(n1, t_shape[j]));
        ctx.beginPath();
        ctx.moveTo((this_shape[0].x * (half / 1.500)) * ((this_shape[0].z + 8) / 10) + half,
            (this_shape[0].y * (half / 1.500)) * ((this_shape[0].z + 8) / 10) + half);
        for (var i = 1; i < this_shape.length; i++)
            ctx.lineTo((this_shape[i].x * (half / 1.500)) * ((this_shape[i].z + 8) / 10) + half,
                (this_shape[i].y * (half / 1.500)) * ((this_shape[i].z + 8) / 10) + half);
        ctx.stroke();
    }
}

app.directive('getClick', function() {
    return function($scope, $elem) {
        $elem.bind("click", function(e){
            if (shape.length == 0)
                shape.push([]);
            shape[shape.length - 1].push({x: e.x - e.target.offsetLeft, y: e.y - e.target.offsetTop});
        });
    };
});

app.directive('pressKey', function() {
    return function($scope, $elem) {
        $elem.bind("keydown", function(e){
            switch (e.which) {
                case 37:
                    n2 -= 0.05;
                    break;
                case 38:
                    n1 += 0.05;
                    break;
                case 39:
                    n2 += 0.05;
                    break;
                case 40:
                    n1 -= 0.05;
                    break;
            }
            if (e.which > 36 && e.which < 41)
            {
                draw(rotate_y(n2, rotate_x(n1)));
            }
        });
    };
});