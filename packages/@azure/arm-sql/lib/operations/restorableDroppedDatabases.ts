/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/restorableDroppedDatabasesMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a RestorableDroppedDatabases. */
export class RestorableDroppedDatabases {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a RestorableDroppedDatabases.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a deleted database that can be restored
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param restorableDroppededDatabaseId The id of the deleted database in the form of
   * databaseName,deletionTimeInFileTimeFormat
   * @param [options] The optional parameters
   * @returns Promise<Models.RestorableDroppedDatabasesGetResponse>
   */
  get(resourceGroupName: string, serverName: string, restorableDroppededDatabaseId: string, options?: msRest.RequestOptionsBase): Promise<Models.RestorableDroppedDatabasesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param restorableDroppededDatabaseId The id of the deleted database in the form of
   * databaseName,deletionTimeInFileTimeFormat
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, restorableDroppededDatabaseId: string, callback: msRest.ServiceCallback<Models.RestorableDroppedDatabase>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param restorableDroppededDatabaseId The id of the deleted database in the form of
   * databaseName,deletionTimeInFileTimeFormat
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serverName: string, restorableDroppededDatabaseId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RestorableDroppedDatabase>): void;
  get(resourceGroupName: string, serverName: string, restorableDroppededDatabaseId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RestorableDroppedDatabase>, callback?: msRest.ServiceCallback<Models.RestorableDroppedDatabase>): Promise<Models.RestorableDroppedDatabasesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        restorableDroppededDatabaseId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RestorableDroppedDatabasesGetResponse>;
  }

  /**
   * Gets a list of deleted databases that can be restored
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param [options] The optional parameters
   * @returns Promise<Models.RestorableDroppedDatabasesListByServerResponse>
   */
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase): Promise<Models.RestorableDroppedDatabasesListByServerResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, callback: msRest.ServiceCallback<Models.RestorableDroppedDatabaseListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByServer(resourceGroupName: string, serverName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RestorableDroppedDatabaseListResult>): void;
  listByServer(resourceGroupName: string, serverName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RestorableDroppedDatabaseListResult>, callback?: msRest.ServiceCallback<Models.RestorableDroppedDatabaseListResult>): Promise<Models.RestorableDroppedDatabasesListByServerResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        options
      },
      listByServerOperationSpec,
      callback) as Promise<Models.RestorableDroppedDatabasesListByServerResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/restorableDroppedDatabases/{restorableDroppededDatabaseId}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.restorableDroppededDatabaseId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RestorableDroppedDatabase
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByServerOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/restorableDroppedDatabases",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RestorableDroppedDatabaseListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
