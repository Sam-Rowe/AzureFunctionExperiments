var azure = require('azure-storage');
var version = process.version;

module.exports = function (context, req) {
    context.log('JavaScript running as version ' + version);
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }

    
    context.log('JavaScript queue trigger function processed work item');

    
    var tableSvc = azure.createTableService("<<STORAGEACCOUNT>>","<<APIKEY>>") // normally this would need connection details but I hope that as its a functiont he binding will populate the connection string
    tableSvc.insertOrMergeEntity('GarageDoor', {
        "PartitionKey" : "86",
        "RowKey" : "GarageDoor",
        "Open" : "true"
    },
    function (error,result, response ){
        if(error){
            context.log("Error occured" + error);
        }
        if(result){
            context.log("Result " + result);
        }
        if(response){
            context.log("Response " + response );
        }
    } )

    

    context.done();
};