import { AnchorHTMLAttributes, FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const Link: FC<Props> = ({ children, ...props }) => {
  return (
    <a
      className="info_link"
      target="_blank"
      rel="noreferrer"
      href="#"
      {...props}
    >
      {children}
    </a>
  );
};

export default Link;
