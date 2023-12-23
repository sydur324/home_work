import { Link } from 'react-router-dom';
import './Subjects.css'
import { FiSearch } from "react-icons/fi";
import PageTitle from '../../Utilities/PageTitle/PageTitle';
import RoutingTop from '../../Utilities/PageTitle/RoutingTop/RoutingTop';
const Subjects = () => {
    const leftSubjects = [
        { id: 1, name: "Accounting", to: "/Ijatnet", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 2, name: "Agriculture", to: "/jaes", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 3, name: "Archaeology", to: "/jaa", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 4, name: "Art and Art History", to: "/ijaah", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 6, name: "Bank Management", to: "/jfbm", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 7, name: "Biochemistry", to: "/jcb", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 7, name: "Business Ethics", to: "/jble", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 8, name: "Chemistry", to: "/jcb", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 9, name: "Computer Science", to: "/jcsit", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 10, name: "Criminal Justice", to: "/jlcj", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 11, name: "Development Studies", to: "/jeds", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 12, name: "Earth Sciences", to: "/jges", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 13, name: "Education", to: "/jehd", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 14, name: "Entrepreneurship", to: "/jsbed", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 15, name: "Finance", to: "/jfbm", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 16, name: "Foreign Policy", to: "/jirfp", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 17, name: "Geography", to: "/jges", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 18, name: "HRM", to: "/jhrmls", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 19, name: "History", to: "/rhps", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 20, name: "Human Rights", to: "/jswhr", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 21, name: "Information Technology", to: "/jcsit", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 22, name: "International Relations", to: "/jirfp", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 23, name: "Islamic Studies", to: "/jisc", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 24, name: "Labor Studies", to: "/jhrmls", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 25, name: "Law", to: "/jlcj", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 26, name: "Linguistics", to: "/ijlc", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 27, name: "Management", to: "/jmpp", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 28, name: "Marketing Management", to: "/jmm", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 29, name: "Medicine and Pharmacy", to: "/ijmp", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 30, name: "Music", to: "/ijmpa", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 31, name: "Nursing", to: "/ijn", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 32, name: "Performing Arts", to: "/ijmpa", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 33, name: "Physical Education", to: "/jpesm", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 34, name: "Policy Studies", to: "/jasps", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 35, name: "Politics", to: "/jppg", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 36, name: "Public Administration", to: "/ppar", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 37, name: "Small Business", to: "/jsbed", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 38, name: "Social Welfare", to: "/jswhr", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 39, name: "Sociology", to: "/jssw", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 40, name: "Statistics", to: "/arms", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 41, name: "Taxation", to: "/Ijatnet", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 41, name: "Tourism and Hospitality Management", to: "/jthm", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
    ]

    const rightSubjects = [
        { id: 1, name: "Administrative Sciences", to: "/jasps", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 2, name: "Anthropology", to: "/jaa", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 3, name: "Architecture", to: "/jea", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 4, name: "Astronomy", to: "/ijpa", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 6, name: "Behavioral Science", to: "/jpbs", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 7, name: "Biology", to: "/aijb", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 8, name: "Business Law", to: "/jble", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 9, name: "Communication", to: "/ijlc", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 10, name: "Contemporary Business", to: "", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 11, name: "Cross-Cultural Studies", to: "", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 12, name: "E-commerce", to: "", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 13, name: "Economics", to: "/jeds", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 14, name: "Engineering", to: "/jea", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 15, name: "Environmental Sciences", to: "/jaes", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 16, name: "Foreign Languages", to: "", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 17, name: "Gender", to: "/ijgws", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 18, name: "Governance", to: "/jppg", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 19, name: "Health Sciences", to: "", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 20, name: "Human Development", to: "/jehd", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 21, name: "Humanities", to: "", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 22, name: "International Business", to: "", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 23, name: "Islamic Banking and Finance", to: "", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 24, name: "Journalism and Mass Communication", to: "", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 25, name: "Language", to: "/ijll", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 26, name: "Library and Information Sciences", to: "", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 27, name: "Literature", to: "/ijll", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 28, name: "Management Information System", to: "", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 28, name: "Mathematics", to: "/arms", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 29, name: "Multilanguage Journal", to: "/imjcr", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 30, name: "Natural Sciences", to: "", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 31, name: "Peace and Conflict", to: "", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 32, name: "Philosophy", to: "", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 33, name: "Physics", to: "/ijpa", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 34, name: "Political Science", to: "/rhps", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 35, name: "Psychology", to: "/jpbs", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 36, name: "Public Policy", to: "/ppar", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 37, name: "Social Science", to: "", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 38, name: "Social Work", to: "/jssw", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 39, name: "Sports Management", to: "/jpesm", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 40, name: "Strategic Management", to: "", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 41, name: "Theology", to: "", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
        { id: 41, name: "Women's Studies", to: "/ijgws", img: "https://i.ibb.co/YLF6Hx6/New-Project.jpg" },
    ]
    return (
        <div className="my-24">
            <PageTitle title="Journals By Subjects"></PageTitle>
            <div className="jornalsubs-bg">
                <div className='py-16 xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12'>
                    <h2 className='text-2xl font-bold text-[#fff]'>Find Your Needed Journals...</h2>
                    <div className='flex items-center justify-between relative bg-[#fff] my-4 px-4 py-2 border rounded lg:w-2/4'>
                        <input className='border-transparent bg-transparent w-full outline-none' type="text" placeholder='Enter Name,Categories..' />
                        <p className='bg-[#91000D] text-[#fff] text-xl cursor-pointer hover:bg-[#833339] duration-300 absolute right-0 h-full rounded px-4  py-2'><FiSearch /></p>
                    </div>
                </div>
            </div>

            <RoutingTop>
                <div className='py-6 xl:px-20 lg:px-10 md:px-14 sm:px-12 px-12'>
                    <div className='flex items-center justify-center flex-col py-4'>
                        <h2 className='text-[#91000D] font-medium py-2 text-xl'>Journals By Subjects</h2>
                        <p className='text-[#072159d5]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <span className='text-[#91000cb5]'>Ab quaerat fuga,
                            consectetur eos quibusdam ipsam</span>.</p>
                    </div>

                    <div className='flex lg:flex-nowrap flex-wrap w-full items-center gap-4 my-6'>

                        <div className='lg:w-2/3'>
                            <div className='space-y-2'>
                                {
                                    leftSubjects.map((subject) => <li className='list-none' key={subject.id}>
                                        <Link to={subject.to}>

                                            <div className='flex items-center lg:justify-end gap-3'>
                                                <p className='font-medium text-[#072159d5] hover:text-[#91000D] duration-300'>{subject.name}</p>
                                                <div className='w-[5%]'>
                                                    <img className='border-2 w-full p-1' src={subject.img} alt="" />
                                                </div>

                                            </div>
                                        </Link>
                                    </li>)
                                }
                            </div>
                        </div>

                        <div className='lg:w-2/3'>
                            <div className='space-y-2'>
                                {
                                    rightSubjects.map((subject) => <li className='list-none' key={subject.id}>
                                        <Link to={subject.to}>

                                            <div className='flex items-center lg:justify-start gap-2'>
                                                <div className='w-[5%]'>
                                                    <img className='border-2 w-full p-1' src={subject.img} alt="" />
                                                </div>
                                                <p className='font-medium text-[#91000cb5] hover:text-[#072159] duration-300'>{subject.name}</p>
                                            </div>
                                        </Link>
                                    </li>)
                                }
                            </div>
                        </div>

                    </div>
                </div>
            </RoutingTop>
        </div>
    );
};

export default Subjects;