import { currentUser } from "@/shared/constants/current-user";
import { mockedMemes } from "@/shared/constants/mocked-memes";
import type { Meme } from "@/shared/types/types";
import React, { useState } from "react";

export const AddMeme = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });
  const [preview, setPreview] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
        setFormData((prev) => ({ ...prev, imageUrl: result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newMeme: Meme = {
      id: mockedMemes.length + 1,
      title: formData.title,
      description: formData.description,
      owner: currentUser.name,
      imageUrl: formData.imageUrl,
      initialLikes: 0,
    };
    mockedMemes.push(newMeme);
    alert("Мем отправлен на модерацию!");
    handleReset();
  };

  const handleReset = () => {
    setFormData({ title: "", description: "", imageUrl: "" });
    setPreview(null);
    const fileInput = document.getElementById(
      "image-upload",
    ) as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto p-6 font-montserrat">
      <h1 className="text-h1 mb-8 font-lobster">Добавить мем</h1>

      <form onSubmit={handleSubmit} className="w-full space-y-6">
        <div className="flex items-center gap-8">
          <div className="w-72 h-48 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-400 text-sm">Нет изображения</span>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <label
              htmlFor="image-upload"
              className="cursor-pointer bg-main-light text-main-dark font-medium py-2 px-4 rounded-md transition-colors"
            >
              Загрузить картинку
            </label>
            <input
              required
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <p className="text-xs text-main-dark opacity-60 mt-2">
              Поддерживаются JPG, PNG, GIF
            </p>
          </div>
        </div>

        <div className="flex flex-row items-center gap-8">
          <span className="w-72 font-lobster text-h2">Название</span>
          <div className="flex-1">
            <input
              required
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Добавить название..."
              className="w-full px-4 py-2 bg-main-light rounded-md text-main-dark outline-none placeholder:text-main-dark placeholder:opacity-80"
            />
          </div>
        </div>

        <div className="flex flex-row items-center gap-8">
          <span className="w-72 font-lobster text-h2">Описание</span>
          <div className="flex-1">
            <textarea
              required
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Добавить описание мема..."
              rows={4}
              className="w-full px-4 py-2 bg-main-light rounded-md text-main-dark outline-none resize-vertical placeholder:text-main-dark placeholder:opacity-80"
            />
          </div>
        </div>

        <div className="flex gap-8 f-wull items-center justify-center mt-8">
          <button
            type="button"
            onClick={handleReset}
            className="bg-main-light hover:bg-side-accent text-white py-2 px-6 rounded-md transition-colors w-[360px]"
          >
            Сбросить
          </button>
          <button
            type="submit"
            className="bg-main-accent hover:bg-side-accent text-white py-2 px-6 rounded-md transition-colors w-[360px]"
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};
