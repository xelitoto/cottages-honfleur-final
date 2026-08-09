import { AirbnbButton } from "./AirbnbButton";

/** Barre fixe mobile : le bouton de réservation reste toujours accessible. */
export function MobileBookingBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-md lg:hidden">
      <AirbnbButton className="w-full" />
    </div>
  );
}
