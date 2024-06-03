"use client";

import { Button } from "react-bootstrap";

interface IErrorPageProps {
  error: Error;
  reset: () => void;
}

export default function Error({ error, reset }: IErrorPageProps) {
  return (
    <>
      <h1>Error 😔</h1>
      <p>Something went wrong.</p>
      <Button onClick={reset}>Try Again</Button>
    </>
  );
}
