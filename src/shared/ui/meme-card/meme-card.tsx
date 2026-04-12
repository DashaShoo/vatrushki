import { Link } from "react-router-dom";
import LikeButton from "../buttons/like-button";
import { ROUTES } from "@/shared/constants/routes";

interface MemeCardProps {
  id: string | number;
  title: string;
  imageUrl: string;
  initialLikes?: number;
  initialLiked?: boolean;
  onLike?: (id: string | number, isLiked: boolean, likeCount: number) => void;
  onClick?: (id: string | number) => void;
}

const MemeCard = ({ id, title, imageUrl }: MemeCardProps) => {
  return (
    <Link
      to={ROUTES.MEME_DETAIL(id)}
      className={
        " bg-white rounded-xl overflow-hidden border-2 border-main-dark transition-all duration-300 hover:shadow-xl cursor-pointer f-wull h-fit p-3 gap-3 flex flex-col"
      }
    >
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={imageUrl}
          alt={title}
          className={"w-full h-full object-cover"}
        />
      </div>

      <div className="flex items-start justify-between gap-2">
        <h4 className="flex-1 font-lobster text-h2 text-main-dark">{title}</h4>

        <LikeButton />
      </div>
    </Link>
  );
};

export default MemeCard;
