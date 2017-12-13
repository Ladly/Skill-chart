class Skill {
  constructor() {
    this.skills = [];
  }
  addSkill(skill) {
    this.skills.push(skill);
  }
  drawGraph() {
    let skillChart = document.getElementById("skill-chart");
    let ctx = skillChart.getContext("2d");
    let stuff = this.skills;

    let skillWidth = 100;
    let likeWidth = 20;
    let gap = 155;
    let color = "";
    let y = 250;

    ctx.beginPath()
    ctx.moveTo(50, 250)
    ctx.lineTo(50,20)
    ctx.lineTo(55,35)
    ctx.lineTo(45,35)
    ctx.lineTo(50,20)
    ctx.fill()
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(50,130)
    ctx.lineTo(1400,130)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(50,75)
    ctx.lineTo(1400,75)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(50,185)
    ctx.lineTo(1400,185)
    ctx.stroke()

    ctx.beginPath()
    ctx.moveTo(50,250)
    ctx.lineTo(1400,250)
    ctx.stroke()

    function animate() {
      ctx.save();

      for (let i = 0; i < stuff.length; i++) {
        if(stuff[i].skill > 50){
          color = "rgba(0,225, 0, .7)"
        } else if(stuff[i].skill < 50 && stuff[i].skill > 20) {
            color= 'rgba(255, 255, 0, .5)'
        } else {
          color = 'rgba(255, 0, 0, .8)'
        }

        ctx.fillStyle = color;
      ctx.shadowColor = "rgba(0, 0, 0, .2)"
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.shadowBlure = 3
        if (y > 250 - stuff[i].skill * 2) {
          ctx.fillRect(i * 150 + gap, y, skillWidth, 1);
        }

        ctx.fillStyle = "purple";
        if (y > 250 - stuff[i].liked * 2) {
          ctx.fillRect(i * 150 + gap - 20, y , likeWidth, 1);
        }
        ctx.shadowColor = "rgba(0, 0, 0, 0)"
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      ctx.shadowBlure = 0
        ctx.fillStyle = 'black';
        ctx.translate(10, 0)
        ctx.font = "italic bold 15px Helvetica, sans-serif";
        ctx.fillText(
          stuff[i].name,
          i * 150 + gap,
          skillChart.height - stuff[i].skill * 2 - 60,
          80
        );
      }
      y--;

      ctx.restore();
    }

    let startAnimate = setInterval(animate, 30);
  }
}

let wolf = new Skill();

wolf.addSkill({
  name: "Javascript",
  skill: 80,
  liked: 100
});

wolf.addSkill({
  name: "HTML5",
  skill: 65,
  liked: 85
});

wolf.addSkill({
  name: "CSS3",
  skill: 60,
  liked: 60
});

wolf.addSkill({
  name: "Mysql",
  skill: 45,
  liked: 30
});

wolf.addSkill({
  name: "Node.js",
  skill: 45,
  liked: 50
});

wolf.addSkill({
  name: "React and redux",
  skill: 50,
  liked: 90
});

wolf.addSkill({
  name: "Responsivnes",
  skill: 20,
  liked: 20
});

wolf.addSkill({
  name: "Design",
  skill: 10,
  liked: 10
});

window.onload = wolf.drawGraph();
