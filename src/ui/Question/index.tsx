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
  const classNames = [
    noto.className,
    'text-xl',
  ];

  return (
    <div className="question">
      <span className={ classNames.join(' ') }>{ text }</span>
    </div>
  );
}
