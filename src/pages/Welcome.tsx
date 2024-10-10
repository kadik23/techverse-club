import PersonCard from "../components/PersonCard";
import { Button } from "../components/ui/button";
import { Icon } from "@iconify-icon/react/dist/iconify.js";

function Welcome() {

  return (
    <div className="flex flex-col gap-16">
      <Button id="Home" className="font-geistMono">
        Hello techverse developers!
        <Icon icon="mdi:human-hello-variant" width="24" height="24" />
      </Button>
      <Button id="Home" className="font-geistMono">
        Hello techverse developers!
        <Icon icon="mdi:human-hello-variant" width="24" height="24" />
      </Button>
      <PersonCard
        name="kadik salah eddine"
        isPresident={true}
        image={{
          nameShortCut: "SK",
        }}
      />
    </div>
    
  );
}

export default Welcome;
