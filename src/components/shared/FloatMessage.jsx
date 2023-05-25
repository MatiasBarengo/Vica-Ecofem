import {
  IconButton,
  SpeedDial,
  SpeedDialHandler,
  SpeedDialContent,
  SpeedDialAction,
} from "@material-tailwind/react";
import {
  EnvelopeIcon,
  EnvelopeOpenIcon,
  HomeIcon,
  CogIcon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/outline";

export default function FloatMessage() {
  return (
    <div className="fixed bottom-12 right-12 w-full h-80 z-10">
      <div className="absolute bottom-0 right-0">
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full">
              <EnvelopeOpenIcon className="hidden h-5 w-5 group-hover:block" />
              <EnvelopeIcon className="block h-5 w-5 group-hover:hidden" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction>
              <i className="fa-regular fa-envelope h-5 w-5"></i>
            </SpeedDialAction>
            <SpeedDialAction>
              <i className="fa-brands fa-whatsapp h-5 w-5"></i>
            </SpeedDialAction>
            <SpeedDialAction>
              <Square3Stack3DIcon className="h-5 w-5" />
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  );
}
