import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import Entry from '.';
import type { ExamEntry } from '@/data/Exam';

vi.mock('next/font/google');

const mockEntry: ExamEntry = {
  answer: 'mock answer',
  altText: 'mock alt text',
  question: 'mock question',
};

afterEach(cleanup);

describe('UI > Entry', () => {
  it('renders the exam entry', () => {
    render(
      <Entry
        active
        entry={ mockEntry }
        entryNumber={ 1 }
        priority />
    );

    const listItemClasses = [...screen.getByRole('listitem').classList];
    const image = screen.getByRole('img');

    expect(listItemClasses.includes('active')).toBeTruthy();
    expect(image.getAttribute('fetchPriority')).toBe('high');
    expect(screen.getByText(mockEntry.answer)).toBeDefined();
    expect(screen.getByAltText(mockEntry.altText)).toBeDefined();
    expect(screen.getByText(mockEntry.question)).toBeDefined();
  });

  it('only passes active to the list item if told to', () => {
    render(
      <Entry
        entry={ mockEntry }
        entryNumber={ 1 }
        priority />
    );

    const listItemClasses = [...screen.getByRole('listitem').classList];

    expect(listItemClasses.includes('active')).toBeFalsy();
  });

  it('only passes priority to the image if told to', () => {
    render(
      <Entry
        entry={ mockEntry }
        entryNumber={ 1 } />
    );

    const image = screen.getByRole('img');

    expect(image.getAttribute('fetchPriority')).toBe(null);
  });
});
