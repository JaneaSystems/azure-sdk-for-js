/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { EventHubManagementClient } from "@azure/arm-eventhub";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Gets all Alias(Disaster Recovery configurations)
 *
 * @summary Gets all Alias(Disaster Recovery configurations)
 * x-ms-original-file: specification/eventhub/resource-manager/Microsoft.EventHub/stable/2024-01-01/examples/disasterRecoveryConfigs/EHAliasList.json
 */
async function ehAliasList() {
  const subscriptionId =
    process.env["EVENTHUB_SUBSCRIPTION_ID"] || "exampleSubscriptionId";
  const resourceGroupName =
    process.env["EVENTHUB_RESOURCE_GROUP"] || "exampleResourceGroup";
  const namespaceName = "sdk-Namespace-8859";
  const credential = new DefaultAzureCredential();
  const client = new EventHubManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.disasterRecoveryConfigs.list(
    resourceGroupName,
    namespaceName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  ehAliasList();
}

main().catch(console.error);
