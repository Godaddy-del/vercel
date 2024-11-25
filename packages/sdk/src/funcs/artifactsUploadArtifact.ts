/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { VercelCore } from "../core.js";
import { encodeFormQuery, encodeSimple } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import {
  UploadArtifactRequest,
  UploadArtifactRequest$outboundSchema,
  UploadArtifactResponseBody,
  UploadArtifactResponseBody$inboundSchema,
} from "../models/operations/uploadartifact.js";
import { Result } from "../types/fp.js";

/**
 * Upload a cache artifact
 *
 * @remarks
 * Uploads a cache artifact identified by the `hash` specified on the path. The cache artifact can then be downloaded with the provided `hash`.
 */
export async function artifactsUploadArtifact(
  client: VercelCore,
  request: UploadArtifactRequest,
  options?: RequestOptions,
): Promise<
  Result<
    UploadArtifactResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const parsed = safeParse(
    request,
    (value) => UploadArtifactRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return parsed;
  }
  const payload = parsed.value;
  const body = payload.RequestBody;

  const pathParams = {
    hash: encodeSimple("hash", payload.hash, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path = pathToFunc("/v8/artifacts/{hash}")(pathParams);

  const query = encodeFormQuery({
    "slug": payload.slug,
    "teamId": payload.teamId,
  });

  const headers = new Headers({
    "Content-Type": "application/octet-stream",
    Accept: "application/json",
    "Content-Length": encodeSimple(
      "Content-Length",
      payload["Content-Length"],
      { explode: false, charEncoding: "none" },
    ),
    "x-artifact-client-ci": encodeSimple(
      "x-artifact-client-ci",
      payload["x-artifact-client-ci"],
      { explode: false, charEncoding: "none" },
    ),
    "x-artifact-client-interactive": encodeSimple(
      "x-artifact-client-interactive",
      payload["x-artifact-client-interactive"],
      { explode: false, charEncoding: "none" },
    ),
    "x-artifact-duration": encodeSimple(
      "x-artifact-duration",
      payload["x-artifact-duration"],
      { explode: false, charEncoding: "none" },
    ),
    "x-artifact-tag": encodeSimple(
      "x-artifact-tag",
      payload["x-artifact-tag"],
      { explode: false, charEncoding: "none" },
    ),
  });

  const secConfig = await extractSecurity(client._options.bearerToken);
  const securityInput = secConfig == null ? {} : { bearerToken: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "uploadArtifact",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.bearerToken,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "PUT",
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["400", "401", "402", "403", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result] = await M.match<
    UploadArtifactResponseBody,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(202, UploadArtifactResponseBody$inboundSchema),
    M.fail([400, 401, 402, 403, "4XX", "5XX"]),
  )(response);
  if (!result.ok) {
    return result;
  }

  return result;
}