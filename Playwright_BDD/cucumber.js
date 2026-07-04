
module.exports={
    default:{
        
        requireModule:[
            "ts-node/register"
        ],

        require:[
        "src/test/steps/**/*.ts",
        "src/hooks/**/*.ts",
        
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
            "json:reports/cucumber-report.json",
            "rerun:@rerun.txt"
        ]
    }
    ,
    rerun: {
    requireModule: ["ts-node/register"],

    require: [
      "src/test/steps/**/*.ts",
      "src/hooks/**/*.ts",
      "src/test/support/**/*.ts"
    ],

    formatOptions: {
      snippetInterface: "async-await"
    },

    publishQuiet: true,
    dryRun: false
  }
    
};