import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { Noto_Serif } from "next/font/google";
import Exam from "@/ui/Exam";
import Home from "./page";
import type { ExamEntry } from "@/data/Exam";

vi.mock("next/font/google");

vi.mock("@/ui/Exam", () => {
  const MockExam = vi.fn(({ data }: { data: ExamEntry[] }) => (
    <span>Mock Exam with {data.length} entries :)</span>
  ));

  return { default: MockExam };
});

afterEach(() => {
  vi.clearAllMocks();
  cleanup();
});

describe("Home Page", () => {
  it("renders the header with Noto_Serif", () => {
    render(<Home />);
    const heading = screen.getByRole("heading");

    expect(Noto_Serif).toHaveBeenCalledOnce();
    expect(
      [...heading.classList].includes(Noto_Serif().className)
    ).toBeTruthy();
  });

  it("renders the Exam component", () => {
    render(<Home />);

    expect(Exam).toHaveBeenCalledOnce();
    expect(Exam).toHaveBeenCalledWith(
      {
        data: expect.arrayContaining([
          expect.objectContaining<ExamEntry>({
            altText: expect.any(String),
            answer: expect.any(String),
            question: expect.any(String),
          }),
        ])
      },
      expect.any(Object)
    );
  });
});
