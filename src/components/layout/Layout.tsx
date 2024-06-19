import { ILayoutProps } from './interfaces';

const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-warm-grey">
      {children}
    </div>
  );
};

export default Layout;
