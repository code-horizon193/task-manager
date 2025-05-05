function getAllTeam(array) {
  let teamArray = [];
  const alltem = array.map((i) => i.team);
  alltem.map((arr) => {
    arr.forEach((item) => {
      if (teamArray.includes(item)) {
        return;
      }

      teamArray.push(item);
    });
  });
  return teamArray;
};

function randomImgs(count ,array) {
    // to make sure there is no doublicated indexs
    let indxes = new Set();
    
    while (indxes.size < count) {
        let randIdx = Math.floor(Math.random() * array.length);
        indxes.add(randIdx);
    };
    return Array.from(indxes);
}

export const funcs = {
    getAllTeam ,
    randomImgs
}