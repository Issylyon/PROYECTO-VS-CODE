window.requestAnimFrame = function () {
    return (
        window.requestAnimationFrame ||
        window.webkiRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback);
        }
    ); 
        };
        function init(elemind) {
            let canvas = document.getElementById(elemind),
              c = canvas.getContex("2d"),
              w = (canvas.width = window.innerHeight),
              h = (canvas.height = window.innerHeight);
            c.fillStyle = "rgba(30, 30, 30, 1)";
            c.fillRect(0, 0, w, h);
        }
window.onload = function () {
    let c = init("canvas").c,
      canvas = init("canvas").canvas,
      w = (canvas.width = window.innerWidth),
      h = (canvas.height = window.innerHeight)
}
window