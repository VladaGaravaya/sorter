class Sorter {
  constructor() {
    this.arr=[];
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    function compareNumbers(a, b) {
      return a - b;
    }
    indices.sort();
    var a=[];
    var j =0;
    for(var i=indices[0];i<indices[0]+indices.length;i++){
      a[j]=this.arr[i];
      j++;
    }
    a.sort(compareNumbers);
    j=0;
    for(var k=indices[0];k<indices[0]+indices.length;k++){
      this.arr[k]=a[j];
      j++;
    }
    return this.arr;
  }

  setComparator(compareFunction) {
    return this.arr.sort(compareFunction);
  }
}

module.exports = Sorter;