import { Plus } from "lucide-react";
import { useState } from "react";
import { InviteGuestsStep } from "../create-trip/steps/invite-guests-step";
import { Activities } from "./activities";
import { CreatActivityModal } from "./create-activity-modal";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { Guests } from "./guests";
import { ImportantLinks } from "./important-links";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }
  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <DestinationAndDateHeader />

      <main className="flex gap-8 px-0 md:px-4 flex-col md:flex-row">
        <div className="flex-1 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>
            <button
              onClick={openCreateActivityModal}
              className="ml-5 bg-lime-300 text-lime-950 rounded-lg py-2 px-2 font-medium flex items-center gap-2 hover:bg-lime-400"
            >
              <Plus className="size-5" /> Cadastrar atividade
            </button>
          </div>

          <Activities />
        </div>

        <div className=" w-full md:w-80 space-y-6">
          <ImportantLinks />

          <div className="w-full h-px bg-zinc-800" />

          <Guests />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreatActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}
    </div>
  );
}
