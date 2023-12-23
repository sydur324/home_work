
import PoliticsArticles from '../../../Articles/PoliticsArticles/PoliticsArticles';
import './PoliticsHome.css'
const PoliticsHome = () => {
    return (
        <div className='w-full'>
            <div className='AccountingHome_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>Journal of Power, Politics & Governance</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2372-4919 (Print Version) / 2372-4927 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/jppg</p>
                </div>
            </div>

            <div className='py-6 '>
                <p>
                    <span className='font-medium text-[#91000D]'>Journal of Power, Politics & Governance (JPPG)</span>  is an international
                    peer-reviewed Journal which capitalizes the consequent debates surrounding power.
                    The journal is a primary outlet for those doing empirical work on relations of
                    power and powerlessness. The Journal welcomes empirical analysis of the process
                    whereby globalization, ethnicity, nationalism, war and gender are central to the
                    constitution of power, whether conceptualized as domination or empowerment.
                </p>

                <p className='py-4'>
                    The JPPG encourages cutting edge research, and informed commentary regarding
                    all aspects of national, state, and local government, electoral politics,
                    and public policy formation and implementation. The journal’s editorial
                    board and contributors are leading scholars and professional experts from
                    across the nation and around the world. Drawing on its editors, its diverse
                    editorial board, and an international network of scholars, practitioners,
                    journalists, policymakers, and officeholders, JPPG provides timely insights
                    and historical and comparative perspective on issues ranging from legislative
                    and electoral concerns to tax and social welfare policy, the courts, campaign
                    finance, and the changing role and character of political media.
                </p>

                <p className='py-2'>
                    The JPPG provides a forum for the theoretical and practical discussion of executive politics,
                    public policy, administration, and the organization of the state.
                </p>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>Journal of Power, Politics & Governance</span> is assigned a DOI®number,
                        which appears beneath the author's affiliation in the published paper. Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.doi.org/' target='_blank'>https://www.doi.org/</a> to know what
                        is DOI (Digital Object Identifier)? Click <a className='hover:text-[#072159] text-[#91000D] duration-300 cursor-pointer font-medium px-1' href='https://www.crossref.org/'>https://www.crossref.org/</a> to retrieve Digital Object Identifiers
                        (DOIs) for journal articles, books, and chapters.
                    </p>
                </div>

                <div className='py-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>Abstracted/Indexed in:</h2>
                    <p>
                        CrossRef, CrossCheck, Cabell's, Ulrich's, Griffith Research Online, Google Scholar, Education.edu,
                        Informatics, Universe Digital Library, Standard Periodical Directory,Gale, Open J-Gate, EBSCO, Journal
                        Seek, DRJI, ProQuest, BASE, InfoBase Index, OCLC, IBSS, Academic Journal Databases, Scientific Index.
                    </p>
                </div>

                <div className='py-2'>
                    <h2 className='font-medium text-[#91000D] py-2'>Current Issue:</h2>
                    <div>
                        <PoliticsArticles></PoliticsArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PoliticsHome;