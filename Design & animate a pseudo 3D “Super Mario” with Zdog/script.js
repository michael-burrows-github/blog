let isSpinning = true;

let illo = new Zdog.Illustration({
  element: ".zdog-canvas",
  dragRotate: true,
  onDragStart: function () {
    isSpinning = false;
  },
});

const red = "#ff0000";
const blue = "#001cff";
const yellow = "#fffe00";
const black = "#000000";
const skin = "#ffaa7d";
const hair = "#340d00";
const shoe = "#5d2914";

const mario = [
  // column 1
  { x: -60, y: 10, color: blue },
  { x: -60, y: 20, color: skin },
  { x: -60, y: 30, color: skin },
  { x: -60, y: 40, color: skin },
  { x: -60, y: 70, color: shoe },

  // column 2
  { x: -50, y: -50, color: hair },
  { x: -50, y: -40, color: hair },
  { x: -50, y: -30, color: hair },
  { x: -50, y: 0, color: blue },
  { x: -50, y: 10, color: blue },
  { x: -50, y: 20, color: skin },
  { x: -50, y: 30, color: skin },
  { x: -50, y: 40, color: skin },
  { x: -50, y: 60, color: shoe },
  { x: -50, y: 70, color: shoe },

  // column 3
  { x: -40, y: -70, color: red },
  { x: -40, y: -60, color: hair },
  { x: -40, y: -50, color: skin },
  { x: -40, y: -40, color: skin },
  { x: -40, y: -30, color: hair },
  { x: -40, y: -10, color: blue },
  { x: -40, y: 0, color: blue },
  { x: -40, y: 10, color: blue },
  { x: -40, y: 20, color: blue },
  { x: -40, y: 30, color: skin },
  { x: -40, y: 40, color: red },
  { x: -40, y: 50, color: red },
  { x: -40, y: 60, color: shoe },
  { x: -40, y: 70, color: shoe },

  // column 4
  { x: -30, y: -80, color: red },
  { x: -30, y: -70, color: red },
  { x: -30, y: -60, color: hair },
  { x: -30, y: -50, color: hair },
  { x: -30, y: -40, color: hair },
  { x: -30, y: -30, color: skin },
  { x: -30, y: -20, color: skin },
  { x: -30, y: -10, color: blue },
  { x: -30, y: 0, color: blue },
  { x: -30, y: 10, color: blue },
  { x: -30, y: 20, color: blue },
  { x: -30, y: 30, color: red },
  { x: -30, y: 40, color: red },
  { x: -30, y: 50, color: red },
  { x: -30, y: 60, color: shoe },
  { x: -30, y: 70, color: shoe },

  // column 5
  { x: -20, y: -80, color: red },
  { x: -20, y: -70, color: red },
  { x: -20, y: -60, color: hair },
  { x: -20, y: -50, color: skin },
  { x: -20, y: -40, color: hair },
  { x: -20, y: -30, color: skin },
  { x: -20, y: -20, color: skin },
  { x: -20, y: -10, color: red },
  { x: -20, y: 0, color: red },
  { x: -20, y: 10, color: red },
  { x: -20, y: 20, color: red },
  { x: -20, y: 30, color: yellow },
  { x: -20, y: 40, color: red },
  { x: -20, y: 50, color: red },

  // column 6
  { x: -10, y: -80, color: red },
  { x: -10, y: -70, color: red },
  { x: -10, y: -60, color: skin },
  { x: -10, y: -50, color: skin },
  { x: -10, y: -40, color: skin },
  { x: -10, y: -30, color: skin },
  { x: -10, y: -20, color: skin },
  { x: -10, y: -10, color: blue },
  { x: -10, y: 0, color: blue },
  { x: -10, y: 10, color: blue },
  { x: -10, y: 20, color: red },
  { x: -10, y: 30, color: red },
  { x: -10, y: 40, color: red },

  // column 7
  { x: 0, y: -80, color: red },
  { x: 0, y: -70, color: red },
  { x: 0, y: -60, color: skin },
  { x: 0, y: -50, color: skin },
  { x: 0, y: -40, color: skin },
  { x: 0, y: -30, color: skin },
  { x: 0, y: -20, color: skin },
  { x: 0, y: -10, color: blue },
  { x: 0, y: 0, color: blue },
  { x: 0, y: 10, color: blue },
  { x: 0, y: 20, color: red },
  { x: 0, y: 30, color: red },
  { x: 0, y: 40, color: red },

  //column 8
  { x: 10, y: -80, color: red },
  { x: 10, y: -70, color: red },
  { x: 10, y: -60, color: black },
  { x: 10, y: -50, color: black },
  { x: 10, y: -40, color: skin },
  { x: 10, y: -30, color: hair },
  { x: 10, y: -20, color: skin },
  { x: 10, y: -10, color: red },
  { x: 10, y: 0, color: red },
  { x: 10, y: 10, color: red },
  { x: 10, y: 20, color: red },
  { x: 10, y: 30, color: yellow },
  { x: 10, y: 40, color: red },
  { x: 10, y: 50, color: red },

  // column 9
  { x: 20, y: -70, color: red },
  { x: 20, y: -60, color: skin },
  { x: 20, y: -50, color: skin },
  { x: 20, y: -40, color: hair },
  { x: 20, y: -30, color: hair },
  { x: 20, y: -20, color: skin },
  { x: 20, y: -10, color: blue },
  { x: 20, y: 0, color: blue },
  { x: 20, y: 10, color: blue },
  { x: 20, y: 20, color: blue },
  { x: 20, y: 30, color: red },
  { x: 20, y: 40, color: red },
  { x: 20, y: 50, color: red },
  { x: 20, y: 60, color: shoe },
  { x: 20, y: 70, color: shoe },

  // column 10
  { x: 30, y: -70, color: red },
  { x: 30, y: -50, color: skin },
  { x: 30, y: -40, color: skin },
  { x: 30, y: -30, color: hair },
  { x: 30, y: -10, color: blue },
  { x: 30, y: 0, color: blue },
  { x: 30, y: 10, color: blue },
  { x: 30, y: 20, color: blue },
  { x: 30, y: 30, color: skin },
  { x: 30, y: 40, color: red },
  { x: 30, y: 50, color: red },
  { x: 30, y: 60, color: shoe },
  { x: 30, y: 70, color: shoe },

  //column 11
  { x: 40, y: -70, color: red },
  { x: 40, y: -50, color: skin },
  { x: 40, y: -40, color: skin },
  { x: 40, y: -30, color: hair },
  { x: 40, y: 0, color: blue },
  { x: 40, y: 10, color: blue },
  { x: 40, y: 20, color: skin },
  { x: 40, y: 30, color: skin },
  { x: 40, y: 40, color: skin },
  { x: 40, y: 60, color: shoe },
  { x: 40, y: 70, color: shoe },

  // column 12
  { x: 50, y: -40, color: skin },
  { x: 50, y: 10, color: blue },
  { x: 50, y: 20, color: skin },
  { x: 50, y: 30, color: skin },
  { x: 50, y: 40, color: skin },
  { x: 50, y: 70, color: shoe },
];

mario.forEach(function (block) {
  new Zdog.Box({
    addTo: illo,
    width: 10,
    height: 10,
    depth: 10,
    stroke: false,
    color: block.color,
    translate: { x: block.x, y: block.y },
  });
});

function animate() {
  illo.rotate.y += isSpinning ? 0.05 : 0;
  illo.updateRenderGraph();
  requestAnimationFrame(animate);
}

animate();
