//////THIS IS W=KEYBOARD LETTERS CONNECTION

// const canvas = document.getElementById("keyboardCanvas");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // Keyboard keys and positions
// const keys = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890".split("");
// const keyObjects = [];

// // Generate random positions for keys
// class Key {
//   constructor(x, y, key, size) {
//     this.x = x;
//     this.y = y;
//     this.key = key;
//     this.size = size;
//     this.angle = Math.random() * Math.PI * 2; // Rotation angle
//     this.dx = (Math.random() - 0.5) * 0.5; // Random horizontal velocity
//     this.dy = (Math.random() - 0.5) * 0.5; // Random vertical velocity
//   }

//   draw() {
//     ctx.save();
//     ctx.translate(this.x, this.y);
//     ctx.rotate(this.angle);

//     // Key appearance
//     ctx.fillStyle = "#1f1f1f";
//     ctx.strokeStyle = "#f0f0f0";
//     ctx.lineWidth = 2;
//     ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
//     ctx.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size);

//     // Key text
//     // ctx.fillStyle = "#ffc978";#0d0d
//     ctx.fillStyle = "#0d0d";
//     ctx.font = `${this.size / 2}px Arial`;
//     ctx.textAlign = "center";
//     ctx.textBaseline = "middle";
//     ctx.fillText(this.key, 0, 0);

//     ctx.restore();
//   }

//   update() {
//     this.x += this.dx;
//     this.y += this.dy;

//     // Bounce off edges
//     if (this.x + this.size / 2 > canvas.width || this.x - this.size / 2 < 0) {
//       this.dx = -this.dx;
//     }
//     if (this.y + this.size / 2 > canvas.height || this.y - this.size / 2 < 0) {
//       this.dy = -this.dy;
//     }

//     this.angle += 0.01; // Slow rotation
//     this.draw();
//   }
// }

// // Create wires between keys
// function drawConnections() {
//   ctx.strokeStyle = "rgba(55, 200, 120, 0.7)";
//   ctx.lineWidth = 1;
//   for (let i = 0; i < keyObjects.length; i++) {
//     for (let j = i + 1; j < keyObjects.length; j++) {
//       const dist = Math.hypot(
//         keyObjects[i].x - keyObjects[j].x,
//         keyObjects[i].y - keyObjects[j].y
//       );
//       if (dist < 200) {
//         ctx.beginPath();
//         ctx.moveTo(keyObjects[i].x, keyObjects[i].y);
//         ctx.lineTo(keyObjects[j].x, keyObjects[j].y);
//         ctx.stroke();
//       }
//     }
//   }
// }

// // Initialize keys
// function init() {
//   keyObjects.length = 0;
//   for (let i = 0; i < 50; i++) {
//     const size = Math.random() * 40 + 20;
//     const x = Math.random() * canvas.width;
//     const y = Math.random() * canvas.height;
//     const key = keys[Math.floor(Math.random() * keys.length)];
//     keyObjects.push(new Key(x, y, key, size));
//   }
// }

// // Animation loop
// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // Background gradient
//   const gradient = ctx.createRadialGradient(
//     canvas.width / 2,
//     canvas.height / 2,
//     0,
//     canvas.width / 2,
//     canvas.height / 2,
//     canvas.width
//   );
//   gradient.addColorStop(0, "#0d0d0d");
//   gradient.addColorStop(1, "#0d0d0d");
//   ctx.fillStyle = gradient;
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   drawConnections();
//   keyObjects.forEach((key) => key.update());
//   requestAnimationFrame(animate);
// }

// // Resize canvas on window resize
// window.addEventListener("resize", () => {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   init();
// });

// // Start
// init();
// animate();


///////THIS IS W CIRCLESSSS RIPPLE

// const canvas = document.getElementById("rippleCanvas");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const clickSound = new Audio('light-rain-distant-thunder-mechanical-wave-2-01-25.mp3');

// const ripples = [];


// const colors = [
//   "rgba(255, 99, 71, 0.7)", 
//   "rgba(144, 238, 144, 0.7)", 
//   "rgba(135, 206, 250, 0.7)", 
//   "rgba(255, 223, 186, 0.7)"  
// ];


// class Ripple {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.radius = 0;
//     this.alpha = 1.5; 
//     this.color = colors[Math.floor(Math.random() * colors.length)];
//   }

