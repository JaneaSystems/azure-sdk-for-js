/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/workItemConfigurationsMappers";
import * as Parameters from "../models/parameters";
import { ApplicationInsightsManagementClientContext } from "../applicationInsightsManagementClientContext";

/** Class representing a WorkItemConfigurations. */
export class WorkItemConfigurations {
  private readonly client: ApplicationInsightsManagementClientContext;

  /**
   * Create a WorkItemConfigurations.
   * @param {ApplicationInsightsManagementClientContext} client Reference to the service client.
   */
  constructor(client: ApplicationInsightsManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the list work item configurations that exist for the application
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkItemConfigurationsListResponse>
   */
  list(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkItemConfigurationsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param callback The callback
   */
  list(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.WorkItemConfigurationsListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkItemConfigurationsListResult>): void;
  list(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkItemConfigurationsListResult>, callback?: msRest.ServiceCallback<Models.WorkItemConfigurationsListResult>): Promise<Models.WorkItemConfigurationsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.WorkItemConfigurationsListResponse>;
  }

  /**
   * Create a work item configuration for an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigurationProperties Properties that need to be specified to create a work
   * item configuration of a Application Insights component.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkItemConfigurationsCreateResponse>
   */
  create(resourceGroupName: string, resourceName: string, workItemConfigurationProperties: Models.WorkItemCreateConfiguration, options?: msRest.RequestOptionsBase): Promise<Models.WorkItemConfigurationsCreateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigurationProperties Properties that need to be specified to create a work
   * item configuration of a Application Insights component.
   * @param callback The callback
   */
  create(resourceGroupName: string, resourceName: string, workItemConfigurationProperties: Models.WorkItemCreateConfiguration, callback: msRest.ServiceCallback<Models.WorkItemConfiguration>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigurationProperties Properties that need to be specified to create a work
   * item configuration of a Application Insights component.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, resourceName: string, workItemConfigurationProperties: Models.WorkItemCreateConfiguration, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkItemConfiguration>): void;
  create(resourceGroupName: string, resourceName: string, workItemConfigurationProperties: Models.WorkItemCreateConfiguration, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkItemConfiguration>, callback?: msRest.ServiceCallback<Models.WorkItemConfiguration>): Promise<Models.WorkItemConfigurationsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        workItemConfigurationProperties,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.WorkItemConfigurationsCreateResponse>;
  }

