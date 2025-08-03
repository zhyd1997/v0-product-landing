'use client'

import {Heart} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import type {FC} from "react";
import {useSelector} from "react-redux";
import {selectFavorites} from "@/lib/features/products/favoritesSlice";

export interface CountBadgeProps {}

export const FavoritesCountBadge: FC<CountBadgeProps> = (props) => {
  const {} = props;

  const favorites = useSelector(selectFavorites)

  const count = favorites.length;

  return (
    <>
      <Heart className="h-5 w-5" />
      {count > 0 && (
        <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
          {count}
        </Badge>
      )}
    </>
  )
}