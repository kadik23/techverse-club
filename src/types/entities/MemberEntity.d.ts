interface MemberEntityBase {
    name: string;
    departement: Departement | null;
}

interface Leader extends MemberEntityBase {
    isLeader: true;
    isFounder: false;
    isPresident: false;
    isMember: false;
}

interface Founder extends MemberEntityBase {
    isLeader: false;
    isFounder: true;
    isPresident: false;
    isMember: false;
}

interface President extends MemberEntityBase {
    isLeader: false;
    isFounder: false;
    isPresident: true;
    isMember: false;
}

interface Member extends MemberEntityBase {
    isLeader: false;
    isFounder: false;
    isPresident: false;
    isMember: true;
}

type MemberEntity = Leader | Founder | President | Member;

interface Departement {
    name: string;
    description: string;
}