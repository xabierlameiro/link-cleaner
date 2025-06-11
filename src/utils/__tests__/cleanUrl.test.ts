import { describe, it, expect } from 'vitest';
import { cleanUrl } from '../cleanUrl';

describe('cleanUrl', () => {
  it('removes typical tracking parameters', () => {
    const url = 'https://example.com?utm_source=google&utm_medium=cpc&gclid=abcd123&foo=bar';
    const expected = 'https://example.com/?foo=bar';
    expect(cleanUrl(url)).toBe(expected);
  });

  it('returns original string for malformed URLs', () => {
    const malformed = 'ht!tp://example.com/test?utm_source=abc';
    expect(cleanUrl(malformed)).toBe(malformed);
  });
});
