import { Noto_Serif } from "next/font/google";
import { ExamData } from '@/data/Exam';
import Exam from '@/ui/Exam';

const noto = Noto_Serif({
  weight: '900',
  subsets: ['latin']
});

const headerClassNames = [
  noto.className,
  'text-4xl',
];

export default function Home() {
  return (
    <main>
      <div className="mt-5 ml-5">
        <h1 className={ headerClassNames.join(' ') }>The Last Drive-In: Summer School Final Exam</h1>
      </div>
      <Exam data={ ExamData } />
    </main>
  );
}
