/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { ComputeManagementClient } = require("@azure/arm-compute");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to List soft-deleted resources of an artifact in the gallery, such as soft-deleted gallery image version of an image.
 *
 * @summary List soft-deleted resources of an artifact in the gallery, such as soft-deleted gallery image version of an image.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/galleryExamples/GallerySoftDeletedResource_ListByArtifactName.json
 */
async function listSoftDeletedResourcesOfAnArtifactInTheGallery() {
  const subscriptionId = process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName = process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const artifactType = "images";
  const artifactName = "myGalleryImageName";
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.softDeletedResource.listByArtifactName(
    resourceGroupName,
    galleryName,
    artifactType,
    artifactName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listSoftDeletedResourcesOfAnArtifactInTheGallery();
}

main().catch(console.error);
