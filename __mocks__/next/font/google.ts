import { vi } from "vitest";

const mockFont = vi.fn(() => ({
  className: '.mocked-font-class',
  style: {
    fontFamily: 'mockedFontFamily',
  },
  variable: '--mocked-font-variable',
}));

export const Kalam = mockFont;
export const Noto_Serif = mockFont;
