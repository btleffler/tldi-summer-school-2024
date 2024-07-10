import { Noto_Serif, Kalam } from "next/font/google";
import { ExamData } from '@/data/Exam';
import Exam from '@/ui/Exam';

const noto = Noto_Serif({
  weight: '900',
  subsets: ['latin']
});

const kalam = Kalam({
  weight: '700',
  subsets: ['latin']
});

const headerClassNames = [
  noto.className,
  'text-4xl',
];

const subheaderClassNames = [
  kalam.className,
  'text-2xl',
];

export default function Home() {
  return (
    <main>
      <div className="mt-5 ml-5">
        <h1 className={ headerClassNames.join(' ') }>The Last Drive-In: Summer School Final Exam</h1>
        <h2 className={ subheaderClassNames.join(' ') }>Benjamin Leffler &lt;btleffler[at]gmail.com&gt;</h2>
      </div>
      <Exam data={ ExamData } />
    </main>
  );
}
