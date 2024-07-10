import { Kalam } from "next/font/google";

const kalam = Kalam({
  weight: '300',
  subsets: ['latin']
});

export default function Answer ({
  text,
}: {
  text: string,
}) {
  return (
    <div className='answer'>
      <div className="answer__background"></div>
      <div className="answer__text">{
        text
          .split('\n')
          .map((line, idx) => (
            <p
              key={ idx }
              className={kalam.className}>{
                line
              }</p>
          ))
      }</div>
    </div>
  );
}
