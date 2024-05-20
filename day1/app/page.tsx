// app/page.tsx
"use client"
import React, { useEffect, useState } from "react";

const Page: React.FC = () => {
  const [SignUpComponent, setSignUpComponent] = useState<React.FC | null>(
    null
  );

  useEffect(() => {
    const loadSignUpComponent = async () => {
      const { default: SignUp } = await import("./components/SignUp");
      setSignUpComponent(() => SignUp);
    };

    loadSignUpComponent();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {SignUpComponent && <SignUpComponent />}
    </main>
  );
};

export default Page;
