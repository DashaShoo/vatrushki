import { useState } from "react";
import { DefaultLikeIcon, HoverLikeIcon, LikeIcon } from "@assets/icons";

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  const getIcon = () => {
    if (isLiked) return <LikeIcon className="min-w-8 min-h-8" />;
    if (isHovered) return <HoverLikeIcon className="min-w-8 min-h-8" />;
    return <DefaultLikeIcon className="min-w-8 min-h-8" />;
  };

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex items-center justify-center rounded-full transition-all duration-200 outline-none"
      aria-label={isLiked ? "Unlike" : "Like"}
    >
      {getIcon()}
    </button>
  );
};

export default LikeButton;
