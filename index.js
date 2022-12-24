<!DOCTYPE html>
<html lang="en">
<head>
    <title>Merry Christmas csby lnk </title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Parisienne&display=swap" rel="stylesheet">
      <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Codystar"
    />
     <style>
        *,
        *:before,
        *:after{
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }
       body {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  color: #fff;
  background-color: #9cf;
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#6af),
    to(#bdf)
  );
  background-image: -webkit-linear-gradient(#6af, #bdf);
  background-image: -moz-linear-gradient(#6af, #bdf);
  background-image: linear-gradient(#6af, #bdf);
}

::-webkit-scrollbar {
  display: none;
}
        .card{
            height: 400px;
            width: 570px;
            position: absolute;
            left: 0;
            right: 0;
            top: 100px;
            cursor: pointer;
            transition: 2s;
            -webkit-perspective: 1200px;
                perspective: 1200px;

        }
        .card:hover{
            transform: rotate(-5deg);
        }
        .card:hover .outside{
            transform: rotateY(-130deg);
        }
        .outside{
            height: 100%;
            width: 50%;
            position: absolute;
            left: 50.1%;
            -webkit-transform-style: preserve-3d;
                transform-style: preserve-3d;
            transition: 2s;
            transform-origin: left;
        }
        .front,.back{
            height: 100%;
            width: 100%;
            position: absolute;  
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            /*hide backface in firefox*/
            transform: rotateX(0deg);   
        }
        .front{
            background-color: #BE0F04;
            z-index: 1;
        }
        .front:before{
            content: "";
            position: absolute;
            background-color: #101010;
            height: 80px;
            width: 100%;
            top: 240px;
        }
        .belt1{
            height: 120px;
            width: 120px;
            border: 20px solid #E5A037;
            border-radius: 10px;
            position: absolute;
            margin: auto;
            left: 0;
            right: 0;
            top: 220px;
            z-index: 1;
        }
        .belt1:after{
            content: "";
            position: absolute;
            width: 95px;
            height: 18px;
            background-color: #d6932e;
            top: 31px;
            right: 13px;
            border-radius: 8px;
        }
        .mouth{
            position: absolute;
            background-color: #EFBEAB;
            height: 50px ;
            width: 80px;
            z-index: 1;
            border-radius: 0 0 50% 50%;
            margin: auto;
            left: 0;
            right: 0;
            top: 20px;
        }
        .beard1{
            background-color: #f5f5f5;
            position: absolute;
            width: 100%;
            height: 180px;
            border-radius: 0 0 50% 50%;
        }
        .beard1:before,
        .beard1:after{
            position: absolute;
            content: "";
            width: 130px;
            height: 50px;
            background-color: #f5f5f5;
            box-shadow: 0 10px #d3d3d3;
            border-radius: 0 0 50% 50%;
            top: -0px;
            z-index: 2;
        }
        .beard1:before{
            left: 13px;
        }
        .beard1:after{
            right: 13px;
        }
        .back{
            background: linear-gradient(
                to right,
                #BE0F04 50%,
                #7d0b03
            );
            transform: rotateY(180deg);
        }
        .inside{
            height: 100%;
            width: 50%;
            position: absolute;
            left: 50%;
            background: linear-gradient(
                to left,
                #BE0F04 50%,
                #7d0b03
            );
            font-family: 'Parisienne', cursive;
            color: white;
            font-size: 70px;
            text-align: center;
            padding: 90px 10px;
            box-shadow: 25px 25px 35px rgba(0,0,0,0.3);
        }

        *,
*:before,
*:after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background-color: #fff2c8;
}
.container {
  width: 380px;
  height: 500px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  right: 0px;
}
.container *:before,
.container *:after {
  position: absolute;
  content: "";
}
.santa {
  height: 220px;
  width: 200px;
  background-color: #e84701;
  border-radius: 80px;
  position: absolute;
  right: 0;
  top: 200px;
}
.santa:before,
.santa:after {
  width: 40px;
  margin: auto;
  left: 0;
  right: 0;
  background-color: #fff2c8;
}
.santa:before {
  height: 130px;
}
.santa:after {
  height: 40px;
  bottom: -15px;
}
.hand-l {
  background-color: #e84701;
  height: 90px;
  width: 105px;
  position: absolute;
  right: -30px;
  top: 20px;
  border-radius: 0 80px 0 0;
}
.hand-l:before {
  margin: auto;
  width: 35px;
  height: 15px;
  background-color: #ffffff;
  top: 85px;
  left: 71px;
}
.hand-l:after {
  height: 15px;
  width: 30px;
  background-color: #fad2af;
  left: 74px;
  top: 101px;
  border-radius: 0 0 30px 30px;
}
.hand-r {
  height: 150px;
  width: 180px;
  border: 30px solid transparent;
  border-bottom: 40px solid #e84701;
  position: absolute;
  left: -100px;
  bottom: 150px;
  border-radius: 50%;
  animation: wave 1.5s infinite;
  transform-origin: right;
}
@keyframes wave {
  50% {
    transform: rotate(15deg);
  }
}
.hand-r:before {
  width: 35px;
  height: 15px;
  background-color: #ffffff;
  transform: rotate(-50deg);
  top: 68px;
  left: -22px;
}
.hand-r:after {
  width: 30px;
  height: 15px;
  background-color: #fad2af;
  transform: rotate(-50deg);
  left: -31px;
  top: 58px;
  border-radius: 15px 15px 0 0;
}
.face {
  position: absolute;
  margin: auto;
  height: 180px;
  width: 180px;
  background-color: #fad2af;
  border: 25px solid #f2e6da;
  border-radius: 50%;
  left: 0;
  right: 0;
  bottom: 140px;
}
.beard {
  position: absolute;
  height: 90px;
  width: 180px;
  background-color: #ffffff;
  border-radius: 0 0 90px 90px;
  right: -25px;
  bottom: -25px;
}
.beard:before {
  width: 55px;
  height: 25px;
  background-color: #f2e6da;
  border-radius: 20px 0;
  left: 34px;
}
.beard:after {
  height: 25px;
  width: 55px;
  background-color: #f2e6da;
  border-radius: 0 20px;
  right: 34px;
}
.eyes {
  height: 12px;
  width: 12px;
  background-color: #0078ca;
  border-radius: 50%;
  position: absolute;
  top: 40px;
  left: 40px;
  box-shadow: 38px 0 #0078ca, 19px 20px #f69697;
}
.eyes:before {
  height: 12px;
  width: 25px;
  background-color: #ffffff;
  border-radius: 10px 0;
  left: -10px;
  bottom: 20px;
}
.eyes:after {
  height: 12px;
  width: 25px;
  background-color: #ffffff;
  border-radius: 0 10px;
  left: 32px;
  bottom: 20px;
}
.hat {
  position: absolute;
  height: 60px;
  width: 120px;
  background-color: #e84701;
  top: -98px;
  left: 85px;
  border-radius: 0 0 60px 60px;
}
.hat:before {
  height: 40px;
  width: 40px;
  background-color: #ffffff;
  left: 100px;
  top: -15px;
  border-radius: 50%;
}
.belt {
  position: absolute;
  width: 100%;
  height: 30px;
  background-color: #000000;
  top: 100px;
}
.belt:before {
  height: 100%;
  width: 40px;
  border: 7px solid #ffdc2e;
  margin: auto;
  left: 0;
  right: 0;
}
.belt:after {
  height: 5px;
  width: 15px;
  background-color: #ffdc2e;
  left: 100px;
  top: 12px;
}
.shoe {
  height: 20px;
  width: 20px;
  background-color: #000000;
  position: absolute;
  top: 220px;
  left: 60px;
  border-radius: 20px 0 0 0;
}
.shoe:before {
  height: 20px;
  width: 20px;
  background-color: #000000;
  top: 0;
  left: 60px;
  border-radius: 0 20px 0 0;
}

.text{
  font-size: 20px;
}

.snowflake {
  position: absolute;
  display: block;
  position: absolute;
  -webkit-border-radius: 50%;
  -moz-border-radius: 50%;
  border-radius: 50%;
  -webkit-transform: translateZ(0);
  -moz-transform: translateZ(0);
  -ms-transform: translateZ(0);
  -o-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-image: -webkit-radial-gradient(
    center,
    circle farthest-corner,
    rgba(255, 255, 255, 1) 40%,
    rgba(255, 255, 255, 0) 100%
  );
  background-image: -moz-radial-gradient(
    center,
    circle farthest-corner,
    rgba(255, 255, 255, 1) 40%,
    rgba(255, 255, 255, 0) 100%
  );
  background-image: -ms-radial-gradient(
    center,
    circle farthest-corner,
    rgba(255, 255, 255, 1) 40%,
    rgba(255, 255, 255, 0) 100%
  );
  background-image: radial-gradient(
    center,
    circle farthest-corner,
    rgba(255, 255, 255, 1) 40%,
    rgba(255, 255, 255, 0) 100%
  );
}

#snow {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
}


     </style>
</head>
<body>
  <div id="snow"></div>
  <div class="container">
      <div class="santa">
        <div class="hand-l"></div>
        <div class="hand-r"></div>
        <div class="hat"></div>
        <div class="face">
          <div class="beard"></div>
          <div class="eyes"></div>
        </div>
        <div class="belt"></div>
        <div class="shoe"></div>
      </div>
    </div>
<div class="card">
<div class="inside">
    <p class="text">Chúc mừng giáng sinh!</p>
     <p class="text">Chúc Chị Nana giáng sinh vui vẻ. Cầu mong chị sẽ nhận được tất cả những gì chị mong muốn và mơ ước. Cầu mong Giáng sinh này mang lại cho chị tất cả những gì chị cần trong cuộc sống. Giáng sinh vui vẻ!</p>
      <p class="text">Mãi yêu!</p>
      <p class="text">❤</p>
</div>    
<div class="outside">
    <div class="front">
        <div class="belt1"></div>
        <div class="mouth"></div>
        <div class="beard1"></div>
    </div>
    <div class="back"></div>
</div>
</div>
</body>
<script type="text/javascript">
  // Happy Xmas! by @neave

var Snowflake = (function() {

  var flakes;
  var flakesTotal = 250;
  var wind = 0;
  var mouseX;
  var mouseY;

  function Snowflake(size, x, y, vx, vy) {
    this.size = size;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.hit = false;
    this.melt = false;
    this.div = document.createElement('div');
    this.div.classList.add('snowflake');
    this.div.style.width = this.size + 'px';
    this.div.style.height = this.size + 'px';
  }

  Snowflake.prototype.move = function() {
    if (this.hit) {
      if (Math.random() > 0.995) this.melt = true;
    } else {
      this.x += this.vx + Math.min(Math.max(wind, -10), 10);
      this.y += this.vy;
    }

    // Wrap the snowflake to within the bounds of the page
    if (this.x > window.innerWidth + this.size) {
      this.x -= window.innerWidth + this.size;
    }

    if (this.x < -this.size) {
      this.x += window.innerWidth + this.size;
    }

    if (this.y > window.innerHeight + this.size) {
      this.x = Math.random() * window.innerWidth;
      this.y -= window.innerHeight + this.size * 2;
      this.melt = false;
    }

    var dx = mouseX - this.x;
    var dy = mouseY - this.y;
    this.hit = !this.melt && this.y < mouseY && dx * dx + dy * dy < 2400;
  };

  Snowflake.prototype.draw = function() {
    this.div.style.transform =
    this.div.style.MozTransform =
    this.div.style.webkitTransform =
      'translate3d(' + this.x + 'px' + ',' + this.y + 'px,0)';
  };

  function update() {
    for (var i = flakes.length; i--; ) {
      var flake = flakes[i];
      flake.move();
      flake.draw();
    }
    requestAnimationFrame(update);
  }

  Snowflake.init = function(container) {
    flakes = [];

    for (var i = flakesTotal; i--; ) {
      var size = (Math.random() + 0.2) * 12 + 1;
      var flake = new Snowflake(
        size,
        Math.random() * window.innerWidth,
        Math.random() * window.innerHeight,
        Math.random() - 0.5,
        size * 0.3
      );
      container.appendChild(flake.div);
      flakes.push(flake);
    }
    
    container.onmousemove = function(event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
      wind = (mouseX - window.innerWidth / 2) / window.innerWidth * 6;
    };

    container.ontouchstart = function(event) {
      mouseX = event.targetTouches[0].clientX;
      mouseY = event.targetTouches[0].clientY;
      event.preventDefault();
    };

    window.ondeviceorientation = function(event) {
      if (event) {
        wind = event.gamma / 10;
      }
    };
    
    update();
  };

  return Snowflake;

}());

window.onload = function() {
  setTimeout(function() {
    Snowflake.init(document.getElementById('snow'));
  }, 500);
}


</script>
</html>
