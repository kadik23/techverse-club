import { BentoCard } from "./ui/bento-grid";
import { MagicCard } from "./ui/magic-card";

function PersonCard(person: MemberEntity | SpeakerEntity) {
  function getImageContent(image: MemberImage): React.ReactNode {
    if (image.isImage) {
      return image.image;
    } else {
      return image.nameShortCut;
    }
  }

  const background = (  
    <div className="flex flex-col items-center">
      <div className="font-poppins font-normal w-24 lg:w-32 h-32 lg:h-36 m-4 flex text-secondary justify-center items-center border-2 text-3xl border-secondary">
        {getImageContent((person as MemberEntity).image)}
      </div>
    </div>
  );
  
  let description = null
  if((person as MemberEntity).isFounder){
    description = 'Club Founder'
  }else if ((person as MemberEntity).isLeader) {
    description = `${(person as Leader).departement?.name} Lead`
  }else if ((person as MemberEntity).isPresident) {
    description = 'Club President'
  }
  return (
    <MagicCard className="bg-secondary/50 border-none rounded-md w-fit">
      <BentoCard
        name={person.name}
        {...(description && { description })}
        cta="Learn more"
        href={(person as MemberEntity).isLeader ? `/department-overview/${(person as Leader).departement?.name}` : undefined}
        background={background}
        className="bg-transparent border-none shadow-none p-2"
        isActive={!!description && description !== 'Club Founder' && description !== 'Club President'}
      />
    </MagicCard>
  );
}

export default PersonCard;
