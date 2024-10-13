import Image from 'next/image';
import Answer from '@/ui/Entry/Answer';
import Question from '@/ui/Entry/Question';
import type { ExamEntry } from '@/data/Exam';

export default function Entry ({
  active = false,
  priority = false,
  entryNumber,
  entry,
}: {
  active?: boolean,
  priority?: boolean,
  entryNumber: number,
  entry: ExamEntry,
}) {
  const classNames = [
    'entry',
    `entry-${entryNumber}`,
    'max-w-5xl',
    'p-7',
  ];

  if (active) {
    classNames[classNames.length] = 'active';
  };

  return (
    <li
      className={ classNames.join(' ') }>
      <Image
        className="entry__background -z-[1] w-full h-full object-cover object-center"
        src={ `./${entryNumber}.png` }
        fill
        alt={ entry.altText }
        priority={ priority }
        unoptimized />
      <Question text={ entry.question } />
      <Answer text={ entry.answer } />
    </li>
  );
}
