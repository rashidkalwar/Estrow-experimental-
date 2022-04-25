import 'styles/globals.css';
import 'tailwindcss/tailwind.css';
import { Provider } from 'react-redux';
import { useStore } from 'src/store';
import { ThemeProvider } from 'next-themes';

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
