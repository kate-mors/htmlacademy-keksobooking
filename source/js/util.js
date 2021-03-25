export const generateWordsEnding = function (number, array) {
  if (number === 1) {
    return array[0];
  } if (number > 1 && number < 5) {
    return array [1];
  }
  if (number === 0 || number >=5) {
    return array[2];
  }
};

export const disable = function (parent) {
  for (let i = 0; i < parent.children.length; i++) {
    const child = parent.children[i];
    child.disabled = true;
  }
};

export const enable = function (parent) {
  for (let i = 0; i < parent.children.length; i++) {
    const child = parent.children[i];
    child.disabled = false
  }
};
