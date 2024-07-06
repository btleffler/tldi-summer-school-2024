export default function Question ({
  text,
}: {
  text: string,
}) {
  return (
    <div className='question'>
      <span className="font-bold italic">{ text }</span>
    </div>
  );
}
