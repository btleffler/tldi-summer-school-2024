import Image from 'next/image';
import Answer from '@/ui/Answer';
import Question from '@/ui/Question';
import { ExamEntry } from '@/data/Exam';

export default function Entry ({
  entryNumber,
  entry,
}: {
  entryNumber: number,
  entry: ExamEntry,
}) {
  return (
    <div className="entry max-w-5xl">
      <Image
        className="entry__background -z-[1]"
        src={ `/${entryNumber}.png`}
        layout="fill"
        objectFit="cover"
        alt={ entry.altText }
        unoptimized />
      <Question text={ entry.question } />
      <Answer text={ entry.answer } />
    </div>
  );
}
