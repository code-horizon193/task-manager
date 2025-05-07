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
}

function randomImgs(count, array) {
  // to make sure there is no doublicated indexs
  let indxes = new Set();

  while (indxes.size < count) {
    let randIdx = Math.floor(Math.random() * array.length);
    indxes.add(randIdx);
  }
  return Array.from(indxes);
}

function highPriority(list) {
  const newList = list.filter((i) => i.priority.toLowerCase() === "high");
  return newList;
};

function medPriority(list) {
  const newList = list.filter((i) => i.priority.toLowerCase() === "medium");
  return newList;
};

function lowPriority(list) {
  const newList = list.filter((i) => i.priority.toLowerCase() === "low");
  return newList;
};

export const funcs = {
  getAllTeam,
  randomImgs,
  highPriority,
  medPriority ,
  lowPriority
};
