const express = require("express");
const cors = require("cors");
const { generateFile } = require("./generateFile");
const { compileCode } = require("./compileCode");
const pathJson = require("./executionPath");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/run", async (req, res) => {
  const { language = "cpp", code } = req.body;
  if (code === undefined) {
    return res.status(400).json({ success: false, error: "Empty code body!" });
  }
    try{
  const filepath = await generateFile(language, code);
  const output = await compileCode(language,filepath,pathJson[`${language}`])
  return res.json({filepath, output});
  }catch(err){
  res.status(500).json({err})
    }
  
});
app.listen(8002, () => {
  console.log(`Listening on port 8000!`);
});
