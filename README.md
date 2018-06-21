# AzureFunctionExperiments
Azure Functional experiments

## Node.js

### Storage Tables

Notes on some references needed. 
1) There is a missing feature that means bindings can read and write but not upsert
Cant find the link at the moment :(

2) Using the Azure SDK for table storage in node.js is pretty simple once you have all the prerequisites installed
[The getting started with the SDK for node.js](https://docs.microsoft.com/en-gb/azure/cosmos-db/table-storage-how-to-use-nodejs#update-an-entity)
[The SDK documentation](https://azure.github.io/azure-storage-node/TableService.html#toc1__anchor)
[How to install node packages using the UI for Azure functions](https://docs.microsoft.com/en-us/azure/azure-functions/functions-reference-node#node-version-and-package-management)

3) Not yet tested how to secure the credentials but working through it
[What is MSI for Azure resources](https://docs.microsoft.com/en-us/azure/active-directory/managed-service-identity/overview)
[Using MSI in Azure getting started guide](https://blogs.msdn.microsoft.com/cloud_solution_architect/2017/12/22/using-managed-service-identities-in-functions-to-access-key-vault/)
[App example code to use Access Key Vault](https://docs.microsoft.com/en-gb/azure/app-service/app-service-managed-service-identity)
[Pricing guidelines](https://azure.microsoft.com/en-gb/pricing/details/key-vault/)