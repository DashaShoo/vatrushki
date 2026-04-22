import { useParams } from "react-router-dom";
import MemeCard from "@/shared/ui/meme-card/meme-card";
import MemeCardDetail from "@/shared/ui/meme-card/meme-card-detail";
import { mockedMemes } from "@/shared/constants/mocked-memes";
import type { Meme } from "@/shared/types/types";

export const MemeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const currentId = Number(id);

  const memes: Meme[] = mockedMemes.filter((m) => m.id !== currentId);

  const leftMemes: Meme[] = memes.slice(10);
  const rightMemes: Meme[] = memes.slice(0, 10);

  const leftColumns: Meme[][] = Array.from({ length: 2 }, () => []);

  leftMemes.forEach((meme, i) => {
    leftColumns[i % 2].push(meme);
  });

  const rightColumns: Meme[][] = Array.from({ length: 3 }, () => []);

  rightMemes.forEach((meme, i) => {
    rightColumns[i % 3].push(meme);
  });

  return (
    <div className="flex gap-6 px-12 py-6">
      <div className="w-[40%] flex flex-col gap-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <MemeCardDetail id={currentId} />
          </div>
        </div>

        <div className="flex gap-6">
          {leftColumns.map((col, i) => (
            <div key={i} className="flex flex-col gap-6 flex-1">
              {col.map((meme) => (
                <MemeCard key={meme.id} {...meme} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-1 gap-6">
        {rightColumns.map((col, i) => (
          <div key={i} className="flex flex-col gap-6 flex-1">
            {col.map((meme) => (
              <MemeCard key={meme.id} {...meme} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
