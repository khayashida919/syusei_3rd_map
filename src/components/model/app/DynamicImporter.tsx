import { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};
const DynamicImporter: FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default DynamicImporter;
