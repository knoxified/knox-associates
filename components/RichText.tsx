import React from 'react';

/** Renders plain-text article bodies: blank line = paragraph, "1. " lines = ordered list, trailing ":" = sub-heading. */
export default function RichText({ text }: { text: string }) {
  const blocks = text.split(/\n{2,}/).map((b) => b.split('\n'));
  return (
    <div className="space-y-5 font-sans-legal text-[15px] leading-relaxed text-[var(--text-secondary)]">
      {blocks.map((lines, bi) => {
        const out: React.ReactNode[] = [];
        let list: string[] = [];
        const flush = (k: string) => {
          if (list.length) {
            out.push(
              <ol key={k} className="list-decimal space-y-3 pl-5 marker:text-[var(--accent-gold)]">
                {list.map((l, i) => <li key={i}>{l}</li>)}
              </ol>
            );
            list = [];
          }
        };
        lines.forEach((line, li) => {
          const m = line.match(/^\d+\.\s+(.*)$/);
          if (m) { list.push(m[1]); return; }
          flush(`ol-${bi}-${li}`);
          if (line.trim().endsWith(':') && line.length < 90) out.push(<h3 key={`${bi}-${li}`} className="pt-2 font-cinzel text-lg font-bold text-white">{line.slice(0, -1)}</h3>);
          else if (line.trim()) out.push(<p key={`${bi}-${li}`}>{line}</p>);
        });
        flush(`ol-${bi}-end`);
        return <React.Fragment key={bi}>{out}</React.Fragment>;
      })}
    </div>
  );
}
