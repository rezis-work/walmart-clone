"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export default function Footer() {
  const [check, setCheck] = useState(false);
  return (
    <div className=" flex h-12 items-center justify-center border-t-2 border-walmart">
      <p>
        2024 &copy; | Created by{" "}
        {!check ? (
          <Button
            onClick={() => setCheck(true)}
            className=" h-7 bg-walmart hover:bg-walmart/50"
          >
            check
          </Button>
        ) : (
          <a
            href="https://github.com/rezis-work"
            target="_blank"
            className=" text-walmart hover:text-walmart/50"
          >
            Rezi Karanadze
          </a>
        )}{" "}
      </p>
    </div>
  );
}
