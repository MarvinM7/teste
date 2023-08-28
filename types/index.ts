import { MouseEventHandler } from "react";

export interface ButtonProps {
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode,
  title?: string;
  type?: "button" | "submit";
}

export interface InputProps {
  autocomplete?: "on" | "off";
  containerStyles?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  value: string;
}

export interface CardProps {
  description: string;
  handleClick: (data: string) => void;
  id: string;
  title: string;
  type: string;
}

export interface PaginationProps {
  page: string | null;
  nextPage: () => void;
  previousPage: () => void;
  showNextPage?: boolean;
}

interface BannerContentType {
  id: string;
  link: string;
}

export interface BannerProps {
  content: BannerContentType[];
}

export interface CardProps {
  description: string;
  title: string;
  type: string;
}

export interface SearchContentType {
  description: string;
  id: string;
  title: string;
  type: string;
}

export interface ContentType {
  description: string;
  id: string;
  genre: string[];
  link: string;
  mainGenre: string;
  status: string;
  title: string;
  type: string;
  year: string;
}

export interface UserType {
  email?: string;
  name?: string;
}

export interface SearchBarProps {
  text?: string;
}

export interface ApiProps {
  link: string;
}