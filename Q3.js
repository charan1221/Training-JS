const input_arr = [ 
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
  ];
  
  const groupObjectsBy = (arr, key) => {
    return arr.reduce(function(final, obj){
      (final[obj[key]] = final[obj[key]] || []).push(obj);
      return final;
    },{});
  };
  
  console.log(groupObjectsBy(input_arr, "channel"));