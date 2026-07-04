
module.exports={
    default:{
        
        requireModule:[
            "ts-node/register"
        ],

        require: [
  "src/test/steps/**/*.ts",
  "src/test/hooks/**/*.ts",
  "src/test/world/**/*.ts",
  "src/test/support/**/*.ts"
],
        "formatOptions":{
            snippetInterface:"async-await"
    },
       paths:[
            "src/test/features/**/*.feature"
        ],
        publishQuiet:true,
        dryRun:false,
        format:[
            "progress-bar",
            "html:reports/cucumber-report.html",
            "json:reports/cucumber-report.json"
        ]
    }
};