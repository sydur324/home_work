
import NursingArticles from '../../../Articles/NursingArticles/NursingArticles';
import './NursingHome.css'
const NursingHome = () => {
    return (
        <div className='w-full'>
            <div className='NursingHome_bg text-white px-4 py-4'>
                <h2 className='font-bold text-lg py-2'>International Journal of Accounting and Taxation</h2>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>ISSN:</p>
                    <p>2373-7662 (Print Version) / 2373-7670 (Electronic Version)</p>
                </div>
                <div className='flex items-center space-x-2 text-sm'>
                    <p>DOI:</p>
                    <p>10.15640/ijn</p>
                </div>
            </div>

            <div className='py-6 '>
                <p>
                    <span className='font-medium text-[#91000D]'>International Journal of Nursing</span>  the official
                    international research journal of The Brooklyn Research and Publishing Institute. The journal provides
                    a forum for original research and scholarship about health care delivery, organization, management,
                    workforce, policy and research methods relevant to nursing, midwifery and other health related
                    professions. It aims to support evidence informed policy and practice by publishing research,
                    systematic and other scholarly reviews, critical discussion, and commentary of the highest
                    standard.
                </p>

                <p className='py-4'>
                    <span className='font-medium text-[#91000D]'>International Journal of Nursing</span>  particularly welcomes
                    studies that aim to evaluate and understand complex health care interventions and health
                    policies and which employ the most rigorous designs and methods appropriate for the
                    research question of interest. The journal also seeks to advance the quality of
                    research by publishing methodological papers introducing or elaborating on analytic
                    techniques, measures, and research methods. The journal has been publishing original
                    peer-reviewed articles of interest to the international health care community since
                    its inception. The journal follows double-blind peer review process.
                </p>

                <div>
                    <h2 className='font-medium text-[#91000D] py-2'>DOI®number</h2>
                    <p>
                        Each paper published in <span className='font-semibold'>International Journal of Nursing</span> is assigned a DOI®number,
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
                        <NursingArticles></NursingArticles>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NursingHome;