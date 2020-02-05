

var isRealString = (str) => {
//  console.log('getUserList',users)
  return typeof str === 'string' && str.trim().length > 0;

};


module.exports = {isRealString};
