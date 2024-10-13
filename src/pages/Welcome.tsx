import { NavLink } from "react-router-dom";
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
      <NavLink to={'/event-overview/bootcamp'}>
        <Button id="Home" className="font-geistMono bg-secondary">
          Go to bootcamp event
        </Button>
      </NavLink>
      <PersonCard
        name="kadik salah eddine"
        departement={{
          name:"IT",
          description:"it..."
          }
        }
        isLeader={true}
        image={{
          nameShortCut: "SK",
        }}
      />
    </div>
    
  );
}

export default Welcome;
