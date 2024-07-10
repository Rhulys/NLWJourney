import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsModalProps {
  openGuestsModal: () => void;
  openConfirmTripModal: () => void;
  emailsToInvite: string[];
}

export function InviteGuestsStep({
  emailsToInvite,
  openConfirmTripModal,
  openGuestsModal,
}: InviteGuestsModalProps) {
  return (
    <div className="h-28 md:h-16 gap-4 md:gap-0 bg-zinc-900 px-4 rounded-xl flex-col md:flex-row flex items-center shadow-shape">
      <button
        type="button"
        onClick={openGuestsModal}
        className="flex items-center gap-2 md:flex-1 text-left pt-3 md:pt-0"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100 text-lg flex-1">
            {emailsToInvite.length} pessoa(s) convidada(s)
          </span>
        ) : (
          <span className="text-zinc-400 text-lg flex-1">
            Quem estará na viagem?
          </span>
        )}
      </button>

      <div className="hidden md:block w-px h-6 bg-zinc-800" />

      <Button onClick={openConfirmTripModal} variant="primary">
        Confirmar viagem <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}
