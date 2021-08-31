const compileLanguages = require('compile-run');
const compileCode = (language,filepath, executionPath) => {
  const afterCompile = compileLanguages[`${language}`].runFile(filepath,executionPath ? executionPath:'', (err, response) => {
  if(err) return err;
  else return response;
});
return afterCompile;
}
module.exports = {
  compileCode,
};
