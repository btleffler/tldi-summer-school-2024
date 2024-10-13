import { afterEach, describe, expect, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Exam from '.';
import type { ExamEntry } from '@/data/Exam';

vi.mock('next/font/google');

Element.prototype.scrollIntoView = vi.fn();

const mockExamData: ExamEntry[] = [
  {
    altText: 'mock altText one',
    answer: 'mock answer one',
    question: 'mock question one',
  },
  {
    altText: 'mock altText two',
    answer: 'mock answer two',
    question: 'mock question two',
  }
];

afterEach(cleanup);

describe('UI > Exam', () => {
  it('renders the exam', () => {
    render(<Exam data={ mockExamData } />);

    const entries = screen.getAllByRole('listitem');

    expect(entries).toBeDefined();
    expect(entries.length).toBe(mockExamData.length);
  });

  describe('Keyboard Events', () => {
    it('sets the next entry as active', async () => {
      render(<Exam data={ mockExamData } />);

      const user = userEvent.setup();


      await user.keyboard('{ArrowDown}');

      screen.debug();
    });

    it('sets the previous entry as active', () => {});
  });

  describe('Mouse Events', () => {

  })
});
