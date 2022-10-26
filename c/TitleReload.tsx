"use client";
import { useEffect } from "react";

const TitleReload = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return null;
};

export default TitleReload;
