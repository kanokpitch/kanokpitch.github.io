import { Props } from "@/types/common";
import Image from "next/image";
import React from "react";

export default function LabelWithGraphic({
  icon: Icon,
  image,
  content,
}: Props) {
  return (
    <div className="flex items-center gap-1.5">
      {Icon && <Icon size={12} />}
      {image && (
        <Image
          src={image}
          alt=""
          height={24}
          width={24}
          className="h-4 w-4 rounded-full"
          priority
          unoptimized
        />
      )}
      {content}
    </div>
  );
}
