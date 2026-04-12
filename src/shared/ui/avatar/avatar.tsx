import cn from "classnames";

interface AvatarProps {
  imageUrl?: string;
  altText?: string;
  className?: string;
}
export const Avatar = ({ imageUrl, altText, className }: AvatarProps) => {
  return (
    <div
      className={cn(
        "size-12 border-2 border-main-dark rounded-full flex items-center justify-center overflow-hidden",
        className,
      )}
    >
      <img
        src={imageUrl || "/vatrushki.png"}
        alt={altText || "User Avatar"}
        className="w-full h-full"
      />
    </div>
  );
};
