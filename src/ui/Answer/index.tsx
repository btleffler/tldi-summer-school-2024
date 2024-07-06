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
          .map((line, idx) => (<p key={ idx }>{ line }</p>))
      }</div>
    </div>
  );
}
