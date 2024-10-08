// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BaseHttpTest } from "./baseHttpTest.js";
import { request } from "undici";

export class UndiciRequestTest extends BaseHttpTest {
  constructor() {
    super();
  }

  async run(): Promise<void> {
    const { body } = await request(this.url);
    await body.text();
  }
}
