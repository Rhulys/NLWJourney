import { Plus, Link2 } from "lucide-react";
import { useState } from "react";
import { Button } from "../../components/button";
import { InputModalOpen } from "./input-modal-link";

export function ImportantLinks() {
  const [inputModalOpen, setInputModalOpen] = useState(false)

  function openModalLink() {
    setInputModalOpen(true)
  }
  function closeModalLink() {
    setInputModalOpen(false)
  }



  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Links importantes</h2>
      <div className="space-y-5">
        <div className="flex items-center w-full justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              href=""
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/104700011
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>

        <div className="flex items-center justify-between gap-4">
          <div className="space-y-1.5">
            <span className="block font-medium text-zinc-100">
              Reserva do AirBnB
            </span>
            <a
              href=""
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/104700011
            </a>
          </div>
          <Link2 className="text-zinc-400 size-5 shrink-0" />
        </div>
      </div>

      <Button onClick={openModalLink} variant="secondary" size="full">
        <Plus className="size-5" />
        Cadastrar novo link
      </Button>


      {inputModalOpen && (
        <InputModalOpen closeModalLink={closeModalLink}/>
      )}
    </div>
  );
}
