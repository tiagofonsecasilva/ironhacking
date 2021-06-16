function detectCollision(bug) {
    return !((currentGame.hacker.x > bug.x + bug.width) ||
        (currentGame.hacker.x + currentGame.hacker.width < bug.x) ||
        (currentGame.hacker.y > bug.y + bug.height))
  }
  function detectCollisionFire(bug, fire) {
  
    return !((fire.x > bug.x + bug.width) ||
        (fire.x + fire.width < bug.x) ||
        (fire.y > bug.y + bug.height))
  }
  
  function scoreBump(score) { // tentar que fique só com uma função
    return (
      currentGame.score > 10000
    );
  }
  
  function scoreFinished(score) { // tentar que fique só com uma função
    return (
      currentGame.score < 0
    );
  }

  function checkBugs() {
    setInterval(() => {
        currentGame.bugs.forEach((bug, index) => {
            if(bug.blow) {
             currentGame.bugs.splice(index, 1)
        }
        })
    }, 1000)
  }