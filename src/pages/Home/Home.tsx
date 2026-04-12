import MemeCard from "@/shared/ui/meme-card/meme-card";
import Masonry from "react-masonry-css";
import { mockedMemes } from "@/shared/constants/mocked-memes";

const breakpointColumns = {
  default: 5,
  1280: 4,
  1024: 3,
  768: 2,
  640: 1,
};

export const Home = () => {
  return (
    <section>
      <Masonry
        breakpointCols={breakpointColumns}
        className="flex w-full px-12 py-5 gap-6"
        columnClassName="flex flex-col w-full gap-6"
      >
        {mockedMemes.map((meme) => (
          <MemeCard title={meme.title} imageUrl={meme.imageUrl} id={meme.id} />
        ))}
      </Masonry>
    </section>
  );
};
