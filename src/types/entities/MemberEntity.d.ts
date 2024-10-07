interface Departement {
  name: string;
  description: string;
}

type MemberImage = 
  | { isImage: true; image: string }
  | { isImage?: false; nameShortCut: string };

interface MemberEntityBase {
  name: string;
  departement: Departement | null;
  image: MemberImage;
}

interface Leader extends MemberEntityBase {
  isLeader: true;
  isFounder?: false;
  isPresident?: false;
  isMember?: false;
}

interface Founder extends MemberEntityBase {
  isLeader?: false;
  isFounder: true;
  isPresident?: false;
  isMember?: false;
}

interface President extends MemberEntityBase {
  isLeader?: false;
  isFounder?: false;
  isPresident: true;
  isMember?: false;
}

interface Member extends MemberEntityBase {
  isLeader?: false;
  isFounder?: false;
  isPresident?: false;
  isMember: true;
}

type MemberEntity = Leader | Founder | President | Member;