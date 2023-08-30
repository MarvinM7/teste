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
  id: string;
  language: string;
  overview: string;
  title: string;
  type: string;
}

export interface PaginationProps {
  page: string;
  query: string;
  showNextPage: boolean;
}

interface BannerContentType {
  id: string;
  link: string;
}

export interface BannerProps {
  content: BannerContentType[];
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

export interface Content2Type {
  genre?: string;
  overview: string;
  language: string;
  title: string;
  type: string;
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

export interface GetContentProps {
  query: string;
  page: string;
}

export interface Banner2Props {
  content: Content2Type[];
}

export interface Card2Props {
  content: Content2Type;
}

export interface ModalProps {
  content: Content2Type;
  onClose: () => void;
  showModal: boolean;
}

export interface ContentProps {
  content: Content2Type;
}