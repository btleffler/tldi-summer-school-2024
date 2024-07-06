import Answer from '@/ui/Answer';
import Question from '@/ui/Question';

export default function Entry ({
  question,
  answer,
}: {
  question: string,
  answer: string,
}) {
  return (
    <div className='entry'>
      <Question text={ question } />
      <Answer text={ answer } />
    </div>
  );
}
