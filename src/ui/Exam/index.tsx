'use client';

import { useState, useEffect } from "react";
import { ExamEntry } from "@/data/Exam";
import Entry from "@/ui/Entry";

export default function Exam ({
  data,
}: {
  data: ExamEntry[]
}) {
  const lastEntry = data.length - 1;
  const [active, setActive] = useState(0);

  useEffect(() => {
    function handleKeydown (event: KeyboardEvent) {
      const { key } = event;
      let next = active;

      event.preventDefault();

      if (key === 'ArrowDown') {
        next++;
      } else if (key === 'ArrowUp') {
        next--;
      }

      if (next > lastEntry) {
        next = 0;
      }

      if (next < 0) {
        next = lastEntry;
      }

      if (next !== active) {
        document.body.style.pointerEvents = 'none';

        document.querySelector(`.entry-${next}`)?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'start',
        });

        setActive(next);
      }
    };

    function handleMouseMove () {
      document.body.style.pointerEvents = 'auto';
    }

    window.addEventListener('keydown', handleKeydown);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
      window.removeEventListener('mousemove', handleMouseMove);
    }
  });

  return (
    <ol className="list-decimal p-8 m-2">
    {
      data.map((entry, idx) => (
        <div
          key={ idx }
          onMouseEnter={ () => setActive(idx) }>
          <Entry
            key={ idx }
            active={ active === idx }
            entryNumber={ idx }
            priority={ idx === 0 }
            entry={ entry } />
        </div>
      ))
    }
    </ol>
  );
}
