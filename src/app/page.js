import Link from "next/link";
import { API_URL } from "./inventory/utils/constants";
import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-800 animate-fade-in">
      <div className="text-center opacity-0 animate-fade-in">
        <h1 className="text-5xl font-bold mb-4 text-white">InventCheck!</h1>
        <p className="text-zinc-400 mb-8">
          Simple CRUD assignment 4 for devscale
        </p>
        <Link href="/inventory">
          <Button color="primary" variant="ghost">
            Access Inventory
          </Button>
        </Link>
        <div className="mt-6 flex gap-4 justify-center">
          <Link
            href={API_URL}
            className="opacity-70 text-white font-thin hover:bg-primary/90"
          >
            Api Structure
          </Link>
          <Link
            href="https://github.com/khmuhtad1n/Devscale-Assignment-3"
            className="opacity-70 text-white font-thin hover:bg-primary/90"
          >
            Repository
          </Link>
        </div>
      </div>
    </div>
  );
}
