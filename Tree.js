const obj = {
  left: {
    a: 1,
  },
  right: {
    right: {
      m : 'lol',
    }
  }
};


console.log('До \n',obj);

const func = (obj) => {
  // if (!obj.left && !obj.right){
  //   return;
  // }
  // if(obj.left && obj.right) {
  //   const swap = obj.left;
  //   obj.left = obj.right;
  //   obj.right = swap;
  //   func(obj.right);
  //   func(obj.left);
  // } else {
  //   if (obj.left) {
  //     obj.right = obj.left;
  //     delete obj.left;
  //     func(obj.right)
  //   } else {
  //     obj.left = obj.right;
  //     delete obj.right;
  //     func(obj.left)
  //   }
  // }
  const temp = obj.left;
  obj.left = obj.right;
  obj.right = temp;
  if (obj.left) {
    func(obj.left);
  }
  if (obj.right) {
    func(obj.right);
  }
};

func(obj);
console.log('После\n', obj);
