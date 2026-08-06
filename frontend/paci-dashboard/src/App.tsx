import { RouterProvider } from 'react-router-dom';

import { router } from '@/app/routes/router';
import { ThemeProvider } from '@/shared/hooks/use-theme';

function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
