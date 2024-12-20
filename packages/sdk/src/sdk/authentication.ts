/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { authenticationCreateAuthToken } from "../funcs/authenticationCreateAuthToken.js";
import { authenticationDeleteAuthToken } from "../funcs/authenticationDeleteAuthToken.js";
import { authenticationGetAuthToken } from "../funcs/authenticationGetAuthToken.js";
import { authenticationListAuthTokens } from "../funcs/authenticationListAuthTokens.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import {
  CreateAuthTokenRequest,
  CreateAuthTokenResponseBody,
} from "../models/operations/createauthtoken.js";
import {
  DeleteAuthTokenRequest,
  DeleteAuthTokenResponseBody,
} from "../models/operations/deleteauthtoken.js";
import {
  GetAuthTokenRequest,
  GetAuthTokenResponseBody,
} from "../models/operations/getauthtoken.js";
import { ListAuthTokensResponseBody } from "../models/operations/listauthtokens.js";
import { unwrapAsync } from "../types/fp.js";

export class Authentication extends ClientSDK {
  /**
   * List Auth Tokens
   *
   * @remarks
   * Retrieve a list of the current User's authentication tokens.
   */
  async listAuthTokens(
    options?: RequestOptions,
  ): Promise<ListAuthTokensResponseBody> {
    return unwrapAsync(authenticationListAuthTokens(
      this,
      options,
    ));
  }

  /**
   * Create an Auth Token
   *
   * @remarks
   * Creates and returns a new authentication token for the currently authenticated User. The `bearerToken` property is only provided once, in the response body, so be sure to save it on the client for use with API requests.
   */
  async createAuthToken(
    request: CreateAuthTokenRequest,
    options?: RequestOptions,
  ): Promise<CreateAuthTokenResponseBody> {
    return unwrapAsync(authenticationCreateAuthToken(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Auth Token Metadata
   *
   * @remarks
   * Retrieve metadata about an authentication token belonging to the currently authenticated User.
   */
  async getAuthToken(
    request: GetAuthTokenRequest,
    options?: RequestOptions,
  ): Promise<GetAuthTokenResponseBody> {
    return unwrapAsync(authenticationGetAuthToken(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete an authentication token
   *
   * @remarks
   * Invalidate an authentication token, such that it will no longer be valid for future HTTP requests.
   */
  async deleteAuthToken(
    request: DeleteAuthTokenRequest,
    options?: RequestOptions,
  ): Promise<DeleteAuthTokenResponseBody> {
    return unwrapAsync(authenticationDeleteAuthToken(
      this,
      request,
      options,
    ));
  }
}
