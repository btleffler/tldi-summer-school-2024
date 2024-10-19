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
  },
  {
    altText: 'mock altText three',
    answer: 'mock answer three',
    question: 'mock question three',
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
      const user = userEvent.setup();

      render(<Exam data={ mockExamData } />);

      const entries = screen.getAllByRole('listitem');
      const list = screen.getByRole('list');

      expect(list.style.pointerEvents).toBe('');
      expect([...entries[0].classList].includes('active')).toBeTruthy();
      expect([...entries[1].classList].includes('active')).toBeFalsy();
      expect([...entries[2].classList].includes('active')).toBeFalsy();

      await user.keyboard('{ArrowDown}');

      expect(list.style.pointerEvents).toBe('none');
      expect([...entries[0].classList].includes('active')).toBeFalsy();
      expect([...entries[1].classList].includes('active')).toBeTruthy();
      expect([...entries[2].classList].includes('active')).toBeFalsy();

      await user.keyboard('{ArrowDown}');

      expect(list.style.pointerEvents).toBe('none');
      expect([...entries[0].classList].includes('active')).toBeFalsy();
      expect([...entries[1].classList].includes('active')).toBeFalsy();
      expect([...entries[2].classList].includes('active')).toBeTruthy();

      await user.keyboard('{ArrowDown}');

      expect(list.style.pointerEvents).toBe('none');
      expect([...entries[0].classList].includes('active')).toBeTruthy();
      expect([...entries[1].classList].includes('active')).toBeFalsy();
      expect([...entries[2].classList].includes('active')).toBeFalsy();
    });

    it('sets the previous entry as active', async () => {
      const user = userEvent.setup();

      render(<Exam data={ mockExamData } />);

      const entries = screen.getAllByRole('listitem');
      const list = screen.getByRole('list');

      expect(list.style.pointerEvents).toBe('');
      expect([...entries[0].classList].includes('active')).toBeTruthy();
      expect([...entries[1].classList].includes('active')).toBeFalsy();
      expect([...entries[2].classList].includes('active')).toBeFalsy();

      await user.keyboard('{ArrowUp}');

      expect(list.style.pointerEvents).toBe('none');
      expect([...entries[0].classList].includes('active')).toBeFalsy();
      expect([...entries[1].classList].includes('active')).toBeFalsy();
      expect([...entries[2].classList].includes('active')).toBeTruthy();

      await user.keyboard('{ArrowUp}');

      expect(list.style.pointerEvents).toBe('none');
      expect([...entries[0].classList].includes('active')).toBeFalsy();
      expect([...entries[1].classList].includes('active')).toBeTruthy();
      expect([...entries[2].classList].includes('active')).toBeFalsy();

      await user.keyboard('{ArrowUp}');

      expect(list.style.pointerEvents).toBe('none');
      expect([...entries[0].classList].includes('active')).toBeTruthy();
      expect([...entries[1].classList].includes('active')).toBeFalsy();
      expect([...entries[2].classList].includes('active')).toBeFalsy();
    });

    it('does nothing on other input', async () => {
      const user = userEvent.setup();

      render(<Exam data={ mockExamData } />);

      const entries = screen.getAllByRole('listitem');
      const list = screen.getByRole('list');

      await user.keyboard('abcdefghijklmnopqrstuvwxyz');

      expect(list.style.pointerEvents).toBe('');
      expect([...entries[0].classList].includes('active')).toBeTruthy();
      expect([...entries[1].classList].includes('active')).toBeFalsy();
      expect([...entries[2].classList].includes('active')).toBeFalsy();
    });
  });

  describe('Mouse Events', () => {
    it('sets pointer events to auto after setting entry to active via keyboard', async () => {
      const user = userEvent.setup();

      render(<Exam data={ mockExamData } />);

      const list = screen.getByRole('list');

      await user.keyboard('{ArrowDown}');
      await user.pointer({
        coords: {
          x: 1000,
          y: 1000,
        }
      });

      expect(list.style.pointerEvents).toBe('auto');
    });

    it('sets an entry to active', async () => {
      const user = userEvent.setup();

      render(<Exam data={ mockExamData } />);

      const entries = screen.getAllByRole('listitem');

      await user.pointer({
        target: entries[2],
      });

      expect([...entries[0].classList].includes('active')).toBeFalsy();
      expect([...entries[1].classList].includes('active')).toBeFalsy();
      expect([...entries[2].classList].includes('active')).toBeTruthy();
    });
  })
});
