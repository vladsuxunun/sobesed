function compareArrays(arr1, arr2) {
   var t = false;
   var ar5 = [1, 2,3];
      ar6 = [1,7,3];
   if(arr1 >= arr2 && arr1 <= arr2)
     {
       t = true;
     }
   return t; // boolean
}

function advancedFilter(arr) {
  var  testFilter = arr.filter(element => element > 0).map(n => n * 10);
   return arr
}
