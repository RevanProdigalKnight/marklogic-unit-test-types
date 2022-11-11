// deno-lint-ignore-file ban-types
/// <reference path="./node_modules/marklogic-server-typescript-definitions/index.d.ts" />

declare module 'test' {
	global {
		namespace MarkLogic {
			interface Require {
				(module: '/test/test-helper.xqy'): test.Test;
			}

			namespace test {
				interface Test {
					readonly PREVIOUS_LINE_FILE: string;
					readonly __LINE__: xs.int;
					readonly __CALLER_FILE__: string;
					readonly localUrl: string;
					readonly DEFAULT_HTTP_OPTIONS: Element;

					getCaller(): string;
					getTestFile(filename: string, format?: string, unquote?: string): Document;
					loadTestFile(
						filename: string,
						databaseId: xs.unsignedLong,
						uri: string,
						permissions?: sec.permissionElement,
						collections?: string[]
					): unknown;
					buildUri(base: string, suffix: string): string;
					getModulesFile(file: string, format?: string, unquote?: string): unknown;
					easyUrl(url: string): string;
					httpGet(url: string, options: Element | object): ReturnType<typeof xdmp.httpGet>;
					assertHttpGetStatus(url: string, options: Element | object, statusCode: number, message?: string): Element;
					httpPost(url: string, options: Element | object, data?: unknown): ReturnType<typeof xdmp.httpPost>;
					assertHttpPostStatus(url: string, options: Element | object, data: unknown, statusCode: number, message?: string): Element;
					httpPut(url: string, options: Element | object, data?: unknown): ReturnType<typeof xdmp.httpPut>;
					assertHttpPutStatus(url: string, options: Element | object, data: unknown, statusCode: number, message?: string): Element;
					deleteAllXml(): void;
					waitForDoc(pattern: string, sleep: number): void;
					waitForTruth(truth: string, sleep: number): void;
					waitForTaskserver(sleep: number): void;
					sleep(ms: number): void;
					log(message: string): void;
					listFromDatabase(databaseId: xs.unsignedLong, path: string): string[];
					listFromFilesystem(path: string): string[];
					removeModules(uris: string[]): void;
					removeModulesDirectories(dirs: string[]): void;
					unquote(contents: string): Document;
					stripBlanks<T extends Node>(node: T): T;
					success(): Element;
					fail<T = unknown>(expected: T, actual: T): Element;
					fail(message: unknown[]): Element;
					assertAllExist(expectedCount: number, actuals: unknown[], message?: string): Element;
					assertExists(item: unknown, message?: string): Element;
					assertNotExists(item: unknown, message?: string): Element;
					assertAtLeastOneEqual<T = unknown | unknown[]>(expected: T, item: T, message?: string): Element;
					areTheseEqual<T = unknown>(expected: T, item: T): boolean;
					assertSameValues<T = unknown>(expected: T, item: T, message?: string): Element;
					assertEqual<T = unknown>(expected: T, actual: T, message?: string): Element;
					assertNotEqual<T = unknown>(expected: T, actual: T, message?: string): Element;
					assertEqualXml<T = unknown>(expected: T, actual: T, message?: string): Element;
					assertEqualJson<T = unknown>(expected: T, actual: T, message?: string): Element;
					assertEqualJsonRecursive<T = unknown>(expected: T, actual: T): boolean;
					assertTrue(condition: boolean, message?: string): Element;
					assertFalse(condition: boolean, message?: string): Element;
					assertMeetsMinimumThreshold(minimum: xs.decimal, actual: xs.decimal, message?: string): Element;
					assertMeetsMaximumThreshold(maximum: xs.decimal, actual: xs.decimal, message?: string): Element;
					assertGreaterThan(value: xs.decimal, actual: xs.decimal, message?: string): Element;
					assertGreaterThanOrEqual(value: xs.decimal, actual: xs.decimal, message?: string): Element;
					assertLessThan(value: xs.decimal, actual: xs.decimal, message?: string): Element;
					assertLessThanOrEqual(value: xs.decimal, actual: xs.decimal, message?: string): Element;
					assertThrowsErrorWithMessage(fn: xdmp.xdmpFunction, expectedErrorCode: string, expectedMessage: string, message?: string): Element;
					assertThrowsError(fn: xdmp.xdmpFunction, expectedErrorCode?: string): Element;
					assertThrowsError(fn: xdmp.xdmpFunction, param1: unknown, expectedErrorCode?: string): Element;
					assertThrowsError(fn: xdmp.xdmpFunction, param1: unknown, param2: unknown, expectedErrorCode?: string): Element;
					assertThrowsError(fn: xdmp.xdmpFunction, param1: unknown, param2: unknown, param3: unknown, expectedErrorCode?: string): Element;
					assertThrowsError(fn: xdmp.xdmpFunction, param1: unknown, param2: unknown, param3: unknown, param4: unknown, expectedErrorCode?: string): Element;
					assertThrowsError(fn: xdmp.xdmpFunction, param1: unknown, param2: unknown, param3: unknown, param4: unknown, param5: unknown, expectedErrorCode?: string): Element;
					assertThrowsError(fn: xdmp.xdmpFunction, param1: unknown, param2: unknown, param3: unknown, param4: unknown, param5: unknown, param6: unknown, expectedErrorCode?: string): Element;
				}
			}
		}
	}
}
