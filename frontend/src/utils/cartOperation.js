var localStorage = window.localStorage;

function getCartItems() {
  return JSON.parse(localStorage.getItem("items"));
}

function getCartLength() {
  return JSON.parse(localStorage.getItem("items")).length;
}

function addToCart(data) {
  var oldData = [];
  var newData = [];
  oldData = JSON.parse(localStorage.getItem("items"));
  if (oldData != null) {
    var flag = true;
    for (var i = 0; i < oldData.length; i++) {
      if (oldData[i].title === data.title) {
        flag = false;
      }
    }
    if (flag) {
      oldData.push(data);
      newData = newData.concat(oldData);
    } else {
      newData = newData.concat(oldData);
    }
  } else {
    newData.push(data);
  }
  localStorage.setItem("items", JSON.stringify(newData));
}

function delFromCart(data, count) {
  var oldData = [];
  var newData = [];
  oldData = JSON.parse(localStorage.getItem("items"));
  if (oldData != null) {
    for (var i = 0; i < oldData.length; i++) {
      if (oldData[i].goodsId === data.goodsId) {
        if (count === 0) {
          oldData.splice(i, 1);
        } else {
          oldData[i].count = count;
        }
      }
    }
    newData = newData.concat(oldData);
  }
  localStorage.setItem("items", JSON.stringify(newData));
}

function clearCart() {
  localStorage.removeItem("items");
}

function chageInput(data, count) {
  var oldData = [];
  var newData = [];
  oldData = JSON.parse(localStorage.getItem("items"));
  for (var i = 0; i < oldData.length; i++) {
    if (oldData[i].goodsId === data.goodsId) {
      if (count === 0) {
        oldData.splice(i, 1);
      } else {
        oldData[i].count = count;
      }
    }
  }
  newData = newData.concat(oldData);


  localStorage.setItem("items", JSON.stringify(newData));
}

export {
  getCartItems,
  getCartLength,
  addToCart,
  delFromCart,
  clearCart,
  chageInput
}