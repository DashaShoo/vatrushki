import { mockedMemes } from "@/shared/constants/mocked-memes";
import LikeButton from "../buttons/like-button";
import { Avatar } from "../avatar/avatar";
import type { Meme } from "@/shared/types/types";

interface MemeCardDetailProps {
  id: string | number;
}

const MemeCardDetail = ({ id }: MemeCardDetailProps) => {
  const meme: Meme = mockedMemes.find((m) => m.id === Number(id)) || {
    id: 0,
    title: "Мем не найден",
    imageUrl: "/not-found.png",
    description: "К сожалению, мем с таким ID не найден.",
    owner: "Неизвестный",
    initialLikes: 0,
  };

  const { title, imageUrl, description, owner, initialLikes } = meme;

  return (
    <div
      className={
        "bg-white rounded-xl overflow-hidden border-2 border-main-dark w-full h-full p-3 gap-3 flex flex-col text-main-dark text-regular font-montserrat"
      }
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className={"w-full h-full object-cover"}
        />
      </div>

      <div className="flex flex-col justify-between gap-2">
        <div className="flex flex-row items-center justify-between text-h2 text-main-dark">
          <h4 className="font-lobster">{title}</h4>
          <div className="flex items-center font-lobster gap-2">
            <span>{initialLikes}</span>
            <LikeButton />
          </div>
        </div>

        <p>{description}</p>

        <div className="flex items-center gap-2 self-end">
          <Avatar className="size-10" />
          <span>{owner}</span>
        </div>
      </div>
    </div>
  );
};

export default MemeCardDetail;
