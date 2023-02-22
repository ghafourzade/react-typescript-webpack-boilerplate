import clsx from "clsx";
import React, { FC } from "react";
import { ITemplateNameProps } from "./TemplateName.interface";
import styles from "./TemplateName.module.scss";

const TemplateName: FC<ITemplateNameProps> = ({ children, className, ...props }) => {
  return (
    <div className={clsx(styles["TemplateName"], className)} {...props}>
      {children}
    </div>
  );
};

export default TemplateName;
