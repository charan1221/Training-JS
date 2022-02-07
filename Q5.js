const SortArray = function(originalArray){
    this.originalArray = originalArray;
    
    const sortArray = (arr) => {
      return arr.sort((a,b) => a-b);
    }
    
    this.getSortedArray = () => {
      return sortArray(this.originalArray);
      };
  }
  
  const SortObjectArray = function(originalArray){
    SortArray.call(this, originalArray);
  }
  
  const test = new SortArray([1,34,13,3453,3,1324,3]);
  const test2 = new SortObjectArray([ 
    {
      "channel": "A",
      "name": "shoe"
    },
    {
      "channel": "A",
      "name": "electronics"
    },
    {
      "channel": "B",
      "name": "apparel"
    },
    {
      "channel": "C",
      "name": "electronics"
    }
  ]
  );
  
  
  console.log(test.getSortedArray());
  console.log(test2.getSortedArray());