import { useState } from "react";
import Masonry from "react-masonry-css";
import MemeCard from "@/shared/ui/meme-card/meme-card";
import { currentUser } from "@/shared/constants/current-user";
import { mockedMemes } from "@/shared/constants/mocked-memes";
import type { Meme } from "@/shared/types/types";
import { Avatar } from "@/shared/ui/avatar/avatar";
import { ROUTES } from "@/shared/constants/routes";
import { Link } from "react-router-dom";
import { AddIcon } from "@/assets/icons";

const breakpointColumns = {
  default: 5,
  1280: 4,
  1024: 3,
  768: 2,
  640: 1,
};

type TabType = "saved" | "created";

export const Profile = () => {
  const [activeTab, setActiveTab] = useState<TabType>("saved");

  const savedMemes: Meme[] = mockedMemes.filter((meme) =>
    currentUser.likedMemes?.includes(meme.id),
  );

  const createdMemes: Meme[] = mockedMemes.filter((meme) =>
    currentUser.createdMemes?.includes(meme.id),
  );

  const displayedMemes = activeTab === "saved" ? savedMemes : createdMemes;

  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-96 bg-gradient-to-r from-main-light to-main-accent flex items-center justify-center gap-12">
        <Avatar
          className="size-64 border-4 border-basic-light"
          imageUrl={currentUser.avatarUrl}
        />

        <div className="flex flex-col items-center gap-6">
          <h1 className="text-h1 font-lobster text-main-dark drop-shadow-lg">
            {currentUser.name}
          </h1>
          <div className="flex flex-col items-center gap-6">
            <button className="text-main-dark bg-main-light hover:bg-side-accent py-3 px-8 rounded-lg transition-colors font-montserrat">
              Изменить профиль
            </button>
            <Link to={ROUTES.ADD_MEME} className="flex items-center">
              <button className="font-montserrat flex items-center gap-2 text-main-dark">
                Добавить мем
                <AddIcon className="size-6" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-fit font-lobster text-h2 flex items-center justify-center gap-4 border-b border-main-light mt-6">
        <button
          onClick={() => setActiveTab("saved")}
          className={`pb-3 px-4 transition-colors relative ${
            activeTab === "saved"
              ? "text-main-accent border-b-2 border-main-accent"
              : "text-main-dark opacity-80 hover:opacity-100"
          }`}
        >
          Сохраненные мемы ({savedMemes.length})
        </button>
        <button
          onClick={() => setActiveTab("created")}
          className={`pb-3 px-4 transition-colors relative ${
            activeTab === "created"
              ? "text-main-accent border-b-2 border-main-accent"
              : "text-main-dark opacity-80 hover:opacity-100"
          }`}
        >
          Созданные мемы ({createdMemes.length})
        </button>
      </div>

      <div className="px-12 py-6">
        {displayedMemes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              {activeTab === "saved"
                ? "У вас пока нет сохраненных мемов"
                : "У вас пока нет созданных мемов"}
            </p>
          </div>
        ) : (
          <Masonry
            breakpointCols={breakpointColumns}
            className="flex w-full gap-6"
            columnClassName="flex flex-col w-full gap-6"
          >
            {displayedMemes.map((meme: Meme) => (
              <MemeCard
                key={meme.id}
                id={meme.id}
                title={meme.title}
                imageUrl={meme.imageUrl}
                initialLikes={meme.initialLikes}
              />
            ))}
          </Masonry>
        )}
      </div>
    </div>
  );
};
