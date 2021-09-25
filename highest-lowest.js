function highAndLow(numbers){
    let highest = null;
    let lowest = null;
    
    numbers.split(' ').forEach(number => {
      const n = Number(number);
      
      if (null === highest) {
        lowest = highest = n;
        return;
      }
      
      if (n >= highest) {
        highest = n;
      }
      if (n <= lowest) {
        lowest = n;
      }
    });
    
    return `${highest} ${lowest}`;
  }
  