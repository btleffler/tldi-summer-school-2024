import { Noto_Serif } from "next/font/google";

const noto = Noto_Serif({
  weight: '900',
  subsets: ['latin']
});

export default function Question ({
  text,
}: {
  text: string,
}) {
  return (
    <div className='question'>
      <span className={ noto.className }>{ text }</span>
    </div>
  );
}
