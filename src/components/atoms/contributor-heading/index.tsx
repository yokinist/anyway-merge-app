import { ReactNode } from "react";
import styles from "./styles.module.css";

type Props = {
  children: ReactNode;
};

const ContributorHeading = (props: Props) => {
  const { children } = props;

  return <h1 className={styles.container}>{children}</h1>;
};

export default ContributorHeading;
