import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Kalam } from 'next/font/google';
import Answer from '.';

vi.mock('next/font/google');

describe('UI > Entry > Answer', () => {
  it('renders the answer text', () => {
    render(<Answer text="Hey everybody" />);

    expect(screen.getByText('Hey everybody')).toBeDefined();
  });

  it('splits new lines into paragraph tags', () => {
    const paragraphs = ['paragraph1', 'paragraph2'];
    render(<Answer text={ paragraphs.join('\n') } />);

    paragraphs.forEach((paragraphText) => {
      expect(screen.getByText(paragraphText)).toBeDefined();
    });
  });

  it('renders the question using the Kalam font', () => {
    render(<Answer text="question" />);
    const questionTextElement = screen.getByText('question');
    const questionTextClasses = [...questionTextElement.classList];

    expect(Kalam).toHaveBeenCalledTimes(1);
    expect(questionTextClasses.includes(Kalam({ weight: [] }).className)).toBeTruthy();
    expect(questionTextClasses.includes('text-xl')).toBeTruthy();
  });
});
