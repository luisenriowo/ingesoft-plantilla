'use client';

// providers
import AlertProvider from '@providers/AlertProvider';
import ThemeProvider from '@providers/ThemeProvider';

// components
import Alert from '@components/Alert/Alert';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';

// hooks
import useTheme from '@hooks/useTheme';

// interfaces
interface IProps {
  children: React.ReactNode;
}

const MasterContent: React.FC<IProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`${theme}-theme`}>
      <AlertProvider>
        <Alert />
        <Header />
        {children}
        <Footer />
      </AlertProvider>
    </div>
  );
};

const Master: React.FC<IProps> = ({ children }) => (
  <ThemeProvider>
    <MasterContent>{children}</MasterContent>
  </ThemeProvider>
);

export default Master;
