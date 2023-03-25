// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
 function fuzzyMatch(drivers, query) {
    if (!query || typeof query !== 'string') {
      return [];
    }
    
    return drivers.filter(function(driver) {
      const partialMatch = driver.slice(0, query.length);
      return partialMatch.toLowerCase() === query.toLowerCase();
    });
}
function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}