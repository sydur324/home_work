import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../HomePage/Home/Home";
import Subjects from "../ListJournals/Subjects/Subjects";
import AccountingLayout from "../Layout/AccountingLayout";
import AccountingHome from "../Journals/Accounting/AccountingHome/AccountingHome";
import AccountingCurrentIssue from "../Journals/Accounting/AccountingCurrentIssue/AccountingCurrentIssue";
import AccountingScope from "../Journals/Accounting/AccountingScope/AccountingScope";
import AccountingBoard from "../Journals/Accounting/AccountingBoard/AccountingBoard";
import AccountingSubmision from "../Journals/Accounting/AccountingSubmision/AccountingSubmision";
import AccountingResouch from "../Journals/Accounting/AccountingResouch/AccountingResouch";
import AccountingPolice from "../Journals/Accounting/AccountingPolice/AccountingPolice";
import AccountingUsefullLinks from "../Journals/Accounting/AccountingUsefullLinks/AccountingUsefullLinks";
import AccountingActivities from "../Journals/Accounting/AccountingActivities/AccountingActivities";
import AccountingSubcription from "../Journals/Accounting/AccountingSubcription/AccountingSubcription";
import AccountingInfo from "../Journals/Accounting/AccountingInfo/AccountingInfo";
import AccountingIndex from "../Journals/Accounting/AccountingIndex/AccountingIndex";
import AccountingArcrive from "../Journals/Accounting/AccountingArcrive/AccountingArcrive";
import ResearchPage from "../ResearchPage/ResearchPage";
import AboutPage from "../assets/AboutPage/AboutPage";
import MemberShipPage from "../MemberShipPage/MemberShipPage";
import ContactPage from "../ContactPage/ContactPage";
import LogIn from "../LoginSystem/LogIn/LogIn";
import SignUp from "../LoginSystem/SignUp/SignUp";
import ResearchDetails from "../HomePage/HomeResearch/ResearchDetails/ResearchDetails";
import Privecy from "../PrivecyPage/Privecy/Privecy";
import Accessibility from "../PrivecyPage/Accessibility/Accessibility";
import AgricultureLayout from "../Layout/AgricultureLayout";
import JaesCurrentIssu from "../Journals/Agriculture/JaesCurrentIssu/JaesCurrentIssu";
import JaesHome from "../Journals/Agriculture/jaesHome/jaesHome";
import JaesScope from "../Journals/Agriculture/JaesScope/JaesScope";
import JaesEditor from "../Journals/Agriculture/JaesEditor/JaesEditor";
import JaesSubcription from "../Journals/Agriculture/JaesSubcription/JaesSubcription";
import JaesResources from "../Journals/Agriculture/JaesResources/JaesResources";
import JaesPolicy from "../Journals/Agriculture/JaesPolicy/JaesPolicy";
import JaesUsefullLink from "../Journals/Agriculture/JaesUsefullLink/JaesUsefullLink";
import JaesActivites from "../Journals/Agriculture/JaesActivites/JaesActivites";
import JaesSubmission from "../Journals/Agriculture/JaesSubmission/JaesSubmission";
import EngineeringLayout from "../Layout/EngineeringLayout";
import JeaHome from "../Journals/Engineering/JeaHome/JeaHome";
import JeaCurrentIssue from "../Journals/Engineering/JeaCurrentIssue/JeaCurrentIssue";
import JeaScope from "../Journals/Engineering/JeaScope/JeaScope";
import JeaBoard from "../Journals/Engineering/JeaBoard/JeaBoard";
import JeaSubmission from "../Journals/Engineering/JeaSubmission/JeaSubmission";
import JeaResources from "../Journals/Engineering/JeaResources/JeaResources";
import JeaPolicy from "../Journals/Engineering/JeaPolicy/JeaPolicy";
import JeaUsefullLink from "../Journals/Engineering/JeaUsefullLink/JeaUsefullLink";
import JeaActivities from "../Journals/Engineering/JeaActivities/JeaActivities";
import JeaSubcription from "../Journals/Engineering/JeaSubcription/JeaSubcription";
import JeaInformation from "../Journals/Engineering/JeaInformation/JeaInformation";
import JeoIndex from "../Journals/Engineering/JeoIndex/JeoIndex";
import JeoLoadArcive from "../Arcrive/JeoLoadArcive/JeoLoadArcive";
import ArchaeologyLayout from "../Layout/ArchaeologyLayout";
import ArchaeologyHome from "../Journals/Archaeology/ArchaeologyHome/ArchaeologyHome";
import ArchaeologyCurrentIssu from "../Journals/Archaeology/ArchaeologyCurrentIssu/ArchaeologyCurrentIssu";
import ArchaeologyScope from "../Journals/Archaeology/ArchaeologyScope/ArchaeologyScope";
import ArchaeologyBoard from "../Journals/Archaeology/ArchaeologyBoard/ArchaeologyBoard";
import FixedSubmisson from "../Utilities/FixedSubmisson/FixedSubmisson";
import FixedResources from "../Utilities/FixedResources/FixedResources";
import FixedPolicy from "../Utilities/FixedPolicy/FixedPolicy";
import FixedUseFullLink from "../Utilities/FixedUseFullLink/FixedUseFullLink";
import ArtHistoryLayout from "../Layout/ArtHistoryLayout";
import ArtHistoryHome from "../Journals/ArtHistory/ArtHistoryHome/ArtHistoryHome";
import ArtHistoryCurrentIssu from "../Journals/ArtHistory/ArtHistoryCurrentIssu/ArtHistoryCurrentIssu";
import ArtHistoryScope from "../Journals/ArtHistory/ArtHistoryScope/ArtHistoryScope";
import ArtHistoryBoard from "../Journals/ArtHistory/ArtHistoryBoard/ArtHistoryBoard";
import ArtHistorySubmissoin from "../Journals/ArtHistory/ArtHistorySubmissoin/ArtHistorySubmissoin";
import ArtHistoryResourches from "../Journals/ArtHistory/ArtHistoryResourches/ArtHistoryResourches";
import ArtHistoryPolicy from "../Journals/ArtHistory/ArtHistoryPolicy/ArtHistoryPolicy";
import ArtHistoryUsefullLink from "../Journals/ArtHistory/ArtHistoryUsefullLink/ArtHistoryUsefullLink";
import ArtHistorySubcription from "../Journals/ArtHistory/ArtHistorySubcription/ArtHistorySubcription";
import ArtHistoryInformation from "../Journals/ArtHistory/ArtHistoryInformation/ArtHistoryInformation";
import ArtHistoryIndex from "../Journals/ArtHistory/ArtHistoryIndex/ArtHistoryIndex";
import ArtHistoryArcive from "../Journals/ArtHistory/ArtHistoryArcive/ArtHistoryArcive";
import CenterLayout from "../Layout/CenterLayout";
import CenterSubmission from "../CenterInformation/CenterSubmission/CenterSubmission";
import CenterResources from "../CenterInformation/CenterResources/CenterResources";
import CenterPolicy from "../CenterInformation/CenterPolicy/CenterPolicy";
import CenterLink from "../CenterInformation/CenterLink/CenterLink";
import CenterActivities from "../CenterInformation/CenterActivities/CenterActivities";
import CenterSubcription from "../CenterInformation/CenterSubcription/CenterSubcription";
import CenterInfixedformation from "../CenterInformation/CenterInformation/CenterInfixedformation";
import CenterIndex from "../CenterInformation/CenterIndex/CenterIndex";
import ArchaeologyAricive from "../Journals/Archaeology/ArchaeologyAricive/ArchaeologyAricive";
import BankManagementLayout from "../Layout/BankManagementLayout";
import BankManagementHome from "../Journals/BankManagement/BankManagementHome/BankManagementHome";
import BankManagementIssue from "../Journals/BankManagement/BankManagementIssue/BankManagementIssue";
import BankManagementScope from "../Journals/BankManagement/BankManagementScope/BankManagementScope";
import BankManagementBoard from "../Journals/BankManagement/BankManagementBoard/BankManagementBoard";
import BankManagementArcive from "../Journals/BankManagement/BankManagementArcive/BankManagementArcive";
import BiochemistryLayout from "../Layout/BiochemistryLayout";
import BiochemistryHome from "../Journals/Biochemistry/BiochemistryHome/BiochemistryHome";
import BiochemistryIssue from "../Journals/Biochemistry/BiochemistryIssue/BiochemistryIssue";
import BiochemistryScope from "../Journals/Biochemistry/BiochemistryScope/BiochemistryScope";
import BiochemistryBoard from "../Journals/Biochemistry/BiochemistryBoard/BiochemistryBoard";
import BiochemistryArcive from "../Journals/Biochemistry/BiochemistryArcive/BiochemistryArcive";
import BusinessEthicsLayout from "../Layout/BusinessEthicsLayout";
import BusinessEthicsHome from "../Journals/BusinessEthics/BusinessEthicsHome/BusinessEthicsHome";
import BusinessEthicsIssue from "../Journals/BusinessEthics/BusinessEthicsIssue/BusinessEthicsIssue";
import BusinessEthicsScope from "../Journals/BusinessEthics/BusinessEthicsScope/BusinessEthicsScope";
import BusinessEthicsBoard from "../Journals/BusinessEthics/BusinessEthicsBoard/BusinessEthicsBoard";
import BusinessEthicsArcive from "../Journals/BusinessEthics/BusinessEthicsArcive/BusinessEthicsArcive";
import ComputerScienceLayout from "../Layout/ComputerScienceLayout";
import ComputerScienceHome from "../Journals/ComputerScience/ComputerScienceHome/ComputerScienceHome";
import ComputerScienceIssue from "../Journals/ComputerScience/ComputerScienceIssue/ComputerScienceIssue";
import ComputerScienceScope from "../Journals/ComputerScience/ComputerScienceScope/ComputerScienceScope";
import ComputerScienceBoard from "../Journals/ComputerScience/ComputerScienceBoard/ComputerScienceBoard";
import ComputerScienceArcive from "../Journals/ComputerScience/ComputerScienceArcive/ComputerScienceArcive";
import EconomicsLayout from "../Layout/EconomicsLayout";
import EconomicsHome from "../Journals/Economics/EconomicsHome/EconomicsHome";
import EconomicsIssue from "../Journals/Economics/EconomicsIssue/EconomicsIssue";
import EconomicsScope from "../Journals/Economics/EconomicsScope/EconomicsScope";
import EconomicsBoard from "../Journals/Economics/EconomicsBoard/EconomicsBoard";
import EducationLayout from "../Layout/EducationLayout";
import EducationHome from "../Journals/Education/EducationHome/EducationHome";
import EducationIssue from "../Journals/Education/EducationIssue/EducationIssue";
import EducationScope from "../Journals/Education/EducationScope/EducationScope";
import EducationBoard from "../Journals/Education/EducationBoard/EducationBoard";
import EducationArcive from "../Journals/Education/EducationArcive/EducationArcive";
import CriminalJusticeLayout from "../Layout/CriminalJusticeLayout";
import CriminalJusticeHome from "../Journals/CriminalJustice/CriminalJusticeHome/CriminalJusticeHome";
import CriminalJusticeIssue from "../Journals/CriminalJustice/CriminalJusticeIssue/CriminalJusticeIssue";
import CriminalJusticeScope from "../Journals/CriminalJustice/CriminalJusticeScope/CriminalJusticeScope";
import CriminalJusticeBoard from "../Journals/CriminalJustice/CriminalJusticeBoard/CriminalJusticeBoard";
import CriminalJusticeArcive from "../Journals/CriminalJustice/CriminalJusticeArcive/CriminalJusticeArcive";
import GeographyLayout from "../Layout/GeographyLayout";
import GeographyHome from "../Journals/Geography/GeographyHome/GeographyHome";
import GeographyIssue from "../Journals/Geography/GeographyIssue/GeographyIssue";
import GeographyScope from "../Journals/Geography/GeographyScope/GeographyScope";
import GeographyBoard from "../Journals/Geography/GeographyBoard/GeographyBoard";
import GeographyArcive from "../Journals/Geography/GeographyArcive/GeographyArcive";
import SmallBusinessLayout from "../Layout/SmallBusinessLayout";
import SmallBusinessHome from "../Journals/SmallBusiness/SmallBusinessHome/SmallBusinessHome";
import SmallBusinessIssue from "../Journals/SmallBusiness/SmallBusinessIssue/SmallBusinessIssue";
import SmallBusinessScope from "../Journals/SmallBusiness/SmallBusinessScope/SmallBusinessScope";
import SmallBusinessBoard from "../Journals/SmallBusiness/SmallBusinessBoard/SmallBusinessBoard";
import SmallBusinessArcive from "../Journals/SmallBusiness/SmallBusinessArcive/SmallBusinessArcive";
import ForeignLayout from "../Layout/ForeignLayout";
import ForeignHome from "../Journals/Foreign/ForeignHome/ForeignHome";
import ForeignIssue from "../Journals/Foreign/ForeignIssue/ForeignIssue";
import ForeignScope from "../Journals/Foreign/ForeignScope/ForeignScope";
import ForeignArcive from "../Journals/Foreign/ForeignArcive/ForeignArcive";
import HRMNLayout from "../Layout/HRMNLayout";
import HRMHome from "../Journals/HRM/HRMHome/HRMHome";
import HRMIssue from "../Journals/HRM/HRMIssue/HRMIssue";
import HRMScope from "../Journals/HRM/HRMScope/HRMScope";
import HRMBoard from "../Journals/HRM/HRMBoard/HRMBoard";
import HRMArcive from "../Journals/HRM/HRMArcive/HRMArcive";
import HistoryLayout from "../Layout/HistoryLayout";
import HistoryHome from "../Journals/History/HistoryHome/HistoryHome";
import HistoryIssue from "../Journals/History/HistoryIssue/HistoryIssue";
import HistoryScope from "../Journals/History/HistoryScope/HistoryScope";
import HistoryBoard from "../Journals/History/HistoryBoard/HistoryBoard";
import HistoryArcive from "../Journals/History/HistoryArcive/HistoryArcive";
import HumanRightsLayout from "../Layout/HumanRightsLayout";
import HumanRightsHome from "../Journals/HumanRights/HumanRightsHome/HumanRightsHome";
import HumanRightsIssue from "../Journals/HumanRights/HumanRightsIssue/HumanRightsIssue";
import HumanRightsScope from "../Journals/HumanRights/HumanRightsScope/HumanRightsScope";
import HumanRightsBoard from "../Journals/HumanRights/HumanRightsBoard/HumanRightsBoard";
import HumanRightsArcive from "../Journals/HumanRights/HumanRightsArcive/HumanRightsArcive";
import LinguisticsLayout from "../Layout/LinguisticsLayout";
import LinguisticsHome from "../Journals/Linguistics/LinguisticsHome/LinguisticsHome";
import LinguisticsIssue from "../Journals/Linguistics/LinguisticsIssue/LinguisticsIssue";
import LinguisticsScope from "../Journals/Linguistics/LinguisticsScope/LinguisticsScope";
import LinguisticsBoard from "../Journals/Linguistics/LinguisticsBoard/LinguisticsBoard";
import LinguisticsArcive from "../Journals/Linguistics/LinguisticsArcive/LinguisticsArcive";
import GenderLayout from "../Layout/GenderLayout";
import GenderHome from "../Journals/Gender/GenderHome/GenderHome";
import GenderIssue from "../Journals/Gender/GenderIssue/GenderIssue";
import GenderScope from "../Journals/Gender/GenderScope/GenderScope";
import GenderBoard from "../Journals/Gender/GenderBoard/GenderBoard";
import GenderArcive from "../Journals/Gender/GenderArcive/GenderArcive";
import PublicPolicyLayout from "../Layout/PublicPolicyLayout";
import PublicPolicyHome from "../Journals/PublicPolicy/PublicPolicyHome/PublicPolicyHome";
import PublicPolicyIssue from "../Journals/PublicPolicy/PublicPolicyIssue/PublicPolicyIssue";
import PublicPolicyScope from "../Journals/PublicPolicy/PublicPolicyScope/PublicPolicyScope";
import PublicPolicyBoard from "../Journals/PublicPolicy/PublicPolicyBoard/PublicPolicyBoard";
import PublicPolicyArcive from "../Journals/PublicPolicy/PublicPolicyArcive/PublicPolicyArcive";
import MusicLayout from "../Layout/MusicLayout";
import MusicHome from "../Journals/Music/MusicHome/MusicHome";
import MusicIssue from "../Journals/Music/MusicIssue/MusicIssue";
import MusicScope from "../Journals/Music/MusicScope/MusicScope";
import MusicBoard from "../Journals/Music/MusicBoard/MusicBoard";
import MusicArcive from "../Journals/Music/MusicArcive/MusicArcive";
import NursingLayout from "../Layout/NursingLayout";
import NursingHome from "../Journals/Nursing/NursingHome/NursingHome";
import NursingIssue from "../Journals/Nursing/NursingIssue/NursingIssue";
import NursingScope from "../Journals/Nursing/NursingScope/NursingScope";
import NursingBoard from "../Journals/Nursing/NursingBoard/NursingBoard";
import NursingArcive from "../Journals/Nursing/NursingArcive/NursingArcive";
import SportsLayout from "../Layout/SportsLayout";
import SportsHome from "../Journals/Sports/SportsHome/SportsHome";
import SportsIssue from "../Journals/Sports/SportsIssue/SportsIssue";
import SportsScope from "../Journals/Sports/SportsScope/SportsScope";
import SportsBoard from "../Journals/Sports/SportsBoard/SportsBoard";
import SportsArcive from "../Journals/Sports/SportsArcive/SportsArcive";
import PoliticsLayout from "../Layout/PoliticsLayout";
import PoliticsHome from "../Journals/Politics/PoliticsHome/PoliticsHome";
import PoliticsIssue from "../Journals/Politics/PoliticsIssue/PoliticsIssue";
import PoliticsScope from "../Journals/Politics/PoliticsScope/PoliticsScope";
import PoliticsBoard from "../Journals/Politics/PoliticsBoard/PoliticsBoard";
import PoliticsArcive from "../Journals/Politics/PoliticsArcive/PoliticsArcive";
import CultureLayout from "../Layout/CultureLayout";
import CultureHome from "../Journals/Culture/CultureHome/CultureHome";
import CultureIssue from "../Journals/Culture/CultureIssue/CultureIssue";
import CultureScope from "../Journals/Culture/CultureScope/CultureScope";
import CultureBoard from "../Journals/Culture/CultureBoard/CultureBoard";
import CultureArcive from "../Journals/Culture/CultureArcive/CultureArcive";
import MultilingualLayout from "../Layout/MultilingualLayout";
import MultilingualHome from "../Journals/Multilingual/MultilingualHome/MultilingualHome";
import MultilingualIssue from "../Journals/Multilingual/MultilingualIssue/MultilingualIssue";
import MultilingualScope from "../Journals/Multilingual/MultilingualScope/MultilingualScope";
import MultilingualBoard from "../Journals/Multilingual/MultilingualBoard/MultilingualBoard";
import MultilingualArcive from "../Journals/Multilingual/MultilingualArcive/MultilingualArcive";
import LanguageLayout from "../Layout/LanguageLayout";
import LanguageHome from "../Journals/Language/LanguageHome/LanguageHome";
import LanguageIssue from "../Journals/Language/LanguageIssue/LanguageIssue";
import LanguageScope from "../Journals/Language/LanguageScope/LanguageScope";
import LanguageBoard from "../Journals/Language/LanguageBoard/LanguageBoard";
import LanguageArcive from "../Journals/Language/LanguageArcive/LanguageArcive";
import ManagementLayout from "../Layout/ManagementLayout";
import ManagementHome from "../Journals/Management/ManagementHome/ManagementHome";
import ManagementIssue from "../Journals/Management/ManagementIssue/ManagementIssue";
import ManagementScope from "../Journals/Management/ManagementScope/ManagementScope";
import ManagementBoard from "../Journals/Management/ManagementBoard/ManagementBoard";
import ManagementArcive from "../Journals/Management/ManagementArcive/ManagementArcive";
import MarketingLayout from "../Layout/MarketingLayout";
import MarketingHome from "../Journals/Marketing/MarketingHome/MarketingHome";
import MarketingIssue from "../Journals/Marketing/MarketingIssue/MarketingIssue";
import MarketingScope from "../Journals/Marketing/MarketingScope/MarketingScope";
import MarketingBoard from "../Journals/Marketing/MarketingBoard/MarketingBoard";
import MarketingArcive from "../Journals/Marketing/MarketingArcive/MarketingArcive";
import MedicineLayout from "../Layout/MedicineLayout";
import MedicineHome from "../Journals/Medicine/MedicineHome/MedicineHome";
import MedicineIssue from "../Journals/Medicine/MedicineIssue/MedicineIssue";
import MedicineScope from "../Journals/Medicine/MedicineScope/MedicineScope";
import MedicineBoard from "../Journals/Medicine/MedicineBoard/MedicineBoard";
import MedicineArcive from "../Journals/Medicine/MedicineArcive/MedicineArcive";
import PolicyStudiesLayout from "../Layout/PolicyStudiesLayout";
import PolicyStudiesHome from "../Journals/PolicyStudies/PolicyStudiesHome/PolicyStudiesHome";
import PolicyStudiesIssue from "../Journals/PolicyStudies/PolicyStudiesIssue/PolicyStudiesIssue";
import PolicyStudiesScope from "../Journals/PolicyStudies/PolicyStudiesScope/PolicyStudiesScope";
import PolicyStudiesBoard from "../Journals/PolicyStudies/PolicyStudiesBoard/PolicyStudiesBoard";
import PolicyStudiesArcive from "../Journals/PolicyStudies/PolicyStudiesArcive/PolicyStudiesArcive";
import SociologyLayout from "../Layout/SociologyLayout";
import SociologyHome from "../Journals/Sociology/SociologyHome/SociologyHome";
import SociologyIssue from "../Journals/Sociology/SociologyIssue/SociologyIssue";
import SociologyScope from "../Journals/Sociology/SociologyScope/SociologyScope";
import SociologyBoard from "../Journals/Sociology/SociologyBoard/SociologyBoard";
import SociologyArcive from "../Journals/Sociology/SociologyArcive/SociologyArcive";
import MathematicsLayout from "../Layout/MathematicsLayout";
import MathematicsHome from "../Journals/Mathematics/MathematicsHome/MathematicsHome";
import MathematicsIssue from "../Journals/Mathematics/MathematicsIssue/MathematicsIssue";
import MathematicsScope from "../Journals/Mathematics/MathematicsScope/MathematicsScope";
import MathematicsBoard from "../Journals/Mathematics/MathematicsBoard/MathematicsBoard";
import MathematicsArcive from "../Journals/Mathematics/MathematicsArcive/MathematicsArcive";
import TourismLayout from "../Layout/TourismLayout";
import TourismHome from "../Journals/Tourism/TourismHome/TourismHome";
import TourismIssue from "../Journals/Tourism/TourismIssue/TourismIssue";
import TourismScope from "../Journals/Tourism/TourismScope/TourismScope";
import TourismBoard from "../Journals/Tourism/TourismBoard/TourismBoard";
import TourismArcive from "../Journals/Tourism/TourismArcive/TourismArcive";
import PhysicsLayout from "../Layout/PhysicsLayout";
import PhysicsHome from "../Journals/Physics/PhysicsHome/PhysicsHome";
import PhysicsIssue from "../Journals/Physics/PhysicsIssue/PhysicsIssue";
import PhysicsScope from "../Journals/Physics/PhysicsScope/PhysicsScope";
import PhysicsBoard from "../Journals/Physics/PhysicsBoard/PhysicsBoard";
import PhysicsArcive from "../Journals/Physics/PhysicsArcive/PhysicsArcive";
import PsychologyLayout from "../Layout/PsychologyLayout";
import PsychologyHome from "../Journals/Psychology/PsychologyHome/PsychologyHome";
import PsychologyIssue from "../Journals/Psychology/PsychologyIssue/PsychologyIssue";
import PsychologyScope from "../Journals/Psychology/PsychologyScope/PsychologyScope";
import PsychologyBoard from "../Journals/Psychology/PsychologyBoard/PsychologyBoard";
import PsychologyArcive from "../Journals/Psychology/PsychologyArcive/PsychologyArcive";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/subjects",
                element: <Subjects></Subjects>
            },
            {
                path: "/research",
                element: <ResearchPage></ResearchPage>
            },
            {
                path: "/research_details",
                element: <ResearchDetails></ResearchDetails>
            },
            {
                path: "/about",
                element: <AboutPage></AboutPage>
            },
            {
                path: "/membership",
                element:<MemberShipPage></MemberShipPage>
            },
            {
                path: "/contact",
                element:<ContactPage></ContactPage>
            },
            {
                path:"/information",
                element:<CenterLayout></CenterLayout>,
                children:[
                    {
                        path:"/information/submission",
                        element:<CenterSubmission></CenterSubmission>
                    },
                    {
                        path:"/information/resources",
                        element:<CenterResources></CenterResources>
                    },
                    {
                        path:"/information/policies",
                        element:<CenterPolicy></CenterPolicy>
                    },
                    {
                        path:"/information/usefull_link",
                        element:<CenterLink></CenterLink>
                    },
                    {
                        path:"/information/latest_activities",
                        element:<CenterActivities></CenterActivities>
                    },
                    {
                        path:"/information/subcription",
                        element:<CenterSubcription></CenterSubcription>
                    },
                    {
                        path:"/information/information",
                        element:<CenterInfixedformation></CenterInfixedformation>
                    },
                    {
                        path:"/information/index",
                        element:<CenterIndex></CenterIndex>
                    },
                ]
            },
            {
                path: "/submisson",
                element:<FixedSubmisson></FixedSubmisson>
            },
            {
                path: "/resources",
                element:<FixedResources></FixedResources>
            },
            {
                path: "/polices",
                element:<FixedPolicy></FixedPolicy>
            },
            {
                path: "/usefull_link",
                element:<FixedUseFullLink></FixedUseFullLink>
            },
            {
                path: "/privecy_policy",
                element:<Privecy></Privecy>
            },
            {
                path: "/accessibility",
                element:<Accessibility></Accessibility>
            },

            {
                path:"/Ijatnet",
                element:<AccountingLayout></AccountingLayout>,
                children:[
                    {
                        path:"/Ijatnet",
                        element:<AccountingHome></AccountingHome>
                    },
                    {
                        path:"/Ijatnet/current-ijat",
                        element:<AccountingCurrentIssue></AccountingCurrentIssue>
                    },
                    {
                        path:"/Ijatnet/scope-ijat",
                        element:<AccountingScope></AccountingScope>
                    },
                    {
                        path:"/Ijatnet/editorial-board",
                        element:<AccountingBoard></AccountingBoard>
                    },
                    {
                        path:"/Ijatnet/subscription",
                        element:<AccountingSubmision></AccountingSubmision>
                    },
                    {
                        path:"/Ijatnet/resources",
                        element:<AccountingResouch></AccountingResouch>
                    },
                    {
                        path:"/Ijatnet/policies",
                        element:<AccountingPolice></AccountingPolice>
                    },
                    {
                        path:"/Ijatnet/usefull_link",
                        element:<AccountingUsefullLinks></AccountingUsefullLinks>
                    },
                    {
                        path:"/Ijatnet/latest_activities",
                        element:<AccountingActivities></AccountingActivities>
                    },
                    {
                        path:"/Ijatnet/subcription",
                        element:<AccountingSubcription></AccountingSubcription>
                    },
                    {
                        path:"/Ijatnet/information",
                        element:<AccountingInfo></AccountingInfo>
                    },
                    {
                        path:"/Ijatnet/index",
                        element:<AccountingIndex></AccountingIndex>
                    },
                    {
                        path:"/Ijatnet/archive-ijat",
                        element:<AccountingArcrive></AccountingArcrive>
                    },
                ]
            },

            {
                path:"/jaes",
                element:<AgricultureLayout></AgricultureLayout>,
                children:[
                    {
                        path:"/jaes",
                        element:<JaesHome></JaesHome>
                    },
                    {
                        path:"/jaes/current-jaes",
                        element:<JaesCurrentIssu></JaesCurrentIssu>
                    },
                    {
                        path:"/jaes/scope-jaes",
                        element:<JaesScope></JaesScope>
                    },
                    {
                        path:"/jaes/editorial-board",
                        element:<JaesEditor></JaesEditor>
                    },
                    {
                        path:"/jaes/subscription",
                        element:<JaesSubcription></JaesSubcription>
                    },
                    {
                        path:"/jaes/resources",
                        element:<JaesResources></JaesResources>
                    },
                    {
                        path:"/jaes/policies",
                        element:<JaesPolicy></JaesPolicy>
                    },
                    {
                        path:"/jaes/usefull_link",
                        element:<JaesUsefullLink></JaesUsefullLink>
                    },
                    {
                        path:"/jaes/latest_activities",
                        element:<JaesActivites></JaesActivites>
                    },
                    {
                        path:"/jaes/submission",
                        element:<JaesSubmission></JaesSubmission>
                    },
                ]
            },

            {
                path:"/jea",
                element:<EngineeringLayout></EngineeringLayout>,
                children:[
                    {
                        path:"/jea",
                        element:<JeaHome></JeaHome>
                    },
                    {
                        path:"/jea/current-jea",
                        element:<JeaCurrentIssue></JeaCurrentIssue>
                    },
                    {
                        path:"/jea/scope-jea",
                        element:<JeaScope></JeaScope>
                    },
                    {
                        path:"/jea/editorial-board",
                        element:<JeaBoard></JeaBoard>
                    },
                    {
                        path:"/jea/submission",
                        element:<JeaSubmission></JeaSubmission>
                    },
                    {
                        path:"/jea/resources",
                        element:<JeaResources></JeaResources>
                    },
                    {
                        path:"/jea/policies",
                        element:<JeaPolicy></JeaPolicy>
                    },
                    {
                        path:"/jea/usefull_link",
                        element:<JeaUsefullLink></JeaUsefullLink>
                    },
                    {
                        path:"/jea/latest_activities",
                        element:<JeaActivities></JeaActivities>
                    },
                    {
                        path:"/jea/subcription",
                        element:<JeaSubcription></JeaSubcription>
                    },
                    {
                        path:"/jea/information",
                        element:<JeaInformation></JeaInformation>
                    },
                    {
                        path:"/jea/index",
                        element:<JeoIndex></JeoIndex>
                    },
                    {
                        path:"/jea/archive-ijat",
                        element:<JeoLoadArcive></JeoLoadArcive>
                    },
                ]
            },

            {
                path:"/jaa",
                element:<ArchaeologyLayout></ArchaeologyLayout>,
                children:[
                    {
                        path:"/jaa",
                        element:<ArchaeologyHome></ArchaeologyHome>
                    },
                    {
                        path:"/jaa/current-jaa",
                        element:<ArchaeologyCurrentIssu></ArchaeologyCurrentIssu>
                    },
                    {
                        path:"/jaa/scope-jaa",
                        element:<ArchaeologyScope></ArchaeologyScope>
                    },
                    {
                        path:"/jaa/editorial-board",
                        element:<ArchaeologyBoard></ArchaeologyBoard>
                    },
                    {
                        path:"/jaa/archive-jaa",
                        element:<ArchaeologyAricive></ArchaeologyAricive>
                    },
                ]
            },

            {
                path:"/ijaah",
                element:<ArtHistoryLayout></ArtHistoryLayout>,
                children:[
                    {
                        path:"/ijaah",
                        element:<ArtHistoryHome></ArtHistoryHome>
                    },
                    {
                        path:"/ijaah/current-ijaah",
                        element:<ArtHistoryCurrentIssu></ArtHistoryCurrentIssu>
                    },
                    {
                        path:"/ijaah/scope-ijaah",
                        element:<ArtHistoryScope></ArtHistoryScope>
                    },
                    {
                        path:"/ijaah/editorial-board",
                        element:<ArtHistoryBoard></ArtHistoryBoard>
                    },
                    {
                        path:"/ijaah/subscription",
                        element:<ArtHistorySubmissoin></ArtHistorySubmissoin>
                    },
                    {
                        path:"/ijaah/resources",
                        element:<ArtHistoryResourches></ArtHistoryResourches>
                    },
                    {
                        path:"/ijaah/policies",
                        element:<ArtHistoryPolicy></ArtHistoryPolicy>
                    },
                    {
                        path:"/ijaah/usefull_link",
                        element:<ArtHistoryUsefullLink></ArtHistoryUsefullLink>
                    },
                    {
                        path:"/ijaah/latest_activities",
                        element:<ArtHistoryUsefullLink></ArtHistoryUsefullLink>
                    },
                    {
                        path:"/ijaah/subcription",
                        element:<ArtHistorySubcription></ArtHistorySubcription>
                    },
                    {
                        path:"/ijaah/information",
                        element:<ArtHistoryInformation></ArtHistoryInformation>
                    },
                    {
                        path:"/ijaah/index",
                        element:<ArtHistoryIndex></ArtHistoryIndex>
                    },
                    {
                        path:"/ijaah/archive-ijaah",
                        element:<ArtHistoryArcive></ArtHistoryArcive>
                    },
                ]
            },

            {
                path:"/jfbm",
                element:<BankManagementLayout></BankManagementLayout>,
                children:[
                    {
                        path:"/jfbm",
                        element:<BankManagementHome></BankManagementHome>
                    },
                    {
                        path:"/jfbm/current-jfbm",
                        element:<BankManagementIssue></BankManagementIssue>
                    },
                    {
                        path:"/jfbm/scope-jfbm",
                        element:<BankManagementScope></BankManagementScope>
                    },
                    {
                        path:"/jfbm/editorial-board",
                        element:<BankManagementBoard></BankManagementBoard>
                    },
                    {
                        path:"/jfbm/archive-jfbm",
                        element:<BankManagementArcive></BankManagementArcive>
                    },
                ]
            },

            {
                path:"/jcb",
                element:<BiochemistryLayout></BiochemistryLayout>,
                children:[
                    {
                        path:"/jcb",
                        element:<BiochemistryHome></BiochemistryHome> 
                    },
                    {
                        path:"/jcb/current-jcb",
                        element:<BiochemistryIssue></BiochemistryIssue>
                    },
                    {
                        path:"/jcb/scope-jcb",
                        element:<BiochemistryScope></BiochemistryScope>
                    },
                    {
                        path:"/jcb/editorial-board",
                        element:<BiochemistryBoard></BiochemistryBoard>
                    },
                    {
                        path:"/jcb/archive-jcb",
                        element:<BiochemistryArcive></BiochemistryArcive>
                    },
                ]
            },

            {
                path:"/jble",
                element:<BusinessEthicsLayout></BusinessEthicsLayout>,
                children:[
                    {
                        path:"/jble",
                        element:<BusinessEthicsHome></BusinessEthicsHome>
                    },
                    {
                        path:"/jble/current-jble",
                        element:<BusinessEthicsIssue></BusinessEthicsIssue>
                    },
                    {
                        path:"/jble/scope-jble",
                        element:<BusinessEthicsScope></BusinessEthicsScope>
                    },
                    {
                        path:"/jble/editorial-board",
                        element:<BusinessEthicsBoard></BusinessEthicsBoard>
                    },
                    {
                        path:"/jble/archive-jble",
                        element:<BusinessEthicsArcive></BusinessEthicsArcive>
                    },
                ]
            },

            {
                path:"/jcsit",
                element:<ComputerScienceLayout></ComputerScienceLayout>,
                children:[
                    {
                        path:"/jcsit",
                        element:<ComputerScienceHome></ComputerScienceHome>
                    },
                    {
                        path:"/jcsit/current-jcsit",
                        element:<ComputerScienceIssue></ComputerScienceIssue>
                    },
                    {
                        path:"/jcsit/scope-jcsit",
                        element:<ComputerScienceScope></ComputerScienceScope>
                    },
                    {
                        path:"/jcsit/editorial-board",
                        element:<ComputerScienceBoard></ComputerScienceBoard>
                    },
                    {
                        path:"/jcsit/archive-jcsit",
                        element:<ComputerScienceArcive></ComputerScienceArcive>
                    },
                ]
            },

            {
                path:"/jeds",
                element:<EconomicsLayout></EconomicsLayout>,
                children:[
                    {
                        path:"/jeds",
                        element:<EconomicsHome></EconomicsHome>
                    },
                    {
                        path:"/jeds/current-jeds",
                        element:<EconomicsIssue></EconomicsIssue>
                    },
                    {
                        path:"/jeds/scope-jeds",
                        element:<EconomicsScope></EconomicsScope>
                    },
                    {
                        path:"/jeds/editorial-board",
                        element:<EconomicsBoard></EconomicsBoard>
                    },
                ]
            },

            {
                path:"/jehd",
                element:<EducationLayout></EducationLayout>,
                children:[
                    {
                        path:"/jehd",
                        element:<EducationHome></EducationHome>
                    },
                    {
                        path:"/jehd/current-jehd",
                        element:<EducationIssue></EducationIssue>
                    },
                    {
                        path:"/jehd/scope-jehd",
                        element:<EducationScope></EducationScope>
                    },
                    {
                        path:"/jehd/editorial-board",
                        element:<EducationBoard></EducationBoard>
                    },
                    {
                        path:"/jehd/archive-jeds",
                        element:<EducationArcive></EducationArcive>
                    },
                ]
            },

            {
                path:"/jlcj",
                element:<CriminalJusticeLayout></CriminalJusticeLayout>,
                children:[
                    {
                        path:"/jlcj",
                        element:<CriminalJusticeHome></CriminalJusticeHome>
                    },
                    {
                        path:"/jlcj/current-jlcj",
                        element:<CriminalJusticeIssue></CriminalJusticeIssue>
                    },
                    {
                        path:"/jlcj/scope-jlcj",
                        element:<CriminalJusticeScope></CriminalJusticeScope>
                    },
                    {
                        path:"/jlcj/editorial-board",
                        element:<CriminalJusticeBoard></CriminalJusticeBoard>
                    },
                    {
                        path:"/jlcj/archive-jlcj",
                        element:<CriminalJusticeArcive></CriminalJusticeArcive>
                    },
                ]
            },

            {
                path:"/jges",
                element:<GeographyLayout></GeographyLayout>,
                children:[
                    {
                        path:"/jges",
                        element:<GeographyHome></GeographyHome> 
                    },
                    {
                        path:"/jges/current-jges",
                        element:<GeographyIssue></GeographyIssue>
                    },
                    {
                        path:"/jges/scope-jges",
                        element:<GeographyScope></GeographyScope>
                    },
                    {
                        path:"/jges/editorial-board",
                        element:<GeographyBoard></GeographyBoard>
                    },
                    {
                        path:"/jges/archive-jges",
                        element:<GeographyArcive></GeographyArcive>
                    },
                ]
            },

            {
                path:"/jsbed",
                element:<SmallBusinessLayout></SmallBusinessLayout>,
                children:[
                    {
                        path:"/jsbed",
                        element:<SmallBusinessHome></SmallBusinessHome>
                    },
                    {
                        path:"/jsbed/current-jsbed",
                        element:<SmallBusinessIssue></SmallBusinessIssue>
                    },
                    {
                        path:"/jsbed/scope-jsbed",
                        element:<SmallBusinessScope></SmallBusinessScope>
                    },
                    {
                        path:"/jsbed/editorial-board",
                        element:<SmallBusinessBoard></SmallBusinessBoard>
                    },
                    {
                        path:"/jsbed/archive-jsbed",
                        element:<SmallBusinessArcive></SmallBusinessArcive>
                    },
                ]
            },

            {
                path:"/jirfp",
                element:<ForeignLayout></ForeignLayout>,
                children:[
                    {
                        path:"/jirfp",
                        element:<ForeignHome></ForeignHome>
                    },
                    {
                        path:"/jirfp/current-jirfp",
                        element:<ForeignIssue></ForeignIssue>
                    },
                    {
                        path:"/jirfp/scope-jirfp",
                        element:<ForeignScope></ForeignScope>
                    },
                    {
                        path:"/jirfp/archive-jirfp",
                        element:<ForeignArcive></ForeignArcive>
                    },
                ]
            },

            {
                path:"/jhrmls",
                element:<HRMNLayout></HRMNLayout>,
                children:[
                    {
                        path:"/jhrmls",
                        element:<HRMHome></HRMHome>
                    },
                    {
                        path:"/jhrmls/current-jhrmls",
                        element:<HRMIssue></HRMIssue>
                    },
                    {
                        path:"/jhrmls/scope-jhrmls",
                        element:<HRMScope></HRMScope>
                    },
                    {
                        path:"/jhrmls/editorial-board",
                        element:<HRMBoard></HRMBoard>
                    },
                    {
                        path:"/jhrmls/archive-jhrmls",
                        element:<HRMArcive></HRMArcive>
                    },
                ]
            },

            {
                path:"/rhps",
                element:<HistoryLayout></HistoryLayout>,
                children:[
                    {
                        path:"/rhps",
                        element:<HistoryHome></HistoryHome> 
                    },
                    {
                        path:"/rhps/current-rhps",
                        element:<HistoryIssue></HistoryIssue> 
                    },
                    {
                        path:"/rhps/scope-rhps",
                        element:<HistoryScope></HistoryScope>
                    },
                    {
                        path:"/rhps/editorial-board",
                        element:<HistoryBoard></HistoryBoard>
                    },
                    {
                        path:"/rhps/archive-rhps",
                        element:<HistoryArcive></HistoryArcive>
                    },
                ]
            },

            {
                path:"/jswhr",
                element:<HumanRightsLayout></HumanRightsLayout>,
                children:[
                    {
                        path:"/jswhr",
                        element:<HumanRightsHome></HumanRightsHome>
                    },
                    {
                        path:"/jswhr/current-jswhr",
                        element:<HumanRightsIssue></HumanRightsIssue>
                    },
                    {
                        path:"/jswhr/scope-jswhr",
                        element:<HumanRightsScope></HumanRightsScope>
                    },
                    {
                        path:"/jswhr/editorial-board",
                        element:<HumanRightsBoard></HumanRightsBoard>
                    },
                    {
                        path:"/jswhr/archive-jswhr",
                        element:<HumanRightsArcive></HumanRightsArcive>
                    },
                ]
            },

            {
                path:"/ijlc",
                element:<LinguisticsLayout></LinguisticsLayout>,
                children:[
                    {
                        path:"/ijlc",
                        element:<LinguisticsHome></LinguisticsHome>
                    },
                    {
                        path:"/ijlc/current-ijlc",
                        element:<LinguisticsIssue></LinguisticsIssue>
                    },
                    {
                        path:"/ijlc/scope-ijlc",
                        element:<LinguisticsScope></LinguisticsScope>
                    },
                    {
                        path:"/ijlc/editorial-board",
                        element:<LinguisticsBoard></LinguisticsBoard>
                    },
                    {
                        path:"/ijlc/editorial-board",
                        element:<LinguisticsBoard></LinguisticsBoard>
                    },
                    {
                        path:"/ijlc/archive-ijlc",
                        element:<LinguisticsArcive></LinguisticsArcive>
                    },
                ]
            },

            {
                path:"/ijgws",
                element:<GenderLayout></GenderLayout>,
                children:[
                    {
                        path:"/ijgws",
                        element:<GenderHome></GenderHome>
                    },
                    {
                        path:"/ijgws/current-ijgws",
                        element:<GenderIssue></GenderIssue>
                    },
                    {
                        path:"/ijgws/scope-ijgws",
                        element:<GenderScope></GenderScope>
                    },
                    {
                        path:"/ijgws/editorial-board",
                        element:<GenderBoard></GenderBoard>
                    },
                    {
                        path:"/ijgws/archive-ijgws",
                        element:<GenderArcive></GenderArcive>
                    },
                ]
            },

            {
                path:"/ppar",
                element:<PublicPolicyLayout></PublicPolicyLayout>,
                children:[
                    {
                        path:"/ppar",
                        element:<PublicPolicyHome></PublicPolicyHome>
                    },
                    {
                        path:"/ppar/current-ppar",
                        element:<PublicPolicyIssue></PublicPolicyIssue>
                    },
                    {
                        path:"/ppar/scope-ppar",
                        element:<PublicPolicyScope></PublicPolicyScope>
                    },
                    {
                        path:"/ppar/editorial-board",
                        element:<PublicPolicyBoard></PublicPolicyBoard>
                    },
                    {
                        path:"/ppar/archive-ppar",
                        element:<PublicPolicyArcive></PublicPolicyArcive>
                    },
                ]
            },

            {
                path:"/ijmpa",
                element:<MusicLayout></MusicLayout>,
                children:[
                    {
                        path:"/ijmpa",
                        element:<MusicHome></MusicHome>
                    },
                    {
                        path:"/ijmpa/current-ijmpa",
                        element:<MusicIssue></MusicIssue>
                    },
                    {
                        path:"/ijmpa/scope-ijmpa",
                        element:<MusicScope></MusicScope>
                    },
                    {
                        path:"/ijmpa/editorial-board",
                        element:<MusicBoard></MusicBoard>
                    },
                    {
                        path:"/ijmpa/archive-ijmpa",
                        element:<MusicArcive></MusicArcive>
                    },
                ]
            },

            {
                path:"/ijn",
                element:<NursingLayout></NursingLayout>,
                children:[
                    {
                        path:"/ijn",
                        element:<NursingHome></NursingHome>
                    },
                    {
                        path:"/ijn/current-ijn",
                        element:<NursingIssue></NursingIssue>
                    },
                    {
                        path:"/ijn/scope-ijn",
                        element:<NursingScope></NursingScope>
                    },
                    {
                        path:"/ijn/editorial-board",
                        element:<NursingBoard></NursingBoard>
                    },
                    {
                        path:"/ijn/archive-ijn",
                        element:<NursingArcive></NursingArcive>
                    },
                ]
            },

            {
                path:"/jpesm",
                element:<SportsLayout></SportsLayout>,
                children:[
                    {
                        path:"/jpesm",
                        element:<SportsHome></SportsHome>
                    },
                    {
                        path:"/jpesm/current-jpesm",
                        element:<SportsIssue></SportsIssue>
                    },
                    {
                        path:"/jpesm/scope-jpesm",
                        element:<SportsScope></SportsScope>
                    },
                    {
                        path:"/jpesm/editorial-board",
                        element:<SportsBoard></SportsBoard>
                    },
                    {
                        path:"/jpesm/archive-jpesm",
                        element:<SportsArcive></SportsArcive>
                    },
                ]
            },

            {
                path:"/jppg",
                element:<PoliticsLayout></PoliticsLayout>,
                children:[
                    {
                        path:"/jppg",
                        element:<PoliticsHome></PoliticsHome>
                    },
                    {
                        path:"/jppg/current-jppg",
                        element:<PoliticsIssue></PoliticsIssue>
                    },
                    {
                        path:"/jppg/scope-jppg",
                        element:<PoliticsScope></PoliticsScope>
                    },
                    {
                        path:"/jppg/editorial-board",
                        element:<PoliticsBoard></PoliticsBoard>
                    },
                    {
                        path:"/jppg/archive-jppg",
                        element:<PoliticsArcive></PoliticsArcive>
                    },
                ]
            },

            {
                path:"/jisc",
                element:<CultureLayout></CultureLayout>,
                children:[
                    {
                        path:"/jisc",
                        element:<CultureHome></CultureHome>
                    },
                    {
                        path:"/jisc/current-jisc",
                        element:<CultureIssue></CultureIssue>
                    },
                    {
                        path:"/jisc/scope-jisc",
                        element:<CultureScope></CultureScope>
                    },
                    {
                        path:"/jisc/editorial-board",
                        element:<CultureBoard></CultureBoard>
                    },
                    {
                        path:"/jisc/archive-jisc",
                        element:<CultureArcive></CultureArcive>
                    },
                ]
            },

            {
                path:"/imjcr",
                element:<MultilingualLayout></MultilingualLayout>,
                children:[
                    {
                        path:"/imjcr",
                        element:<MultilingualHome></MultilingualHome>
                    },
                    {
                        path:"/imjcr/current-imjcr",
                        element:<MultilingualIssue></MultilingualIssue>
                    },
                    {
                        path:"/imjcr/scope-imjcr",
                        element:<MultilingualScope></MultilingualScope>
                    },
                    {
                        path:"/imjcr/editorial-board",
                        element:<MultilingualBoard></MultilingualBoard>
                    },
                    {
                        path:"/imjcr/archive-imjcr",
                        element:<MultilingualArcive></MultilingualArcive>
                    },
                ]
            },

            {
                path:"/ijll",
                element:<LanguageLayout></LanguageLayout>,
                children:[
                    {
                        path:"/ijll",
                        element:<LanguageHome></LanguageHome>
                    },
                    {
                        path:"/ijll/current-ijll",
                        element:<LanguageIssue></LanguageIssue>
                    },
                    {
                        path:"/ijll/scope-ijll",
                        element:<LanguageScope></LanguageScope>
                    },
                    {
                        path:"/ijll/editorial-board",
                        element:<LanguageBoard></LanguageBoard>
                    },
                    {
                        path:"/ijll/archive-ijll",
                        element:<LanguageArcive></LanguageArcive>
                    },
                ]
            },

            {
                path:"/jmpp",
                element:<ManagementLayout></ManagementLayout>,
                children:[
                    {
                        path:"/jmpp",
                        element:<ManagementHome></ManagementHome>
                    },
                    {
                        path:"/jmpp/current-jmpp",
                        element:<ManagementIssue></ManagementIssue>
                    },
                    {
                        path:"/jmpp/scope-jmpp",
                        element:<ManagementScope></ManagementScope>
                    },
                    {
                        path:"/jmpp/editorial-board",
                        element:<ManagementBoard></ManagementBoard>
                    },
                    {
                        path:"/jmpp/archive-jmpp",
                        element:<ManagementArcive></ManagementArcive>
                    },
                ]
            },

            {
                path:"/jmm",
                element:<MarketingLayout></MarketingLayout>,
                children:[
                    {
                        path:"/jmm",
                        element:<MarketingHome></MarketingHome>
                    },
                    {
                        path:"/jmm/current-jmm",
                        element:<MarketingIssue></MarketingIssue>
                    },
                    {
                        path:"/jmm/scope-jmm",
                        element:<MarketingScope></MarketingScope>
                    },
                    {
                        path:"/jmm/editorial-board",
                        element:<MarketingBoard></MarketingBoard>
                    },
                    {
                        path:"/jmm/archive-jmm",
                        element:<MarketingArcive></MarketingArcive>
                    },
                ]
            },

            {
                path:"/ijmp",
                element:<MedicineLayout></MedicineLayout>,
                children:[
                    {
                        path:"/ijmp",
                        element:<MedicineHome></MedicineHome>
                    },
                    {
                        path:"/ijmp/current-ijmp",
                        element:<MedicineIssue></MedicineIssue>
                    },
                    {
                        path:"/ijmp/scope-ijmp",
                        element:<MedicineScope></MedicineScope>
                    },
                    {
                        path:"/ijmp/editorial-board",
                        element:<MedicineBoard></MedicineBoard>
                    },
                    {
                        path:"/ijmp/archive-ijmp",
                        element:<MedicineArcive></MedicineArcive>
                    },
                ]
            },

            {
                path:"/jasps",
                element:<PolicyStudiesLayout></PolicyStudiesLayout>,
                children:[
                    {
                        path:"/jasps",
                        element:<PolicyStudiesHome></PolicyStudiesHome>
                    },
                    {
                        path:"/jasps/current-jasps",
                        element:<PolicyStudiesIssue></PolicyStudiesIssue>
                    },
                    {
                        path:"/jasps/scope-jasps",
                        element:<PolicyStudiesScope></PolicyStudiesScope>
                    },
                    {
                        path:"/jasps/editorial-board",
                        element:<PolicyStudiesBoard></PolicyStudiesBoard>
                    },
                    {
                        path:"/jasps/archive-jasps",
                        element:<PolicyStudiesArcive></PolicyStudiesArcive>
                    },
                ]
            },

            {
                path:"/jssw",
                element:<SociologyLayout></SociologyLayout>,
                children:[
                    {
                        path:"/jssw",
                        element:<SociologyHome></SociologyHome>
                    },
                    {
                        path:"/jssw/current-jssw",
                        element:<SociologyIssue></SociologyIssue>
                    },
                    {
                        path:"/jssw/scope-jssw",
                        element:<SociologyScope></SociologyScope>
                    },
                    {
                        path:"/jssw/editorial-board",
                        element:<SociologyBoard></SociologyBoard>
                    },
                    {
                        path:"/jssw/archive-jssw",
                        element:<SociologyArcive></SociologyArcive>
                    },
                ]
            },

            {
                path:"/arms",
                element:<MathematicsLayout></MathematicsLayout>,
                children:[
                    {
                        path:"/arms",
                        element:<MathematicsHome></MathematicsHome>
                    },
                    {
                        path:"/arms/current-arms",
                        element:<MathematicsIssue></MathematicsIssue>
                    },
                    {
                        path:"/arms/scope-arms",
                        element:<MathematicsScope></MathematicsScope>
                    },
                    {
                        path:"/arms/editorial-board",
                        element:<MathematicsBoard></MathematicsBoard>
                    },
                    {
                        path:"/arms/archive-arms",
                        element:<MathematicsArcive></MathematicsArcive>
                    },
                ]
            },

            {
                path:"/jthm",
                element:<TourismLayout></TourismLayout>,
                children:[
                    {
                        path:"/jthm",
                        element:<TourismHome></TourismHome>
                    },
                    {
                        path:"/jthm/current-jthm",
                        element:<TourismIssue></TourismIssue>
                    },
                    {
                        path:"/jthm/scope-jthm",
                        element:<TourismScope></TourismScope>
                    },
                    {
                        path:"/jthm/editorial-board",
                        element:<TourismBoard></TourismBoard>
                    },
                    {
                        path:"/jthm/archive-jthm",
                        element:<TourismArcive></TourismArcive>
                    },
                ]
            },

            {
                path:"/ijpa",
                element:<PhysicsLayout></PhysicsLayout>,
                children:[
                    {
                        path:"/ijpa",
                        element:<PhysicsHome></PhysicsHome>
                    },
                    {
                        path:"/ijpa/current-ijpa",
                        element:<PhysicsIssue></PhysicsIssue>
                    },
                    {
                        path:"/ijpa/scope-ijpa",
                        element:<PhysicsScope></PhysicsScope>
                    },
                    {
                        path:"/ijpa/editorial-board",
                        element:<PhysicsBoard></PhysicsBoard>
                    },
                    {
                        path:"/ijpa/archive-ijpa",
                        element:<PhysicsArcive></PhysicsArcive>
                    },
                ]
            },

            {
                path:"/jpbs",
                element:<PsychologyLayout></PsychologyLayout>,
                children:[
                    {
                        path:"/jpbs",
                        element:<PsychologyHome></PsychologyHome>
                    },
                    {
                        path:"/jpbs/current-jpbs",
                        element:<PsychologyIssue></PsychologyIssue>
                    },
                    {
                        path:"/jpbs/scope-jpbs",
                        element:<PsychologyScope></PsychologyScope>
                    },
                    {
                        path:"/jpbs/editorial-board",
                        element:<PsychologyBoard></PsychologyBoard>
                    },
                    {
                        path:"/jpbs/archive-jpbs",
                        element:<PsychologyArcive></PsychologyArcive>
                    },
                ]
            }
           
            
        ],

    },

    {
        path:"/login",
        element:<LogIn></LogIn>
    },
    {
        path:"/signup",
        element:<SignUp></SignUp>
    }
]);