//   draw() {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
//     ctx.strokeStyle = this.color.replace("0.9", this.alpha.toFixed(2)); 
//     ctx.lineWidth = 1.5 + this.radius * 0.02; 
//     ctx.stroke();
//   }

//   update() {
//     this.radius += 2; 
//     this.alpha -= 0.01; 
//   }
// }


// function drawGrid() {
//   ctx.beginPath();
//   const gridSize = 30;

//   for (let x = 0; x < canvas.width; x += gridSize) {
//     for (let y = 0; y < canvas.height; y += gridSize) {
//       ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
//       ctx.lineWidth = 0.5;
//       ctx.strokeRect(x, y, gridSize, gridSize);
//     }
//   }
//   ctx.closePath();
// }


// function generateRandomRipples() {
//   const x = Math.random() * canvas.width;
//   const y = Math.random() * canvas.height;
//   ripples.push(new Ripple(x, y));
// }


// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   drawGrid();
//   ripples.forEach((ripple, index) => {
//     ripple.draw();
//     ripple.update();


//     if (ripple.alpha <= 0) {
//       ripples.splice(index, 1);
//     }
//   });

//   requestAnimationFrame(animate);
// }


// canvas.addEventListener("click", (event) => {
//   ripples.push(new Ripple(event.clientX, event.clientY));
//   clickSound.play();
// });


// setInterval(() => {
//   generateRandomRipples();
// }, 500);


// window.addEventListener("resize", () => {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// });


// animate();


///THIS IS ORGANIC SHAPED RIPPLES/ RAIN

const canvas = document.getElementById("rippleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const clickSound = new Audio('light-rain-distant-thunder-mechanical-wave-2-01-25.mp3');

const ripples = [];
 
const colors = [
  "rgba(255, 99, 71, 0.7)", 
  "rgba(144, 238, 144, 0.7)",
  "rgba(135, 206, 250, 0.7)",
  "rgba(255, 223, 186, 0.7)" 
];


class Ripple {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.alpha = 4.5; 
    this.size = Math.random() * 10 + 10; 
    this.maxSize = Math.random() * 10 + 50;
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.waves = []; 
    this.createWaves();
  }

 
  createWaves() {
    const numWaves = Math.floor(Math.random() * 3) + 3; 
    for (let i = 0; i < numWaves; i++) {
      const wave = {
        startX: this.x,
        startY: this.y,
        endX: this.x + (Math.random() - 0.5) * 10, 
        endY: this.y + (Math.random() - 0.5) * 50,
        controlX: this.x + (Math.random() - 0.5) * 50, 
        controlY: this.y + (Math.random() - 0.5) * 50, 
        progress: Math.random(), 
        speed: Math.random() * 0.02 + 0.02 
      };
      this.waves.push(wave);
    }
  }


  draw() {
    ctx.beginPath();
    this.waves.forEach(wave => {
      ctx.moveTo(wave.startX, wave.startY);
      ctx.bezierCurveTo(wave.controlX, wave.controlY, wave.endX, wave.endY, this.x + wave.progress * (this.size + 100), this.y + wave.progress * (this.size + 100));
      ctx.strokeStyle = this.color.replace("0.9", this.alpha.toFixed(2));
      ctx.lineWidth = 2 + this.size * 0.02;
      ctx.stroke();
    });
  }


  update() {
    this.size += 2; 
    this.alpha -= 0.01; 


    this.waves.forEach(wave => {
      wave.progress += wave.speed;
      if (wave.progress > 1) {
        wave.progress = 0;
      }
    });
  }
}


function generateRandomRipples() {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  ripples.push(new Ripple(x, y));
}

function drawGrid() {
  ctx.beginPath();
  const gridSize = 30;

  for (let x = 0; x < canvas.width; x += gridSize) {
    for (let y = 0; y < canvas.height; y += gridSize) {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.0)";
      ctx.lineWidth = 0;
      ctx.strokeRect(x, y, gridSize, gridSize);
    }
  }
  ctx.closePath();
}


function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawGrid();
  
  ripples.forEach((ripple, index) => {
    ripple.draw();
    ripple.update();
    if (ripple.alpha <= 0) {
      ripples.splice(index, 1);
    }
  });

  requestAnimationFrame(animate);
}

canvas.addEventListener("click", (event) => {
  ripples.push(new Ripple(event.clientX, event.clientY));
  clickSound.play();
});

setInterval(() => {
  generateRandomRipples();
}, 500);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

animate();