  /**
   * Gets default work item configurations that exist for the application
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkItemConfigurationsGetDefaultResponse>
   */
  getDefault(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkItemConfigurationsGetDefaultResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param callback The callback
   */
  getDefault(resourceGroupName: string, resourceName: string, callback: msRest.ServiceCallback<Models.WorkItemConfiguration>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  getDefault(resourceGroupName: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkItemConfiguration>): void;
  getDefault(resourceGroupName: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkItemConfiguration>, callback?: msRest.ServiceCallback<Models.WorkItemConfiguration>): Promise<Models.WorkItemConfigurationsGetDefaultResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        options
      },
      getDefaultOperationSpec,
      callback) as Promise<Models.WorkItemConfigurationsGetDefaultResponse>;
  }

  /**
   * Delete a work item configuration of an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigId The unique work item configuration Id. This can be either friendly name
   * of connector as defined in connector configuration
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, resourceName: string, workItemConfigId: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigId The unique work item configuration Id. This can be either friendly name
   * of connector as defined in connector configuration
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, workItemConfigId: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigId The unique work item configuration Id. This can be either friendly name
   * of connector as defined in connector configuration
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, resourceName: string, workItemConfigId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, resourceName: string, workItemConfigId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        workItemConfigId,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Gets specified work item configuration for an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigId The unique work item configuration Id. This can be either friendly name
   * of connector as defined in connector configuration
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkItemConfigurationsGetItemResponse>
   */
  getItem(resourceGroupName: string, resourceName: string, workItemConfigId: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkItemConfigurationsGetItemResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigId The unique work item configuration Id. This can be either friendly name
   * of connector as defined in connector configuration
   * @param callback The callback
   */
  getItem(resourceGroupName: string, resourceName: string, workItemConfigId: string, callback: msRest.ServiceCallback<Models.WorkItemConfiguration>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigId The unique work item configuration Id. This can be either friendly name
   * of connector as defined in connector configuration
   * @param options The optional parameters
   * @param callback The callback
   */
  getItem(resourceGroupName: string, resourceName: string, workItemConfigId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkItemConfiguration>): void;
  getItem(resourceGroupName: string, resourceName: string, workItemConfigId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkItemConfiguration>, callback?: msRest.ServiceCallback<Models.WorkItemConfiguration>): Promise<Models.WorkItemConfigurationsGetItemResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        workItemConfigId,
        options
      },
      getItemOperationSpec,
      callback) as Promise<Models.WorkItemConfigurationsGetItemResponse>;
  }

  /**
   * Update a work item configuration for an Application Insights component.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigId The unique work item configuration Id. This can be either friendly name
   * of connector as defined in connector configuration
   * @param workItemConfigurationProperties Properties that need to be specified to update a work
   * item configuration for this Application Insights component.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkItemConfigurationsUpdateItemResponse>
   */
  updateItem(resourceGroupName: string, resourceName: string, workItemConfigId: string, workItemConfigurationProperties: Models.WorkItemCreateConfiguration, options?: msRest.RequestOptionsBase): Promise<Models.WorkItemConfigurationsUpdateItemResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigId The unique work item configuration Id. This can be either friendly name
   * of connector as defined in connector configuration
   * @param workItemConfigurationProperties Properties that need to be specified to update a work
   * item configuration for this Application Insights component.
   * @param callback The callback
   */
  updateItem(resourceGroupName: string, resourceName: string, workItemConfigId: string, workItemConfigurationProperties: Models.WorkItemCreateConfiguration, callback: msRest.ServiceCallback<Models.WorkItemConfiguration>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param resourceName The name of the Application Insights component resource.
   * @param workItemConfigId The unique work item configuration Id. This can be either friendly name
   * of connector as defined in connector configuration
   * @param workItemConfigurationProperties Properties that need to be specified to update a work
   * item configuration for this Application Insights component.
   * @param options The optional parameters
   * @param callback The callback
   */
  updateItem(resourceGroupName: string, resourceName: string, workItemConfigId: string, workItemConfigurationProperties: Models.WorkItemCreateConfiguration, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkItemConfiguration>): void;
  updateItem(resourceGroupName: string, resourceName: string, workItemConfigId: string, workItemConfigurationProperties: Models.WorkItemCreateConfiguration, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkItemConfiguration>, callback?: msRest.ServiceCallback<Models.WorkItemConfiguration>): Promise<Models.WorkItemConfigurationsUpdateItemResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceName,
        workItemConfigId,
        workItemConfigurationProperties,
        options
      },
      updateItemOperationSpec,
      callback) as Promise<Models.WorkItemConfigurationsUpdateItemResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/WorkItemConfigs",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkItemConfigurationsListResult
    },
    default: {
      bodyMapper: Mappers.WorkItemConfigurationError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/WorkItemConfigs",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "workItemConfigurationProperties",
    mapper: {
      ...Mappers.WorkItemCreateConfiguration,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.WorkItemConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getDefaultOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/DefaultWorkItemConfig",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkItemConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/WorkItemConfigs/{workItemConfigId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.workItemConfigId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getItemOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/WorkItemConfigs/{workItemConfigId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.workItemConfigId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkItemConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateItemOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/WorkItemConfigs/{workItemConfigId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.resourceName,
    Parameters.workItemConfigId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "workItemConfigurationProperties",
    mapper: {
      ...Mappers.WorkItemCreateConfiguration,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.WorkItemConfiguration
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
