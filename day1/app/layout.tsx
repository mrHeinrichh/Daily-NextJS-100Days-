// app/layout.tsx
import React from "react";

const Layout: React.FC = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default Layout;
