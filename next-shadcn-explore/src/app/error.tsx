"use client";

import { Button } from "@/components/ui/button";

function Error({ error, reset: any }: { error: any; reset: any }) {
  return (
    <div>
      {error.message}
      <Button onClick={() => reset} variant="destructive">
        Reset
      </Button>
    </div>
  );
}

export default Error;
