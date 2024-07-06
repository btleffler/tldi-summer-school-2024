import Image from 'next/image';
import Entry from '@/ui/Entry';
import { Exam } from '@/data/Exam';

export default function Home() {
  return (
    <main>
      <ol className="list-decimal p-8 m-2">
      {
        Exam.map((entry, idx) => (
          <li
            key={ idx }
            className="p-7">
            <Entry
              question={ entry.question }
              answer={ entry.answer } />
          </li>
        ))
      }
      </ol>
    </main>
  );
}
