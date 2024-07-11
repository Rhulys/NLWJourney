import { X, MapPin, Link2, Folder } from "lucide-react";
import { useState } from "react";
import { Button } from "../../components/button";

interface inputModalOpenProps {
    closeModalLink: () => void;
}

export function InputModalOpen({closeModalLink}: inputModalOpenProps) {

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadatrar novo Link</h2>
            <button onClick={closeModalLink} type="button" className="size-5 text-zinc-400">
              <X /> 
            </button>
          </div>
          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar seus links.
          </p>
        </div>

        <form className="space-y-3">
          <div className="flex items-center gap-2 w-full md:flex-1 border-b border-zinc-300 pt-2 md:pt-0">
            <Folder className="size-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Nome... "
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 py-2"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:flex-1 border-b border-zinc-300 pt-2 md:pt-0">
            <Link2 className="size-5 text-zinc-400" />
            <input
              type="text"
              placeholder="Link... "
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 py-2"
            />
          </div>

          <Button variant="primary" size="full">
            Cadastrar Link
          </Button>
        </form>
      </div>
    </div>
  );
}
