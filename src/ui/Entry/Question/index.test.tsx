import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Noto_Serif } from 'next/font/google';
import Question from '.';

vi.mock('next/font/google');

describe('UI > Entry > Question', () => {
  it('renders the question text', () => {
    render(<Question text="Hey everybody" />);

    expect(screen.getByText('Hey everybody')).toBeDefined();
  });

  it('renders the question using the Noto_Serif font', () => {
    render(<Question text="question" />);
    const questionTextElement = screen.getByText('question');
    const questionTextClasses = [...questionTextElement.classList];

    expect(Noto_Serif).toHaveBeenCalledOnce();
    expect(questionTextClasses.includes(Noto_Serif().className)).toBeTruthy();
    expect(questionTextClasses.includes('text-xl')).toBeTruthy();
  });
});
