const getTheTitles = function(...args) {
    let titleArray = []; 
    for (let i = 0; i < args.length; i++) {
        titleArray += args[i].title; 
    }
    return titleArray; 
};

// Do not edit below this line
module.exports = getTheTitles;
