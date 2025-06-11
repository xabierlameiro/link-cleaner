import { render } from '@testing-library/react';
import History from './History';
import { describe, it, expect, beforeEach } from 'vitest';

describe('History component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('handles corrupted localStorage data gracefully', () => {
    localStorage.setItem('history', 'not-json');
    expect(() => render(<History />)).not.toThrow();
  });
});
