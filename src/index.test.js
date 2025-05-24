import { expect, test } from 'vitest'
import { helloWorld } from "./index";

test('test', () => {
    expect(helloWorld()).toBe('Hello World')
})